import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Handboek – Greenspeed",
  description: "Het Greenspeed handboek voor apothekers en koeriers. Binnenkort beschikbaar.",
};

export default function HandboekPage() {
  return (
    <section className="min-h-[60vh] flex items-center bg-white">
      <div className="container-narrow text-center py-24">
        <SectionWrapper>
          <div className="mb-8">
            <span className="inline-block w-16 h-16 bg-green-100 rounded-2xl text-3xl flex items-center justify-center mx-auto mb-6">
              📖
            </span>
            <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
              Handboek
            </span>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Content volgt binnenkort
            </h1>
            <p className="text-gray-500 font-dm text-xl leading-relaxed max-w-xl mx-auto mb-8">
              We werken momenteel aan een uitgebreid handboek voor apotheken en koeriers.
              Binnenkort vindt u hier alle informatie over onze werkwijze, processen en
              best practices.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/" variant="primary" size="lg">
                Terug naar home
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Stel uw vraag
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
