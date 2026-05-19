"use client";

import Link from "next/link";
import { posts } from "./posts";

export default function BlogPage() {
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
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Link href="/" style={{ fontSize: 13, color: "#64748b", fontWeight: 500, textDecoration: "none" }}>
              ← Back to Home
            </Link>
            <Link href="/#contact" style={{
              background: "#0f2744", color: "#fff", fontSize: 13,
              fontWeight: 600, padding: "9px 20px", borderRadius: 8, textDecoration: "none"
            }}>
              Free Consultation
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #0f2744 0%, #1e3a5f 60%, #2a5298 100%)",
        padding: "64px 32px", textAlign: "center"
      }}>
        <p style={{
          fontSize: 11, color: "#93c5fd", fontWeight: 700,
          letterSpacing: 2, textTransform: "uppercase", marginBottom: 12
        }}>
          Free Resources
        </p>
        <h1 style={{
          fontSize: 42, fontWeight: 900, color: "#fff",
          letterSpacing: "-1px", marginBottom: 12
        }}>
          Tax Tips & Guides
        </h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 480, margin: "0 auto" }}>
          Expert advice for NYC residents, freelancers, and business owners
        </p>
      </div>

      {/* POSTS */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "48px 32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#fff", border: "1px solid #e2e8f0",
                borderRadius: 14, padding: "28px 32px",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "pointer"
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.09)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{
                    background: "#eef2ff", color: "#2a5298", fontSize: 10,
                    fontWeight: 700, padding: "4px 10px", borderRadius: 6,
                    textTransform: "uppercase", letterSpacing: 0.5
                  }}>
                    {post.tag}
                  </span>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>{post.date}</span>
                  <span style={{ fontSize: 12, color: "#cbd5e1" }}>·</span>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>{post.readTime}</span>
                </div>
                <h2 style={{
                  fontSize: 20, fontWeight: 700, color: "#0f2744",
                  marginBottom: 10, letterSpacing: "-0.3px", lineHeight: 1.4
                }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 16 }}>
                  {post.excerpt}
                </p>
                <span style={{ fontSize: 13, color: "#2a5298", fontWeight: 600 }}>
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#0f2744", padding: "32px 24px", textAlign: "center", marginTop: 32 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <div style={{
            width: 28, height: 28, background: "#fff", borderRadius: 6,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 10, fontWeight: 700, color: "#0f2744"
          }}>NY</div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>NY Tax Consultant</span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
          © 2025 NewYorkTaxConsultant.com · All rights reserved
        </p>
      </footer>

    </main>
  );
}