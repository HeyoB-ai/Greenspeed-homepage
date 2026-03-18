import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import HeroSection from "@/components/ui/HeroSection";
import ContactForm from "@/components/ui/ContactForm";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Contact – Neem contact op met Greenspeed",
  description:
    "Neem contact op met Greenspeed voor een vrijblijvend gesprek over medicijnbezorging. We reageren binnen 1 werkdag.",
};

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Telefoon",
    value: "020 – 123 45 67",
    href: "tel:+31201234567",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "E-mail",
    value: "info@greenspeed.nl",
    href: "mailto:info@greenspeed.nl",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Adres",
    value: "Keizersgracht 123, 1015 CJ Amsterdam",
    href: "https://maps.google.com",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Reactietijd",
    value: "Binnen 1 werkdag",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        headline="Neem contact op"
        subheadline="Heeft u een vraag, wilt u overstappen of bent u op zoek naar een fietskoerier-baan? We helpen u graag verder."
        centered
        dark
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <SectionWrapper>
              <div>
                <h2 className="font-syne font-bold text-2xl text-gray-900 mb-2">
                  Stuur ons een bericht
                </h2>
                <p className="text-gray-500 font-dm mb-8">
                  We reageren altijd binnen 1 werkdag op uw bericht.
                </p>
                <ContactForm />
              </div>
            </SectionWrapper>

            {/* Contact info + map */}
            <SectionWrapper delay={0.2}>
              <div className="space-y-8">
                {/* Contact details */}
                <div>
                  <h2 className="font-syne font-bold text-2xl text-gray-900 mb-6">
                    Onze gegevens
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gs-teal-light text-gs-teal flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-dm text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="font-dm font-medium text-gray-800 hover:text-gs-teal transition-colors"
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-dm font-medium text-gray-800">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div>
                  <h3 className="font-syne font-bold text-lg text-gray-900 mb-4">
                    Onze locatie
                  </h3>
                  <div className="rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                    {/* Google Maps embed placeholder */}
                    <div className="w-full h-64 bg-gs-teal-light flex items-center justify-center relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9743.82!2d4.8945!3d52.3676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609b0d338e30d%3A0x1f0e4d00e4f5e8b3!2sAmsterdam!5e0!3m2!1snl!2snl!4v1620000000000!5m2!1snl!2snl"
                        width="100%"
                        height="256"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Greenspeed kantoor locatie"
                        className="w-full h-64"
                      />
                    </div>
                  </div>
                </div>

                {/* Response time promise */}
                <div className="bg-gs-teal-light rounded-2xl p-6 border border-gs-teal-light">
                  <h3 className="font-syne font-bold text-gs-navy mb-2">
                    Onze belofte aan u
                  </h3>
                  <p className="text-gs-teal font-dm text-sm leading-relaxed">
                    We reageren altijd binnen 1 werkdag op uw bericht. Bij urgente vragen
                    kunt u ons direct bellen op{" "}
                    <a href="tel:+31201234567" className="font-semibold underline">
                      020 – 123 45 67
                    </a>
                    . Ons team is bereikbaar van maandag t/m vrijdag van 08:00 tot 18:00.
                  </p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
