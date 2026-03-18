import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/ui/HeroSection";
import VacatureCard from "@/components/ui/VacatureCard";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ContactForm from "@/components/ui/ContactForm";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { vacatures, waaromGreenspeed } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vacatures – Word fietskoerier bij Greenspeed",
  description:
    "Greenspeed zoekt betrouwbare fietskoeriers in Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven en Groningen. Bekijk onze openstaande vacatures.",
};

export default function VacaturesPage() {
  return (
    <>
      <HeroSection
        headline="Word fietskoerier bij Greenspeed"
        subheadline="Help patiënten elke dag door medicijnen per fiets te bezorgen. Betekenisvol werk, een goed salaris en een gezellig team."
        ctaLabel="Bekijk vacatures"
        ctaHref="#vacatures"
        secondaryCtaLabel="Solliciteer direct"
        secondaryCtaHref="#solliciteer"
        imageSrc="https://placehold.co/1600x700/1A7A3C/white?text=Word+koerier+bij+Greenspeed"
        imageAlt="Greenspeed fietskoeriers"
      />

      {/* Waarom Greenspeed */}
      <section className="section bg-white">
        <div className="container-wide">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Waarom Greenspeed?
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900">
                5 redenen om bij ons te werken
              </h2>
            </div>
          </SectionWrapper>
          <FeatureGrid features={waaromGreenspeed} columns={3} />
        </div>
      </section>

      {/* Vacature cards grid */}
      <section id="vacatures" className="section bg-gray-50 scroll-mt-20">
        <div className="container-wide">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Openstaande vacatures
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900">
                Beschikbaar in 6 steden
              </h2>
              <p className="text-gray-500 font-dm text-lg mt-4 max-w-xl mx-auto">
                Kies de stad die het best bij u past en bekijk de vacature voor meer informatie.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vacatures.map((vac, i) => (
              <SectionWrapper key={vac.slug} delay={i * 0.1}>
                <VacatureCard
                  stad={vac.stad}
                  slug={vac.slug}
                  uren={vac.uren}
                  beschrijving={vac.beschrijving}
                  salaris={vac.salaris}
                  extra={vac.extra}
                />
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="solliciteer" className="section bg-green-900 scroll-mt-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionWrapper>
              <span className="inline-block text-green-300 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Solliciteren
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-6">
                Interesse? Solliciteer direct
              </h2>
              <p className="text-green-200 font-dm text-lg leading-relaxed mb-6">
                Vul het formulier in en geef aan voor welke stad u solliciteert. We nemen
                binnen 2 werkdagen contact met u op voor een eerste kennismakingsgesprek.
              </p>
              <div className="bg-white/10 rounded-2xl p-6 space-y-3">
                {[
                  "Geen ervaring vereist, wel een rijbewijs of fietservaring",
                  "Flexibele uren in overleg",
                  "Werken in een betekenisvolle sector",
                  "Gezellig team en goede begeleiding",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-green-100 font-dm text-sm">
                    <span className="w-4 h-4 rounded-full bg-green-400 text-white flex items-center justify-center text-xs flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                <ContactForm dark />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Extra CTA */}
      <section className="py-12 bg-white">
        <div className="container-narrow text-center">
          <SectionWrapper>
            <p className="text-gray-500 font-dm text-lg mb-4">
              Heeft u nog vragen voordat u solliciteert?
            </p>
            <Button href="/contact" variant="secondary" size="md">
              Stel uw vraag
              <ArrowRight className="w-4 h-4" />
            </Button>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
