import { useState } from "react";

import { ChevronUp, ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    q: "How can I rent from SharePal?",
    A: "Renting from SharePal is quick and easy. You can browse the products, select your dates and add them to cart and checkout. You can choose to pay online or upon delivery.",
  },
  {
    q: "If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?",
    A: "No, partial extension is not possible, all the products that are rented in that particular order have to be extended.",
  },
  {
    q: "When does the rental start?",
    A: "The rental starts from the following day of the delivery day and ends a day prior to the return date. So for example, if you select the delivery date as 5th June and return date as 8th June. The rental is charged for 2 days.",
  },
  {
    q: "What will be the condition of the products at the time of delivery?",
    A: "At SharePal.in, we make sure that the products you receive are in great condition upon delivery. We thoroughly inspect and clean each item before sending it your way. If you ever face any issues, our friendly customer support team is here to help. Your satisfaction matters to us the most!",
  },
];

const FAQSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleActiveAccordion = (idx) => {
    setActiveAccordion((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full flex flex-col gap-2 ml-4 p-2">
      {FAQ_DATA.map((each, index) => {
        return (
          <div
            className="flex flex-col gap-2 p-2 hover:bg-[#F2F2F2] hover:rounded-xl cursor-pointer"
            key={index}
            onClick={() => handleActiveAccordion(index)}
          >
            <div className="flex items-start justify-between">
              <p className="text-sm md:text-[16px] text-black font-semibold hover:underline">
                {each.q}
              </p>
              <span className="text-[#778598] text-center">
                {activeAccordion === index ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </span>
            </div>
            {activeAccordion === index && (
              <p className="w-full mt-4 text-sm text-[#6B6B6B]">{each.A}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQSection;
