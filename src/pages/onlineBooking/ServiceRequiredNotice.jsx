import { Link } from "react-router";
import { motion } from 'framer-motion';

import earPiercing from "../../assets/services1.jpeg";
import bodyPiercing from "../../assets/services2.jpeg";

const services = [
  {
    id: 1,
    title: "Piercing med nål - Steril och skonsam",
    description:
      " Professionell och skonsam piercing med nål. Upptäck vårt stora utbud av piercing!",
    image: earPiercing,
    path:'/piercing'
  },
  {
    id: 2,
    title: "Öronhåltagning med pistol – Snabbt och effektivt",
    description:
      "Vill du ha nya hål i öronen på ett snabbt och smidigt sätt? Med vår moderna håltagningspistol får du ett par vackra örhängen på nolltid!",
    image: bodyPiercing,
    path:'/oronhåltagning'
  },


];




const ServiceRequiredNotice = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full "
    >
           <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-300 p-4 rounded-lg mb-6">
       
        <div>
          <h2 className="text-yellow-800 text-lg font-semibold mb-1">
           Välj din behandling och boka nu
          </h2>
       
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1  gap-6">
         {services.map((service, index) => (
      <Link to={service?.path} key={index}>
  <motion.div
    className="bg-background border border-neutral-700 rounded-lg px-5 py-4 shadow-md hover:shadow-lg transition duration-300 hover:border-primary"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6, ease: "easeInOut" }}
  >
    {/* Image and name in a line */}
    <div className="flex items-center gap-4">
      <img
        src={service.image}
        alt={service.title}
       
        className="object-contain rounded-lg w-24 h-24"
      />
      <h3 className="text-lg md:text-xl font-semibold text-white">{service.title}</h3>
    </div>
  </motion.div>
</Link>

          ))}
      </div>
    </motion.div>
  );
};

export default ServiceRequiredNotice;
