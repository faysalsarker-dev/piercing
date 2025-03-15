
import useAxios from './../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from "react-router";



const Post = () => {
const axiosCommon = useAxios()

    const { data } = useQuery({
        queryKey: ["post"],
        queryFn: async () => {
          const response = await axiosCommon.get("/post"
          );
          
          return response.data;
        },
       
      });




  return (
    <div>
      <div className="overflow-x-auto">

      {data?.map((item, idx) => (
<Link to={item._id}>
    <div key={idx} className="py-2 dark:text-white">
      <div className="flex items-center gap-4 p-5 bg-white dark:bg-transparent shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <img src={`${import.meta.env.VITE_API}/images/${item?.image}`} alt="" className="w-24 h-24 rounded-xl object-cover" />
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-gray-900">{item?.title}</h1>
          <p className="text-gray-600 text-sm">
            {item?.description}
          </p>
        </div>
      </div>
    </div>
</Link>
))}


     



      </div>
    </div>
  );
};

export default Post;
