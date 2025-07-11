import React from "react";

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem" }}>CopyForge AI</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        High-converting product copy written with AI speed and human punch. Perfect for Etsy, Amazon, and Shopify sellers who want to sell more gear, faster.
      </p>
      <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "2rem", maxWidth: "500px", margin: "2rem auto" }}>
        <h2>$15 Product Description Package</h2>
        <ul style={{ textAlign: "left", margin: "1rem 0" }}>
          <li>✅ AI-crafted, human-edited copy</li>
          <li>✅ SEO-friendly title, bullets, CTA</li>
          <li>✅ Delivered in 24–48 hours</li>
        </ul>
        <a href="https://buy.stripe.com/test_a1b2c3d4e5f6g7h8i9" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: "0.75rem 1.5rem", fontSize: "1rem", background: "#4f46e5", color: "#fff", border: "none", borderRadius: "4px" }}>
            Buy Now with Stripe
          </button>
        </a>
      </div>    import React, { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="landing-page">
      <h1>Welcome to CopyForge</h1>
      <p>Buy 20 Custom GPT Product Prompts</p>

      <stripe-buy-button
        buy-button-id="buy_btn_1RjjwLDmpFCoXg9hlgAGT3ZC"
        publishable-key="pk_live_51RjJSmDmpFCoXg9hFkvNLDaqLKKtbDjZMcJ2tpzkMYnRcGanzdsNJYJgNkth8o4mQSTACwD3dn0En3tkV1EGEp8m00MvlVvUA5">
      </stripe-buy-button>
    </div>
  );
}

export default LandingPage;


Add the Stripe code inside that <div> block:


      <p style={{ fontSize: "0.9rem", color: "#888" }}>
        Questions or bulk orders? Email <strong>copyforge@proton.me</strong>
      </p>
    </div>
  );
}

