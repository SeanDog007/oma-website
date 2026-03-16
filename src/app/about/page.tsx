import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      {/* ==================== HERO (50vh) ==================== */}
      <section
        className="section-dark flex items-center justify-center"
        style={{ minHeight: "50vh", padding: "160px 20px 120px" }}
      >
        <div className="text-center" style={{ maxWidth: "900px" }}>
          <h1 style={{ fontSize: "clamp(48px, 8vw, 72px)" }}>
            We didn&apos;t enter the field. We built it.
          </h1>
        </div>
      </section>

      {/* ==================== ORIGIN (LIGHT) ==================== */}
      <section className="section-light" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px", color: "var(--radiant-gold)" }}>The Story</p>
            <h2 style={{ marginBottom: "48px" }}>Two decades. One realization.</h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                The genomics tools that practitioners rely on today — we built them. The microbiome test that became the gold standard — we built that too.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                For twenty years, these existed as separate worlds. Separate tests. Separate reports. Separate tabs on a clinician&apos;s screen.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)", fontWeight: 600 }}>
                But biology doesn&apos;t work in tabs.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                Your genome predicts which pathways are vulnerable. Your microbiome determines whether those vulnerabilities become problems. Every clinician who&apos;s cross-referenced a GI-MAP with a genomic panel knows this. They&apos;ve been doing the integration manually — because no platform existed to do it for them.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)", fontWeight: 600 }}>
                We built that platform.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                Ōma is the complete biological picture. We integrate your genome and microbiome into a single, unified analysis — and translate that insight into precise action. Tests at cost. Full analysis free for every customer. And when the data says you need specific support, personalized protocols — including custom-formulated supplements — built from your biology, not from guesswork.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)", fontWeight: 600 }}>
                We lead with insight. Everything else follows from that.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== TEAM (LIGHT) ==================== */}
      <section className="section-light" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px", color: "var(--radiant-gold)" }}>The Founders</p>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
            {/* Val */}
            <ScrollReveal delay={100}>
              <div>
                <p style={{ fontFamily: "var(--font-primary)", fontWeight: 800, fontSize: "32px", color: "var(--void-black)", marginBottom: "4px" }}>
                  Val Prisecaru, MS
                </p>
                <p style={{ fontFamily: "var(--font-primary)", fontWeight: 500, fontSize: "16px", color: "var(--text-muted-light)", marginBottom: "24px" }}>
                  Co-Founder
                </p>
                <h3 style={{ marginBottom: "16px", color: "var(--electric-blue)" }}>The Genome.</h3>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)", marginBottom: "16px" }}>
                  Val co-developed Opus-23 — the most comprehensive genomics interpretation engine in functional medicine. 3,500+ SNPs. 12,000+ gene-agent associations. 400+ multi-SNP algorithms. Two decades translating raw genetic data into clinical insight.
                </p>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)", marginBottom: "16px" }}>
                  He serves as Program Director for the Nutrigenomics Graduate Certificate at John Patrick University. His background spans aerospace engineering and nutrition science — a combination that produced the algorithmic, systems-level approach to genetic interpretation that the industry now takes for granted.
                </p>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)" }}>
                  His methodology — analyzing haplotypes and epistatic relationships rather than isolated SNPs — established the standard. At Ōma, he leads genome-microbiome integration and the analytical intelligence that powers every insight we deliver.
                </p>
              </div>
            </ScrollReveal>

            {/* Jeff */}
            <ScrollReveal delay={100}>
              <div>
                <p style={{ fontFamily: "var(--font-primary)", fontWeight: 800, fontSize: "32px", color: "var(--void-black)", marginBottom: "4px" }}>
                  Jeff Ingersoll
                </p>
                <p style={{ fontFamily: "var(--font-primary)", fontWeight: 500, fontSize: "16px", color: "var(--text-muted-light)", marginBottom: "24px" }}>
                  Co-Founder
                </p>
                <h3 style={{ marginBottom: "16px", color: "var(--signal-green)" }}>The Microbiome.</h3>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)", marginBottom: "16px" }}>
                  Jeff is President of Diagnostic Solutions Laboratory, creators of GI-MAP — the quantitative PCR stool test that set the benchmark for microbiome assessment worldwide.
                </p>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)", marginBottom: "16px" }}>
                  Under his leadership, DSL pioneered virulence factor testing for H. pylori, developed single-sample methodology that made comprehensive stool analysis practical, and built a CLIA-certified laboratory trusted by thousands of practitioners.
                </p>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)" }}>
                  GI-MAP doesn&apos;t just detect organisms. It quantifies them. That distinction — between presence and abundance — transformed how practitioners evaluate dysbiosis. At Ōma, Jeff provides the microbiome architecture and clinical validation framework.
                </p>
              </div>
            </ScrollReveal>

            {/* Sean */}
            <ScrollReveal delay={100}>
              <div>
                <p style={{ fontFamily: "var(--font-primary)", fontWeight: 800, fontSize: "32px", color: "var(--void-black)", marginBottom: "4px" }}>
                  Sean Emery
                </p>
                <p style={{ fontFamily: "var(--font-primary)", fontWeight: 500, fontSize: "16px", color: "var(--text-muted-light)", marginBottom: "24px" }}>
                  Co-Founder
                </p>
                <h3 style={{ marginBottom: "16px", color: "var(--radiant-gold)" }}>The Bridge.</h3>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)", marginBottom: "16px" }}>
                  Sean built the distribution infrastructure that connects Ōma to its market. As founder of the Functional Medicine Alliance — the practitioner network that certifies and supports functional medicine clinicians — he created the channel that most companies spend years and millions trying to build.
                </p>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)" }}>
                  Naval Academy graduate. Submarine officer. Entrepreneur across multiple health and education ventures. At Ōma, he ensures the science reaches the practitioners who need it and the patients who deserve it. Discipline. Execution. Scale.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== THE THESIS (DARK) ==================== */}
      <section className="section-dark" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px" }}>Why We Exist</p>
            <h2 style={{ marginBottom: "48px" }}>
              Insight should come from data, not assumptions.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                The tools existed. The expertise existed. The science connecting genome and microbiome has been building for two decades. But nobody put it together into a single, integrated platform that practitioners could actually use.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                We started from a simple question: What if the most advanced genomic and microbiome interpretation tools on earth talked to each other? What if every finding was enriched by the context of both systems?
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)", fontWeight: 600 }}>
                That&apos;s not a vision. That&apos;s what we built.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                Tests at cost. Analysis free. And when insight demands action — precise, personalized protocols built from the complete biological picture.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--radiant-gold)", fontWeight: 700 }}>
                Know yourself. Completely.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
