import Link from "next/link";
import { NetworkHero } from "@/components/NetworkHero";
import { ConvergenceDiagram } from "@/components/ConvergenceDiagram";
import { SupplementPacket } from "@/components/SupplementPacket";
import { FormulaPreview } from "@/components/FormulaPreview";
import { StatCounter } from "@/components/ui/StatCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export default function HomePage() {
  return (
    <>
      {/* ==================== 1. HERO (100vh) ==================== */}
      <section
        className="section-dark relative flex items-center"
        style={{ minHeight: "100vh", padding: "0 20px" }}
      >
        {/* Interactive network diagram */}
        <NetworkHero />

        {/* Radial glow */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(0,102,255,0.15) 0%, rgba(245,166,35,0.08) 30%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full" style={{ maxWidth: "var(--container-max)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ minHeight: "100vh", padding: "120px 0" }}>
            {/* Left: text */}
            <div>
              <h1 style={{ marginBottom: "24px" }}>
                Know yourself.{" "}
                <span style={{ color: "var(--radiant-gold)" }}>Completely.</span>
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: 400,
                  fontSize: "clamp(18px, 2vw, 22px)",
                  color: "var(--ice-silver)",
                  maxWidth: "480px",
                  lineHeight: 1.5,
                  marginBottom: "16px",
                }}
              >
                Your genome and your microbiome — read together for the first time.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: 400,
                  fontSize: "17px",
                  color: "var(--text-muted-dark)",
                  maxWidth: "480px",
                  lineHeight: 1.6,
                  marginBottom: "48px",
                }}
              >
                Ōma integrates your genetic blueprint with your living biology to reveal what no single test ever could.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/contact" className="btn-primary">
                  Join the Waitlist
                </Link>
                <Link href="/science" className="btn-secondary">
                  See the Science
                </Link>
              </div>
            </div>

            {/* Right: network fills via canvas */}
            <div className="hidden lg:block" />
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ==================== 2. TRUST BAR ==================== */}
      <section
        style={{
          padding: "40px 20px",
          backgroundColor: "var(--void-black)",
          borderTop: "1px solid rgba(245,166,35,0.15)",
        }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0"
          style={{ maxWidth: "var(--container-max)" }}
        >
          {[
            "Built by the creators of Opus-23 & GI-MAP",
            "15+ years genomic research",
            "Trusted by 1,000+ practitioners",
          ].map((text, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && (
                <span
                  className="hidden md:inline mx-6"
                  style={{ color: "var(--radiant-gold)", fontSize: "8px" }}
                >
                  ·
                </span>
              )}
              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "rgba(138,148,166,0.6)",
                  letterSpacing: "0.02em",
                  textAlign: "center",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== 3. THE PROBLEM (LIGHT) ==================== */}
      <section className="section-light" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px", color: "var(--radiant-gold)" }}>
              The Problem
            </p>
            <h2 style={{ maxWidth: "800px", marginBottom: "48px" }}>
              Half the picture isn&apos;t a picture.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ maxWidth: "var(--content-max)", marginBottom: "64px" }}>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)", marginBottom: "24px" }}>
                Genomics tells you what&apos;s written in your code. Microbiome testing tells you what&apos;s living in your gut. But no one connects the two.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)", marginBottom: "24px" }}>
                Your DNA determines how you methylate folate. Your gut bacteria determine whether you produce it. Your genome predicts detox capacity. Your microbiome decides whether those pathways actually fire.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)", marginBottom: "24px" }}>
                Two systems. Infinite interactions. Zero integration.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--text-secondary-light)", fontWeight: 600 }}>
                Until now.
              </p>
            </div>
          </ScrollReveal>

          {/* Two cards */}
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card accent-blue" style={{ background: "var(--void-black)", padding: "48px" }}>
                <div style={{ width: "100%", height: "2px", background: "var(--electric-blue)", marginBottom: "24px" }} />
                <p style={{ fontFamily: "var(--font-primary)", fontWeight: 700, fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--electric-blue)", marginBottom: "16px" }}>
                  Genomics
                </p>
                <p style={{ color: "var(--ice-silver)", lineHeight: 1.6, fontSize: "16px" }}>
                  SNPs, methylation variants, detox pathways, neurotransmitter metabolism. Powerful — but incomplete without knowing what your gut is doing to those pathways.
                </p>
              </div>
              <div className="card accent-green" style={{ background: "var(--void-black)", padding: "48px" }}>
                <div style={{ width: "100%", height: "2px", background: "var(--signal-green)", marginBottom: "24px" }} />
                <p style={{ fontFamily: "var(--font-primary)", fontWeight: 700, fontSize: "14px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--signal-green)", marginBottom: "16px" }}>
                  Microbiome
                </p>
                <p style={{ color: "var(--ice-silver)", lineHeight: 1.6, fontSize: "16px" }}>
                  GI-MAP, diversity scores, pathogen levels, commensal populations. Powerful — but incomplete without knowing which genetic variants shape the terrain.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Broken link visual + stat */}
          <ScrollReveal delay={400}>
            <div className="text-center" style={{ marginTop: "64px" }}>
              <span style={{ fontSize: "32px", color: "rgba(245,166,35,0.3)" }}>╳</span>
              <p style={{ marginTop: "24px" }}>
                <span style={{ fontFamily: "var(--font-primary)", fontWeight: 800, fontSize: "80px", color: "var(--radiant-gold)", lineHeight: 1 }}>97%</span>
              </p>
              <p style={{ fontFamily: "var(--font-primary)", fontSize: "20px", color: "var(--text-secondary-light)", marginTop: "8px" }}>
                of practitioners cross-reference these results manually — or not at all.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== 4. THE SOLUTION (DARK) ==================== */}
      <section className="section-dark" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px" }}>What Ōma Reveals</p>
            <h2 style={{ maxWidth: "700px", marginBottom: "48px" }}>
              Two datasets. One truth.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ maxWidth: "var(--content-max)", marginBottom: "80px" }}>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)", marginBottom: "24px" }}>
                Ōma is the first platform to read your genome and microbiome as one integrated biological system.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)", marginBottom: "24px" }}>
                We map 3,500+ SNPs against your quantitative gut ecology across every major pathway — methylation, detox, immune, neurotransmitter, metabolic. We find the interactions that single-test analysis can&apos;t see.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)", marginBottom: "24px" }}>
                Your MTHFR status isn&apos;t just about folate. It determines stomach acid, glutathione, and gut oxidative stress — which selects for pathogenic bacteria. Meanwhile, your gut bacteria produce the methylation cofactors your DNA variants demand.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)", fontWeight: 600 }}>
                One system. Not two. Ōma reads it that way.
              </p>
            </div>
          </ScrollReveal>

          {/* Convergence visualization */}
          <ScrollReveal delay={300}>
            <ConvergenceDiagram />
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== 5. HOW IT WORKS (DARK) ==================== */}
      <section className="section-dark" style={{ padding: "160px 20px 200px" }}>
        {/* Thin separator */}
        <div style={{ width: "120px", height: "1px", background: "rgba(245,166,35,0.15)", margin: "0 auto 160px" }} />

        <div className="mx-auto" style={{ maxWidth: "var(--container-max)" }}>
          <ScrollReveal>
            <div className="text-center" style={{ marginBottom: "80px" }}>
              <p className="section-label" style={{ marginBottom: "16px" }}>Three Steps</p>
              <h2 style={{ maxWidth: "700px", margin: "0 auto" }}>
                From raw data to personalized action.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                step: "01",
                title: "Spit. Swab. Done.",
                label: "Test",
                body: "Order your Ōma kit. We send GI-MAP (the gold-standard gut test) and Gene Metrics genomic testing — direct to your door. One kit. Two datasets.",
                sub: "We provide tests at cost. Because knowing your biology shouldn't require a luxury budget.",
                color: "var(--electric-blue)",
              },
              {
                step: "02",
                title: "See what no one else sees.",
                label: "Decode",
                body: "Our engine maps your genome against your microbiome across every major pathway. We find the interactions that single-test analysis misses — the compounded vulnerabilities, the hidden strengths, the complete picture.",
                sub: "Every customer gets a full analysis portal — free. Diet insights. Lifestyle guidance. Your biology, decoded. No charge. Because you should know what's happening inside your body.",
                color: "var(--radiant-gold)",
              },
              {
                step: "03",
                title: "Intelligence becomes action.",
                label: "Act",
                body: "Insights are only valuable if they change what you do. Ōma translates your integrated analysis into precise, personalized protocols — including custom-formulated daily supplement packets built from your data, not generic recommendations.",
                sub: "Your genome says what you need. Your microbiome says how to deliver it. Your Ōma protocol addresses both.",
                color: "var(--signal-green)",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div
                  style={{
                    padding: "60px 48px",
                    borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    height: "100%",
                  }}
                >
                  <p style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    color: item.color,
                    marginBottom: "12px",
                    letterSpacing: "0.05em",
                  }}>
                    {item.step} — {item.label}
                  </p>
                  <h3 style={{ color: "var(--pure-white)", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "20px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--ice-silver)", lineHeight: 1.7, fontSize: "17px", marginBottom: "16px" }}>
                    {item.body}
                  </p>
                  <p style={{ color: "var(--text-muted-dark)", lineHeight: 1.7, fontSize: "15px" }}>
                    {item.sub}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center" style={{ marginTop: "64px" }}>
              <Link href="/contact" className="btn-primary">
                Join the Waitlist
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== 6. SUPPLEMENTS — DOWNSTREAM (DARK) ==================== */}
      <section className="section-dark" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <ScrollReveal>
              <div>
                <p className="section-label" style={{ marginBottom: "16px" }}>Your Protocol</p>
                <h2 style={{ marginBottom: "24px", fontSize: "clamp(36px, 5vw, 80px)" }}>
                  Insight becomes action.
                </h2>
                <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)", marginBottom: "16px" }}>
                  Personalized AM and PM supplement packets — formulated from your genomic and microbiome data. Not a generic multivitamin. Your methylation pathways, detox capacity, gut ecology — translated into precisely what your body needs.
                </p>
                <p style={{ fontSize: "20px", lineHeight: 1.7, color: "var(--ice-silver)" }}>
                  Delivered monthly. Adjusted as your biology evolves.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: packets */}
            <ScrollReveal delay={300}>
              <div className="flex justify-center items-end gap-[-20px]" style={{ position: "relative" }}>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <SupplementPacket variant="am" />
                  {/* Gold glow */}
                  <div style={{ position: "absolute", bottom: "-40px", left: "50%", transform: "translateX(-50%)", width: "200px", height: "100px", background: "radial-gradient(ellipse, rgba(245,166,35,0.15) 0%, transparent 60%)", pointerEvents: "none" }} />
                </div>
                <div style={{ position: "relative", zIndex: 1, marginLeft: "-20px", marginBottom: "-20px" }}>
                  <SupplementPacket variant="pm" />
                  {/* Blue glow */}
                  <div style={{ position: "absolute", bottom: "-40px", left: "50%", transform: "translateX(-50%)", width: "200px", height: "100px", background: "radial-gradient(ellipse, rgba(0,102,255,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Formula Preview sub-section */}
          <ScrollReveal delay={400}>
            <div style={{ marginTop: "120px" }}>
              <FormulaPreview />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== 7. STATS / PROOF (LIGHT) ==================== */}
      <section className="section-light" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--container-max)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <StatCounter
              target={3500}
              suffix="+"
              color="var(--void-black)"
              label="SNPs Analyzed"
              description="The deepest genomic library in functional medicine."
            />
            <StatCounter
              target={50}
              suffix="+"
              color="var(--void-black)"
              label="Interaction Pathways"
              description="Where genome meets microbiome at the pathway level."
            />
            <StatCounter
              target={15}
              suffix="+"
              color="var(--void-black)"
              label="Years Combined Research"
              description="Built by the scientists behind Opus-23 & GI-MAP."
            />
          </div>
        </div>
      </section>

      {/* ==================== 8. TEAM (LIGHT) ==================== */}
      <section className="section-light" style={{ padding: "var(--section-pad) 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
          <ScrollReveal>
            <p className="section-label" style={{ marginBottom: "16px", color: "var(--radiant-gold)" }}>The Team</p>
            <h2 style={{ marginBottom: "48px", fontSize: "clamp(40px, 5vw, 64px)" }}>
              They didn&apos;t study these fields. They built the tools that defined them.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-primary)", fontWeight: 700, fontSize: "20px", color: "var(--void-black)", marginBottom: "8px" }}>
                  Val Prisecaru, MS
                </p>
                <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                  Co-developed Opus-23 — the most comprehensive genomics interpretation engine in functional medicine. 3,500+ SNPs. 12,000+ gene-agent associations. Two decades translating genetic data into clinical insight.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-primary)", fontWeight: 700, fontSize: "20px", color: "var(--void-black)", marginBottom: "8px" }}>
                  Jeff Ingersoll
                </p>
                <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                  President of Diagnostic Solutions Laboratory, creators of GI-MAP — the quantitative PCR stool test that set the benchmark for microbiome assessment worldwide.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-primary)", fontWeight: 700, fontSize: "20px", color: "var(--void-black)", marginBottom: "8px" }}>
                  Sean Emery
                </p>
                <p style={{ fontSize: "18px", lineHeight: 1.7, color: "var(--text-secondary-light)" }}>
                  Built and operates the Functional Medicine Alliance practitioner network. Distribution, strategy, and the bridge between science and scale.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== 9. FINAL CTA (DARK, 100vh) ==================== */}
      <section
        className="section-dark flex items-center justify-center"
        style={{
          minHeight: "100vh",
          padding: "var(--section-pad) 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(245,166,35,0.08) 0%, rgba(0,102,255,0.05) 40%, transparent 65%)",
          }}
        />

        <div className="relative z-10 text-center" style={{ maxWidth: "700px" }}>
          <ScrollReveal>
            <h2
              style={{
                fontSize: "clamp(48px, 7vw, 96px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                marginBottom: "24px",
              }}
            >
              The complete biological picture.
            </h2>
            <p style={{
              fontSize: "22px",
              color: "var(--ice-silver)",
              maxWidth: "520px",
              margin: "0 auto 48px",
              lineHeight: 1.5,
            }}>
              Your genome. Your microbiome. Read together. For the first time. We&apos;re onboarding now. Spots are limited.
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "16px", padding: "24px 56px" }}>
              Join the Waitlist
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
