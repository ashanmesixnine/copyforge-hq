import React, { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem" }}>CopyForge AI</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        High-converting product copy written with AI speed and human punch. Perfect for Etsy, Amazon, and Shopify.
      </p>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "2rem",
          maxWidth: "500px",
          margin: "2rem auto",
        }}
      >
        <h2>$15 Product Description Package</h2>
        <ul style={{ textAlign: "left", margin: "1rem 0" }}>
          <li>✅ AI-crafted, human-edited copy</li>
          <li>✅ SEO-friendly title, bullets, CTA</li>
          <li>✅ Delivered in 24–48 hours</li>
        </ul>  

      <script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<stripe-buy-button
  buy-button-id="buy_btn_1RkW0VDmpFCoXg9hDCe74JGW"
  publishable-key="pk_live_51RjJSmDmpFCoXg9hFkvNLDaqLKKtbDjZMcJ2tpzkMYnRcGanzdsNJYJgNkth8o4mQSTACwD3dn0En3tkV1EGEp8m00MvlVvUA5"
>
</stripe-buy-button>

       
        ></stripe-buy-button>
      </div>
    </div>
  );
}
