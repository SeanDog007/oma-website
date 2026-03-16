import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "The Science — Genome-Microbiome Integration | Ōma Analytics",
  description:
    "A technical overview of genome-microbiome interaction and the clinical rationale for unified analysis.",
};

export default function SciencePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section
        className="section-dark relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "70vh", padding: "120px 20px 80px" }}
      >
        <div style={{ maxWidth: "var(--content-max-width)" }}>
          <h4 className="section-label" style={{ marginBottom: "24px" }}>THE SCIENCE</h4>
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
            The genome predicts. The microbiome confirms. Ōma integrates.
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
            A technical overview of genome-microbiome interaction and the clinical rationale for
            unified analysis.
          </p>
        </div>
      </section>

      {/* ==================== WHY INTEGRATION MATTERS ==================== */}
      <section className="section-light" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>WHY INTEGRATION MATTERS</h4>
            <h2 style={{ color: "var(--obsidian-navy)", marginBottom: "24px" }}>
              Single-omic analysis is structurally incomplete.
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Genomic testing identifies variants that influence enzymatic function, immune
              recognition, detoxification capacity, and neurotransmitter metabolism. Microbiome
              testing quantifies the microbial populations that modulate those same pathways from the
              gut.
            </p>
            <p style={{ marginBottom: "16px" }}>
              These are not parallel systems. They are interdependent.
            </p>
            <p style={{ marginBottom: "16px" }}>
              A patient&apos;s <em className="gene-name" style={{ fontSize: "inherit" }}>FUT2</em> non-secretor status predicts
              reduced <em className="species-name" style={{ fontSize: "inherit" }}>Bifidobacterium</em> abundance and diminished
              mucosal immunity. Their GI-MAP either confirms or contradicts that prediction. A
              patient&apos;s <em className="gene-name" style={{ fontSize: "inherit" }}>MTHFR</em> C677T variant reduces folate
              metabolism — but <em className="species-name" style={{ fontSize: "inherit" }}>Bifidobacterium</em> species produce
              folate. When both are compromised, the methylation deficit compounds in ways neither
              test alone reveals.
            </p>
            <p>
              Interpreting either data set without the other produces an incomplete clinical picture.
              Ōma was built to eliminate that structural limitation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== GENOME → MICROBIOME ==================== */}
      <section className="section-dark" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>GENOME → MICROBIOME</h4>
            <h2 style={{ color: "var(--ivory-white)", marginBottom: "32px" }}>
              How genetic variants shape microbial ecology.
            </h2>
            <p style={{ color: "var(--ash-silver)", marginBottom: "24px" }}>
              Research has established several direct mechanisms by which host genetics influence gut
              microbiome composition:
            </p>
          </ScrollReveal>

          {/* FUT2 */}
          <ScrollReveal delay={100}>
            <div className="mb-12">
              <h3
                style={{
                  color: "var(--ivory-white)",
                  fontSize: "22px",
                  marginBottom: "12px",
                }}
              >
                <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>FUT2</em> — Secretor Status
              </h3>
              <p style={{ color: "var(--ash-silver)" }}>
                <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>FUT2</em> encodes the enzyme determining whether ABO blood group antigens are
                secreted into mucosal surfaces. Non-secretors — approximately 20% of the population —
                exhibit significantly reduced microbiome diversity, lower{" "}
                <em className="species-name" style={{ fontSize: "inherit", color: "var(--botanical-green)" }}>Bifidobacterium</em> abundance,
                diminished butyrate production, and altered mucosal immune function. This single
                variant fundamentally changes which probiotic strains, prebiotic substrates, and
                mucosal support strategies are appropriate for a given patient.
              </p>
            </div>
          </ScrollReveal>

          {/* HLA */}
          <ScrollReveal delay={100}>
            <div className="mb-12">
              <h3
                style={{
                  color: "var(--ivory-white)",
                  fontSize: "22px",
                  marginBottom: "12px",
                }}
              >
                <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>HLA</em> — Immune-Microbiome Interface
              </h3>
              <p style={{ color: "var(--ash-silver)" }}>
                Human Leukocyte Antigen genes determine which microbial species the immune system
                tolerates. HLA-DQ2 and HLA-DQ8 alter gut microbial composition even before gluten
                exposure. HLA-B27 creates susceptibility to molecular mimicry — where elevated{" "}
                <em className="species-name" style={{ fontSize: "inherit", color: "var(--botanical-green)" }}>Klebsiella pneumoniae</em>{" "}
                (quantifiable on GI-MAP) can trigger inflammatory arthritis through cross-reactive
                immune activation.
              </p>
            </div>
          </ScrollReveal>

          {/* Methylation */}
          <ScrollReveal delay={100}>
            <div className="mb-12">
              <h3
                style={{
                  color: "var(--ivory-white)",
                  fontSize: "22px",
                  marginBottom: "12px",
                }}
              >
                Methylation Pathways — <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>MTHFR</em>,{" "}
                <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>PEMT</em>,{" "}
                <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>CBS</em>,{" "}
                <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>BHMT</em>
              </h3>
              <p style={{ color: "var(--ash-silver)" }}>
                Methylation variants do not operate in isolation from the gut. Impaired methylation
                reduces stomach acid production, diminishes glutathione synthesis, and increases
                oxidative stress in the intestinal lining — each of which selects for pathogenic over
                commensal bacteria. Meanwhile, the microbiome itself produces folate, B12, and SAMe
                precursors that feed methylation. The cycle is bidirectional.
              </p>
            </div>
          </ScrollReveal>

          {/* Detox */}
          <ScrollReveal delay={100}>
            <div>
              <h3
                style={{
                  color: "var(--ivory-white)",
                  fontSize: "22px",
                  marginBottom: "12px",
                }}
              >
                Detoxification — <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>CYP450</em>,{" "}
                <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>GST</em>,{" "}
                <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>NAT</em>
              </h3>
              <p style={{ color: "var(--ash-silver)" }}>
                Phase I and Phase II detoxification capacity determines how the body processes
                microbial metabolites, endotoxins, and xenobiotics.{" "}
                <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>GSTM1</em> null deletions reduce
                glutathione conjugation. When combined with elevated beta-glucuronidase-producing
                bacteria on GI-MAP, the result is a compounded detoxification impairment that neither
                data set reveals independently.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== MICROBIOME → GENOME ==================== */}
      <section className="section-light" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>MICROBIOME → GENOME</h4>
            <h2 style={{ color: "var(--obsidian-navy)", marginBottom: "24px" }}>
              How microbial metabolites regulate gene expression.
            </h2>
            <p style={{ marginBottom: "16px" }}>
              The microbiome does not merely coexist with the host genome. It modulates which genes
              are expressed and to what degree.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mb-12">
              <h3 style={{ color: "var(--obsidian-navy)", fontSize: "22px", marginBottom: "12px" }}>
                Butyrate as Epigenetic Regulator
              </h3>
              <p>
                Butyrate — produced by{" "}
                <em className="species-name" style={{ fontSize: "inherit" }}>Faecalibacterium prausnitzii</em>,{" "}
                <em className="species-name" style={{ fontSize: "inherit" }}>Roseburia</em>, and{" "}
                <em className="species-name" style={{ fontSize: "inherit" }}>Eubacterium rectale</em> — is a potent histone
                deacetylase inhibitor. It directly alters chromatin structure and gene transcription.
                A patient with low butyrate-producing bacteria and variants in butyrate-responsive
                signaling pathways faces a fundamentally different clinical situation than a patient
                with only one of those findings.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mb-12">
              <h3 style={{ color: "var(--obsidian-navy)", fontSize: "22px", marginBottom: "12px" }}>
                Microbial Metabolites and DNA Methylation
              </h3>
              <p>
                Gut bacteria produce the cofactors required for DNA methylation — folate, B12,
                betaine, and SAMe precursors. A patient with{" "}
                <em className="gene-name" style={{ fontSize: "inherit" }}>MTHFR</em> C677T and depleted folate-producing
                bacteria faces a compounded methylation crisis invisible to either test alone.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div>
              <h3 style={{ color: "var(--obsidian-navy)", fontSize: "22px", marginBottom: "12px" }}>
                The Second Genome
              </h3>
              <p>
                The gut microbiome encodes 100–150 times more genes than the human genome. These
                microbial genes produce enzymes, metabolites, and signaling molecules that interact
                directly with human gene expression. Interpreting the human genome without reference
                to the microbial genome is, by definition, interpreting less than 1% of the
                patient&apos;s total genetic information.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CLINICAL APPLICATIONS ==================== */}
      <section className="section-dark" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max-width)" }}>
          <ScrollReveal>
            <h4 className="section-label" style={{ marginBottom: "16px" }}>WHAT ŌMA REVEALS</h4>
            <h2 style={{ color: "var(--ivory-white)", marginBottom: "48px" }}>
              Clinical patterns visible only through integrated analysis.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0}>
              <div className="card on-dark border-integrated" style={{ height: "100%" }}>
                <h3 style={{ color: "var(--ivory-white)", fontSize: "20px", marginBottom: "12px" }}>
                  Autoimmune Risk Assessment
                </h3>
                <p style={{ fontSize: "16px", color: "var(--ash-silver)" }}>
                  Genetic predisposition (<em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>PTPN2</em>,
                  HLA patterns,{" "}
                  <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>CTLA-4</em>) combined with
                  intestinal permeability markers (zonulin), pathogen-triggered molecular mimicry
                  (<em className="species-name" style={{ fontSize: "inherit", color: "var(--botanical-green)" }}>Klebsiella</em>,{" "}
                  <em className="species-name" style={{ fontSize: "inherit", color: "var(--botanical-green)" }}>Proteus</em>), and mucosal immune
                  status (secretory IgA). Two of the three legs of autoimmune activation — genetic
                  susceptibility and gut barrier compromise — assessed in a single integrated report.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card on-dark border-integrated" style={{ height: "100%" }}>
                <h3 style={{ color: "var(--ivory-white)", fontSize: "20px", marginBottom: "12px" }}>
                  Neurotransmitter-Gut Axis
                </h3>
                <p style={{ fontSize: "16px", color: "var(--ash-silver)" }}>
                  <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>TPH2</em> variants affecting
                  serotonin synthesis,{" "}
                  <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>COMT</em> warrior/worrier status,{" "}
                  <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>DRD2</em> dopamine receptor
                  variants — cross-referenced with serotonin-producing bacteria, GABA-producing{" "}
                  <em className="species-name" style={{ fontSize: "inherit", color: "var(--botanical-green)" }}>Lactobacillus</em> and{" "}
                  <em className="species-name" style={{ fontSize: "inherit", color: "var(--botanical-green)" }}>Bifidobacterium</em>, and
                  tryptophan-metabolizing species. Ninety percent of serotonin is produced in the
                  gut. The genomic and microbial data must be read together.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card on-dark border-integrated" style={{ height: "100%" }}>
                <h3 style={{ color: "var(--ivory-white)", fontSize: "20px", marginBottom: "12px" }}>
                  Metabolic Syndrome
                </h3>
                <p style={{ fontSize: "16px", color: "var(--ash-silver)" }}>
                  <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>SLC30A8</em> CC homozygous
                  status (increased type 2 diabetes risk) predicts elevated{" "}
                  <em className="species-name" style={{ fontSize: "inherit", color: "var(--botanical-green)" }}>Prevotella</em> abundance and
                  altered glucose tolerance.{" "}
                  <em className="gene-name" style={{ fontSize: "inherit", color: "var(--meridian-blue-light)" }}>APOE</em> variants modulate
                  cardiovascular risk.{" "}
                  <em className="species-name" style={{ fontSize: "inherit", color: "var(--botanical-green)" }}>Akkermansia muciniphila</em>{" "}
                  levels — quantifiable on GI-MAP — correlate with metabolic health. Ōma maps genetic
                  predisposition against current microbial metabolic function.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="card on-dark border-integrated" style={{ height: "100%" }}>
                <h3 style={{ color: "var(--ivory-white)", fontSize: "20px", marginBottom: "12px" }}>
                  Pharmacomicrobiomics
                </h3>
                <p style={{ fontSize: "16px", color: "var(--ash-silver)" }}>
                  Drug response depends on both CYP450 genetic variants (pharmacogenomics) and
                  microbial drug-metabolizing capacity.{" "}
                  <em className="species-name" style={{ fontSize: "inherit", color: "var(--botanical-green)" }}>Eggerthella lenta</em> inactivates
                  digoxin. Microbiome composition affects metformin efficacy. Immunotherapy response
                  rates correlate with{" "}
                  <em className="species-name" style={{ fontSize: "inherit", color: "var(--botanical-green)" }}>Akkermansia</em> and{" "}
                  <em className="species-name" style={{ fontSize: "inherit", color: "var(--botanical-green)" }}>Faecalibacterium</em> abundance.
                  No commercial platform currently integrates pharmacogenomic SNPs with
                  microbiome-based drug metabolism predictions. Ōma does.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== CLOSING ==================== */}
      <section className="section-light" style={{ padding: "var(--spacing-section) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max-width)" }}>
          <ScrollReveal>
            {/* Methodology quote */}
            <div style={{ marginBottom: "var(--spacing-subsection)" }}>
              <div className="pull-quote">
                Every recommendation in an Ōma report is graded by evidence quality, clinical
                significance, and actionability. We do not speculate.
              </div>
            </div>

            <p style={{ marginBottom: "32px" }}>
              The genome is the architecture. The microbiome is the operating environment. Clinical
              decisions made without reference to both are decisions made with an incomplete data set.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Practitioner Access →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
