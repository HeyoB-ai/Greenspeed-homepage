import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { klantcases } from "@/lib/data";

export const metadata: Metadata = {
  title: "Klantcases – Resultaten bij apotheken",
  description:
    "Lees hoe Greenspeed apotheken helpt met duurzame medicijnbezorging. Bekijk onze klantcases en resultaten.",
};

export default function KlantcasesPage() {
  return (
    <>
      <HeroSection
        headline="Resultaten die voor zich spreken"
        subheadline="Lees hoe apotheken en gezondheidscentra in heel Nederland profiteren van Greenspeed."
        ctaLabel="Neem contact op"
        ctaHref="/contact"
        dark
      />

      <section className="section bg-white">
        <div className="container-wide">
          <SectionWrapper>
            <div className="text-center mb-12">
              <span className="inline-block text-gs-teal font-dm font-semibold text-sm uppercase tracking-widest mb-4">
                Klantcases
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900">
                Onze klanten aan het woord
              </h2>
              <p className="text-gray-500 font-dm text-lg mt-4 max-w-2xl mx-auto">
                Drie voorbeelden van hoe Greenspeed apotheken helpt beter, goedkoper en
                duurzamer te bezorgen.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {klantcases.map((kc, i) => (
              <SectionWrapper key={kc.slug} delay={i * 0.15}>
                <Link
                  href={`/klantcases/${kc.slug}`}
                  className="group block bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={kc.afbeelding}
                      alt={kc.naam}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white rounded-full px-3 py-1 text-xs font-dm font-semibold text-gs-teal">
                        {kc.stad}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-syne font-bold text-xl text-gray-900 mb-3">
                      {kc.naam}
                    </h3>
                    <p className="text-gray-500 font-dm text-sm leading-relaxed italic mb-6 line-clamp-3">
                      &ldquo;{kc.quote}&rdquo;
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {kc.resultaten.slice(0, 2).map((res, j) => (
                        <span
                          key={j}
                          className="bg-gs-teal-light text-gs-teal text-xs font-dm font-medium px-3 py-1 rounded-full"
                        >
                          {res}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={kc.foto}
                          alt={kc.naam_contact}
                          width={36}
                          height={36}
                          className="rounded-full"
                          unoptimized
                        />
                        <div>
                          <p className="font-syne font-bold text-xs text-gray-900">
                            {kc.naam_contact}
                          </p>
                          <p className="text-gray-400 font-dm text-xs">{kc.functie}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gs-teal group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gs-teal-light">
        <div className="container-narrow text-center">
          <SectionWrapper>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
              Word ook een succesverhaal
            </h2>
            <p className="text-gray-500 font-dm text-xl mb-8 max-w-xl mx-auto">
              Plan een vrijblijvend gesprek en ontdek wat Greenspeed voor uw apotheek kan betekenen.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Gratis kennismakingsgesprek
              <ArrowRight className="w-5 h-5" />
            </Button>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
