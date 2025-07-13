import React from "react";

export default function LandingPage() {
  return (
    <div style={{ 
      textAlign: "center", 
      padding: "50px", 
      fontFamily: "Arial, sans-serif" 
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Welcome to CopyForge
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "40px", maxWidth: "600px", margin: "0 auto" }}>
        AI-powered copywriting, product descriptions, taglines, bios, and content on-demand. 
        One-click service – perfect for creators, resellers, and hustlers who need fire words fast.
      </p>

      <a
        href="https://buy.stripe.com/fZucN55n77zy2UJ7e02B202"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 32px",
          backgroundColor: "#6772e5",
          color: "#fff",
          fontWeight: "600",
          fontSize: "18px",
          borderRadius: "8px",
          textDecoration: "none",
          marginTop: "40px"
        }}
      >
        Pay Now – $20
      </a>

      <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "20px" }}>
        Instant access after payment. Questions? Hit us up.
      </p>
    </div>
  );
}
