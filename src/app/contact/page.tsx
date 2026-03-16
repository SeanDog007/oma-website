import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Early Access — Join the Ōma Analytics Waitlist",
  description:
    "Ōma Analytics is currently onboarding qualified practitioners through an early access program. Credential verification is required.",
};

export default function ContactPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section
        className="section-dark relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "50vh", padding: "120px 20px 80px" }}
      >
        <div style={{ maxWidth: "var(--content-max-width)" }}>
          <h4 className="section-label" style={{ marginBottom: "24px" }}>EARLY ACCESS</h4>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "var(--ivory-white)",
              lineHeight: 1.1,
              letterSpacing: "0.02em",
              marginBottom: "24px",
            }}
          >
            Request practitioner access.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: "clamp(16px, 1.5vw, 20px)",
              color: "var(--ash-silver)",
              lineHeight: 1.5,
            }}
          >
            Ōma Analytics is currently onboarding qualified practitioners through an early access
            program. Credential verification is required.
          </p>
        </div>
      </section>

      {/* ==================== FORM ==================== */}
      <section className="section-light" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max-width)" }}>
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left column - info */}
            <div className="w-full md:w-5/12">
              <ScrollReveal>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "28px",
                    color: "var(--obsidian-navy)",
                    marginBottom: "16px",
                  }}
                >
                  Request Early Access
                </h3>
                <p style={{ color: "var(--slate-graphite)", marginBottom: "32px" }}>
                  Fill out the form and we&apos;ll notify you when access opens.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--obsidian-navy)",
                    marginBottom: "16px",
                  }}
                >
                  What you&apos;ll get:
                </p>
                <ul className="space-y-3" style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "Priority platform access",
                    "Founding practitioner rates",
                    "Direct line to the founding team",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-2 shrink-0"
                        style={{
                          width: "3px",
                          height: "3px",
                          backgroundColor: "var(--copper-patina)",
                          display: "inline-block",
                        }}
                      />
                      <span style={{ fontSize: "16px", color: "var(--slate-graphite)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Right column - form */}
            <div className="w-full md:w-7/12">
              <ScrollReveal delay={200}>
                <WaitlistForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GENERAL CONTACT ==================== */}
      <section className="section-dark" style={{ padding: "80px 20px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "480px" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>CONTACT</h4>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "24px",
                color: "var(--ivory-white)",
                marginBottom: "24px",
              }}
            >
              General inquiries
            </h3>
            <p style={{ color: "var(--ash-silver)", marginBottom: "8px" }}>
              For partnership inquiries, media requests, or general questions:
            </p>
            <a
              href="mailto:contact@omaanalytics.com"
              className="font-data block mb-24 hover:underline"
              style={{
                color: "var(--meridian-blue-light)",
                fontSize: "16px",
              }}
            >
              contact@omaanalytics.com
            </a>
            <p style={{ color: "var(--ash-silver)", marginBottom: "8px" }}>
              For laboratory integration or data partnership discussions:
            </p>
            <a
              href="mailto:partnerships@omaanalytics.com"
              className="font-data block mb-16 hover:underline"
              style={{
                color: "var(--meridian-blue-light)",
                fontSize: "16px",
              }}
            >
              partnerships@omaanalytics.com
            </a>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "14px",
                color: "rgba(155, 164, 168, 0.6)",
              }}
            >
              No phone number. No chatbot. We read every email.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
