import { MapPin, Clock, Euro, ArrowRight } from "lucide-react";
import Button from "./Button";

interface VacatureCardProps {
  stad: string;
  slug: string;
  uren: string;
  beschrijving: string;
  salaris: string;
  extra?: string;
}

export default function VacatureCard({
  stad,
  slug,
  uren,
  beschrijving,
  salaris,
  extra,
}: VacatureCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-syne font-bold text-xl text-gray-900">
          Fietskoerier {stad}
        </h3>
        <span className="bg-gs-teal-light text-gs-teal text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
          Beschikbaar
        </span>
      </div>

      <p className="text-gray-500 font-dm text-sm leading-relaxed">{beschrijving}</p>

      <div className="flex flex-wrap gap-3 text-sm">
        <div className="flex items-center gap-1.5 text-gray-600">
          <MapPin className="w-4 h-4 text-gs-teal" />
          <span>{stad}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-600">
          <Clock className="w-4 h-4 text-gs-teal" />
          <span>{uren}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-600">
          <Euro className="w-4 h-4 text-gs-teal" />
          <span>{salaris}</span>
        </div>
      </div>

      {extra && (
        <p className="text-xs text-gs-teal font-medium bg-gs-teal-light px-3 py-2 rounded-lg">
          + {extra}
        </p>
      )}

      <Button href={`/vacatures/${slug}`} variant="primary" size="sm" className="mt-auto">
        Bekijk vacature
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
