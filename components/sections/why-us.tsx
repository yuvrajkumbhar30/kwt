import {
  Users,
  Zap,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    icon: Users,
    title: "Experienced Engineering Team",
    description: "Highly skilled professionals with deep expertise in oilfield operations and problem-solving.",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description: "State-of-the-art equipment and real-time monitoring systems for optimal performance.",
  },
  {
    icon: Shield,
    title: "Strong Safety Compliance",
    description: "100% commitment to QHSE standards with certified safety protocols and zero-incident operations.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Manpower",
    description: "Trained and certified personnel available for immediate deployment across all service lines.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose KDC?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Industry-leading expertise and commitment to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card
                key={reason.title}
                className="p-8 bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-300">
                  {reason.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
