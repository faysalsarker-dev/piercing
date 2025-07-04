import heroImge from "../assets/heroCover.jpg";
import { Link } from 'react-router';
const Hero = () => {
    return (
        <>
          <div
  className="hero relative lg:h-[80vh] md:h-[40vh] sm:h-[40vh] h-[45vh] my-4 rounded-lg max-w-7xl mx-auto  "
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${heroImge})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  >
  <div className=" hero-overlay rounded-lg h-full"></div>
  <div className=" h-full  text-center flex flex-col justify-center items-center text-white px-4">
          <h2 className="text-xl md:text-5xl font-bold leading-tight ">
            Välkommen till
          </h2>
          <h1 className="mb-1 text-5xl md:text-7xl font-bold  bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Piercing Södermalm
</h1>

          <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-6">
          


            Din specialist på piercing och öronhåltagning i Stockholm.
Vi erbjuder trygga, professionella och hygieniska
<span className='font-extrabold'> piercingar</span> för både vuxna, barn och bebisar. Vår piercare är certifierad och har en bakgrund som sjuksköterska,



          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
  
<a href="https://klippsodermalm.simplybook.it/v2/" target="_blank" rel="noopener noreferrer">
      <button className="px-6 py-2 bg-blue-600  roboto text-white  font-semibold rounded-full shadow-lg border border-primary transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-transparent hover:text-blue-600 ch">
      Boka nu
      </button>
   
</a>
  <Link to="/contactus">
    <button className="px-6 py-2 bg-secondary text-white roboto  font-semibold rounded-full shadow-lg border border-secondary transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-transparent hover:text-secondary">
    kontakta
    </button>
  </Link>
</div>

        </div>
</div>
        </>
    );
};

export default Hero;