import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://www.kdckwt.com/wp-content/uploads/2025/05/KDC-first-rig-black-and-white-768x514-copy-380x254@2x.jpg"
              alt="KDC First Rig - Historical Photo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              About KDC
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                With over 20 years of experience in the oilfield services industry, KDC has established itself as a trusted partner for drilling and workover operations across the Middle East.
              </p>
              <p>
                Our commitment to safety, reliability, and innovation has earned us the trust of major oil and gas operators and contractors.
              </p>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
