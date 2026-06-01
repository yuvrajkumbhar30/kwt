import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Users,
  Drill,
  Wrench,
  Package,
  Droplets,
  ShieldCheck,
  Briefcase,
  PhoneCall,
  Lock,
  ChevronRight,
  FlaskConical,
  Fish,
  Layers,
  Gauge,
} from "lucide-react";

const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-0NU6YcKMYEqn4H9EdvYbbZ0YRN3Mhn.png";

const kdcServices = [
  { label: "Drilling & Workover", href: "/services/drilling-workover", icon: Drill },
  { label: "Water Well", href: "/services/water-well", icon: Droplets },
  { label: "Tubular Running Services", href: "/services/tubular-running", icon: Wrench },
  { label: "Manpower", href: "/services/manpower", icon: Users },
  { label: "BHA Rental", href: "/services/bha-rental", icon: Package },
  { label: "Trainings", href: "#", icon: Briefcase },
];

const integratedServices = [
  { label: "Drilling & Measurements", href: "#", icon: Gauge },
  { label: "Fishing & Remedial Services", href: "#", icon: Fish },
  { label: "Cementing Services", href: "#", icon: Layers },
  { label: "Drilling Fluids Services", href: "#", icon: FlaskConical },
];

function FooterLinkList({ links }: { links: { label: string; href: string; icon?: React.ElementType }[] }) {
  return (
    <ul className="space-y-3 text-sm">
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors group"
          >
            {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0 text-blue-500 group-hover:text-blue-400" />}
            <span>{label}</span>
            <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function ColHeading({ title }: { title: string }) {
  return (
    <h4 className="font-agdasima text-white text-xl tracking-widest uppercase mb-5 flex items-center gap-2">
      <span className="inline-block w-6 h-0.5 bg-blue-500" />
      {title}
    </h4>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top bar accent */}
      <div className="h-1 w-full bg-blue-600" />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1 — Logo, about, social icons, contact */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <a href="/" aria-label="KDC Home">
              <img
                src={LOGO_URL}
                alt="Kuwait Drilling CO. Logo"
                className="h-20 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kuwait Drilling CO. K.S.C.C. — delivering advanced drilling and
              oilfield services across the Middle East with 20+ years of
              operational excellence.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            {/* Contact — below social icons */}
            <div className="mt-2">
              <ColHeading title="Contact" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5 text-slate-400">
                  <Phone className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-500" />
                  <a href="tel:+965XXXXXXX" className="hover:text-blue-400 transition-colors">
                    +965 XXXX XXXX
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400">
                  <Mail className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-500" />
                  <a href="mailto:info@kdckwt.com" className="hover:text-blue-400 transition-colors break-all">
                    info@kdckwt.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-500" />
                  <span>Kuwait City, Kuwait</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 — KDC Services */}
          <div>
            <ColHeading title="KDC Services" />
            <FooterLinkList links={kdcServices} />
          </div>

          {/* Column 3 — Integrated Drilling Services */}
          <div>
            <ColHeading title="Integrated Drilling" />
            <FooterLinkList links={integratedServices} />
          </div>

          {/* Column 4 — Company */}
          <div>
            <ColHeading title="Company" />
            <ul className="space-y-3 text-sm">
              {[
                { label: "QHSE", href: "/qhse", icon: ShieldCheck },
                { label: "Careers", href: "/careers", icon: Briefcase },
                { label: "Contact Us", href: "/contact", icon: PhoneCall },
                { label: "Privacy Policy", href: "#", icon: Lock },
              ].map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors group"
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0 text-blue-500 group-hover:text-blue-400" />
                    <span>{label}</span>
                    <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700/60 pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kuwait Drilling CO. K.S.C.C. All rights reserved.</p>
          <p>Designed &amp; developed for KDC</p>
        </div>
      </div>
    </footer>
  );
}
