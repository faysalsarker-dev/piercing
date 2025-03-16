import React from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { FaQuoteLeft, FaRegStar, FaStar } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import useAxios from '../Hooks/useAxios';
import { useMutation, useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Loading from '../components/loading/Loading';




const ClientReview = () => {
    const axiosCommon = useAxios();
    const { register, handleSubmit, reset } = useForm();





    const { data :testimonials, isLoading, error ,refetch} = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
          const { data } = await axiosCommon.get(`/review`);
          return data;
        },
      });








    const { mutateAsync: addReview, isPending } = useMutation({
        mutationFn: async (formData) => {
            const { data } = await axiosCommon.post(`/review`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            return data;
        },
        onSuccess: () => {
            Swal.fire("Success", "Review added successfully!", "success");
            reset();
            refetch()
            document.getElementById('review_modal').close()
        },
        onError: () => {
            document.getElementById('review_modal').close()
            Swal.fire("Error", "Something went wrong!", "error");
        },
    });

    const onSubmit = async (info) => {
        console.log("Form Data Object:", info); // Check the received data
    
        const formData = new FormData();
        formData.append("name", info.name);
        formData.append("review", info.review);
        formData.append("rating", info.rating);
        
        if (info.image && info.image.length > 0) {
            formData.append("image", info.image[0]);
        }
       
        await addReview(formData);
    };
    

    const { mutateAsync: onDelete } = useMutation({
        mutationFn: async (id) => {
            await axiosCommon.delete(`/review/${id}`);
        },
        onSuccess: () => {
            refetch()
            Swal.fire("Deleted", "Review deleted successfully!", "success");
        },
        onError: () => {
            Swal.fire("Error", "Could not delete the review!", "error");
        },
    });


    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'><Loading/></div>;
      }
    
      if (error) {
        return <div>Error fetching data!</div>;
      }

    return (
        <div className="min-h-screen p-6">
            <div className='flex justify-between items-center mb-8'>
                <h3 className="text-2xl font-semibold">All Client Reviews</h3>
                <button className="btn bg-blue-600 text-white px-4 py-2 rounded-md" onClick={() => document.getElementById('review_modal').showModal()}>Add Review</button>
                <dialog id="review_modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add Your Review</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <input {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered w-full p-2" />
                            <textarea {...register("review", { required: true })} placeholder="Your Review" className="textarea textarea-bordered w-full p-2"></textarea>
                            <input {...register("rating", { required: true })} type="number" step="0.1" min="0" max="5" placeholder="Rating (0-5)" className="input input-bordered w-full p-2" />
                            <input {...register("image",{ required: false })} type="file" className="file-input w-full p-2" />

                            <div className="modal-action flex gap-4">
                                <button disabled={isPending} type="submit" className="btn bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
                                <button className="btn bg-red-500 text-white px-4 py-2 rounded-md" type="button" onClick={() => document.getElementById('review_modal').close()}>Close</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {testimonials?.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 shadow-md rounded-lg relative">
                        <MdDelete 
                        
                            className='absolute -top-3 -right-3 cursor-pointer bg-gray-200 p-2
                             text-4xl rounded-full  text-red-500' 
                            onClick={() => Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#d33",
                                cancelButtonColor: "#3085d6",
                                confirmButtonText: "Yes, delete it!"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    onDelete(testimonial._id);
                                }
                            })}
                        />
                        <div className="flex flex-col items-center">
                            <FaQuoteLeft className="text-primary text-4xl mb-3" />
                            <p className="text-gray-600 text-lg italic text-center">
                                "{testimonial.review}"
                            </p>
                        </div>
                        <div className="flex flex-col items-center mt-6">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full border-2 border-primary"
                            />
                            <h3 className="font-semibold text-lg mt-2">{testimonial.name}</h3>
                            <div className="text-yellow-400">
                                <Rating
                                    initialRating={testimonial.rating} 
                                    emptySymbol={<FaRegStar />} 
                                    fullSymbol={<FaStar />} 
                                    fractions={2} 
                                    readonly={true} 
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientReview;