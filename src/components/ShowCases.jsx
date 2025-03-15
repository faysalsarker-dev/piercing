
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import Card from "./cards/Card";
import Loading from './loading/Loading';


const ShowCases = () => {
  const axiosCommon = useAxios()

  const { data,isLoading } = useQuery({
      queryKey: ["post"],
      queryFn: async () => {
        const response = await axiosCommon.get("/post"
        );
        
        return response.data;
      },
      staleTime: 1200000, 
      cacheTime: 3600000, 
    });

if (isLoading) return <div className="flex justify-center items-center"><Loading/></div>


    return (
        <div className="my-6">
          <div className="grid grid-cols-1 gap-8 mt-4">
            {
              data?.map((item)=>(
<Card key={item._id} item={item} />
              ))
            }
               
           
          </div>
         
        </div>
    );
};

export default ShowCases;