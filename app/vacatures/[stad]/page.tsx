import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Clock, Euro, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactForm from "@/components/ui/ContactForm";
import { vacatures } from "@/lib/data";

interface PageProps {
  params: { stad: string };
}

export async function generateStaticParams() {
  return vacatures.map((v) => ({ stad: v.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const vac = vacatures.find((v) => v.slug === params.stad);
  if (!vac) return { title: "Vacature niet gevonden" };

  return {
    title: `Fietskoerier ${vac.stad} – Vacature Greenspeed`,
    description: vac.beschrijving,
  };
}

export default function VacatureDetailPage({ params }: PageProps) {
  const vac = vacatures.find((v) => v.slug === params.stad);

  if (!vac) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <div className="bg-green-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionWrapper>
            <div className="mb-6">
              <Button href="/vacatures" variant="secondary" size="sm" className="border-white text-white hover:bg-white hover:text-green-600">
                <ArrowLeft className="w-4 h-4" />
                Terug naar vacatures
              </Button>
            </div>
            <span className="inline-block bg-green-700 text-green-200 text-sm font-dm px-3 py-1 rounded-full mb-4">
              Vacature
            </span>
            <h1 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Fietskoerier {vac.stad}
            </h1>
            <div className="flex flex-wrap gap-4 text-green-200">
              <div className="flex items-center gap-2 font-dm text-sm">
                <MapPin className="w-4 h-4" />
                {vac.stad}
              </div>
              <div className="flex items-center gap-2 font-dm text-sm">
                <Clock className="w-4 h-4" />
                {vac.uren}
              </div>
              <div className="flex items-center gap-2 font-dm text-sm">
                <Euro className="w-4 h-4" />
                {vac.salaris}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>

      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <SectionWrapper>
                <div>
                  <h2 className="font-syne font-bold text-2xl text-gray-900 mb-4">
                    Over de functie
                  </h2>
                  <p className="text-gray-600 font-dm text-lg leading-relaxed mb-6">
                    {vac.beschrijving}
                  </p>
                  <p className="text-gray-600 font-dm leading-relaxed">
                    Als fietskoerier bij Greenspeed ben jij het gezicht van de apotheek voor
                    patiënten. Jij bezorgt medicijnen thuis — vaak aan mensen die slecht ter
                    been zijn of niet zelf naar de apotheek kunnen. Dat is betekenisvol werk dat
                    écht het verschil maakt.
                  </p>
                </div>
              </SectionWrapper>

              <SectionWrapper delay={0.1}>
                <div>
                  <h2 className="font-syne font-bold text-2xl text-gray-900 mb-4">
                    Wat wij van jou vragen
                  </h2>
                  <ul className="space-y-3">
                    {vac.vereisten.map((vereiste, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-dm">{vereiste}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-dm">Je werkt nauwkeurig en discreet (medische bezorgingen)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-dm">Goede beheersing van de Nederlandse taal</span>
                    </li>
                  </ul>
                </div>
              </SectionWrapper>

              <SectionWrapper delay={0.2}>
                <div>
                  <h2 className="font-syne font-bold text-2xl text-gray-900 mb-4">
                    Wat wij bieden
                  </h2>
                  <ul className="space-y-3">
                    {[
                      `Salaris: ${vac.salaris}`,
                      vac.extra || "Reiskostenvergoeding",
                      "Vaste begeleider en fijne teamsfeer",
                      "Moderne e-bike of fiets van Greenspeed",
                      "Flexibele werktijden in overleg",
                      "Kans op doorgroei naar teamleider of planner",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 font-dm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionWrapper>
            </div>

            {/* Sidebar - sticky apply CTA */}
            <div className="lg:col-span-1">
              <SectionWrapper delay={0.2}>
                <div className="bg-green-50 rounded-2xl p-6 sticky top-24">
                  <h3 className="font-syne font-bold text-lg text-gray-900 mb-2">
                    Direct solliciteren
                  </h3>
                  <p className="text-gray-500 font-dm text-sm mb-4">
                    We reageren binnen 2 werkdagen.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 font-dm mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-600" />
                      {vac.stad}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      {vac.uren}
                    </div>
                    <div className="flex items-center gap-2">
                      <Euro className="w-4 h-4 text-green-600" />
                      {vac.salaris}
                    </div>
                  </div>
                  <Button href="#solliciteer" variant="primary" size="sm" className="w-full">
                    Solliciteer nu
                  </Button>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="solliciteer" className="section bg-green-900 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <div className="text-center mb-8">
              <h2 className="font-syne font-bold text-3xl text-white mb-4">
                Solliciteer voor {vac.stad}
              </h2>
              <p className="text-green-200 font-dm">
                Vul het formulier in en we nemen snel contact met u op.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <ContactForm dark />
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
