
import Card from "./cards/Card";
import Cardthree from "./cards/Cardthree";





import Cardtwo from "./cards/Cardtwo";

const ShowCases = () => {

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
          <div className="grid grid-cols-1 gap-8 mt-4">
               <Card/>
            <Cardthree/>
            <Cardtwo/>
          </div>
         
        </div>
    );
};

export default ShowCases;