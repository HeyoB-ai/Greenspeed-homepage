import SectionWrapper from "./SectionWrapper";

interface Step {
  nummer: number;
  titel: string;
  beschrijving: string;
}

interface StepProcessProps {
  steps: Step[];
}

export default function StepProcess({ steps }: StepProcessProps) {
  return (
    <div className="relative">
      {/* Connector line for desktop */}
      <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gs-teal-light mx-20 z-0" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, i) => (
          <SectionWrapper key={i} delay={i * 0.15}>
            <div className="flex flex-col items-center text-center lg:items-center">
              <div className="w-20 h-20 rounded-full bg-gs-teal text-white flex items-center justify-center text-2xl font-syne font-bold mb-4 shadow-lg shadow-gs-teal-light">
                {step.nummer}
              </div>
              <h3 className="font-syne font-bold text-lg text-gray-900 mb-2">
                {step.titel}
              </h3>
              <p className="text-gray-500 font-dm text-sm leading-relaxed">
                {step.beschrijving}
              </p>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  );
}
