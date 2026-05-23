"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#f8fafc", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{
        background: "#fff", borderBottom: "1px solid #e2e8f0",
        padding: "14px 24px", position: "sticky", top: 0, zIndex: 50,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 34, height: 34, background: "#0f2744", borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700, color: "#fff"
            }}>NY</div>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#0f2744" }}>NY Tax Consultant</span>
          </Link>
          <Link href="/#contact" style={{
            background: "#0f2744", color: "#fff", fontSize: 13,
            fontWeight: 600, padding: "9px 20px", borderRadius: 8, textDecoration: "none"
          }}>
            Free Consultation
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg, #0f2744 0%, #1e3a5f 60%, #2a5298 100%)",
        padding: "64px 24px", textAlign: "center"
      }}>
        <p style={{
          fontSize: 11, color: "#93c5fd", fontWeight: 700,
          letterSpacing: 2, textTransform: "uppercase", marginBottom: 12
        }}>
          Who We Are
        </p>
        <h1 style={{
          fontSize: 42, fontWeight: 900, color: "#fff",
          letterSpacing: "-1px", marginBottom: 16
        }}>
          About NY Tax Consultant
        </h1>
        <p style={{
          fontSize: 17, color: "rgba(255,255,255,0.65)",
          maxWidth: 560, margin: "0 auto"
        }}>
          Your trusted source for NYC tax information, guidance, and professional consulting services.
        </p>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 24px" }}>

        {/* MISSION */}
        <div style={{
          background: "#fff", border: "1px solid #e2e8f0",
          borderRadius: 16, padding: "40px", marginBottom: 24
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f2744", marginBottom: 16 }}>
            Our Mission
          </h2>
          <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.8, marginBottom: 16 }}>
            NewYorkTaxConsultant.com was created with one mission: to make New York City tax information accessible, understandable, and actionable for every resident, freelancer, and business owner in the five boroughs and beyond.
          </p>
          <p style={{ fontSize: 16, color: "#475569", lineHeight: 1.8 }}>
            New York City has one of the most complex tax environments in the United States. Between federal, state, and city taxes — plus industry-specific rules for real estate, freelancers, and businesses — navigating it all can feel overwhelming. We break it down in plain English so you can make informed decisions about your finances.
          </p>
        </div>

        {/* WHAT WE COVER */}
        <div style={{
          background: "#fff", border: "1px solid #e2e8f0",
          borderRadius: 16, padding: "40px", marginBottom: 24
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f2744", marginBottom: 20 }}>
            What We Cover
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { icon: "📋", title: "Personal Tax Filing", desc: "NYC income tax, state returns, deductions and credits for individuals." },
              { icon: "🏢", title: "Business Taxes", desc: "LLCs, S-Corps, small business tax planning and NYC business tax." },
              { icon: "🏠", title: "Real Estate Tax", desc: "Property tax appeals, 1031 exchanges, rental income strategies." },
              { icon: "💼", title: "Freelancer Taxes", desc: "Self-employment tax, quarterly payments, gig worker deductions." },
              { icon: "⚖️", title: "IRS Issues", desc: "Audit representation, tax debt, IRS notices and resolutions." },
              { icon: "📊", title: "Tax Planning", desc: "Year-round strategies to legally minimize your tax burden." },
            ].map((item, i) => (
              <div key={i} style={{
                background: "#f8fafc", borderRadius: 12,
                padding: "20px", display: "flex", gap: 14
              }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f2744", marginBottom: 4 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DISCLAIMER */}
        <div style={{
          background: "#fffbeb", border: "1px solid #fcd34d",
          borderLeft: "4px solid #f59e0b", borderRadius: 10,
          padding: "20px 24px", marginBottom: 24
        }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: "#92400e", marginBottom: 8 }}>
            ⚠️ Important Disclaimer
          </h3>
          <p style={{ fontSize: 14, color: "#92400e", lineHeight: 1.7, margin: 0 }}>
            The content on NewYorkTaxConsultant.com is for general informational purposes only and does not constitute professional tax, legal, or financial advice. Tax laws change frequently and individual circumstances vary. Always consult a qualified tax professional before making financial decisions.
          </p>
        </div>

        {/* CONTACT CTA */}
        <div style={{
          background: "linear-gradient(135deg, #0f2744, #1e3a5f)",
          borderRadius: 16, padding: "44px 36px", textAlign: "center"
        }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 10 }}>
            Need personalized tax help?
          </h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", marginBottom: 28 }}>
            Talk to a real NYC tax expert. Free consultation, no obligation.
          </p>
          <Link href="/#contact" style={{
            display: "inline-block", background: "#fff", color: "#0f2744",
            fontWeight: 700, fontSize: 14, padding: "14px 32px",
            borderRadius: 10, textDecoration: "none"
          }}>
            Get Free Consultation →
          </Link>
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{ background: "#0f2744", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
          © 2025 NewYorkTaxConsultant.com · All rights reserved
        </p>
      </footer>

    </main>
  );
}