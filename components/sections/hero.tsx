import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIEwgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Advanced Drilling &{" "}
            <span className="text-blue-500">Oilfield Services</span> in Kuwait
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto">
            Delivering safe, efficient, and high-performance solutions across drilling, directional services, and manpower.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            Request a Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-slate-400 text-slate-100 hover:bg-slate-700 px-8 py-6 text-lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
