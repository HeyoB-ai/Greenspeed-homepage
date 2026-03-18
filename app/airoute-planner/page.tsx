import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/ui/HeroSection";
import FeatureGrid from "@/components/ui/FeatureGrid";
import LogoBar from "@/components/ui/LogoBar";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { airouteFeatures, aisPartners, faqAiroutePlanner } from "@/lib/data";

export const metadata: Metadata = {
  title: "AIroute Planner – Slimme routeplanning voor apotheken",
  description:
    "De AIroute Planner van Greenspeed optimaliseert uw bezorgroutes met AI. Directe AIS-koppeling, real-time tracking en automatische patiëntnotificaties.",
};

const stats = [
  { cijfer: "40%", label: "minder klantvragen bij apotheken" },
  { cijfer: "<1 dag", label: "implementatietijd AIS-koppeling" },
  { cijfer: "99.9%", label: "uptime van het platform" },
  { cijfer: "7 dagen", label: "per week support beschikbaar" },
];

export default function AiroutePlannerPage() {
  return (
    <>
      <HeroSection
        headline="Betere patiëntenzorg door slimme routeplanning"
        subheadline="De AIroute Planner optimaliseert elke dag uw bezorgroutes, koppelt direct met uw apotheeksysteem en houdt patiënten automatisch op de hoogte."
        ctaLabel="Gratis demo aanvragen"
        ctaHref="/contact"
        secondaryCtaLabel="Bekijk alle functies"
        secondaryCtaHref="#functies"
        imageSrc="https://placehold.co/1600x700/1A7A3C/white?text=AIroute+Planner"
        imageAlt="AIroute Planner dashboard"
      />

      {/* 7 features */}
      <section id="functies" className="section bg-white scroll-mt-20">
        <div className="container-wide">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Functionaliteiten
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900">
                Alles in één platform
              </h2>
              <p className="text-gray-500 font-dm text-lg mt-4 max-w-2xl mx-auto">
                De AIroute Planner combineert routeoptimalisatie, tracking en communicatie in
                één krachtig systeem.
              </p>
            </div>
          </SectionWrapper>
          <FeatureGrid features={airouteFeatures} columns={3} />
        </div>
      </section>

      {/* AIS koppelingen logos */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container-wide">
          <SectionWrapper>
            <div className="text-center mb-4">
              <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-2">
                Integraties
              </span>
              <h2 className="font-syne font-bold text-2xl sm:text-3xl text-gray-900 mb-4">
                Directe koppeling met uw apotheeksysteem
              </h2>
              <p className="text-gray-500 font-dm text-base max-w-xl mx-auto mb-8">
                De AIroute Planner integreert naadloos met alle gangbare AIS-systemen.
                Implementatie duurt minder dan één werkdag.
              </p>
            </div>
            <LogoBar logos={aisPartners} />
          </SectionWrapper>
        </div>
      </section>

      {/* Statistics block */}
      <section className="section bg-green-600">
        <div className="container-wide">
          <SectionWrapper>
            <div className="text-center mb-12">
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-4">
                Bewezen resultaten
              </h2>
              <p className="text-green-100 font-dm text-lg">
                Onze klanten ervaren direct meetbare verbeteringen na implementatie.
              </p>
            </div>
          </SectionWrapper>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="bg-white/15 rounded-2xl p-6 text-center">
                  <p className="font-syne font-bold text-4xl text-white mb-2">{stat.cijfer}</p>
                  <p className="font-dm text-green-100 text-sm">{stat.label}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>

          {/* 40% telefoontjes stat - highlighted */}
          <SectionWrapper delay={0.4}>
            <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
              <p className="font-syne font-bold text-5xl sm:text-6xl text-green-600 mb-4">40%</p>
              <h3 className="font-syne font-bold text-2xl text-gray-900 mb-4">
                Minder telefoontjes van patiënten
              </h3>
              <p className="font-dm text-gray-500 text-lg max-w-2xl mx-auto">
                Apothekers die de AIroute Planner gebruiken, ontvangen gemiddeld 40% minder
                telefoontjes van patiënten die vragen waar hun medicijnen zijn. Patiënten
                ontvangen namelijk automatisch een tracking-link per SMS zodra hun bezorging
                onderweg is.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-narrow">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                FAQ
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900">
                Vragen over de AIroute Planner
              </h2>
            </div>
          </SectionWrapper>
          <SectionWrapper delay={0.2}>
            <FaqAccordion items={faqAiroutePlanner} />
          </SectionWrapper>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-green-50">
        <div className="container-narrow text-center">
          <SectionWrapper>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Zie de AIroute Planner in actie
            </h2>
            <p className="text-gray-500 font-dm text-xl leading-relaxed mb-8 max-w-xl mx-auto">
              Vraag een gratis demo aan. We laten u zien hoe de AIroute Planner precies werkt
              met uw eigen apotheeksysteem.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Gratis demo aanvragen
              <ArrowRight className="w-5 h-5" />
            </Button>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
