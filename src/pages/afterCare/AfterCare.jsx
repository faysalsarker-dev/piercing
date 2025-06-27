import aftercare from "../../assets/advice.png";
import OfferBanners from "../../components/OfferBanners";

const AfterCare = () => {
  return (
    <div className="max-w-3xl mx-auto p-3 my-6  shadow-lg rounded-lg">
      {/* Image Section */}
      <div className="flex justify-center mb-6">
        <img
          src={aftercare}
          alt="After Care Advice"
          loading="lazy"
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
      After care & Rådgivning
      </h1>
      <p className="text-center text-gray-200 mb-6">
        Rätt eftervård är nyckeln till en säker och snabb läkning.
      </p>

      {/* Section 1: General Aftercare */}
    
      <p className="text-lg mb-4">
        Att följa rätt eftervårdsrutin hjälper din piercing att läka snabbt och
        utan problem. Här går vi igenom hur du tar hand om din nya piercing på
        bästa sätt.
      </p>

      <h3 className="text-xl font-semibold text-secondary mb-3">
        1. Generella skötselråd för alla piercingar
      </h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Rör aldrig piercingen med smutsiga händer! Tvätta alltid händerna.</li>
        <li>Rengör två gånger om dagen med steril koksaltlösning.</li>
        <li>Undvik att vrida eller röra smycket i onödan.</li>
        <li>Håll området rent och torrt – undvik smink och hudkräm.</li>
        <li>Var försiktig med kläder och hår som kan fastna i piercingen.</li>
        <li>Undvik kontakt med husdjur under läkning.</li>
        <li>Att simma i poolen och havet är strikt förbjudet under läkningstiden.</li>
      </ul>

      {/* Section 2: Aftercare for Different Piercings */}
      <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">
        2. Eftervård för olika typer av piercingar
      </h3>

      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-medium">Öronpiercingar</h4>
          <p>💎 Läkningstid: 6-12 veckor (örsnibb), 6-9 månader (brosk)</p>
          <ul className="list-disc list-inside">
            <li>Undvik att sova på piercingen.</li>
            <li>Använd en ren kudde och byt örngott ofta.</li>
            <li>Undvik kontakt med husdjur under läkning.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium">Näs & ansiktspiercingar</h4>
          <p>💎 Läkningstid: 4-6 månader (näsvinge), 3-4 månader (septum)</p>
          <ul className="list-disc list-inside">
            <li>Blås näsan försiktigt och rengör området noggrant.</li>
            <li>Undvik att sminka området under läkningen.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium">Orala piercingar (läpp, smiley, medusa)</h4>
          <p>💎 Läkningstid: 4-8 veckor</p>
          <ul className="list-disc list-inside">
            <li>Skölj munnen med alkoholfri munskölj efter varje måltid.</li>
            <li>Undvik kryddig mat, rökning och alkohol under läkningen.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium">Navelpiercing</h4>
          <p>💎 Läkningstid: 6-12 månader</p>
          <ul className="list-disc list-inside">
            <li>Undvik tighta kläder som skaver mot piercingen.</li>
            <li>Tvätta området noggrant efter träning eller svettning.</li>
          </ul>
        </div>
      </div>

      {/* Section 3: Common Issues */}
      <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">
        3. Vanliga problem & hur du hanterar dem
      </h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          ⚠ <strong>Rodnad & svullnad:</strong> Vanligt de första dagarna, lugna området
          med kall koksaltlösning.
        </li>
        <li>
          ⚠ <strong>Liten knöl vid piercingen:</strong> Kan bero på irritation, byt till ett
          mindre smycke och undvik tryck på området.
        </li>
        <li>
          ⚠ <strong>Tecken på infektion (var, stark rodnad, värme):</strong> Rengör ofta och
          kontakta en piercare vid osäkerhet.
        </li>
      </ul>

      {/* Section 4: When to Change Jewelry */}
      <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">
        4. När kan jag byta smycke?
      </h3>
      <p>⏳ Vänta alltid tills piercingen är helt läkt innan du byter smycke.</p>
      <p>💡 Tips: Använd smycken i titan eller kirurgiskt stål för att minimera allergiska reaktioner.</p>
  <OfferBanners />
      {/* Contact Info */}
      <p className="text-center text-gray-200 mt-6">
        Genom att följa dessa skötselråd får du en trygg och smidig läkning. Har du frågor?
        Kontakta oss för professionell rådgivning! 😊
      </p>
    </div>
  );
};

export default AfterCare;
