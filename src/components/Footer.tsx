import Link from "next/link";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="section-dark"
      style={{
        borderTop: "1px solid rgba(155, 164, 168, 0.15)",
        padding: "80px 0 48px",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "var(--container-max-width)",
          padding: "0 clamp(20px, 5vw, 80px)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Col 1: Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "20px",
                color: "var(--ivory-white)",
                letterSpacing: "0.04em",
                marginBottom: "12px",
              }}
            >
              Ōma Analytics
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "14px",
                color: "var(--ash-silver)",
                lineHeight: 1.5,
              }}
            >
              The Complete Biological Picture
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                color: "var(--ash-silver)",
                marginBottom: "16px",
              }}
            >
              Navigation
            </div>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/science", label: "The Science" },
                { href: "/about", label: "About" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="no-underline transition-colors duration-200 hover:text-[var(--ivory-white)]"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "var(--ash-silver)",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: For Practitioners */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                color: "var(--ash-silver)",
                marginBottom: "16px",
              }}
            >
              For Practitioners
            </div>
            <div className="flex flex-col gap-3">
              {[
                { href: "/practitioners", label: "Platform Overview" },
                { href: "/contact", label: "Request Access" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="no-underline transition-colors duration-200 hover:text-[var(--ivory-white)]"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "var(--ash-silver)",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                color: "var(--ash-silver)",
                marginBottom: "16px",
              }}
            >
              Contact
            </div>
            <a
              href="mailto:contact@omaanalytics.com"
              className="no-underline transition-colors duration-200 hover:text-[var(--ivory-white)]"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--meridian-blue-light)",
              }}
            >
              contact@omaanalytics.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-6"
          style={{
            borderTop: "1px solid rgba(155, 164, 168, 0.15)",
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "12px",
                color: "rgba(155, 164, 168, 0.6)",
              }}
            >
              Ōma Analytics provides clinical decision support tools for licensed healthcare
              practitioners. The platform does not diagnose, treat, or prescribe. All clinical
              decisions remain the responsibility of the ordering practitioner.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "12px",
                color: "rgba(155, 164, 168, 0.6)",
                whiteSpace: "nowrap",
              }}
            >
              © 2026 Genetic Wellbeing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
