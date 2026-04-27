import { Award, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const certifications = [
  "ISO 9001:2015 - Quality Management",
  "OSHAS 18001 - Occupational Health & Safety",
  "Zero Reportable Incident Operations",
];

const safetyPoints = [
  "24/7 Safety Monitoring and Compliance",
  "Certified Safety Professionals on All Operations",
  "Regular Training and Development Programs",
  "Advanced Equipment Maintenance Protocols",
];

export function QHSESection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            QHSE Commitment
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Safety is our top priority. We maintain the highest standards of Quality, Health, Safety, and Environmental protection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-white border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Certifications
              </h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{cert}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-white border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">
                Safety Initiatives
              </h3>
            </div>
            <ul className="space-y-4">
              {safetyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
