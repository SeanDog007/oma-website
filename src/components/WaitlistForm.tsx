"use client";

import { useState, type FormEvent } from "react";

const credentialOptions = [
  "MD",
  "DO",
  "ND",
  "DC",
  "RD",
  "CNS",
  "Other",
];

const referralOptions = [
  "Functional Medicine Alliance",
  "DSL / GI-MAP",
  "Conference",
  "Colleague",
  "Podcast",
  "Other",
];

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center py-16"
        style={{
          backgroundColor: "var(--card-light)",
          borderRadius: "var(--radius-subtle)",
          padding: "48px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "48px",
            color: "var(--obsidian-navy)",
            marginBottom: "16px",
          }}
        >
          Ō
        </span>
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "24px",
            color: "var(--obsidian-navy)",
            marginBottom: "8px",
          }}
        >
          You&apos;re on the list.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "var(--ash-silver)",
          }}
        >
          We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "var(--card-light)",
        borderRadius: "var(--radius-subtle)",
        padding: "48px",
      }}
    >
      <div className="space-y-7">
        {/* Full Name */}
        <FormField label="Full Name" name="fullName" type="text" required />

        {/* Email */}
        <FormField label="Email" name="email" type="email" required />

        {/* Credentials */}
        <div>
          <label
            htmlFor="credentials"
            style={{
              display: "block",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "var(--slate-graphite)",
              marginBottom: "8px",
            }}
          >
            Credentials
          </label>
          <select
            id="credentials"
            name="credentials"
            required
            style={{
              width: "100%",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "16px",
              color: "var(--obsidian-navy)",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid var(--ash-silver)",
              borderRadius: 0,
              padding: "12px 0",
              outline: "none",
              appearance: "none",
            }}
          >
            <option value="">Select credential</option>
            {credentialOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* License Number */}
        <FormField label="License Number / Certification ID" name="licenseNumber" type="text" required />

        {/* Practice Name */}
        <FormField label="Practice Name" name="practiceName" type="text" required />

        {/* Practice Location */}
        <FormField
          label="Practice Location (City, State/Province, Country)"
          name="practiceLocation"
          type="text"
          required
        />

        {/* Genomic Testing Usage */}
        <div>
          <label
            htmlFor="genomicUsage"
            style={{
              display: "block",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "var(--slate-graphite)",
              marginBottom: "8px",
            }}
          >
            How do you currently use genomic testing in your practice?
          </label>
          <textarea
            id="genomicUsage"
            name="genomicUsage"
            rows={3}
            required
            style={{
              width: "100%",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "16px",
              color: "var(--obsidian-navy)",
              backgroundColor: "transparent",
              border: "1px solid var(--ash-silver)",
              borderRadius: "var(--radius-subtle)",
              padding: "12px",
              outline: "none",
              resize: "vertical",
            }}
          />
        </div>

        {/* Microbiome Testing Usage */}
        <div>
          <label
            htmlFor="microbiomeUsage"
            style={{
              display: "block",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "var(--slate-graphite)",
              marginBottom: "8px",
            }}
          >
            How do you currently use microbiome testing in your practice?
          </label>
          <textarea
            id="microbiomeUsage"
            name="microbiomeUsage"
            rows={3}
            required
            style={{
              width: "100%",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "16px",
              color: "var(--obsidian-navy)",
              backgroundColor: "transparent",
              border: "1px solid var(--ash-silver)",
              borderRadius: "var(--radius-subtle)",
              padding: "12px",
              outline: "none",
              resize: "vertical",
            }}
          />
        </div>

        {/* Referral Source */}
        <div>
          <label
            htmlFor="referralSource"
            style={{
              display: "block",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "var(--slate-graphite)",
              marginBottom: "8px",
            }}
          >
            How did you hear about Ōma Analytics?
          </label>
          <select
            id="referralSource"
            name="referralSource"
            required
            style={{
              width: "100%",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "16px",
              color: "var(--obsidian-navy)",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid var(--ash-silver)",
              borderRadius: 0,
              padding: "12px 0",
              outline: "none",
              appearance: "none",
            }}
          >
            <option value="">Select option</option>
            {referralOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn-primary w-full mt-10"
        style={{ height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        Submit Application
      </button>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 300,
          fontSize: "13px",
          color: "var(--ash-silver)",
          marginTop: "16px",
          textAlign: "center",
        }}
      >
        Applications are reviewed within 5 business days. Early access practitioners receive priority
        onboarding and direct access to the founding team during the initial platform phase.
      </p>
    </form>
  );
}

function FormField({
  label,
  name,
  type,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        style={{
          display: "block",
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: "13px",
          letterSpacing: "0.06em",
          textTransform: "uppercase" as const,
          color: "var(--slate-graphite)",
          marginBottom: "8px",
        }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        style={{
          width: "100%",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: "16px",
          color: "var(--obsidian-navy)",
          backgroundColor: "transparent",
          border: "none",
          borderBottom: "1px solid var(--ash-silver)",
          borderRadius: 0,
          padding: "12px 0",
          outline: "none",
        }}
      />
    </div>
  );
}
