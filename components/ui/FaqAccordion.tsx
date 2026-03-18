"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  vraag: string;
  antwoord: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="font-syne font-semibold text-gray-900 pr-4">
              {item.vraag}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gs-teal flex-shrink-0 transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-5 pt-0">
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-600 font-dm leading-relaxed">
                  {item.antwoord}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
