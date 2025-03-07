import { useQuery } from "@tanstack/react-query";
import Card from "./Card";

import axios from "axios";



const Services = () => {

    const { data } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
          const response = await axios.get("/data.json"
          );
          
          return response.data;
        },
       
      });


console.log(data);
    return (
        <div>
            <h2 className="text-4xl text-center my-6 font-bold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
               
              {
                data?.slice(0,6).map((services) => (
                  <Card key={services.id} services={services} />
                ))
              }
          </div>
          <div className="flex justify-center items-center mt-4">
            <button className="btn btn-primary">See all Services</button>
          </div>
        </div>
    );
};

export default Services;