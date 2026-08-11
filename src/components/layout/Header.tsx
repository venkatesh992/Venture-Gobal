"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Find Job", href: "/submit-cv" },
  { label: "Services", href: "/services" },
  { label: "Post Job", href: "/recruiters" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const isImmersive = /^\/destinations\/[^/]+$/.test(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  return (
    <>
      <header className="site-header" role="banner">
        <div className="container-custom">
          <nav
            className="flex h-[88px] items-center justify-between"
            aria-label="Main navigation"
          >
            <Link href="/" className="site-header-logo" aria-label="Venturoedge home">
              <img src="/logo.jpeg" alt="Venturoedge" className="h-14 md:h-16 w-auto object-contain" />
            </Link>

            <ul className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="site-header-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link href="/contact" className="site-header-cta hidden md:inline-flex">
                Chat with an expert
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] lg:hidden text-white hover:bg-white/10"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            <motion.div
              className="site-header-mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border-light px-6 py-5">
                  <span className="font-display text-sm font-semibold">Venturoedge</span>
                  <button
                    onClick={closeMobileMenu}
                    className="rounded-[var(--radius-sm)] p-2 text-muted hover:bg-surface-dark"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block rounded-[var(--radius-md)] px-4 py-3.5 text-[15px] font-medium text-foreground hover:bg-primary-50 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-border-light px-6 py-5">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="btn btn-primary w-full"
                  >
                    Chat with an expert
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
