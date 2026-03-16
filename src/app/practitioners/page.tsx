import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "For Practitioners — Integrated Clinical Analysis | Ōma Analytics",
  description:
    "Ōma Analytics is designed for licensed functional medicine practitioners who order genomic panels and stool analyses — and need them interpreted as one system.",
};

export default function PractitionersPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section
        className="section-dark relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "60vh", padding: "120px 20px 80px" }}
      >
        <div style={{ maxWidth: "var(--content-max-width)" }}>
          <h4 className="section-label" style={{ marginBottom: "24px" }}>FOR PRACTITIONERS</h4>
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
            Built for clinicians who already use the data. Now, connected.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: "clamp(16px, 1.5vw, 20px)",
              color: "var(--ash-silver)",
              lineHeight: 1.5,
              marginBottom: "40px",
            }}
          >
            Ōma Analytics is designed for licensed functional medicine practitioners who order
            genomic panels and stool analyses — and need them interpreted as one system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Join the Waitlist
            </Link>
            <Link href="#report-preview" className="btn-secondary on-dark">
              See Sample Report
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== WHO THIS IS FOR ==================== */}
      <section className="section-light" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>QUALIFIED PRACTITIONERS</h4>
            <p style={{ marginBottom: "16px" }}>
              Ōma serves licensed clinicians — MDs, DOs, NDs, DCs, RDs, and CNS-credentialed
              practitioners — who already integrate functional testing into their clinical workflows.
              If you currently order GI-MAP, Genomic Spotlight, or equivalent genomic and microbiome
              panels, Ōma is the interpretation layer you have been building manually.
            </p>
            <p>
              This is not an introductory platform. It assumes clinical fluency with SNP analysis,
              microbiome data, and functional medicine protocols.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="section-light" style={{ padding: "0 20px var(--spacing-section)" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>CLINICAL WORKFLOW</h4>
            <h2 style={{ color: "var(--obsidian-navy)", marginBottom: "48px" }}>
              Five steps to the complete picture.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Upload",
                desc: "Submit your patient's genomic raw data (23andMe, AncestryDNA, DSL Genomic Spotlight, or any standard raw file) and GI-MAP results through the Ōma Portal.",
              },
              {
                step: "02",
                title: "Integrated Analysis",
                desc: "Ōma's interpretation engine cross-references genomic variants against microbiome composition. Multi-SNP pathway algorithms are evaluated against quantitative microbial data.",
              },
              {
                step: "03",
                title: "Clinical Report",
                desc: "Receive a unified Ōma Report: prioritized findings with clinical significance ratings, pathway-level integration analysis, and evidence-graded protocol recommendations.",
              },
              {
                step: "04",
                title: "Patient Consultation",
                desc: "Use the Ōma Report to guide your clinical conversation. Each finding includes the underlying evidence and the reasoning chain.",
              },
              {
                step: "05",
                title: "Re-Test and Track",
                desc: "Order follow-up GI-MAP testing at 3–6 month intervals. Ōma compares new microbiome data against the original genomic profile and prior tests.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="text-center md:text-left">
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      fontSize: "48px",
                      color: "var(--copper-patina)",
                      marginBottom: "16px",
                      lineHeight: 1,
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "var(--obsidian-navy)",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "16px", color: "var(--slate-graphite)" }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== REPORT PREVIEW ==================== */}
      <section
        id="report-preview"
        className="section-dark"
        style={{ padding: "var(--spacing-section) 20px" }}
      >
        <div className="mx-auto" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>WHAT YOU RECEIVE</h4>
            <h2 style={{ color: "var(--ivory-white)", marginBottom: "24px" }}>
              Clinical decision support. Not raw data.
            </h2>
            <p style={{ color: "var(--ash-silver)", marginBottom: "32px" }}>
              Every Ōma Report includes:
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                title: "Executive Summary",
                desc: "The 3–5 most clinically significant integrated findings, each with a one-sentence clinical summary and relevance classification (genomic, microbiome, or integrated finding).",
              },
              {
                title: "Genome × Microbiome Interaction Map",
                desc: "Network visualization showing confirmed interactions between the patient's genetic variants and their current microbial ecology.",
              },
              {
                title: "Pathway Analysis",
                desc: "Methylation, detoxification, immune, neurotransmitter, and metabolic pathways analyzed through both genomic and microbiome lenses.",
              },
              {
                title: "Prioritized Protocol Recommendations",
                desc: "Evidence-graded interventions addressing both genetic and microbial layers. Specific probiotic strains informed by genomic context. Nutrient protocols adjusted for microbial cofactor production.",
              },
              {
                title: "Re-Test Benchmarks",
                desc: "Measurable targets for follow-up GI-MAP testing, based on the patient's genetic profile. What should improve. What to monitor. When to re-assess.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="flex gap-4 items-start">
                  <span
                    className="mt-2 shrink-0"
                    style={{
                      width: "3px",
                      height: "3px",
                      backgroundColor: "var(--copper-patina)",
                      display: "inline-block",
                    }}
                  />
                  <div>
                    <strong style={{ color: "var(--ivory-white)", fontFamily: "var(--font-sans)", fontSize: "16px" }}>
                      {item.title}
                    </strong>
                    <span style={{ color: "var(--ash-silver)" }}> — {item.desc}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHO IT'S FOR ==================== */}
      <section className="section-light" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>BUILT FOR</h4>
            <h2 style={{ color: "var(--obsidian-navy)", marginBottom: "48px" }}>
              Practitioners who already use functional testing.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Naturopathic Doctors",
                credential: "ND",
                desc: "NDs using genomic and microbiome panels as core diagnostic tools in their clinical practice.",
              },
              {
                title: "Functional Medicine MDs/DOs",
                credential: "MD / DO",
                desc: "IFM-trained clinicians seeking deeper integration between genomic and microbiome data sets.",
              },
              {
                title: "Integrative RDs/CNS",
                credential: "RD / CNS",
                desc: "Nutrition professionals adding clinical testing and seeking interpretation depth beyond single-omic analysis.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="card border-genomic" style={{ height: "100%" }}>
                  <span
                    className="font-data"
                    style={{ color: "var(--meridian-blue)", marginBottom: "8px", display: "block" }}
                  >
                    {item.credential}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "var(--obsidian-navy)",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "15px", color: "var(--slate-graphite)" }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CERTIFICATION ==================== */}
      <section className="section-light" style={{ padding: "0 20px var(--spacing-section)" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>ŌMA CERTIFIED PRACTITIONER</h4>
            <h2 style={{ color: "var(--obsidian-navy)", marginBottom: "24px" }}>
              OCP — the credential for integrated genome-microbiome interpretation.
            </h2>
            <p style={{ marginBottom: "16px" }}>
              The Ōma Certified Practitioner program is the first clinical certification in
              integrated genome-microbiome analysis. Developed by Val Prisecaru and Jeff Ingersoll,
              the curriculum is case-study-driven and rooted in the methodology that produced Opus-23
              and GI-MAP.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Graduates earn the OCP designation — appendable to clinical credentials — and are
              listed in the Ōma Practitioner Directory.
            </p>
            <p style={{ marginBottom: "32px" }}>Certification includes full access to the Ōma Portal.</p>
            <Link href="/contact" className="btn-primary">
              Join the Certification Waitlist →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== PRICING / WAITLIST ==================== */}
      <section className="section-dark" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "580px" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>ACCESS</h4>
            <h2 style={{ color: "var(--ivory-white)", marginBottom: "24px" }}>
              Practitioner access is by application.
            </h2>
            <p style={{ color: "var(--ash-silver)", marginBottom: "16px" }}>
              Ōma Analytics is not a consumer product. Platform access requires verified clinical
              credentials and a completed application.
            </p>
            <p style={{ color: "var(--ash-silver)", marginBottom: "32px" }}>
              Early access practitioners receive priority onboarding, direct support from the
              founding team, and input into platform development.
            </p>
            <p style={{ color: "var(--ash-silver)", marginBottom: "40px" }}>
              Pricing details are provided upon credential verification.
            </p>
            <Link href="/contact" className="btn-primary">
              Apply for Practitioner Access
            </Link>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "13px",
                color: "rgba(155, 164, 168, 0.7)",
                marginTop: "16px",
              }}
            >
              No credit card required. For licensed practitioners only.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
