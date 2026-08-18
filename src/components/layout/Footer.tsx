"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Globe,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Training", href: "/training" },
  { label: "Destinations", href: "/destinations" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "All Services", href: "/services" },
  { label: "Visa Assistance", href: "/services/visa-assistance" },
  { label: "Document Processing", href: "/services/document-processing" },
  { label: "Interview Prep", href: "/services/interview-preparation" },
  { label: "Career Counselling", href: "/services/career-counselling" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund & Cancellation", href: "/refund" },
  { label: "FAQ", href: "/faq" },
];

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-[#04255A] text-white">
      {/* Main Footer */}
      <div className="container-custom section-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Details */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-[10px] bg-primary flex items-center justify-center text-white font-bold text-sm font-display">
                VG
              </div>
              <div>
                <h3 className="font-display text-base font-bold leading-tight text-white">
                  Venturoedge
                </h3>
                <p className="text-[10px] text-white/70 tracking-wider uppercase">
                  Global Careers
                </p>
              </div>
            </div>
            <p className="text-sm text-white/90 leading-relaxed mb-5">
              Your trusted partner for overseas employment. We connect skilled
              professionals with top international employers across the globe.
            </p>
            <div className="flex items-center gap-3">
              {/* Social media icons removed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-white/90">
                <MapPin size={16} className="mt-0.5 text-primary-light shrink-0" />
                <span>15-16-347/1, 5th Line Nalanda Nagar,<br />Brudavana Gardens Guntur,<br />Andhra Pradesh 522006</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Phone size={16} className="text-primary-light shrink-0" />
                <span>+91 83093 02460</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Mail size={16} className="text-primary-light shrink-0" />
                <a href="mailto:info@venturoedge.com" className="hover:text-white transition-colors">info@venturoedge.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/90">
                <Globe size={16} className="text-primary-light shrink-0" />
                <span>www.venturoedge.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} Venturoedge Agency. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
