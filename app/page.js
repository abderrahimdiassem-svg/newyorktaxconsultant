"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* NAVIGATION */}
      <nav style={{
        background: "#fff",
        borderBottom: "1px solid #e2e8f0",
        padding: "14px 24px",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 34, height: 34, background: "#0f2744",
              borderRadius: 8, display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 11, fontWeight: 700,
              color: "#fff", letterSpacing: 0.5
            }}>NY</div>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#0f2744", letterSpacing: "-0.3px" }}>
              NY Tax Consultant
            </span>
          </div>
          <div style={{ display: "flex", gap: 32, fontSize: 13, fontWeight: 500, color: "#64748b" }}>
            {["Services", "About", "Tax Tips", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}
                style={{ textDecoration: "none", color: "#64748b", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#0f2744"}
                onMouseLeave={e => e.target.style.color = "#64748b"}>
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" style={{
            background: "#0f2744", color: "#fff", fontSize: 13,
            fontWeight: 600, padding: "9px 20px", borderRadius: 8,
            textDecoration: "none", transition: "background 0.2s"
          }}
            onMouseEnter={e => e.target.style.background = "#1e3a5f"}
            onMouseLeave={e => e.target.style.background = "#0f2744"}>
            Free Consultation
          </a>
        </div>
      </nav>

      {/* HERO */}
      {/* HERO */}
<section style={{
  position: "relative",
  padding: "110px 24px",
  textAlign: "center",
  backgroundImage: "url('https://images.unsplash.com/photo-1522083165195-3424ed129620?w=1600&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  overflow: "hidden"
}}>
  {/* Dark overlay */}
  <div style={{
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(15,39,68,0.75) 0%, rgba(30,58,95,0.65) 60%, rgba(42,82,152,0.60) 100%)",
    zIndex: 0
  }} />
  <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 24, padding: "5px 16px", marginBottom: 24
          }}>
            <div style={{ width: 7, height: 7, background: "#4ade80", borderRadius: "50%" }} />
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>
              New York City Tax Experts
            </span>
          </div>
          <h1 style={{
            fontSize: 52, fontWeight: 900, color: "#fff",
            lineHeight: 1.15, marginBottom: 8, letterSpacing: "-1.5px"
          }}>
            Maximize Your Refund.
          </h1>
          <h1 style={{
            fontSize: 52, fontWeight: 900,
            color: "#93c5fd", lineHeight: 1.15,
            marginBottom: 24, letterSpacing: "-1.5px"
          }}>
            Minimize Your Stress.
          </h1>
          <p style={{
            fontSize: 17, color: "rgba(255,255,255,0.7)",
            maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.7
          }}>
            Expert tax guidance for NYC residents, freelancers, small businesses,
            and real estate investors. We know New York tax law inside and out.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" style={{
  background: "#fff",
  color: "#0f2744",
  fontSize: 14,
  fontWeight: 700,
  padding: "14px 32px",
  borderRadius: 10,
  textDecoration: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
}}>
  Get Free Consultation →
</a>
<Link href="/blog" style={{
  background: "rgba(255,255,255,0.12)",
  border: "1.5px solid rgba(255,255,255,0.5)",
  color: "#fff",
  fontSize: 14,
  fontWeight: 600,
  padding: "14px 32px",
  borderRadius: 10,
  textDecoration: "none",
  backdropFilter: "blur(4px)"
}}>
  Read Tax Tips
</Link>
            </div>
      </div>
      </div>
    </section>

      {/* TRUST BAR */}
      <section style={{
        background: "#fff",
        borderBottom: "1px solid #e2e8f0",
        padding: "28px 24px"
      }}>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          textAlign: "center", gap: 16
        }}>
          {[
            { number: "500+", label: "Clients Served" },
            { number: "15+", label: "Years Experience" },
            { number: "$2M+", label: "Taxes Saved" },
            { number: "100%", label: "IRS Compliant" },
          ].map((stat, i) => (
            <div key={i} style={{ padding: "8px 0" }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#0f2744", letterSpacing: "-0.5px" }}>
                {stat.number}
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4, fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "72px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 11, color: "#2a5298", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              What We Do
            </p>
            <h2 style={{ fontSize: 34, fontWeight: 900, color: "#0f2744", marginBottom: 10, letterSpacing: "-0.5px" }}>
              Our Services
            </h2>
            <p style={{ fontSize: 15, color: "#94a3b8", maxWidth: 480, margin: "0 auto" }}>
              Comprehensive tax solutions tailored for New Yorkers
            </p>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16
          }}>
            {[
              { icon: "📋", title: "Personal Tax Filing", desc: "Accurate, maximized returns for NYC residents including all state and city filings." },
              { icon: "🏢", title: "Business Tax Planning", desc: "Strategic planning for LLCs, S-Corps, and small businesses operating in New York." },
              { icon: "🏠", title: "Real Estate Tax", desc: "1031 exchanges, rental income, property tax appeals, and NYC real estate strategies." },
              { icon: "⚖️", title: "IRS Representation", desc: "Professional representation for audits, tax debt, or IRS notices." },
              { icon: "💼", title: "Freelancer & Self-Employed", desc: "Quarterly estimates, deductions, and filing for NYC freelancers and gig workers." },
              { icon: "📊", title: "Tax Planning Strategy", desc: "Year-round planning to reduce your tax burden legally and effectively." },
            ].map((s, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid #e2e8f0",
                borderRadius: 14, padding: "24px",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "default"
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.09)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                <div style={{
                  width: 44, height: 44, background: "#eef2ff",
                  borderRadius: 10, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 20, marginBottom: 16
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f2744", marginBottom: 8 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AD SLOT */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px 24px" }}>
        <div style={{
          background: "#f1f5f9", border: "2px dashed #cbd5e1",
          borderRadius: 12, height: 90, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: 12, color: "#94a3b8", fontWeight: 500
        }}>
          Advertisement
        </div>
      </div>

      {/* ARTICLES */}
      <section id="tax-tips" style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 11, color: "#2a5298", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Learn & Save
            </p>
            <h2 style={{ fontSize: 34, fontWeight: 900, color: "#0f2744", marginBottom: 10, letterSpacing: "-0.5px" }}>
              Free Tax Tips & Guides
            </h2>
            <p style={{ fontSize: 15, color: "#94a3b8", maxWidth: 480, margin: "0 auto" }}>
              Stay informed with the latest NYC and federal tax news
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { tag: "NYC Taxes", title: "How NYC Residents Can Reduce Their City Tax Bill in 2025", date: "May 10, 2025", slug: "nyc-residents-reduce-city-tax-2025" },
              { tag: "Freelancers", title: "Top 10 Tax Deductions Every NYC Freelancer Must Know", date: "April 28, 2025", slug: "top-10-deductions-nyc-freelancers" },
              { tag: "Real Estate", title: "NYC Property Tax Appeals: A Step-by-Step Guide", date: "April 15, 2025", slug: "nyc-property-tax-appeals-guide" },
            ].map((a, i) => (
              <Link key={i} href={`/blog/${a.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "#fff", border: "1px solid #e2e8f0",
                  borderRadius: 14, overflow: "hidden",
                  transition: "box-shadow 0.2s, transform 0.2s"
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.09)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}>
                  <div style={{ height: 4, background: "linear-gradient(90deg, #0f2744, #2a5298)" }} />
                  <div style={{ padding: "20px" }}>
                    <span style={{
                      display: "inline-block", background: "#eef2ff",
                      color: "#2a5298", fontSize: 10, fontWeight: 700,
                      padding: "4px 10px", borderRadius: 6,
                      textTransform: "uppercase", letterSpacing: 0.5,
                      marginBottom: 12
                    }}>
                      {a.tag}
                    </span>
                    <h3 style={{
                      fontSize: 14, fontWeight: 700, color: "#0f2744",
                      lineHeight: 1.5, marginBottom: 14
                    }}>
                      {a.title}
                    </h3>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 11, color: "#94a3b8" }}>{a.date}</span>
                      <span style={{ fontSize: 11, color: "#2a5298", fontWeight: 600 }}>Read more →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/blog" style={{
              display: "inline-block", border: "1.5px solid #0f2744",
              color: "#0f2744", fontSize: 13, fontWeight: 700,
              padding: "11px 28px", borderRadius: 8, textDecoration: "none"
            }}>
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: "#2a5298", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
              Get In Touch
            </p>
            <h2 style={{ fontSize: 34, fontWeight: 900, color: "#0f2744", marginBottom: 10, letterSpacing: "-0.5px" }}>
              Free Consultation
            </h2>
            <p style={{ fontSize: 15, color: "#94a3b8" }}>
              Talk to a real NYC tax expert. No obligation, no jargon.
            </p>
          </div>
          <div style={{
            background: "#f8fafc", border: "1px solid #e2e8f0",
            borderRadius: 16, padding: 32
          }}>
            {[
              { type: "text", placeholder: "Your Name" },
              { type: "email", placeholder: "Your Email" },
            ].map((field, i) => (
              <input key={i} type={field.type} placeholder={field.placeholder} style={{
                width: "100%", background: "#fff", border: "1px solid #e2e8f0",
                borderRadius: 10, padding: "13px 16px", fontSize: 13,
                marginBottom: 12, outline: "none", boxSizing: "border-box",
                fontFamily: "inherit", color: "#1e293b"
              }} />
            ))}
            <select style={{
              width: "100%", background: "#fff", border: "1px solid #e2e8f0",
              borderRadius: 10, padding: "13px 16px", fontSize: 13,
              marginBottom: 12, outline: "none", boxSizing: "border-box",
              fontFamily: "inherit", color: "#64748b"
            }}>
              <option>Select a Service</option>
              <option>Personal Tax Filing</option>
              <option>Business Tax Planning</option>
              <option>Real Estate Tax</option>
              <option>IRS Representation</option>
              <option>Freelancer Tax Help</option>
            </select>
            <textarea placeholder="Tell us about your tax situation..." rows={4} style={{
              width: "100%", background: "#fff", border: "1px solid #e2e8f0",
              borderRadius: 10, padding: "13px 16px", fontSize: 13,
              marginBottom: 16, outline: "none", boxSizing: "border-box",
              fontFamily: "inherit", resize: "none", color: "#1e293b"
            }} />
            <button style={{
              width: "100%", background: "#0f2744", color: "#fff",
              fontSize: 14, fontWeight: 700, padding: "14px",
              borderRadius: 10, border: "none", cursor: "pointer",
              fontFamily: "inherit", transition: "background 0.2s"
            }}
              onMouseEnter={e => e.target.style.background = "#1e3a5f"}
              onMouseLeave={e => e.target.style.background = "#0f2744"}>
              Send Message →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f2744", padding: "40px 24px" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 24
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <div style={{
                width: 28, height: 28, background: "#fff", borderRadius: 6,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 700, color: "#0f2744"
              }}>NY</div>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>NY Tax Consultant</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
              Serving New York City & the Tri-State Area
            </p>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {["Services", "Tax Tips", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} style={{
                color: "rgba(255,255,255,0.5)", fontSize: 13,
                textDecoration: "none", fontWeight: 500
              }}>
                {item}
              </a>
            ))}
          </div>
        </div>
        <div style={{
  maxWidth: 1100, margin: "28px auto 0",
  borderTop: "1px solid rgba(255,255,255,0.1)",
  paddingTop: 24, textAlign: "center",
  fontSize: 11, color: "rgba(255,255,255,0.3)"
}}>
  © 2025 NewYorkTaxConsultant.com · All rights reserved ·{" "}
  <Link href="/about" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
    About
  </Link>
  {" · "}
  <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
    Privacy Policy
  </Link>
</div>
      </footer>

    </main>
  );
}
