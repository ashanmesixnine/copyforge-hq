import React from 'react';

export default function LandingPage() {
  return (
    <div style={{
      background: 'linear-gradient(to bottom right, #f7fafc, #e2e8f0, #cbd5e0)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#3B82F6', marginBottom: '0.5rem' }}>CopyForge AI</h1>
        <p style={{ fontSize: '1rem', color: '#333', marginBottom: '1.5rem' }}>
          Product descriptions that actually <strong>sell</strong>. Custom-written copy for Etsy, Amazon, and Shopify sellers. Delivered fast. Priced to win.
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'left',
          marginBottom: '1.5rem',
          gap: '1rem'
        }}>
          <div>
            <h3>🧠 AI + Human</h3>
            <p>Real polish. No generic fluff.</p>
          </div>
          <div>
            <h3>🔍 SEO-Boosted</h3>
            <p>Ranking titles, bullets & CTA that convert.</p>
          </div>
          <div>
            <h3>⚡ 24–48h Delivery</h3>
            <p>Sell sooner, not later.</p>
          </div>
        </div>

        <hr style={{ margin: '1.5rem 0' }} />

        <div style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
          <h3>📝 Before & After Example:</h3>
          <p><strong>Before:</strong> “Cute mug for dog lovers.”</p>
          <p><strong>After:</strong> “Start every morning with a tail wag. This dishwasher-safe ceramic mug features a bold, full-wrap ‘Dog Mom AF’ graphic that shows your pack where you stand.”</p>
        </div>

        <div style={{
          background: '#f9fafb',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          <h2 style={{ marginBottom: '0.5rem' }}>$15 Product Description</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
            <li>✅ AI-crafted, human-edited copy</li>
            <li>✅ SEO-friendly title, bullets, CTA</li>
            <li>✅ Delivered in 24–48 hours</li>
          </ul>

          {/* Stripe Buy Button */}
          <stripe-buy-button
            buy-button-id="buy_btn_1RkWOVDmpFCoXg9hDCe74JGW"
            publishable-key="pk_live_51RjJSmDmpFCoXg9hFkvNL...VvUA5"
          ></stripe-buy-button>
        </div>

        <p style={{ color: 'red', fontWeight: 'bold' }}>
          🚨 Launch Special: Only 10 spots at $15!
        </p>
      </div>
    </div>
  );
}
