import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/ui/HeroSection";
import StepProcess from "@/components/ui/StepProcess";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ContactForm from "@/components/ui/ContactForm";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { faqOverstappen, stappenOverstappen } from "@/lib/data";

export const metadata: Metadata = {
  title: "Overstappen naar Greenspeed – Eenvoudig en snel",
  description:
    "Overstappen naar Greenspeed is eenvoudig. Ontdek ons 4-staps implementatieproces en lees de antwoorden op veelgestelde vragen.",
};

export default function OverstappenPage() {
  return (
    <>
      <HeroSection
        headline="Overstappen naar Greenspeed is eenvoudig"
        subheadline="In gemiddeld 3 weken bent u volledig operationeel met onze bezorgdienst. Wij regelen alles, inclusief de koppeling met uw apotheeksysteem."
        ctaLabel="Start vandaag"
        ctaHref="/contact"
        secondaryCtaLabel="Veelgestelde vragen"
        secondaryCtaHref="#faq"
        imageSrc="https://placehold.co/1600x700/1A7A3C/white?text=Overstappen+naar+Greenspeed"
        imageAlt="Overstappen naar Greenspeed"
      />

      {/* 4-step process */}
      <section className="section bg-white">
        <div className="container-wide">
          <SectionWrapper>
            <div className="text-center mb-16">
              <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Het proces
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900">
                Van beslissing naar bezorging in 4 stappen
              </h2>
              <p className="text-gray-500 font-dm text-lg mt-4 max-w-2xl mx-auto">
                We begeleiden u stap voor stap door het gehele implementatieproces.
              </p>
            </div>
          </SectionWrapper>
          <StepProcess steps={stappenOverstappen} />
        </div>
      </section>

      {/* Reassurance block */}
      <section className="section bg-green-50">
        <div className="container-narrow">
          <SectionWrapper>
            <div className="text-center mb-10">
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
                Wat u van ons kunt verwachten
              </h2>
              <p className="text-gray-500 font-dm text-lg">
                We begrijpen dat overstappen een grote stap is. Daarom zorgen wij voor maximale
                zekerheid tijdens elke fase van de transitie.
              </p>
            </div>
          </SectionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icoon: "⚡",
                titel: "Snelle implementatie",
                beschrijving: "Gemiddeld 2–4 weken van contract tot live.",
              },
              {
                icoon: "🔗",
                titel: "Directe AIS-koppeling",
                beschrijving: "Geen handmatig werk. Automatische import van uw bezorglijst.",
              },
              {
                icoon: "📞",
                titel: "Dedicated begeleiding",
                beschrijving: "Een persoonlijk contactpersoon de eerste 3 maanden.",
              },
            ].map((item, i) => (
              <SectionWrapper key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <span className="text-4xl mb-4 block">{item.icoon}</span>
                  <h3 className="font-syne font-bold text-gray-900 mb-2">{item.titel}</h3>
                  <p className="text-gray-500 font-dm text-sm leading-relaxed">
                    {item.beschrijving}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-white scroll-mt-20">
        <div className="container-narrow">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="inline-block text-green-600 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                FAQ
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900">
                Veelgestelde vragen
              </h2>
              <p className="text-gray-500 font-dm text-lg mt-4">
                Heeft u een andere vraag? Neem gerust contact met ons op.
              </p>
            </div>
          </SectionWrapper>
          <SectionWrapper delay={0.2}>
            <FaqAccordion items={faqOverstappen} />
          </SectionWrapper>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-green-900">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionWrapper>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-6">
                Klaar om te beginnen?
              </h2>
              <p className="text-green-200 font-dm text-lg leading-relaxed mb-8">
                Neem vandaag nog contact op voor een vrijblijvend kennismakingsgesprek.
                We komen graag bij u langs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="tel:+31201234567" variant="white" size="lg">
                  020 – 123 45 67
                </Button>
                <Button
                  href="mailto:info@greenspeed.nl"
                  variant="secondary"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  info@greenspeed.nl
                </Button>
              </div>
            </SectionWrapper>
            <SectionWrapper delay={0.2}>
              <div className="bg-white/10 rounded-2xl p-6 md:p-8">
                <ContactForm dark />
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
