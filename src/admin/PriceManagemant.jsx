import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxios from "../Hooks/useAxios";
import Loading from "../components/loading/Loading";
import AddCat from "./components/AddCat";
import { MdDelete } from "react-icons/md";
const PriceListPage = () => {
  const [modalData, setModalData] = useState(null);
  const axiosCommon = useAxios();

  // Fetch Price List
  const { data, isLoading, isError,refetch } = useQuery({
    queryKey: ["price"],
    queryFn: async () => {
      const response = await axiosCommon.get("/price");
      return response.data;
    },
    staleTime: 1200000,
    cacheTime: 3600000,
  });

  // Form Handling
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Add & Update Item
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const method = modalData ? "PUT" : "POST";
      const res = await axiosCommon({
        url: `/price${modalData ? `/${modalData._id}` : ""}`,
        method,
        data: formData,
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success(modalData ? "Item updated!" : "Item added!");
      reset();
      refetch()
      setModalData(null);
      document.getElementById("price-modal").close();
    },
  });

  // Delete Item with SweetAlert2
  const deleteMutation = useMutation({
    mutationFn: async (info) => {
      await axiosCommon.delete(`/price/${info._id}/${info.category}`); 
    },
    onSuccess: () => {
      toast.success("Item deleted!");
      refetch()
    },
  });
  

  // Handle Delete Confirmation
  const handleDelete = (info) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(info);
      }
    });
  };


  const deleteCat = useMutation({
    mutationFn: async (info) => {
      await axiosCommon.delete(`/price/${info}`);
    },
    onSuccess: () => {
      toast.success("Category deleted!");
      refetch();
    },
  });






  const handleDeleteCat = (info) => {
    console.log(info);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCat.mutate(info);
      }
    });
  };



  // Handle form submission
  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

console.log(data[0]._id);
  return (
    <div  className=" text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Price List</h1>
<div className="flex justify-between">
        <button
          onClick={() => {
            reset();
            setModalData(null);
            document.getElementById("price-modal").showModal();
          }}
          className="btn btn-primary"
        >
          + Add New Item
        </button>
  
<AddCat refetch={refetch}/>

</div>
      {/* Loading & Error */}
      {isLoading ? (
  <p className="text-center mt-4">Loading...</p>
) : isError ? (
  <p className="text-center mt-4 text-red-500">Error loading data.</p>
) : (
  <div className="">
    {data?.map((category) => (
      <div key={category._id} className="mt-6 card-color p-3 rounded-lg">

      <div className="flex justify-between"> 
         <h2 className="text-xl font-semibold">{category.category}</h2>
         
         <button onClick={()=>handleDeleteCat(category._id)} className="btn border-1  border-white btn-ghost text-red-600 "><MdDelete size={20} /></button>
         </div>
        <div className="overflow-x-auto md:overflow-x-auto">
          <table className="table w-full mt-2">
            <thead className="text-white">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {category?.items?.map((item) => (
                <tr key={item._id} className="border-white">
                  <td>{item?.name}</td>
                  <td>{item?.price} </td>
                  <td className="text-blue-600 cursor-pointer"><a href={item?.link} target="_blank">{item?.link} </a></td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => {
                        setModalData(item);
                        setValue("category", category?.category);
                        setValue("name", item?.name);
                        setValue("price", item?.price);
                        setValue("link", item?.link);
                        document.getElementById("price-modal").showModal();
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-error ml-2"
                      onClick={() =>{ handleDelete({...item, category: category.category})
                         }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
)}


      {/* Modal */}
      <dialog id="price-modal" className="modal">
        <div className="modal-box bg-gray-800 text-white">
          <h2 className="text-lg font-bold">{modalData ? "Update Item" : "Add New Item"}</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-2">
            <select {...register("category", { required: true })} className="select w-full card-color">
              <option value="" disabled>Select Category</option>
              {data?.map((cat) => (
                <option key={cat._id} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
            {errors.category && <span className="text-red-500">Category is required</span>}

            <input
              type="text"
              placeholder="Item Name"
              {...register("name", { required: true })}
              className="input w-full"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}

            <input
              type="text"
              placeholder="Price (in kr)"
              {...register("price", { required: true })}
              className="input w-full"
            />
            {errors.price && <span className="text-red-500">Price is required</span>}
            <input
              type="text"
              placeholder="Link"
              {...register("link", { required: true })}
              className="input w-full"
            />
            {errors.link && <span className="text-red-500">Link is required</span>}

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                {modalData ? "Update" : "Add"}
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("price-modal").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default PriceListPage;
