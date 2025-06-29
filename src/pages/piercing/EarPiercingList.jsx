
import { Link } from "react-router";

import earPiercing from '../../assets/services2.jpeg'
import OfferBanners from "../../components/OfferBanners";
import ServicesList from "../../components/ServicesList";
const EarPiercingList = () => {



 



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
  <ServicesList category={`piercing with gun`} />

      </div>
    </div>
  );
};

export default EarPiercingList;
