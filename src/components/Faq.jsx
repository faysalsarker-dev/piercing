import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const Faq = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-primary mb-8 flex justify-center items-center gap-2">
         Frequently Asked Questions
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://faysalsarker-dev.github.io/3agt/Images/11.png"
            alt="FAQ"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          {[
            {
              question: "Is piercing painful?",
              answer:
                "Pain varies depending on the location, but most clients report only slight discomfort that lasts a few seconds.",
            },
            {
              question: "How long does a piercing take to heal?",
              answer:
                "Healing times vary by piercing type, but earlobe piercings heal in about 6-8 weeks, while cartilage piercings take 3-6 months.",
            },
            {
              question: "What aftercare should I follow?",
              answer:
                "Clean your piercing with saline solution twice a day, avoid touching it, and never remove the jewelry before it fully heals.",
            },
            {
              question: "Do you use sterile equipment?",
              answer:
                "Yes! We use single-use, sterilized needles and high-quality, hypoallergenic jewelry for every client.",
            },
          ].map((faq, index) => (
            <div key={index} className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
