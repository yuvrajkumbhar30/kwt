import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Looking for Reliable Oilfield Services?
          </h2>
          <p className="text-xl text-blue-100">
            Let us help you achieve your operational goals with proven expertise and unwavering commitment to safety.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold"
          >
            Request a Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-blue-700 px-8 py-6 text-lg font-semibold"
          >
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
}
