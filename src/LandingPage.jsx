import React, { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f7fafc, #e2e8f0, #cbd5e0)',
      fontFamily: 'sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '2rem',
        maxWidth: '640px',
        width: '100%',
        boxShadow: '0 15px 35px rgba(0,0,0,0.08)'
      }}>
        <h1 style={{
          fontSize: '2rem',
          textAlign: 'center',
          color: '#3B82F6',
          marginBottom: '0.5rem'
        }}>
          CopyForge AI
        </h1>

        <p style={{
          textAlign: 'center',
          color: '#333',
          fontSize: '1rem',
          marginBottom: '1.5rem'
        }}>
          Product descriptions that actually <strong>sell</strong>. AI-crafted and human-polished for Etsy, Amazon, and Shopify listings.
        </p>

        <section style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div><strong>🧠 AI + Human:</strong> Real polish. No generic junk.</div>
          <div><strong>🔍 SEO-Boosted:</strong> Titles, bullets, and CTAs that rank.</div>
          <div><strong>⚡ 24–48h Delivery:</strong> Fast turnaround. Sell sooner.</div>
        </section>

        <hr style={{ marginBottom: '1.5rem' }} />

        <section style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>📝 Example:</h3>
          <p><strong>Before:</strong> “Black t-shirt with funny saying for mechanics.”</p>
          <p><strong>After:</strong> “Built to outlast your shift — and your sarcasm. This ultra-soft black tee features a bold ‘I Void Warranties’ design printed front and center for the grease-hardened legends who fix the unfixable. Durable enough for work, bold enough for beer.”</p>
        </section>

        <div style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '1rem',
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          <h2 style={{ marginBottom: '0.5rem' }}>$15 Product Description</h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginBottom: '1rem',
            textAlign: 'left'
          }}>
            <li>✅ AI-crafted, human-edited copy</li>
            <li>✅ SEO-optimized for traffic & sales</li>
            <li>✅ Delivered in 24–48 hours</li>
          </ul>

          {/* Stripe Buy Button */}
          <stripe-buy-button
            buy-button-id="buy_btn_1RkWOVDmpFCoXg9hDCe74JGW"
            publishable-key="pk_live_51RjJSmDmpFCoXg9hFkvNL...VvUA5"
          ></stripe-buy-button>
        </div>

        <p style={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#DC2626',
          fontSize: '0.95rem'
        }}>
          🚨 Only 10 launch slots available at $15!
        </p>
      </div>
    </div>
  );
}
