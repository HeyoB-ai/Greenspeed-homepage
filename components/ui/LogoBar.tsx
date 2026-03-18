import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

interface Logo {
  naam: string;
  logo: string;
}

interface LogoBarProps {
  logos: Logo[];
  title?: string;
}

export default function LogoBar({ logos, title }: LogoBarProps) {
  return (
    <SectionWrapper>
      <div>
        {title && (
          <p className="text-center text-gray-400 font-dm text-sm font-medium uppercase tracking-widest mb-8">
            {title}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={logo.logo}
                alt={logo.naam}
                width={140}
                height={50}
                className="h-10 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
