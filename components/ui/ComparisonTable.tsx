import { X, Check } from "lucide-react";
import { comparisonItems } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function ComparisonTable() {
  return (
    <SectionWrapper>
      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-red-50 text-red-700 font-syne font-bold text-lg px-6 py-4 text-left w-1/2 border-b border-gray-200">
                ❌ Zelf regelen
              </th>
              <th className="bg-green-600 text-white font-syne font-bold text-lg px-6 py-4 text-left w-1/2 border-b border-green-700">
                ✅ Met Greenspeed
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonItems.map((item, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 border-b border-gray-100">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-dm">{item.zelfdoen}</span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-100 border-l border-green-100">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-dm font-medium">{item.greenspeed}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
