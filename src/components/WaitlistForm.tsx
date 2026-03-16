"use client";

import { useState } from "react";

interface WaitlistFormProps {
  type: "individual" | "practitioner";
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px 0",
  border: "none",
  borderBottom: "2px solid #E5E7EB",
  background: "transparent",
  fontFamily: "var(--font-primary)",
  fontSize: "16px",
  color: "var(--void-black)",
  outline: "none",
  transition: "border-color 200ms ease",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-primary)",
  fontWeight: 600,
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#6B7280",
  marginBottom: "4px",
  display: "block",
};

export function WaitlistForm({ type }: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center" style={{ padding: "64px 0" }}>
        <p style={{ fontFamily: "var(--font-primary)", fontWeight: 800, fontSize: "48px", color: "var(--radiant-gold)", marginBottom: "16px" }}>
          Ō
        </p>
        <h3 style={{ color: "var(--void-black)", marginBottom: "8px" }}>You&apos;re on the list.</h3>
        <p style={{ color: "var(--text-muted-light)", fontSize: "16px" }}>
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      style={{ display: "flex", flexDirection: "column", gap: "32px" }}
    >
      <div>
        <label style={labelStyle}>Full Name</label>
        <input
          type="text"
          required
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderBottomColor = "var(--electric-blue)")}
          onBlur={(e) => (e.target.style.borderBottomColor = "#E5E7EB")}
        />
      </div>

      {type === "practitioner" && (
        <>
          <div>
            <label style={labelStyle}>Credentials</label>
            <select required style={{ ...inputStyle, cursor: "pointer" }}>
              <option value="">Select...</option>
              <option value="MD">MD</option>
              <option value="DO">DO</option>
              <option value="ND">ND</option>
              <option value="DC">DC</option>
              <option value="RD">RD</option>
              <option value="CNS">CNS</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>License Number / Certification ID</label>
            <input type="text" required style={inputStyle}
              onFocus={(e) => (e.target.style.borderBottomColor = "var(--electric-blue)")}
              onBlur={(e) => (e.target.style.borderBottomColor = "#E5E7EB")}
            />
          </div>
          <div>
            <label style={labelStyle}>Practice Name</label>
            <input type="text" required style={inputStyle}
              onFocus={(e) => (e.target.style.borderBottomColor = "var(--electric-blue)")}
              onBlur={(e) => (e.target.style.borderBottomColor = "#E5E7EB")}
            />
          </div>
        </>
      )}

      <div>
        <label style={labelStyle}>Email</label>
        <input type="email" required style={inputStyle}
          onFocus={(e) => (e.target.style.borderBottomColor = "var(--electric-blue)")}
          onBlur={(e) => (e.target.style.borderBottomColor = "#E5E7EB")}
        />
      </div>

      {type === "individual" && (
        <div>
          <label style={labelStyle}>State / Province</label>
          <input type="text" style={inputStyle}
            onFocus={(e) => (e.target.style.borderBottomColor = "var(--electric-blue)")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#E5E7EB")}
          />
        </div>
      )}

      {type === "practitioner" && (
        <div>
          <label style={labelStyle}>How do you currently use genomic and/or microbiome testing?</label>
          <textarea
            rows={3}
            style={{ ...inputStyle, resize: "vertical" }}
            onFocus={(e) => (e.target.style.borderBottomColor = "var(--electric-blue)")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#E5E7EB")}
          />
        </div>
      )}

      <div>
        <label style={labelStyle}>How did you hear about Ōma?</label>
        <select required style={{ ...inputStyle, cursor: "pointer" }}>
          <option value="">Select...</option>
          {type === "individual" ? (
            <>
              <option value="social">Social Media</option>
              <option value="podcast">Podcast</option>
              <option value="friend">Friend/Family</option>
              <option value="practitioner">Practitioner</option>
              <option value="search">Search</option>
              <option value="other">Other</option>
            </>
          ) : (
            <>
              <option value="fma">FMA</option>
              <option value="dsl">DSL/GI-MAP</option>
              <option value="conference">Conference</option>
              <option value="colleague">Colleague</option>
              <option value="podcast">Podcast</option>
              <option value="other">Other</option>
            </>
          )}
        </select>
      </div>

      <button
        type="submit"
        className="btn-primary"
        style={{ width: "100%", textAlign: "center" }}
      >
        {type === "individual" ? "Join the Waitlist" : "Apply for Access"}
      </button>
    </form>
  );
}
