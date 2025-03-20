import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const Faq = () => {
  return (
    <div className="py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-blue-600 ch mb-8 flex justify-center items-center gap-2">
      Vanliga frågor om piercing och öronhåltagning
      </h2>

      {/* Grid Layout */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Image Section */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://faysalsarker-dev.github.io/3agt/Images/11.png"
            alt="FAQ"
            className="w-full  object-cover rounded-lg"
          />
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          {[
            {
              question: "Gör det ont att ta hål i öronen eller göra en piercing?",
              answer:
                "Ett skala (1-10 så är det ca.2) med nål är smärtan ännu mindre, men den varierar beroende på område och individ, men vi använder skonsamma metoder för att minimera obehag.",
            },
            {
              question: "Hur lång tid tar det för en piercing att läka?",
              answer:
                "Läkningstiden beror på placeringen. Öronhål tar vanligtvis 4-6 veckor medan broskpiercingar kan ta flera månader.",
            },
            {
              question: "Vilken typ av smycken används vid första piercingen?",
              answer:
                "Vi använder endast sterila och allergivänliga smycken i titan och silver och guld pläterade pluppar för öronhåltagning. ",
            },
            {
              question: "Hur sköter jag min nya piercing?",
              answer:
                "Vi ger dig detaljerade eftervårdsinstruktioner och rekommenderar att du rengör piercingen med en mild saltlösning dagligen.",
            },
          ].map((faq, index) => (
            <div key={index} className="collapse collapse-arrow card-color">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
