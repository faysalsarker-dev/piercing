
import Card from "./cards/Card";
import Cardthree from "./cards/Cardthree";





import Cardtwo from "./cards/Cardtwo";

const Services = () => {

    // const { data } = useQuery({
    //     queryKey: ["product"],
    //     queryFn: async () => {
    //       const response = await axios.get("/data.json"
    //       );
          
    //       return response.data;
    //     },
       
    //   });




    return (
        <div className="my-6">
            <h2 className="text-4xl text-center my-6 font-bold">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 mt-4">
               <Card/>
            <Cardtwo/>
            <Cardthree/>
          </div>
         
        </div>
    );
};

export default Services;