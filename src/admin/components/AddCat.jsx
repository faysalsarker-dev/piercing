import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AddCat = ({ refetch }) => {
  const axiosCommon = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const mutationCat = useMutation({
    mutationFn: async (formData) => {
      const res = await axiosCommon.post("/price/category", formData);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Category added!");
      reset();
      refetch();
      document.getElementById("my_modal_1")?.close(); 
    },
  });

  const onSubmit = (data) => {
    mutationCat.mutate(data);
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add Category
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gray-800 text-white">
          <h3 className="font-bold text-lg mb-2">Add New Category</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="Category Name"
              {...register("category", { required: true })}
              className="input w-full"
            />
            {errors.category && (
              <p className="text-red-500 text-sm">
                Category name is required
              </p>
            )}

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_1").close()
                }
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

export default AddCat;
