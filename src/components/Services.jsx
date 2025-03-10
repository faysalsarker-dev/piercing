
import Card from "./Card";


import ear from "../assets/ear.jpg";
import nose from "../assets/nose.jpg";
import nevel from "../assets/nevel.jpg";

const Services = () => {

    // const { data } = useQuery({
    //     queryKey: ["product"],
    //     queryFn: async () => {
    //       const response = await axios.get("/data.json"
    //       );
          
    //       return response.data;
    //     },
       
    //   });

  const fakeData =[
    {
      id:1,
      title:'Ear Piercing',
      img:ear
    },
    {
      id:2,
      title:'Nose Piercing',
      img:nose
    },
    {
      id:3,
      title:'Nose Piercing',
      img:nevel
    },
  ]


    return (
        <div className="my-6">
            <h2 className="text-4xl text-center my-6 font-bold">Our Services</h2>
          <div className="grid grid-cols-1 gap-8 mt-4">
               
              {
                fakeData?.map((data,idx) => (
                  <Card key={idx} data={data} />
                ))
              }
          </div>
         
        </div>
    );
};

export default Services;