import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/ui/HeroSection";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ContactForm from "@/components/ui/ContactForm";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { expertises } from "@/lib/data";

export const metadata: Metadata = {
  title: "Over ons – Professionals in medicijnbezorging",
  description:
    "Greenspeed is specialist in duurzame medicijnbezorging voor apotheken. Leer meer over onze missie, waarden en ons team.",
};

const coreValues = [
  {
    titel: "Betrouwbaarheid",
    beschrijving:
      "Elke bezorging telt. Onze patiënten rekenen op ons en wij laten ze nooit in de steek.",
    icoon: "🎯",
  },
  {
    titel: "Duurzaamheid",
    beschrijving:
      "CO₂-neutraal bezorgen is geen keuze, maar onze standaard. Goed voor mens en milieu.",
    icoon: "🌱",
  },
  {
    titel: "Persoonlijk",
    beschrijving:
      "Vaste koeriers, vertrouwde gezichten, echte connecties. Medicijnbezorging met een menselijk gezicht.",
    icoon: "❤️",
  },
  {
    titel: "Transparantie",
    beschrijving:
      "Geen verborgen kosten, geen verrassingen. Heldere tarieven en volledige openheid over onze prestaties.",
    icoon: "🔍",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <HeroSection
        headline="Professionals in medicijnbezorging"
        subheadline="Greenspeed is opgericht met één doel: apotheken ontzorgen met de beste, meest duurzame bezorgoplossing die er is."
        ctaLabel="Neem contact op"
        ctaHref="/contact"
        secondaryCtaLabel="Bekijk vacatures"
        secondaryCtaHref="/vacatures"
        imageSrc="https://placehold.co/1600x700/1A7A3C/white?text=Team+Greenspeed"
        imageAlt="Het Greenspeed team"
      />

      {/* Intro + Missie */}
      <section className="section bg-white">
        <div className="container-narrow">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Onze missie
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
                Waarom Greenspeed bestaat
              </h2>
              <p className="text-gray-500 font-dm text-xl leading-relaxed">
                Apotheken worstelen met de logistiek van medicijnbezorging. Kosten lopen op,
                kwaliteit is wisselend en duurzaamheid wordt steeds belangrijker. Greenspeed
                lost dit op — volledig, betrouwbaar en groen.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="bg-green-50 rounded-2xl p-6 flex gap-4">
                  <span className="text-3xl flex-shrink-0">{value.icoon}</span>
                  <div>
                    <h3 className="font-syne font-bold text-gray-900 mb-2">{value.titel}</h3>
                    <p className="text-gray-500 font-dm text-sm leading-relaxed">
                      {value.beschrijving}
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Expertises */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Expertises
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900">
                Wat we voor u doen
              </h2>
              <p className="text-gray-500 font-dm text-lg mt-4 max-w-2xl mx-auto">
                Greenspeed biedt een volledig pakket aan diensten rondom medicijnbezorging.
              </p>
            </div>
          </SectionWrapper>
          <FeatureGrid features={expertises} columns={4} />
        </div>
      </section>

      {/* Lokale betrokkenheid */}
      <section className="section bg-white">
        <div className="container-narrow">
          <SectionWrapper>
            <div className="text-center mb-10">
              <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Lokale betrokkenheid
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
                Wortels in de buurt
              </h2>
              <p className="text-gray-500 font-dm text-lg leading-relaxed">
                Onze koeriers kennen hun wijk. Ze weten wie mevrouw Jansen is, dat meneer De Boer
                op de derde verdieping woont zonder lift en dat de Hendrik Roelofsweg op
                dinsdagmiddag altijd vast staat. Die lokale kennis is onbetaalbaar in de zorg.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Grip op kosten */}
      <section className="section bg-green-900 text-white">
        <div className="container-narrow">
          <SectionWrapper>
            <div className="text-center mb-10">
              <span className="inline-block text-green-300 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Financieel
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-6">
                Grip op uw bezorgkosten
              </h2>
              <p className="text-green-200 font-dm text-lg leading-relaxed">
                Vaste of variabele tarieven? Bij Greenspeed kiest u zelf. Onze transparante
                prijsstructuur geeft u altijd volledige controle over uw bezorgbudget, zonder
                onverwachte meerkosten.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { cijfer: "30%", label: "gemiddelde kostenbesparing" },
                { cijfer: "€0", label: "setup- of implementatiekosten" },
                { cijfer: "100%", label: "transparante facturatie" },
              ].map((stat, i) => (
                <div key={i} className="text-center bg-white/10 rounded-2xl p-6">
                  <p className="font-syne font-bold text-4xl text-green-300 mb-1">{stat.cijfer}</p>
                  <p className="font-dm text-green-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Inzicht in bezorging */}
      <section className="section bg-white">
        <div className="container-narrow">
          <SectionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                  Dashboard
                </span>
                <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
                  Inzicht in elke bezorging
                </h2>
                <p className="text-gray-500 font-dm text-lg leading-relaxed mb-6">
                  Ons online dashboard geeft u real-time inzicht in alle lopende en geplande
                  bezorgingen. Van statusupdate tot bezorgbevestiging — altijd up-to-date.
                </p>
                <Button href="/airoute-planner" variant="primary" size="md">
                  Ontdek de AIroute Planner
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="bg-green-50 rounded-2xl p-6">
                <ul className="space-y-4">
                  {[
                    "Live tracking per bezorging",
                    "Automatische SMS/email aan patiënten",
                    "Volledig bezorghistorie",
                    "KPI-rapportages per maand",
                    "Directe koppeling met uw AIS",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-dm">
                      <span className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center text-xs flex-shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Continuïteit */}
      <section className="section bg-gray-50">
        <div className="container-narrow">
          <SectionWrapper>
            <div className="text-center">
              <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Continuïteit
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
                Nooit een gemiste bezorging
              </h2>
              <p className="text-gray-500 font-dm text-xl leading-relaxed max-w-2xl mx-auto">
                Bij ziekte, vakantie of pech regelt Greenspeed altijd een vervangende koerier.
                Uw patiënten merken er niets van. Wij garanderen 100% continuïteit, 7 dagen per week.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Bekende gezichten */}
      <section className="section bg-white">
        <div className="container-narrow">
          <SectionWrapper>
            <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="font-syne font-bold text-3xl sm:text-4xl mb-6">
                Bekende gezichten bij uw patiënten
              </h2>
              <p className="font-dm text-green-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Onze koeriers worden toegewezen aan vaste wijken. Patiënten zien steeds dezelfde
                vertrouwde gezichten aan de deur. Dat geeft rust, vertrouwen en een gevoel van
                persoonlijke zorg — zeker voor kwetsbare mensen.
              </p>
              <Button href="/contact" variant="white" size="lg">
                Plan een kennismaking
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Contact form CTA */}
      <section className="section bg-gray-50">
        <div className="container-narrow">
          <SectionWrapper>
            <div className="text-center mb-10">
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
                Stel uw vraag
              </h2>
              <p className="text-gray-500 font-dm text-lg">
                We beantwoorden uw bericht binnen 1 werkdag.
              </p>
            </div>
          </SectionWrapper>
          <SectionWrapper delay={0.2}>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
              <ContactForm />
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
