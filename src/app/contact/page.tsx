import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function ContactPage() {
  return (
    <>
      {/* ==================== HERO (50vh) ==================== */}
      <section
        className="section-dark flex items-center justify-center"
        style={{ minHeight: "50vh", padding: "160px 20px 120px" }}
      >
        <div className="text-center" style={{ maxWidth: "700px" }}>
          <h1 style={{ marginBottom: "24px", fontSize: "clamp(48px, 8vw, 72px)" }}>
            Get early access.
          </h1>
          <p style={{ fontSize: "22px", color: "var(--ice-silver)", lineHeight: 1.5 }}>
            We&apos;re onboarding now. Capacity is limited.
          </p>
        </div>
      </section>

      {/* ==================== TWO-PATH FORMS (LIGHT) ==================== */}
      <section className="section-light" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Individual */}
            <ScrollReveal>
              <div>
                <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", marginBottom: "24px" }}>
                  I want to know.
                </h2>
                <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--text-secondary-light)", marginBottom: "48px" }}>
                  Get the complete biological picture. Genome + microbiome testing delivered to your door. Full integrated analysis — free. Precise, personalized protocols based on your unique biology. Understand yourself at the deepest level available in modern science.
                </p>

                <WaitlistForm type="individual" />

                <p style={{ fontSize: "14px", color: "var(--text-muted-light)", marginTop: "24px", lineHeight: 1.5 }}>
                  We&apos;ll notify you when your spot opens. Early access members receive preferred pricing and direct communication with our science team.
                </p>
              </div>
            </ScrollReveal>

            {/* Practitioner */}
            <ScrollReveal delay={200}>
              <div>
                <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", marginBottom: "24px" }}>
                  I want to practice with precision.
                </h2>
                <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--text-secondary-light)", marginBottom: "48px" }}>
                  Access integrated genome-microbiome analysis for your patients. See the complete picture. Generate precise protocols. Earn recurring revenue on personalized supplement subscriptions.
                </p>

                <WaitlistForm type="practitioner" />

                <p style={{ fontSize: "14px", color: "var(--text-muted-light)", marginTop: "24px", lineHeight: 1.5 }}>
                  Applications reviewed within 5 business days. Accepted practitioners receive priority onboarding, preferred test pricing, and direct access to the founding team.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== URGENCY / SOCIAL PROOF (DARK) ==================== */}
      <section className="section-dark" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
          <ScrollReveal>
            <h2 style={{ marginBottom: "32px" }}>
              Limited onboarding. By design.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                We integrate every analysis individually. That means we scale deliberately — not recklessly.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                Early access members shape the platform. They get direct lines to our science team. They get pricing that won&apos;t exist later.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)", fontWeight: 600 }}>
                This isn&apos;t artificial scarcity. It&apos;s the reality of building something that&apos;s actually rigorous.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CONTACT (DARK) ==================== */}
      <section className="section-dark" style={{ padding: "120px 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "24px" }}>General Inquiries</p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--ice-silver)", marginBottom: "16px" }}>
              Partnership and media inquiries:{" "}
              <a href="mailto:partnerships@omaanalytics.com" style={{ fontFamily: "var(--font-mono)", color: "var(--electric-blue)", textDecoration: "none" }}>
                partnerships@omaanalytics.com
              </a>
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.6, color: "var(--ice-silver)" }}>
              Everything else:{" "}
              <a href="mailto:hello@omaanalytics.com" style={{ fontFamily: "var(--font-mono)", color: "var(--electric-blue)", textDecoration: "none" }}>
                hello@omaanalytics.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
