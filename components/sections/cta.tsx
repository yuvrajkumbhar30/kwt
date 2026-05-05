import { Phone, Mail, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white">
      {/* Decorative background block */}
      <div className="absolute inset-0 flex" aria-hidden>
        <div className="w-1/2 bg-white" />
        <div className="w-1/2 bg-slate-50" />
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 border-l-4 border-b-4 border-blue-600 opacity-10" aria-hidden />
      <div className="absolute top-0 right-0 w-40 h-40 border-r-4 border-t-4 border-blue-600 opacity-10" aria-hidden />

      <div className="relative max-w-6xl mx-auto">
        <div className="rounded-3xl bg-blue-600 overflow-hidden shadow-2xl shadow-blue-200">
          {/* Inner layout */}
          <div className="grid md:grid-cols-2 min-h-[320px]">
            {/* Left panel */}
            <div className="flex flex-col justify-center p-10 md:p-14">
              <p className="text-blue-200 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Get in Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-balance leading-tight font-display mb-4">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
                Our team is standing by to provide expert consultation, competitive quotes, and fast mobilization for any oilfield service need.
              </p>
            </div>

            {/* Right panel */}
            <div className="flex flex-col justify-center gap-5 p-10 md:p-14 bg-blue-700/40">
              {/* Contact items */}
              <a
                href="tel:+965XXXXXXX"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-0.5">Call Us</p>
                  <p className="text-white font-semibold text-sm">+965 XXXX XXXX</p>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-300 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:info@kdckwt.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-0.5">Email Us</p>
                  <p className="text-white font-semibold text-sm">info@kdckwt.com</p>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-300 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Primary CTA */}
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold text-sm px-6 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 mt-2"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
