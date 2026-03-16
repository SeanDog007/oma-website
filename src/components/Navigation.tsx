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
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: "80px",
        backgroundColor: scrolled ? "rgba(5,10,18,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        transition: "background-color 300ms ease, backdrop-filter 300ms ease, border-bottom 300ms ease",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between h-full"
        style={{ maxWidth: "var(--container-max)", padding: "0 clamp(20px, 5vw, 80px)" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="no-underline"
          style={{
            fontFamily: "var(--font-primary)",
            fontWeight: 800,
            fontSize: "20px",
            letterSpacing: "-0.02em",
            color: "var(--pure-white)",
          }}
          aria-label="Ōma home"
        >
          Ōma
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline"
              style={{
                fontFamily: "var(--font-primary)",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.02em",
                color: pathname === item.href ? "var(--pure-white)" : "rgba(255,255,255,0.7)",
                transition: "color 200ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--pure-white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === item.href ? "var(--pure-white)" : "rgba(255,255,255,0.7)")}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-primary)",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#050A12",
              background: "linear-gradient(135deg, #F5A623, #FFCA28, #F5A623)",
              padding: "10px 24px",
              borderRadius: "0px",
              textDecoration: "none",
              transition: "box-shadow 200ms ease, transform 200ms ease",
              boxShadow: "0 0 20px rgba(245,166,35,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 40px rgba(245,166,35,0.35)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(245,166,35,0.2)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger — 2 lines */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[6px] bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className="block transition-all duration-200"
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "var(--pure-white)",
              transform: mobileOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block transition-all duration-200"
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "var(--pure-white)",
              transform: mobileOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center gap-14 md:hidden"
          style={{
            backgroundColor: "var(--void-black)",
            zIndex: 40,
            background: "radial-gradient(circle at top right, rgba(245,166,35,0.06), transparent 50%), var(--void-black)",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-5 bg-transparent border-none cursor-pointer"
            style={{ color: "var(--pure-white)", fontSize: "28px", fontWeight: 300 }}
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
                fontFamily: "var(--font-primary)",
                fontWeight: 700,
                fontSize: "28px",
                color: pathname === item.href ? "var(--radiant-gold)" : "var(--pure-white)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
            style={{ marginTop: "16px" }}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
