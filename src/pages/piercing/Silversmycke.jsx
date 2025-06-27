import React from "react";
import sliverSmycke from '../../assets/services4.jpeg'
import OfferBanners from "../../components/OfferBanners";

const SilverSmycke = () => {
  return (
    <div className="min-h-screen flex justify-center p-4 ">
    <div className=" shadow-lg rounded-lg  max-w-3xl ">
      <img
        src={sliverSmycke} // Replace with actual image URL
        alt="Silver smycke"
        className="w-full  object-cover rounded-lg mb-7"
      />
      <h1 className="text-4xl font-bold ">Silver smycke</h1>
      <p className="text-lg text-gray-200 mt-2">
        Silversmycken i hög kvalitet – till bra priser!
      </p>
      <p className=" mt-4">

      Silversmycken i hög kvalitet – till bra priser!
      Vi erbjuder ett brett utbud av äkta 925 silversmycken till förmånliga priser. Våra örhängen finns i olika modeller och färger för att passa din stil. Priserna ligger mellan <span className="font-semibold"> 100–300 kr per par</span>, beroende på design och storlek.


      </p>
      <p className="mt-4">

      Våra smycken är <span className="font-semibold">nickelfria, allergivänliga</span>  och perfekta för både vardag och fest. Besök oss för att hitta dina nya favoriter!

      </p>
    </div>
      <OfferBanners />
  </div>
  );
};

export default SilverSmycke;
