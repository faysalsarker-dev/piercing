
import Card from "./Card";





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
        <div>
            <h2 className="text-4xl text-center my-6 font-bold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-4">
               
              {
                ["https://piercingsodermalm.se/onewebstatic/13a4fe3da8.jpg","https://impro.usercontent.one/appid/oneComWsb/domain/piercingsodermalm.se/media/piercingsodermalm.se/onewebmedia/OIP.jpeg?etag=%224cc0-66a11ef8%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=474%2B474&extract=59%2B22%2B407%2B360&quality=85",3]?.slice(0,3).map((services) => (
                  <Card key={services.id} img={services} />
                ))
              }
          </div>
         
        </div>
    );
};

export default Services;