import Link from "next/link";
import { NetworkBackground } from "@/components/NetworkBackground";
import { IntegrationDiagram } from "@/components/IntegrationDiagram";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BridgeDivider } from "@/components/ui/BridgeDivider";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section
        className="section-dark relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "100vh", padding: "0 20px" }}
      >
        <NetworkBackground />

        <div className="relative z-10 flex flex-col items-center" style={{ maxWidth: "640px" }}>
          {/* Wordmark */}
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "0.08em",
              color: "var(--ivory-white)",
              marginBottom: "8px",
              lineHeight: 1.1,
            }}
          >
            Ōma Analytics
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "var(--ash-silver)",
              marginBottom: "24px",
              letterSpacing: "0.02em",
            }}
          >
            The Complete Biological Picture
          </p>

          {/* Supporting line */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: "clamp(16px, 1.5vw, 18px)",
              color: "rgba(155, 164, 168, 0.8)",
              maxWidth: "480px",
              lineHeight: 1.5,
              marginBottom: "40px",
            }}
          >
            Built by the scientists behind Opus-23 and GI-MAP. Now, one integrated platform.
          </p>

          {/* CTA */}
          <Link href="/contact" className="btn-primary">
            Request Practitioner Access
          </Link>
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />
      </section>

      {/* ==================== THE THESIS ==================== */}
      <section className="section-light" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>THE PROBLEM</h4>
            <h2 style={{ marginBottom: "16px", color: "var(--obsidian-navy)" }}>
              Two data sets. Zero integration.
            </h2>
            <p style={{ color: "var(--slate-graphite)" }}>
              Functional medicine generates more biological data per patient than any other clinical
              discipline. Genomic panels identify thousands of variants across methylation,
              detoxification, immune, and neurotransmitter pathways. Stool analyses quantify
              microbial populations, pathogens, and intestinal health markers with increasing
              precision.
            </p>
            <p style={{ color: "var(--slate-graphite)", marginTop: "16px" }}>
              These data sets arrive in separate reports. They are interpreted by separate
              methodologies. They sit in separate tabs on a practitioner&apos;s screen.
            </p>
            <p style={{ color: "var(--slate-graphite)", marginTop: "16px" }}>
              The genome predicts microbiome vulnerabilities. The microbiome modulates gene
              expression. They are one system — analyzed as two.
            </p>
          </ScrollReveal>

          <BridgeDivider />

          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>THE SOLUTION</h4>
            <h2 style={{ marginBottom: "16px", color: "var(--obsidian-navy)" }}>
              Ōma closes the gap.
            </h2>
            <p style={{ color: "var(--slate-graphite)" }}>
              Ōma is not a laboratory. It is an interpretation and clinical decision support
              platform that ingests genomic and microbiome data — and returns a unified analysis
              showing how the two interact in a specific patient.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== INTEGRATION DIAGRAM ==================== */}
      <section className="section-dark" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max-width)" }}>
          <ScrollReveal>
            <h2
              className="text-center"
              style={{
                color: "var(--ivory-white)",
                marginBottom: "var(--spacing-subsection)",
              }}
            >
              Two Systems. One Analysis.
            </h2>
          </ScrollReveal>

          <IntegrationDiagram />
        </div>
      </section>

      {/* ==================== WHAT ŌMA DELIVERS ==================== */}
      <section className="section-light" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max-width)" }}>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h4 className="section-label" style={{ marginBottom: "16px" }}>THE PLATFORM</h4>
              <h2 style={{ color: "var(--obsidian-navy)" }}>
                Integrated interpretation. Not another test.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <div className="card border-integrated" style={{ height: "100%" }}>
                <h4 className="section-label" style={{ marginBottom: "12px" }}>INTEGRATION</h4>
                <h3 style={{ color: "var(--obsidian-navy)", marginBottom: "12px", fontSize: "20px" }}>
                  Genome × Microbiome Integration Report
                </h3>
                <p style={{ fontSize: "16px", color: "var(--slate-graphite)" }}>
                  The flagship output. Upload genomic raw data and GI-MAP results. Receive a single
                  report that maps gene-predicted microbiome patterns against observed microbial
                  composition — with prioritized clinical findings and evidence-graded protocols.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card border-genomic" style={{ height: "100%" }}>
                <h4 className="section-label" style={{ marginBottom: "12px" }}>PATHWAYS</h4>
                <h3 style={{ color: "var(--obsidian-navy)", marginBottom: "12px", fontSize: "20px" }}>
                  Pathway-Level Analysis
                </h3>
                <p style={{ fontSize: "16px", color: "var(--slate-graphite)" }}>
                  Methylation × microbiome. Detoxification × microbiome. Immune × microbiome.
                  Neurotransmitter × microbiome. Each pathway examined through both lenses
                  simultaneously.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card border-microbiome" style={{ height: "100%" }}>
                <h4 className="section-label" style={{ marginBottom: "12px" }}>TRACKING</h4>
                <h3 style={{ color: "var(--obsidian-navy)", marginBottom: "12px", fontSize: "20px" }}>
                  Longitudinal Tracking
                </h3>
                <p style={{ fontSize: "16px", color: "var(--slate-graphite)" }}>
                  Genomics are static. The microbiome is dynamic. Ōma tracks microbiome changes
                  against genetic predictions over time — showing practitioners whether interventions
                  are moving the patient toward their genetically optimal microbial profile.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== CREDIBILITY BAR ==================== */}
      <section className="section-light" style={{ padding: "64px 20px", borderTop: "1px solid rgba(155,164,168,0.15)" }}>
        <div
          className="mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20"
          style={{ maxWidth: "var(--container-max-width)" }}
        >
          <ScrollReveal delay={0}>
            <div className="flex items-start gap-3 text-center md:text-left">
              <span
                className="mt-2 shrink-0"
                style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--copper-patina)", display: "inline-block" }}
              />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--obsidian-navy)" }}>
                Created by the architect of <strong>Opus-23</strong>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex items-start gap-3 text-center md:text-left">
              <span
                className="mt-2 shrink-0"
                style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--copper-patina)", display: "inline-block" }}
              />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--obsidian-navy)" }}>
                <strong>GI-MAP</strong> laboratory leadership
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex items-start gap-3 text-center md:text-left">
              <span
                className="mt-2 shrink-0"
                style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--copper-patina)", display: "inline-block" }}
              />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--obsidian-navy)" }}>
                <strong>15+ years</strong> combined genomic research
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== FOUNDER AUTHORITY ==================== */}
      <section className="section-dark" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>
              BUILT BY THE SCIENTISTS WHO BUILT THE FIELD
            </h4>
            <p style={{ color: "var(--ash-silver)", marginBottom: "24px" }}>
              Ōma Analytics was founded by the architects of the two most widely used interpretation
              systems in functional medicine genomics and microbiome testing.
            </p>
            <p style={{ color: "var(--ash-silver)", marginBottom: "24px" }}>
              <strong style={{ color: "var(--ivory-white)" }}>Val Prisecaru, MS</strong> co-developed
              Opus-23 — the most comprehensive genomics interpretation engine in functional medicine,
              encompassing 3,500+ SNPs, 12,000+ gene-agent associations, and 400+ multi-SNP
              algorithms. He has spent two decades translating raw genetic data into clinical
              protocols.
            </p>
            <p style={{ color: "var(--ash-silver)", marginBottom: "24px" }}>
              <strong style={{ color: "var(--ivory-white)" }}>Jeff Ingersoll</strong> serves as
              President of Diagnostic Solutions Laboratory, creators of the GI-MAP — the
              gold-standard quantitative PCR stool test used by thousands of practitioners worldwide.
              Under his leadership, GI-MAP established the benchmark for quantitative microbiome
              assessment in clinical practice.
            </p>
            <p
              style={{
                color: "var(--ivory-white)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontStyle: "italic",
                fontSize: "20px",
                marginBottom: "32px",
              }}
            >
              They did not study these fields. They built the tools that defined them.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Early Access →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== DISTRIBUTION BAR ==================== */}
      <section className="section-light" style={{ padding: "48px 20px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "var(--content-max-width)" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "15px",
              color: "var(--ash-silver)",
              letterSpacing: "0.01em",
            }}
          >
            Ōma Analytics is distributed through the Functional Medicine Alliance practitioner
            network and integrated with Diagnostic Solutions Laboratory testing infrastructure.
          </p>
        </div>
      </section>

      {/* ==================== FOOTER CTA ==================== */}
      <section className="section-light" style={{ padding: "100px 20px" }}>
        <div className="mx-auto text-center" style={{ maxWidth: "580px" }}>
          <ScrollReveal>
            <h2 style={{ color: "var(--obsidian-navy)", marginBottom: "16px" }}>
              The complete biological picture.
            </h2>
            <p style={{ color: "var(--slate-graphite)", marginBottom: "32px" }}>
              Practitioner access is currently limited. Submit credentials to join the early access
              program.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Access
            </Link>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "13px",
                color: "var(--ash-silver)",
                marginTop: "16px",
              }}
            >
              For licensed practitioners only.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
