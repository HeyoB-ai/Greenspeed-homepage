import Image from "next/image";
import Button from "./Button";

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlay?: boolean;
  centered?: boolean;
  dark?: boolean;
}

export default function HeroSection({
  headline,
  subheadline,
  ctaLabel,
  ctaHref = "/contact",
  secondaryCtaLabel,
  secondaryCtaHref,
  imageSrc,
  imageAlt = "Hero afbeelding",
  overlay = true,
  centered = false,
  dark = false,
}: HeroSectionProps) {
  const bgClass = dark
    ? "bg-green-900 text-white"
    : imageSrc
    ? "text-white"
    : "bg-green-50 text-gray-900";

  return (
    <section
      className={`relative min-h-[560px] flex items-center ${bgClass} overflow-hidden`}
    >
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {overlay && (
            <div className="absolute inset-0 bg-green-900/70" />
          )}
        </>
      )}

      <div
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ${
          centered ? "text-center mx-auto" : ""
        }`}
      >
        <h1
          className={`font-syne font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 max-w-3xl ${
            centered ? "mx-auto" : ""
          } ${!imageSrc && !dark ? "text-green-900" : "text-white"}`}
        >
          {headline}
        </h1>

        {subheadline && (
          <p
            className={`text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed ${
              centered ? "mx-auto" : ""
            } ${!imageSrc && !dark ? "text-gray-600" : "text-green-100"}`}
          >
            {subheadline}
          </p>
        )}

        {(ctaLabel || secondaryCtaLabel) && (
          <div
            className={`flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}
          >
            {ctaLabel && (
              <Button
                href={ctaHref}
                variant={imageSrc || dark ? "white" : "primary"}
                size="lg"
              >
                {ctaLabel}
              </Button>
            )}
            {secondaryCtaLabel && secondaryCtaHref && (
              <Button
                href={secondaryCtaHref}
                variant="secondary"
                size="lg"
                className={
                  imageSrc || dark
                    ? "border-white text-white hover:bg-white hover:text-green-600"
                    : ""
                }
              >
                {secondaryCtaLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
