import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Home,
  Info,
  MessageSquare,
  Users,
  Drill,
  Compass,
  Wrench,
  Package,
  Anchor,
  Droplets,
  ShieldCheck,
  Briefcase,
  PhoneCall,
  Lock,
  ChevronRight,
} from "lucide-react";

const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-0NU6YcKMYEqn4H9EdvYbbZ0YRN3Mhn.png";

const quickLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "#", icon: Info },
  { label: "Chairman's Message", href: "#", icon: MessageSquare },
  { label: "Management Team", href: "#", icon: Users },
];

const serviceLinks = [
  { label: "Drilling & Workover", href: "#", icon: Drill },
  { label: "Directional Drilling", href: "#", icon: Compass },
  { label: "Tubular Running", href: "#", icon: Wrench },
  { label: "BHA Rental", href: "#", icon: Package },
  { label: "Fishing Services", href: "#", icon: Anchor },
  { label: "Water Well Drilling", href: "#", icon: Droplets },
];

const companyLinks = [
  { label: "QHSE", href: "#", icon: ShieldCheck },
  { label: "Careers", href: "#", icon: Briefcase },
  { label: "Contact Us", href: "#", icon: PhoneCall },
  { label: "Privacy Policy", href: "#", icon: Lock },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top bar accent */}
      <div className="h-1 w-full bg-blue-600" />

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1 — Logo & about */}
          <div className="flex flex-col gap-5">
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
            <div className="flex gap-3 mt-1">
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
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-agdasima text-white text-xl tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="inline-block w-6 h-0.5 bg-blue-500" />
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map(({ label, href, icon: Icon }) => (
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

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-agdasima text-white text-xl tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="inline-block w-6 h-0.5 bg-blue-500" />
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map(({ label, href, icon: Icon }) => (
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

          {/* Column 4 — Company & Contact */}
          <div>
            <h4 className="font-agdasima text-white text-xl tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="inline-block w-6 h-0.5 bg-blue-500" />
              Company
            </h4>
            <ul className="space-y-3 text-sm mb-7">
              {companyLinks.map(({ label, href, icon: Icon }) => (
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

            <h4 className="font-agdasima text-white text-xl tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-0.5 bg-blue-500" />
              Contact
            </h4>
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

        {/* Bottom bar */}
        <div className="border-t border-slate-700/60 pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Kuwait Drilling CO. K.S.C.C. All rights reserved.</p>
          <p>Designed &amp; developed for KDC</p>
        </div>
      </div>
    </footer>
  );
}
