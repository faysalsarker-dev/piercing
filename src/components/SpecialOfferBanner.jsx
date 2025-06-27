
const SpecialOfferBanner = () => {
  return (
    <div
      className="relative h-60 w-full bg-contain bg-center rounded-xl shadow-lg my-20"
      style={{
        backgroundImage: "url('/specialoffer.png')", 
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-3xl text-center md:text-4xl font-bold bg-black bg-opacity-40 px-6 py-3 rounded-lg">
          Just nu 50% på alla piercingar
        </h2>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;
