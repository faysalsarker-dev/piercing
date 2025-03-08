import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import Card from "../../components/Card";

const ServicesPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get("/data.json");
      return response.data;
    },
  });

  if (isLoading) return <p className="text-center text-lg">Loading services...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Error loading services.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary mb-4">Discover Our Expert Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of professional services tailored to your needs. From piercing artistry to specialized body jewelry, we ensure the best experience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
                data?.map((services) => (
                  <Card key={services.id} services={services} />
                ))
              }
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-secondary mb-4">Want to Explore More?</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Browse our full range of services and discover the perfect one for you. Click below to see all available options.
        </p>
        <button className="btn btn-primary px-6 py-3 text-lg">See All Services</button>
      </div>
    </div>
  );
};

export default ServicesPage;
