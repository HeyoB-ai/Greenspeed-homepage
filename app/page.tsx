import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bike, BarChart2, Leaf } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroSection from "@/components/ui/HeroSection";
import ComparisonTable from "@/components/ui/ComparisonTable";
import TestimonialCard from "@/components/ui/TestimonialCard";
import LogoBar from "@/components/ui/LogoBar";
import ContactForm from "@/components/ui/ContactForm";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { klantcases, apotheekLogos, duurzaamheidStats } from "@/lib/data";

export default function HomePage() {
  const firstCase = klantcases[0];

  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        headline="Duurzame medicijnbezorging waar je op kan bouwen"
        subheadline="Greenspeed bezorgt medicijnen per fiets en e-bike. CO₂-neutraal, betrouwbaar en met AI-gestuurde routeplanning die direct koppelt met uw apotheeksysteem."
        ctaLabel="Gratis kennismaking"
        ctaHref="/contact"
        secondaryCtaLabel="Hoe het werkt"
        secondaryCtaHref="/overstappen"
        imageSrc="https://placehold.co/1600x800/3ab4a0/white?text=Greenspeed+fietskoerier"
        imageAlt="Greenspeed fietskoerier bezorgt medicijnen"
      />

      {/* 2. Zo helpen wij apotheken */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <span className="inline-block text-gs-teal font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Over Greenspeed
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
                Zo helpen wij apotheken
              </h2>
              <p className="text-gray-500 font-dm text-lg leading-relaxed mb-6">
                Steeds meer apotheken kiezen ervoor om hun medicijnbezorging uit te besteden aan
                Greenspeed. Wij nemen alle logistieke zorgen uit handen — van routeplanning tot
                koerier — zodat u zich kunt focussen op zorg.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Volledige overname van uw bezorgoperatie",
                  "Directe koppeling met uw apotheeksysteem (AIS)",
                  "Real-time inzicht voor apotheek én patiënt",
                  "Vaste, vertrouwde koeriers per wijk",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 font-dm">
                    <span className="w-5 h-5 rounded-full bg-gs-teal-light text-gs-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/over-ons" variant="primary" size="md">
                Meer over Greenspeed
                <ArrowRight className="w-4 h-4" />
              </Button>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://placehold.co/640x400/3ab4a0/white?text=Apotheek+bezorging"
                    alt="Greenspeed bezorging in actie"
                    width={640}
                    height={400}
                    className="w-full object-cover"
                    unoptimized
                  />
                </div>
                {/* YouTube embed placeholder */}
                <div className="relative rounded-2xl overflow-hidden bg-gs-navy aspect-video flex items-center justify-center group cursor-pointer shadow-lg">
                  <Image
                    src="https://placehold.co/640x360/3ab4a0/white?text=▶+Bekijk+onze+video"
                    alt="Greenspeed video"
                    width={640}
                    height={360}
                    className="w-full object-cover opacity-70"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-gs-teal ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white font-dm text-sm">Bekijk hoe Greenspeed werkt (2:30)</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 3. Comparison table */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="inline-block text-gs-teal font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Vergelijking
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900">
                Zelf regelen vs. Greenspeed
              </h2>
              <p className="text-gray-500 font-dm text-lg mt-4 max-w-2xl mx-auto">
                Waarom steeds meer apotheken overstappen naar Greenspeed.
              </p>
            </div>
          </SectionWrapper>
          <ComparisonTable />
          <SectionWrapper delay={0.3}>
            <div className="text-center mt-10">
              <Button href="/overstappen" variant="primary" size="lg">
                Hoe werkt overstappen?
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 4. AIroute Planner preview */}
      <section className="section bg-gs-teal">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <span className="inline-block text-white/70 font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Technologie
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-6">
                AIroute Planner: slimmer bezorgen
              </h2>
              <p className="text-white/80 font-dm text-lg leading-relaxed mb-8">
                Onze AI-gestuurde routeplanner optimaliseert elke dag opnieuw alle bezorgroutes.
                Automatische koppeling met uw apotheeksysteem, real-time tracking voor patiënten
                en proactieve notificaties bij vertraging.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <BarChart2 className="w-6 h-6" />, label: "40% minder telefoontjes" },
                  { icon: <Bike className="w-6 h-6" />, label: "Optimale routes per dag" },
                  { icon: <Leaf className="w-6 h-6" />, label: "CO₂-neutrale bezorging" },
                  { icon: <ArrowRight className="w-6 h-6" />, label: "AIS-koppeling dag 1" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <span className="text-white/70">{item.icon}</span>
                    <span className="font-dm font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
              <Button href="/airoute-planner" variant="white" size="lg">
                Meer over de AIroute Planner
                <ArrowRight className="w-5 h-5" />
              </Button>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="relative">
                <Image
                  src="https://placehold.co/600x450/166633/white?text=AIroute+Planner+Dashboard"
                  alt="AIroute Planner dashboard"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl w-full"
                  unoptimized
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
                  <p className="font-syne font-bold text-gs-teal text-2xl">40%</p>
                  <p className="font-dm text-gray-600 text-xs">minder klantvragen</p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 5. Klantcase highlight */}
      <section className="section bg-white">
        <div className="container-wide">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="inline-block text-gs-teal font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Klantcase
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900">
                Wat onze klanten zeggen
              </h2>
            </div>
          </SectionWrapper>
          <SectionWrapper delay={0.2}>
            <TestimonialCard
              quote={firstCase.quote}
              naam={firstCase.naam_contact}
              functie={firstCase.functie}
              apotheek={firstCase.naam}
              foto={firstCase.foto}
              variant="large"
            />
          </SectionWrapper>
          <SectionWrapper delay={0.3}>
            <div className="text-center mt-10">
              <Button href="/klantcases" variant="secondary" size="md">
                Bekijk alle klantcases
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 6. Duurzaamheid block */}
      <section className="section bg-gs-teal-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionWrapper>
              <span className="inline-block text-gs-teal font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Duurzaamheid
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
                CO₂ = 0. Dat is ons doel. Elke dag.
              </h2>
              <p className="text-gray-500 font-dm text-lg leading-relaxed mb-8">
                Iedere bezorging van Greenspeed gaat per fiets of e-bike. Geen uitlaatgassen,
                geen parkeerdruk, geen stress. Alleen schone, stille bezorging die goed is voor
                uw patiënten én de planeet.
              </p>
              <Button href="/over-ons" variant="primary" size="md">
                Onze duurzaamheidsmissie
                <ArrowRight className="w-4 h-4" />
              </Button>
            </SectionWrapper>

            <SectionWrapper delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {duurzaamheidStats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-md text-center border border-gs-teal-light"
                  >
                    <p className="font-syne font-bold text-3xl text-gs-teal mb-1">
                      {stat.cijfer}
                    </p>
                    <p className="font-dm text-gray-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* 7. Logo bar */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-wide">
          <LogoBar
            logos={apotheekLogos}
            title="Vertrouwd door toonaangevende apotheekketens"
          />
        </div>
      </section>

      {/* 8. Contact CTA + form */}
      <section className="section bg-gs-navy">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionWrapper>
              <span className="inline-block text-gs-teal font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Contact
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-6">
                Klaar om over te stappen?
              </h2>
              <p className="text-white/70 font-dm text-lg leading-relaxed mb-8">
                Plan een vrijblijvend kennismakingsgesprek. We komen graag bij u langs om uw
                situatie te bespreken en een passend voorstel te doen.
              </p>
              <div className="space-y-4">
                {[
                  "Kosteloos en vrijblijvend adviesgesprek",
                  "Binnen 5 werkdagen een maatwerkvoorstel",
                  "Implementatie in gemiddeld 3 weken",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80 font-dm">
                    <span className="w-5 h-5 rounded-full bg-gs-teal-light0 text-white flex items-center justify-center text-xs flex-shrink-0">
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

      {/* 9. Closing CTA */}
      <section className="py-16 bg-white">
        <div className="container-narrow text-center">
          <SectionWrapper>
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="https://placehold.co/80x80/3ab4a0/white?text=DS"
                  alt="Directeur Greenspeed"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <blockquote className="font-syne font-bold text-2xl sm:text-3xl text-gray-900 max-w-2xl text-center">
                &ldquo;Wij geloven dat goede zorg begint met betrouwbare bezorging. Elke dag opnieuw.&rdquo;
              </blockquote>
              <p className="text-gray-500 font-dm">
                Directeur, Greenspeed B.V.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Neem contact op
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
