import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router";
import useAxios from "../../Hooks/useAxios";
import Loading from "../../components/loading/Loading";
import earPiercing from '../../assets/services2.jpeg'
import OfferBanners from "../../components/OfferBanners";
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
      <div className="p-3 rounded-lg shadow-lg max-w-3xl mx-auto">
      <div className="flex justify-center mb-6">
          <img src={earPiercing} alt="ear piercing" loading="lazy" className="w-full max-w-md rounded-lg shadow-md" />
        </div>
        <h1 className="text-3xl font-bold text-center text-blue-600 ch mb-6">
        Öronhåltagning med pistol
        </h1>
        <p className="text-xl text-center text-secondary mb-8">Vuxna & Barn</p>
        <p className="text-center text-white italic mb-4">
          I priset ingår ett guld- eller silverpläterat öronsmycke
        </p>

  <OfferBanners />


        <div className="space-y-4 border border-gray-200 p-3 rounded-lg">

        { 
  data?.filter(section => section.category === "Öronhåltagning med pistol")
    .flatMap(section => section.items)
    .map((item, idx) => (
     
<Link to={`/online-booking?name=${item.name}&price=${item.price}`} key={idx}>
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
