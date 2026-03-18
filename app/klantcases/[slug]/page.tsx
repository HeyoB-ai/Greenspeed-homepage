import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { klantcases } from "@/lib/data";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return klantcases.map((kc) => ({ slug: kc.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const kc = klantcases.find((k) => k.slug === params.slug);
  if (!kc) return { title: "Case niet gevonden" };

  return {
    title: `${kc.naam} – Klantcase Greenspeed`,
    description: kc.quote,
  };
}

export default function KlantcaseDetailPage({ params }: PageProps) {
  const kc = klantcases.find((k) => k.slug === params.slug);

  if (!kc) {
    notFound();
  }

  return (
    <>
      {/* Header image */}
      <div className="relative h-64 sm:h-96 overflow-hidden">
        <Image
          src={kc.afbeelding}
          alt={kc.naam}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gs-navy/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-dm px-3 py-1 rounded-full mb-3">
              {kc.stad}
            </span>
            <h1 className="font-syne font-bold text-3xl sm:text-4xl text-white">
              {kc.naam}
            </h1>
          </div>
        </div>
      </div>

      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <div className="mb-8">
              <Button href="/klantcases" variant="secondary" size="sm">
                <ArrowLeft className="w-4 h-4" />
                Terug naar klantcases
              </Button>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Quote */}
              <SectionWrapper>
                <blockquote className="border-l-4 border-gs-teal pl-6">
                  <p className="font-dm text-xl text-gray-700 italic leading-relaxed mb-4">
                    &ldquo;{kc.quote}&rdquo;
                  </p>
                  <footer className="flex items-center gap-3">
                    <Image
                      src={kc.foto}
                      alt={kc.naam_contact}
                      width={48}
                      height={48}
                      className="rounded-full"
                      unoptimized
                    />
                    <div>
                      <p className="font-syne font-bold text-gray-900">{kc.naam_contact}</p>
                      <p className="text-gray-500 font-dm text-sm">
                        {kc.functie} — {kc.naam}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </SectionWrapper>

              {/* Uitdaging */}
              <SectionWrapper delay={0.1}>
                <div>
                  <h2 className="font-syne font-bold text-2xl text-gray-900 mb-4">
                    De uitdaging
                  </h2>
                  <p className="text-gray-600 font-dm text-lg leading-relaxed">
                    {kc.uitdaging}
                  </p>
                </div>
              </SectionWrapper>

              {/* Oplossing */}
              <SectionWrapper delay={0.2}>
                <div>
                  <h2 className="font-syne font-bold text-2xl text-gray-900 mb-4">
                    De oplossing
                  </h2>
                  <p className="text-gray-600 font-dm text-lg leading-relaxed">
                    {kc.oplossing}
                  </p>
                </div>
              </SectionWrapper>

              {/* Resultaat */}
              <SectionWrapper delay={0.3}>
                <div>
                  <h2 className="font-syne font-bold text-2xl text-gray-900 mb-4">
                    Het resultaat
                  </h2>
                  <p className="text-gray-600 font-dm text-lg leading-relaxed">
                    {kc.resultaat}
                  </p>
                </div>
              </SectionWrapper>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SectionWrapper delay={0.2}>
                <div className="bg-gs-teal-light rounded-2xl p-6 sticky top-24">
                  <h3 className="font-syne font-bold text-lg text-gray-900 mb-4">
                    Resultaten op een rij
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {kc.resultaten.map((res, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gs-teal flex-shrink-0 mt-0.5" />
                        <span className="font-dm text-gray-700 text-sm">{res}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gs-teal-light pt-6">
                    <p className="font-dm text-gray-500 text-sm mb-4">
                      Wilt u ook zulke resultaten?
                    </p>
                    <Button href="/contact" variant="primary" size="sm" className="w-full">
                      Plan een gesprek
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* More cases */}
      <section className="section bg-gray-50">
        <div className="container-narrow">
          <SectionWrapper>
            <div className="text-center">
              <h2 className="font-syne font-bold text-3xl text-gray-900 mb-6">
                Meer klantcases
              </h2>
              <Button href="/klantcases" variant="secondary" size="md">
                Bekijk alle cases
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
