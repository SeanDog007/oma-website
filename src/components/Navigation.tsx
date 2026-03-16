"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/science", label: "The Science" },
  { href: "/practitioners", label: "For Practitioners" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        height: "72px",
        backgroundColor: scrolled
          ? "rgba(10, 22, 40, 1)"
          : "rgba(10, 22, 40, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(155, 164, 168, 0.15)"
          : "1px solid transparent",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between h-full"
        style={{
          maxWidth: "var(--container-max-width)",
          padding: "0 clamp(20px, 5vw, 80px)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-[var(--ivory-white)] no-underline"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "24px",
            letterSpacing: "0.04em",
          }}
          aria-label="Ōma Analytics home"
        >
          Ōma
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline transition-colors duration-200"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "14px",
                letterSpacing: "0.04em",
                color:
                  pathname === item.href
                    ? "var(--copper-patina)"
                    : "var(--ivory-white)",
                borderBottom:
                  pathname === item.href
                    ? "2px solid var(--copper-patina)"
                    : "2px solid transparent",
                paddingBottom: "4px",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-secondary on-dark" style={{ padding: "10px 20px" }}>
            Join Waitlist
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className="block w-5 transition-all duration-200"
            style={{
              height: "1.5px",
              backgroundColor: "var(--ivory-white)",
              transform: mobileOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block w-5 transition-all duration-200"
            style={{
              height: "1.5px",
              backgroundColor: "var(--ivory-white)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 transition-all duration-200"
            style={{
              height: "1.5px",
              backgroundColor: "var(--ivory-white)",
              transform: mobileOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center gap-12 md:hidden"
          style={{
            backgroundColor: "var(--obsidian-navy)",
            top: 0,
            zIndex: 40,
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-5 bg-transparent border-none cursor-pointer"
            style={{
              color: "var(--ivory-white)",
              fontFamily: "var(--font-sans)",
              fontSize: "28px",
              fontWeight: 300,
            }}
            aria-label="Close menu"
          >
            ×
          </button>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="no-underline"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "24px",
                color:
                  pathname === item.href
                    ? "var(--copper-patina)"
                    : "var(--ivory-white)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
