import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  naam: string;
  functie: string;
  apotheek: string;
  foto?: string;
  variant?: "default" | "large";
}

export default function TestimonialCard({
  quote,
  naam,
  functie,
  apotheek,
  foto,
  variant = "default",
}: TestimonialCardProps) {
  if (variant === "large") {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto">
        <div className="text-gs-teal text-6xl font-syne leading-none mb-6">&ldquo;</div>
        <p className="text-gray-700 text-xl md:text-2xl font-dm leading-relaxed italic mb-8">
          {quote}
        </p>
        <div className="flex items-center gap-4">
          {foto && (
            <Image
              src={foto}
              alt={naam}
              width={56}
              height={56}
              className="rounded-full"
              unoptimized
            />
          )}
          <div>
            <p className="font-syne font-bold text-gray-900">{naam}</p>
            <p className="text-gray-500 font-dm text-sm">
              {functie} — {apotheek}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="text-gs-teal text-4xl font-syne leading-none mb-3">&ldquo;</div>
      <p className="text-gray-600 font-dm leading-relaxed italic mb-6">{quote}</p>
      <div className="flex items-center gap-3">
        {foto && (
          <Image
            src={foto}
            alt={naam}
            width={44}
            height={44}
            className="rounded-full"
            unoptimized
          />
        )}
        <div>
          <p className="font-syne font-bold text-gray-900 text-sm">{naam}</p>
          <p className="text-gray-400 font-dm text-xs">
            {functie} — {apotheek}
          </p>
        </div>
      </div>
    </div>
  );
}
