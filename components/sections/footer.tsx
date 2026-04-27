import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">KDC</h3>
            <p className="text-sm text-slate-400">
              Delivering advanced drilling and oilfield services across the Middle East.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  QHSE
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Drilling & Workover
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Directional Drilling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  BHA Rental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Fishing Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+965XXXXXXX" className="hover:text-blue-500 transition-colors">
                  +965 XXXX XXXX
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@kdckwt.com" className="hover:text-blue-500 transition-colors">
                  info@kdckwt.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Kuwait</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2024 KDC Oilfield Services. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
