import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function SciencePage() {
  return (
    <>
      {/* ==================== HERO (70vh) ==================== */}
      <section
        className="section-dark flex items-center justify-center"
        style={{ minHeight: "70vh", padding: "160px 20px 120px", position: "relative" }}
      >
        {/* Subtle topographic pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04, backgroundImage: "repeating-radial-gradient(circle at 25% 25%, transparent 0, transparent 20px, rgba(255,255,255,0.03) 20px, rgba(255,255,255,0.03) 21px)" }} />

        <div className="relative z-10 text-center" style={{ maxWidth: "900px" }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>The Science</p>
          <h1 style={{ marginBottom: "32px", fontSize: "clamp(48px, 8vw, 72px)" }}>
            The science of integration.
          </h1>
          <p style={{ fontSize: "22px", color: "var(--ice-silver)", lineHeight: 1.5, maxWidth: "640px", margin: "0 auto" }}>
            Why your genome and microbiome must be read together — and what happens when they are.
          </p>
        </div>
      </section>

      {/* ==================== THE THESIS ==================== */}
      <section className="section-dark" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px" }}>The Thesis</p>
            <h2 style={{ marginBottom: "48px" }}>One system. Not two.</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                Your genome and your microbiome are not separate systems. They are one integrated biological machine.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                Your DNA determines which enzymes you produce, which pathways are strong, and which are vulnerable. Your gut bacteria modulate those same pathways — producing cofactors, metabolizing nutrients, regulating gene expression in real time.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                Any analysis that looks at one without the other is incomplete. Full stop.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)", fontWeight: 600 }}>
                Ōma exists because this integration didn&apos;t have a platform. Now it does.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== GENOME → MICROBIOME (LIGHT) ==================== */}
      <section className="section-light" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px", color: "var(--radiant-gold)" }}>Genome → Microbiome</p>
            <h2 style={{ marginBottom: "64px" }}>Your DNA shapes your gut.</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)", maxWidth: "var(--content-max)", marginBottom: "64px" }}>
              This isn&apos;t theory. These mechanisms are published, replicated, and clinically validated.
            </p>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "80px", maxWidth: "var(--content-max)" }}>
            {/* FUT2 */}
            <ScrollReveal delay={200}>
              <div>
                <h3 style={{ marginBottom: "16px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", color: "var(--electric-blue)" }}>FUT2</span> — Secretor Status
                </h3>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)", marginBottom: "16px" }}>
                  One variant. Twenty percent of the population. Non-secretors have measurably lower microbiome diversity, reduced Bifidobacterium, diminished butyrate production, and altered mucosal immunity. This changes which probiotics work for you, which prebiotics feed the right species, and which mucosal support your gut actually needs.
                </p>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)", fontWeight: 600 }}>
                  An analysis that doesn&apos;t know your secretor status is guessing.
                </p>
              </div>
            </ScrollReveal>

            {/* Methylation */}
            <ScrollReveal delay={200}>
              <div>
                <h3 style={{ marginBottom: "16px" }}>
                  Methylation — <span style={{ fontFamily: "var(--font-mono)", color: "var(--electric-blue)" }}>MTHFR, PEMT, CBS, BHMT</span>
                </h3>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)", marginBottom: "16px" }}>
                  Methylation variants don&apos;t just affect folate metabolism. Impaired methylation reduces stomach acid, depletes glutathione, and increases intestinal oxidative stress — which selects for pathogenic bacteria over commensal species. Meanwhile, your gut bacteria produce the folate, B12, and SAMe precursors that methylation depends on.
                </p>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)", fontWeight: 600 }}>
                  The cycle is bidirectional. You can&apos;t understand it from one side.
                </p>
              </div>
            </ScrollReveal>

            {/* Detox */}
            <ScrollReveal delay={200}>
              <div>
                <h3 style={{ marginBottom: "16px" }}>
                  Detoxification — <span style={{ fontFamily: "var(--font-mono)", color: "var(--electric-blue)" }}>CYP450, GST, NAT</span>
                </h3>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)", marginBottom: "16px" }}>
                  Your genetic detox capacity determines how your body processes microbial metabolites and endotoxins. A GSTM1 null deletion reduces glutathione conjugation. Combine that with elevated beta-glucuronidase-producing bacteria, and you get a compounded detox impairment invisible to either test alone.
                </p>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)", fontWeight: 600 }}>
                  Ōma sees both sides. That&apos;s the point.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== MICROBIOME → GENOME (DARK) ==================== */}
      <section className="section-dark" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px" }}>Microbiome → Genome</p>
            <h2 style={{ marginBottom: "64px" }}>Your gut rewrites the code.</h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)", maxWidth: "var(--content-max)", marginBottom: "64px" }}>
              The microbiome doesn&apos;t just coexist with your DNA. It tells your genes what to do.
            </p>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "80px", maxWidth: "var(--content-max)" }}>
            {/* Butyrate */}
            <ScrollReveal delay={200}>
              <div>
                <h3 style={{ marginBottom: "16px", color: "var(--pure-white)" }}>
                  Butyrate — The Epigenetic Switch
                </h3>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--ice-silver)" }}>
                  Butyrate — produced by <span className="species-name">Faecalibacterium prausnitzii</span>, <span className="species-name">Roseburia</span>, and <span className="species-name">Eubacterium rectale</span> — is a histone deacetylase inhibitor. It literally alters which genes get expressed. Low butyrate producers + variants in butyrate-responsive pathways = a fundamentally different clinical picture than having just one.
                </p>
              </div>
            </ScrollReveal>

            {/* Microbial Cofactors */}
            <ScrollReveal delay={200}>
              <div>
                <h3 style={{ marginBottom: "16px", color: "var(--pure-white)" }}>
                  Microbial Cofactors
                </h3>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--ice-silver)" }}>
                  Your gut bacteria produce the raw materials for DNA methylation — folate, B12, betaine, SAMe precursors. An <span className="gene-name">MTHFR</span> variant plus depleted folate-producing bacteria is a compounded methylation crisis that no single-test analysis would catch.
                </p>
              </div>
            </ScrollReveal>

            {/* The Second Genome */}
            <ScrollReveal delay={200}>
              <div>
                <h3 style={{ marginBottom: "16px", color: "var(--pure-white)" }}>
                  The Second Genome
                </h3>
                <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--ice-silver)" }}>
                  Your microbiome encodes 150x more genes than your human DNA. Those microbial genes produce enzymes, metabolites, and signaling molecules that interact directly with your gene expression. Ignoring them means you&apos;re looking at less than 1% of the picture.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== THE ŌMA DIFFERENCE (LIGHT) ==================== */}
      <section className="section-light" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px", color: "var(--radiant-gold)" }}>The Ōma Difference</p>
            <h2 style={{ marginBottom: "48px" }}>Connections invisible to single-test analysis.</h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ maxWidth: "var(--content-max)", display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                Every Ōma analysis maps the space between your genome and your microbiome — the interaction layer where clinical insight actually lives.
              </p>
              <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)" }}>
                Your <span className="gene-name">MTHFR C677T</span> + depleted <span className="species-name">Bifidobacterium</span> = a compounded methylation vulnerability. The genetic variant creates the weakness. The microbial depletion removes the backup system. Neither test alone tells that story.
              </p>
              <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)" }}>
                Your <span className="gene-name">VDR</span> polymorphism + low <span className="species-name">Akkermansia</span> = impaired mucosal integrity driven by both genetic predisposition and microbial environment. One problem. Two causes. One integrated view.
              </p>
              <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)" }}>
                Your Phase II SNPs + dysbiotic gut ecology = detox impairment invisible to either test in isolation. The genome shows the vulnerability. The microbiome shows why it&apos;s expressing.
              </p>
              <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)" }}>
                This is what becomes possible when you stop reading two separate reports and start reading one integrated system.
              </p>
              <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary-light)" }}>
                When action is needed, these insights translate directly into precise protocols — from dietary adjustments to targeted supplementation formulated from your specific data.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Link href="/contact" className="btn-primary">
              Join the Waitlist
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CLOSING (DARK) ==================== */}
      <section className="section-dark" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
          <ScrollReveal>
            <h2 style={{ marginBottom: "32px" }}>
              Precision isn&apos;t a buzzword. It&apos;s a method.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                We don&apos;t use the word lightly. Every insight we generate traces back to specific variants, specific microbial populations, specific pathway interactions — documented, evidence-graded, and clinically validated.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                The genome is the blueprint. The microbiome is the environment. We read both. We integrate both.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)", fontWeight: 600 }}>
                That&apos;s the science of Ōma.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
