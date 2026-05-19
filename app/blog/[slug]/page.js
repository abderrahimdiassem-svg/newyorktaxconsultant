"use client";

import { posts } from "../posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function ArticlePage({ params }) {
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const blocks = post.content.trim().split(/\n\s*\n/).filter(b => b.trim() !== "");

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#fff", minHeight: "100vh" }}>

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
          <Link href="/blog" style={{
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 13, color: "#2a5298", fontWeight: 600, textDecoration: "none"
          }}>
            ← All Articles
          </Link>
        </div>
      </nav>

      {/* HERO BANNER */}
      <div style={{
        background: "linear-gradient(135deg, #0f2744 0%, #1e3a5f 60%, #2a5298 100%)",
        padding: "52px 24px 48px"
      }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{
              background: "rgba(255,255,255,0.15)",
              color: "#fff", fontSize: 10, fontWeight: 700,
              padding: "5px 12px", borderRadius: 6,
              textTransform: "uppercase", letterSpacing: 1
            }}>
              {post.tag}
            </span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{post.date}</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>·</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{post.readTime}</span>
          </div>
          <h1 style={{
            fontSize: 40, fontWeight: 900, color: "#fff",
            lineHeight: 1.2, marginBottom: 20, letterSpacing: "-1px"
          }}>
            {post.title}
          </h1>
          <p style={{
            fontSize: 18, color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7, maxWidth: 680
          }}>
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "48px 24px" }}>

        {/* DISCLAIMER */}
        <div style={{
          background: "#fffbeb",
          border: "1px solid #fcd34d",
          borderLeft: "4px solid #f59e0b",
          borderRadius: 10,
          padding: "14px 18px",
          marginBottom: 36,
          display: "flex",
          gap: 12,
          alignItems: "flex-start"
        }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>⚠️</span>
          <p style={{
            fontSize: 13, color: "#92400e",
            lineHeight: 1.6, margin: 0, fontWeight: 500
          }}>
            <strong>Disclaimer:</strong> This article is for general informational purposes only and does not constitute professional tax or legal advice. Tax laws change frequently and vary by individual circumstance. Always consult a qualified tax professional before making financial decisions.
          </p>
        </div>

        {/* TOP AD */}
        <div style={{
          background: "#f8fafc", border: "1px dashed #cbd5e1",
          borderRadius: 10, height: 80, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: 11, color: "#94a3b8", fontWeight: 500,
          marginBottom: 44, letterSpacing: 1
        }}>
          ADVERTISEMENT
        </div>

        {/* CONTENT BLOCKS */}
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {blocks.map((block, i) => {
            const clean = block.trim();
            if (clean.startsWith("## ")) {
              return (
                <div key={i} style={{ marginTop: 44, marginBottom: 16 }}>
                  <div style={{
                    width: 36, height: 3,
                    background: "linear-gradient(90deg, #0f2744, #2a5298)",
                    borderRadius: 2, marginBottom: 12
                  }} />
                  <h2 style={{
                    fontSize: 24, fontWeight: 800, color: "#0f2744",
                    letterSpacing: "-0.4px", lineHeight: 1.3
                  }}>
                    {clean.replace("## ", "")}
                  </h2>
                </div>
              );
            }
            return (
              <p key={i} style={{
                fontSize: 17, color: "#374151",
                lineHeight: 1.85, marginBottom: 22,
                letterSpacing: "-0.1px"
              }}>
                {clean}
              </p>
            );
          })}
        </div>

        {/* BOTTOM AD */}
        <div style={{
          background: "#f8fafc", border: "1px dashed #cbd5e1",
          borderRadius: 10, height: 80, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: 11, color: "#94a3b8", fontWeight: 500,
          margin: "48px 0", letterSpacing: 1
        }}>
          ADVERTISEMENT
        </div>

        {/* MORE ARTICLES */}
        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 40, marginBottom: 48 }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0f2744", marginBottom: 20 }}>
            More Articles
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {posts.filter(p => p.slug !== slug).slice(0, 3).map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "#f8fafc", border: "1px solid #e2e8f0",
                  borderRadius: 12, padding: "16px 20px",
                  display: "flex", justifyContent: "space-between", alignItems: "center"
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "#f1f5f9"}
                  onMouseLeave={e => e.currentTarget.style.background = "#f8fafc"}>
                  <div>
                    <span style={{
                      background: "#eef2ff", color: "#2a5298",
                      fontSize: 10, fontWeight: 700, padding: "3px 8px",
                      borderRadius: 4, textTransform: "uppercase",
                      letterSpacing: 0.5, marginBottom: 6, display: "inline-block"
                    }}>
                      {related.tag}
                    </span>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0f2744", margin: 0 }}>
                      {related.title}
                    </p>
                  </div>
                  <span style={{ fontSize: 18, color: "#94a3b8", marginLeft: 16 }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: "linear-gradient(135deg, #0f2744, #1e3a5f)",
          borderRadius: 16, padding: "44px 36px", textAlign: "center"
        }}>
          <div style={{
            width: 48, height: 48, background: "rgba(255,255,255,0.1)",
            borderRadius: 12, display: "flex", alignItems: "center",
            justifyContent: "center", margin: "0 auto 16px", fontSize: 22
          }}>💼</div>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 10 }}>
            Need personalized tax help?
          </h3>
          <p style={{
            fontSize: 15, color: "rgba(255,255,255,0.6)",
            marginBottom: 28, maxWidth: 400, margin: "0 auto 28px"
          }}>
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
          © 2025 NewYorkTaxConsultant.com · All rights reserved · Not a substitute for professional tax advice
        </p>
      </footer>

    </main>
  );
}