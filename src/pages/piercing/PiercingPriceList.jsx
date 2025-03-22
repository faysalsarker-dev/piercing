import React from "react";
import { Link } from "react-router";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/loading/Loading";
import piercing from '../../assets/services1.jpeg'


const PiercingPriceList = () => {

  const axiosCommon = useAxios()

  const { data:prices,isLoading } = useQuery({
      queryKey: ["price"],
      queryFn: async () => {
        const response = await axiosCommon.get("/price"
        );
        
        return response.data;
      },
      staleTime: 1200000, 
      cacheTime: 3600000, 
    });

if (isLoading) return <div className="flex justify-center items-center"><Loading/></div>


 




  return (
    <div className="max-w-3xl mx-auto p-6  shadow-xl rounded-lg ">

<div className="flex justify-center mb-6">
          <img src={piercing} alt="piercing" loading="lazy" className="w-full max-w-md rounded-lg shadow-md" />
        </div>

      <h1 className="text-3xl font-extrabold text-center mb-6  text-white ">Piercing med Nål
      </h1>
      <p className="text-center text-lg font-semibold text-blue-600 ch bg-blue-100 py-2 rounded-lg shadow-md">
        Just nu 50% på alla piercingar (titansmycket ingår)
      </p>
      <div className="mt-6 space-y-8">
        {prices?.filter(section => section.category !== "Öronhåltagning med pistol")?.map((section, index) => (
          <div key={index} className="p-4  rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold border-b-2 text-white border-gray-300 pb-2 mb-3 ">{section.category}</h2>
            <ul className="space-y-3">
              {section?.items?.map((item, idx) => (
                 <Link to={`/online-booking?servicesName=${item.name}&price=${item.price}`}>
                <li key={idx} className="flex justify-between my-3 items-center card-color  p-3 rounded-md shadow-sm hover:bg-gray-100 transition-all">
                    <span className="   font-medium">{item.name}</span>
                    <span className="text-lg font-bold  ">{item.price} </span>
                </li>
                 </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PiercingPriceList;
