

import { useQuery } from "@tanstack/react-query";
import OfferCard from "./OfferCard";
import useApi from './../Hooks/useApi';


const SpecialOffer = () => {
const api = useApi()
  const { data, isLoading, error } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const { data } = await api.get("/banners");
      return data;
    },
  });
  if (isLoading) return <div></div>;
  if (error) return <div>Failed to load offers.</div>;

  return (
    <>
      {data?.length > 0 && data?.map((offer) => (
  <OfferCard key={offer._id} offerData={offer}/>
      ))}
    
    </>
  );
};

export default SpecialOffer;
