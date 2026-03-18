import {
  Bike,
  Brain,
  Euro,
  Eye,
  RefreshCw,
  Users,
  Shield,
  Plug,
  Route,
  Link,
  MapPin,
  Bell,
  BarChart2,
  Zap,
  Lock,
  Clock,
  Heart,
  TrendingUp,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bike,
  Brain,
  Euro,
  Eye,
  RefreshCw,
  Users,
  Shield,
  Plug,
  Route,
  Link,
  MapPin,
  Bell,
  BarChart2,
  Zap,
  Lock,
  Clock,
  Heart,
  TrendingUp,
};

interface Feature {
  icon: string;
  titel: string;
  beschrijving: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  iconBg?: string;
}

export default function FeatureGrid({
  features,
  columns = 3,
  iconBg = "bg-gs-teal-light text-gs-teal",
}: FeatureGridProps) {
  const colClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${colClass} gap-8`}>
      {features.map((feature, i) => {
        const Icon = iconMap[feature.icon] || Bike;
        return (
          <SectionWrapper key={i} delay={i * 0.1}>
            <div className="flex flex-col gap-4 h-full">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-syne font-bold text-lg text-gray-900">
                {feature.titel}
              </h3>
              <p className="text-gray-500 font-dm leading-relaxed flex-1">
                {feature.beschrijving}
              </p>
            </div>
          </SectionWrapper>
        );
      })}
    </div>
  );
}
