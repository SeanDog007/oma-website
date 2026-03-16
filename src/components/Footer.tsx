import Link from "next/link";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: "var(--void-black)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "100px 0 48px",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "var(--container-max)", padding: "0 clamp(20px, 5vw, 80px)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Col 1: Brand */}
          <div>
            <p style={{
              fontFamily: "var(--font-primary)",
              fontWeight: 800,
              fontSize: "20px",
              color: "var(--pure-white)",
              marginBottom: "8px",
            }}>
              Ōma
            </p>
            <p style={{
              fontFamily: "var(--font-primary)",
              fontSize: "14px",
              color: "rgba(138,148,166,0.5)",
              lineHeight: 1.5,
            }}>
              The Complete Biological Picture
            </p>
          </div>

          {/* Col 2: Pages */}
          <div>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/science", label: "The Science" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="no-underline hover:text-white"
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "var(--ice-silver)",
                    transition: "color 200ms ease",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Practitioners */}
          <div>
            <div className="flex flex-col gap-3">
              {[
                { href: "/practitioners", label: "For Practitioners" },
                { href: "/contact", label: "Join Waitlist" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="no-underline hover:text-white"
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "var(--ice-silver)",
                    transition: "color 200ms ease",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Contact */}
          <div>
            <a
              href="mailto:hello@omaanalytics.com"
              className="no-underline hover:text-white"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--electric-blue)",
                transition: "color 200ms ease",
              }}
            >
              hello@omaanalytics.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{
              fontFamily: "var(--font-primary)",
              fontSize: "12px",
              color: "rgba(138,148,166,0.4)",
              lineHeight: 1.6,
              maxWidth: "600px",
            }}>
              Ōma provides integrated biological analysis and personalized wellness protocols. Individual wellness insights are for general informational purposes and do not constitute medical advice. Clinical protocols are available exclusively through licensed practitioners.
            </p>
            <p style={{
              fontFamily: "var(--font-primary)",
              fontSize: "12px",
              color: "rgba(138,148,166,0.4)",
              whiteSpace: "nowrap",
            }}>
              Ōma is a product of Genetic Wellbeing. © 2026 Genetic Wellbeing. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
