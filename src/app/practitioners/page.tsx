import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function PractitionersPage() {
  return (
    <>
      {/* ==================== HERO (60vh) ==================== */}
      <section
        className="section-dark flex items-center justify-center"
        style={{ minHeight: "60vh", padding: "160px 20px 120px" }}
      >
        <div className="text-center" style={{ maxWidth: "900px" }}>
          <h1 style={{ marginBottom: "32px", fontSize: "clamp(48px, 8vw, 72px)" }}>
            See the complete picture.
          </h1>
          <p style={{ fontSize: "22px", color: "var(--ice-silver)", lineHeight: 1.5, maxWidth: "640px", margin: "0 auto 48px" }}>
            Integrated genome-microbiome analysis that transforms how you practice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Apply for Access
            </Link>
            <Link href="#how-it-works" className="btn-secondary">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== THE GAP (LIGHT) ==================== */}
      <section className="section-light" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px", color: "var(--radiant-gold)" }}>The Problem</p>
            <h2 style={{ marginBottom: "48px" }}>
              You&apos;re already doing the integration. Manually.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                You order the GI-MAP. You order the genomic panel. You pull up two separate reports. Two separate tabs. And you do the integration in your head — cross-referencing SNPs against microbial populations, looking for the interactions that neither report surfaces on its own.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                You know the connections exist. You&apos;ve seen what happens when you find them. But the process is manual, time-consuming, and limited by what any human can hold in working memory across thousands of data points.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)", fontWeight: 600 }}>
                Ōma automates what you&apos;re already trying to do — and reveals what manual cross-referencing can&apos;t.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== HOW IT WORKS (DARK) ==================== */}
      <section id="how-it-works" className="section-dark" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px" }}>The Platform</p>
            <h2 style={{ marginBottom: "80px" }}>Five steps to integrated practice.</h2>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "64px", maxWidth: "var(--content-max)" }}>
            {[
              {
                step: "01",
                title: "Order tests.",
                body: "GI-MAP + Gene Metrics genomic testing through the Ōma portal. One order. Both datasets. Preferred practitioner pricing.",
                color: "var(--electric-blue)",
              },
              {
                step: "02",
                title: "Receive the integrated analysis.",
                body: "Our engine maps your patient's genome against their microbiome across methylation, detox, immune, neurotransmitter, and metabolic pathways. You get a unified report — not two separate PDFs. Every finding shows the gene-microbiome interaction driving it.",
                color: "var(--radiant-gold)",
              },
              {
                step: "03",
                title: "Clinical insight, not just data.",
                body: "Prioritized findings. Evidence-graded. Pathway-level integration. The report shows what matters most and why — so you can spend your time on clinical decisions, not data processing.",
                color: "var(--signal-green)",
              },
              {
                step: "04",
                title: "Act with precision.",
                body: "Translate insights into protocols. Use the Ōma portal to generate personalized intervention plans — including Ōma supplement formulations built from your patient's integrated data. Adjust anything. You're the clinician. The intelligence supports you.",
                color: "var(--fusion-violet)",
              },
              {
                step: "05",
                title: "Track. Retest. Evolve.",
                body: "Patients retest every 6 months. New data flows through the portal. Protocols adjust. Your patients see measurable progress. You see the clinical outcomes that prove the approach works.",
                color: "var(--electric-blue)",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}>
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "48px",
                    fontWeight: 500,
                    color: item.color,
                    lineHeight: 1,
                    minWidth: "60px",
                  }}>
                    {item.step}
                  </p>
                  <div>
                    <h3 style={{ color: "var(--pure-white)", marginBottom: "12px" }}>{item.title}</h3>
                    <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== REVENUE (LIGHT) ==================== */}
      <section className="section-light" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px", color: "var(--radiant-gold)" }}>The Business Model</p>
            <h2 style={{ marginBottom: "48px" }}>
              Better insight. Better outcomes. Better practice.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                When patients get the complete biological picture, they stay. They retest. They follow through. Because they understand — for the first time — why their protocol matters.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                And when integrated analysis drives personalized supplement formulations, you earn recurring revenue on every active subscription.
              </p>
              <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                Average supplement subscription: $95/month per patient.
              </p>
            </div>
          </ScrollReveal>

          {/* Revenue math */}
          <ScrollReveal delay={300}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
              {[
                { patients: "50", revenue: "$4,750" },
                { patients: "100", revenue: "$9,500" },
                { patients: "200", revenue: "$19,000" },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                  <span style={{ fontFamily: "var(--font-primary)", fontWeight: 800, fontSize: "32px", color: "var(--void-black)" }}>
                    {row.patients}
                  </span>
                  <span style={{ fontSize: "16px", color: "var(--text-muted-light)" }}>patients ×</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "16px", color: "var(--text-muted-light)" }}>$95/mo</span>
                  <span style={{ fontSize: "16px", color: "var(--text-muted-light)" }}>=</span>
                  <span style={{ fontFamily: "var(--font-primary)", fontWeight: 800, fontSize: "32px", color: "var(--radiant-gold)" }}>
                    {row.revenue}/mo
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
              Plus test ordering margins. Plus the clinical outcomes that build your reputation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== WHAT YOU GET (DARK) ==================== */}
      <section className="section-dark" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px" }}>Platform Access</p>
            <h2 style={{ marginBottom: "64px" }}>Built for clinicians. Not consumers.</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Integrated Analysis Engine",
                body: "Upload GI-MAP + genomic data. Receive a unified report with prioritized findings, pathway-level integration, and evidence-graded insights. See the connections that manual cross-referencing misses.",
              },
              {
                title: "Protocol Builder",
                body: "Generate personalized intervention plans from integrated data. Diet. Lifestyle. Targeted supplementation. Modify. Override. Approve. You control the clinical decisions.",
              },
              {
                title: "Patient Dashboard",
                body: "Track every patient's testing history, analysis results, protocol adherence, and progress over time. One view. Complete picture.",
              },
              {
                title: "Direct-to-Patient Supplementation",
                body: "When protocols include supplementation, Ōma handles formulation, manufacturing, packaging, and shipping. Your patient gets a premium product with their name on it. You focus on clinical care.",
              },
              {
                title: "Ōma Certified Practitioner (OCP)",
                body: "Complete the certification. Earn the OCP designation. Get listed in the Ōma practitioner directory. Demonstrate mastery of integrated genome-microbiome analysis.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card" style={{ height: "100%" }}>
                  <h3 style={{ color: "var(--pure-white)", fontSize: "24px", marginBottom: "16px" }}>{item.title}</h3>
                  <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--ice-silver)" }}>{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHO THIS IS FOR (LIGHT) ==================== */}
      <section className="section-light" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px", color: "var(--radiant-gold)" }}>Requirements</p>
            <h2 style={{ marginBottom: "48px" }}>We&apos;re selective.</h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                Ōma serves licensed clinicians — MDs, DOs, NDs, DCs, RDs, and CNS-credentialed practitioners — who already integrate functional testing into their practice.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                This is not an introductory platform. We assume clinical fluency with genomic data, microbiome interpretation, and functional medicine protocols.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)", fontWeight: 600 }}>
                If you&apos;re already ordering GI-MAP and genomic panels, you know why integration matters. If you&apos;re not, this isn&apos;t for you yet.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Link href="/contact" className="btn-primary">
              Apply for Practitioner Access
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CLOSING CTA (DARK) ==================== */}
      <section
        className="section-dark flex items-center justify-center"
        style={{ padding: "var(--section-pad) 20px", position: "relative", overflow: "hidden" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="relative z-10 text-center" style={{ maxWidth: "700px" }}>
          <ScrollReveal>
            <h2 style={{ marginBottom: "24px", fontSize: "clamp(40px, 5vw, 64px)" }}>
              The future of clinical practice is integrated biology.
            </h2>
            <p style={{ fontSize: "20px", color: "var(--ice-silver)", marginBottom: "16px", lineHeight: 1.5 }}>
              Your patients deserve the complete picture. Not two separate reports. Not manual cross-referencing. Not guesswork at the intersection.
            </p>
            <p style={{ fontSize: "20px", color: "var(--ice-silver)", marginBottom: "48px", lineHeight: 1.5, fontWeight: 600 }}>
              Integrated insight. Precise protocols. Measurable outcomes.
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "16px", padding: "24px 56px" }}>
              Apply Now
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
