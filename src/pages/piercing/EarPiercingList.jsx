import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router";
import useAxios from "../../Hooks/useAxios";
import Loading from "../../components/loading/Loading";

const EarPiercingList = () => {


  const axiosCommon = useAxios()

  const { data,isLoading } = useQuery({
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
    <div className="">
      <div className=" p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 ch mb-6">
          Öronhåltagnings Prislista
        </h1>
        <p className="text-xl text-center text-secondary mb-8">Barn & Vuxna</p>
        <p className="text-center text-white italic mb-4">
          I priset ingår ett guld- eller silverpläterat öronsmycke
        </p>
        <div className="space-y-4">

        { 
  data?.filter(section => section.category === "Öronhåltagnings Prislista")
    .flatMap(section => section.items)
    .map((item, idx) => (
      <Link key={idx} to={`/online-booking?servicesName=${item.name}&price=${item.price}`}>
        <div className="flex justify-between items-center border-b pb-4 mt-2">
          <div className="text-lg font-semibold text-white">{item.name}</div>
          <div className="text-lg text-white">{item.price}</div>
        </div>
      </Link>
    ))
}



        </div>
      </div>
    </div>
  );
};

export default EarPiercingList;
