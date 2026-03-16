import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BridgeDivider } from "@/components/ui/BridgeDivider";

export const metadata: Metadata = {
  title: "About — The Team Behind Ōma Analytics",
  description:
    "Ōma Analytics was founded by the architects of the two most widely used interpretation systems in functional medicine genomics and microbiome testing.",
};

export default function AboutPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section
        className="section-dark relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "50vh", padding: "120px 20px 80px" }}
      >
        <div style={{ maxWidth: "var(--content-max-width)" }}>
          <h4 className="section-label" style={{ marginBottom: "24px" }}>ABOUT</h4>
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
            The scientists who built the standard. Now building the integration.
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
            Ōma Analytics was founded by the architects of the tools that defined genomic and
            microbiome analysis in functional medicine.
          </p>
        </div>
      </section>

      {/* ==================== ORIGIN STORY ==================== */}
      <section className="section-light" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>ŌMA ANALYTICS</h4>
            <p style={{ marginBottom: "16px" }}>
              Ōma Analytics exists to deliver the most rigorous integration of genomic and microbiome
              intelligence available in functional medicine.
            </p>
            <p style={{ marginBottom: "16px" }}>
              The name derives from the Greek <em>-ōma</em> — the linguistic root behind genome,
              microbiome, proteome, metabolome, and every -omic science. It denotes totality. The
              complete picture.
            </p>
            <p style={{ marginBottom: "32px" }}>
              The company was founded on a single observation: the two most powerful data streams in
              precision medicine — the human genome and the gut microbiome — are routinely collected,
              rarely connected, and never interpreted as the unified system they are.
            </p>
            <p style={{ marginBottom: "48px" }}>Ōma was built to resolve that.</p>

            {/* Pull quote */}
            <div className="pull-quote" style={{ marginBottom: "0" }}>
              We built the best tools in each field. Then we asked: what happens when they talk to
              each other?
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== THE TEAM ==================== */}
      <section className="section-light" style={{ padding: "0 20px var(--spacing-section)" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>THE TEAM</h4>
            <h2 style={{ color: "var(--obsidian-navy)", marginBottom: "48px" }}>
              The authorities behind the platform.
            </h2>
          </ScrollReveal>

          {/* Val Prisecaru — photo left, text right */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-12 items-start mb-0">
              <div
                className="w-full md:w-5/12 shrink-0"
                style={{
                  aspectRatio: "4/5",
                  backgroundColor: "var(--card-light)",
                  borderRadius: "var(--radius-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: "64px",
                    color: "var(--ash-silver)",
                    opacity: 0.3,
                  }}
                >
                  VP
                </span>
              </div>
              <div className="w-full md:w-7/12">
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "28px",
                    color: "var(--obsidian-navy)",
                    marginBottom: "4px",
                  }}
                >
                  Val Prisecaru, MS
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "var(--slate-graphite)",
                    marginBottom: "8px",
                  }}
                >
                  Co-Founder, Genomics
                </p>
                <p
                  className="font-data"
                  style={{ color: "var(--meridian-blue)", marginBottom: "20px" }}
                >
                  BSc, MSc — Genome-Microbiome Research
                </p>
                <p style={{ fontSize: "17px", color: "var(--slate-graphite)", marginBottom: "16px" }}>
                  Val Prisecaru co-developed Opus-23, the most sophisticated genomics interpretation
                  engine in functional medicine — personally curating thousands of gene-agent
                  associations from peer-reviewed literature across a platform encompassing 3,500+
                  SNPs, 3,300+ genes, and 400+ multi-SNP algorithms.
                </p>
                <p style={{ fontSize: "17px", color: "var(--slate-graphite)", marginBottom: "16px" }}>
                  He serves as Program Director for the Nutrigenomics Graduate Certificate at John
                  Patrick University and holds a Master of Science in Nutrition Science with a prior
                  background in aerospace engineering — a combination that produced the algorithmic,
                  systems-level approach to genetic interpretation that distinguishes his work.
                </p>
                <p style={{ fontSize: "17px", color: "var(--slate-graphite)", marginBottom: "16px" }}>
                  His methodology — analyzing haplotypes and epistatic relationships rather than
                  isolated SNPs — established the standard for multi-variant pathway analysis in
                  clinical nutrigenomics. Dr. Peter D&apos;Adamo, creator of Opus-23, has called him
                  &ldquo;my force multiplier, my secret weapon.&rdquo;
                </p>
                <p style={{ fontSize: "17px", color: "var(--slate-graphite)" }}>
                  At Ōma, Val leads the development of genome-microbiome integration algorithms and
                  the clinical interpretation framework.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <BridgeDivider />

          {/* Jeff Ingersoll — photo right, text left */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row-reverse gap-12 items-start mb-0">
              <div
                className="w-full md:w-5/12 shrink-0"
                style={{
                  aspectRatio: "4/5",
                  backgroundColor: "var(--card-light)",
                  borderRadius: "var(--radius-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: "64px",
                    color: "var(--ash-silver)",
                    opacity: 0.3,
                  }}
                >
                  JI
                </span>
              </div>
              <div className="w-full md:w-7/12">
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "28px",
                    color: "var(--obsidian-navy)",
                    marginBottom: "4px",
                  }}
                >
                  Jeff Ingersoll
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "var(--slate-graphite)",
                    marginBottom: "8px",
                  }}
                >
                  Co-Founder, Microbiome
                </p>
                <p
                  className="font-data"
                  style={{ color: "var(--meridian-blue)", marginBottom: "20px" }}
                >
                  President, Diagnostic Solutions Laboratory
                </p>
                <p style={{ fontSize: "17px", color: "var(--slate-graphite)", marginBottom: "16px" }}>
                  Jeff Ingersoll is President of Diagnostic Solutions Laboratory, creators of the
                  GI-MAP — the quantitative PCR stool test that established the benchmark for
                  microbiome assessment in functional medicine.
                </p>
                <p style={{ fontSize: "17px", color: "var(--slate-graphite)", marginBottom: "16px" }}>
                  Under his leadership, DSL built a CLIA-certified laboratory serving thousands of
                  practitioners, pioneered virulence factor testing for{" "}
                  <em className="species-name" style={{ fontSize: "inherit" }}>H. pylori</em>{" "}
                  (distinguishing benign carriage from pathogenic strains), and developed the
                  single-sample methodology that made comprehensive stool analysis practical for
                  clinical use.
                </p>
                <p style={{ fontSize: "17px", color: "var(--slate-graphite)", marginBottom: "16px" }}>
                  GI-MAP&apos;s quantitative PCR technology does not merely detect organisms — it
                  quantifies them. That distinction, between presence and abundance, transformed how
                  practitioners evaluate and treat dysbiosis. It is the foundation upon which
                  microbiome-informed clinical protocols are built.
                </p>
                <p style={{ fontSize: "17px", color: "var(--slate-graphite)" }}>
                  At Ōma, Jeff provides the microbiome science architecture, laboratory integration,
                  and the clinical validation framework.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <BridgeDivider />

          {/* Sean Emery — photo left, text right */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div
                className="w-full md:w-5/12 shrink-0"
                style={{
                  aspectRatio: "4/5",
                  backgroundColor: "var(--card-light)",
                  borderRadius: "var(--radius-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: "64px",
                    color: "var(--ash-silver)",
                    opacity: 0.3,
                  }}
                >
                  SE
                </span>
              </div>
              <div className="w-full md:w-7/12">
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "28px",
                    color: "var(--obsidian-navy)",
                    marginBottom: "4px",
                  }}
                >
                  Sean Emery
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "var(--slate-graphite)",
                    marginBottom: "8px",
                  }}
                >
                  Co-Founder, Operations &amp; Distribution
                </p>
                <p
                  className="font-data"
                  style={{ color: "var(--meridian-blue)", marginBottom: "20px" }}
                >
                  Founder, Functional Medicine Alliance
                </p>
                <p style={{ fontSize: "17px", color: "var(--slate-graphite)", marginBottom: "16px" }}>
                  Sean Emery leads business operations and practitioner distribution. He is the
                  founder of the Functional Medicine Alliance — the practitioner network through
                  which Ōma reaches its clinical audience. FMA&apos;s trained clinician base provides
                  Ōma with a distribution infrastructure that would take years and significant
                  capital to replicate.
                </p>
                <p style={{ fontSize: "17px", color: "var(--slate-graphite)" }}>
                  His background spans military service (United States Naval Academy, submarine
                  officer), athletics, and entrepreneurship across multiple health and education
                  ventures. At Ōma, he ensures the platform reaches the practitioners who need it —
                  and that the business operates with the discipline the science demands.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== INSTITUTIONAL RELATIONSHIPS ==================== */}
      <section className="section-dark" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>
              INSTITUTIONAL RELATIONSHIPS
            </h4>
            <p style={{ color: "var(--ash-silver)", marginBottom: "32px" }}>
              Ōma Analytics operates within an established infrastructure of clinical and educational
              partnerships:
            </p>
            <ul className="space-y-4" style={{ listStyle: "none", padding: 0 }}>
              {[
                {
                  name: "Diagnostic Solutions Laboratory",
                  desc: "Laboratory integration and GI-MAP data pipeline",
                },
                {
                  name: "Functional Medicine Alliance",
                  desc: "Practitioner distribution, education, and certification delivery",
                },
                {
                  name: "John Patrick University",
                  desc: "Academic partnership for nutrigenomics education",
                },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-3">
                  <span
                    className="mt-2 shrink-0"
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--copper-patina)",
                      display: "inline-block",
                    }}
                  />
                  <p style={{ color: "var(--ash-silver)" }}>
                    <strong style={{ color: "var(--ivory-white)" }}>{item.name}</strong> — {item.desc}
                  </p>
                </li>
              ))}
            </ul>
            <p style={{ color: "var(--ash-silver)", marginTop: "32px" }}>
              The founding team maintains professional relationships with leading figures in
              functional testing, integrative medicine education, and clinical genomics research.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
