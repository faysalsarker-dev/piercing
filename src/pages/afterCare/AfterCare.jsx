const AfterCare = () => {
    return (
      <div className="max-w-3xl mx-auto p-6 my-6 dark:text-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 ch mb-10">After care & Rådgivning</h1>
        <p className="text-lg  mt-4">
          Att följa rätt eftervårdsrutin hjälper din piercing att läka snabbt och utan problem.
        </p>
  
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-secondary">Generella skötselråd för alla piercingar</h2>
          <ul className="list-disc list-inside mt-2 ">
            <li>Rör aldrig piercingen med smutsiga händer! Tvätta alltid händerna noggrant.</li>
            <li>Rengör två gånger om dagen med en steril koksaltlösning eller en rekommenderad aftercare-produkt.</li>
            <li>Undvik att vrida eller röra smycket i onödan för att förhindra irritation.</li>
            <li>Håll området rent och torrt, undvik smink och hudkräm på piercingen.</li>
            <li>Var försiktig med kläder och hår som kan fastna i piercingen.</li>
          </ul>
        </div>
  
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-secondary">Eftervård för olika typer av piercingar</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-lg font-medium">Öron- & ansiktspiercingar</h3>
              <p className="">💎 Läkningstid: 6-12 veckor (örsnibb), 6-9 månader (brosk)</p>
              <ul className="list-disc list-inside ">
                <li>Undvik att sova på piercingen.</li>
                <li>Använd en ren kudde och byt örngott ofta.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Näs & ansiktspiercingar</h3>
              <p className="">💎 Läkningstid: 6-12 veckor (näsvinge), 6-9 månader (septum)</p>
              <ul className="list-disc list-inside ">
                <li>Blås näsan försiktigt och rengör området noggrant.</li>
                <li>Undvik att sminka området under läkningen.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Orala piercingar</h3>
              <p className="">💎 Läkningstid: 4-8 veckor</p>
              <ul className="list-disc list-inside ">
                <li>Skölj munnen med alkoholfri munskölj efter varje måltid.</li>
                <li>Undvik kryddig mat, rökning och alkohol under läkningen.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Navelpiercing</h3>
              <p className="">💎 Läkningstid: 6-12 månader</p>
              <ul className="list-disc list-inside ">
                <li>Undvik tighta kläder som skaver mot piercingen.</li>
                <li>Tvätta området noggrant efter träning eller svettning.</li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-secondary">Vanliga problem & hur du hanterar dem</h2>
          <ul className="list-disc list-inside ">
            <li><strong>Rodnad & svullnad:</strong> Lugna området med kall koksaltlösning.</li>
            <li><strong>Liten knöl vid piercingen:</strong> Byt till ett mindre smycke och undvik tryck.</li>
            <li><strong>Tecken på infektion:</strong> Rengör ofta och kontakta en piercare vid osäkerhet.</li>
          </ul>
        </div>
  
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-secondary">När kan jag byta smycke?</h2>
          <p className="">⏳ Vänta alltid tills piercingen är helt läkt innan du byter smycke.</p>
          <p className="">💡 Tips: Använd smycken i titan eller kirurgiskt stål för att minimera allergiska reaktioner.</p>
        </div>
      </div>
    );
  };
  
  export default AfterCare;
  