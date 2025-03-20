import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import Loading from './../../components/loading/Loading';


const PostEdit = () => {
  const { id } = useParams();
  const axiosCommon = useAxios();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch post data
  const { data, isLoading } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await axiosCommon.get(`/post/${id}`);
      return response.data;
    },
    enabled: !!id,
  });

  // Form setup
  const { register, handleSubmit, reset, setValue } = useForm();

  // Update form values when data is fetched
  useEffect(() => {
    if (data) {
      reset({
        title: data.title || "",
        description: data.description || "",
        btn1Text: data.btn1Text || "",
        btn1Link: data.btn1Link || "",
        btn2Text: data.btn2Text || "",
        btn2Link: data.btn2Link || "",
        image:data.image || ''
      });
    }
  }, [data, reset]);

  // Mutation for updating the post
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosCommon.put(`/post/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    },
    onSuccess: () => {
      toast.success("Post updated successfully.");
      navigate(-1);
    },
    onError: () => {
      toast.error("An error occurred while updating the post.");
    },
  });

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setValue("image", file); 
    }
  };

  // Form submission
  const onSubmit = async (formData) => {
    const formDataToSend = new FormData();
  
    

 if (selectedImage) {
  formDataToSend.append("image", formData.image); 
  console.log('New image:', formData.image);
} else if (formData.image) {
  formDataToSend.append("existingImage", formData.image); 
  console.log('Existing image:', formData.image);
}
    
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("btn1Text", formData.btn1Text);
    formDataToSend.append("btn1Link", formData.btn1Link);
    formDataToSend.append("btn2Text", formData.btn2Text);
    formDataToSend.append("btn2Link", formData.btn2Link);
  
    console.log([...formDataToSend], "FormData Content");
  
    await mutateAsync(formDataToSend);
  };
  
  if (isLoading) return <div className="flex justify-center items-start min-h-screen"><Loading/></div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="flex flex-col md:flex-row items-center gap-4 shadow-2xl p-3 rounded-lg bg-base-100">
        {/* Image Upload Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full md:w-1/2"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={selectedImage || `${import.meta.env.VITE_API}/images/${data?.image}` }
              alt="Post"
              className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            name='image'
            onChange={handleImageChange}
            className="mt-2 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-primary file:text-white
              hover:file:bg-primary-dark"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 p-3 text-center md:text-left space-y-4"
        >
          {/* Editable Title */}
          <input
            {...register("title")}
            className="text-5xl font-bold text-blue-600 ch border-l-2 border-primary pl-2 outline-none w-full bg-transparent focus:ring-2 focus:ring-primary transition-all duration-300"
          />

          {/* Editable Description */}
          <textarea
            {...register("description")}
            className="text-lg leading-relaxed outline-none w-full bg-transparent border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-primary transition-all duration-300"
          />

          {/* Pricing Buttons */}
          <div className="flex flex-col space-y-4">
            {/* First Pricing Button */}
            {data?.btn1Text && (
              <motion.div className="bg-gray-300 space-y-3 p-1 rounded-lg">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center">
                  <input
                    {...register("btn1Text")}
                    className="bg-transparent text-center outline-none w-full focus:ring-2 focus:ring-white"
                  />
                </div>
                <input
                  {...register("btn1Link")}
                  type="text"
                  placeholder="Enter link for first price"
                  className="w-full px-4 py-2 border border-gray-900 rounded-lg outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
              </motion.div>
            )}

            {/* Second Pricing Button */}
            {data?.btn2Text && (
              <motion.div className="bg-gray-300 space-y-3 p-1 rounded-lg">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center">
                  <input
                    {...register("btn2Text")}
                    className="bg-transparent text-center outline-none w-full focus:ring-2 focus:ring-white"
                  />
                </div>
                <input
                  {...register("btn2Link")}
                  type="text"
                  placeholder="Enter link for second price"
                  className="w-full px-4 py-2 border border-gray-900 rounded-lg outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="flex justify-end items-center my-2">
        <button
          type="submit"
          disabled={isPending}
          className="bg-primary text-white px-6 py-2 rounded-lg mt-4 shadow-md hover:bg-primary-dark transition"
        >
          {isPending ? "Saving Data..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default PostEdit;
