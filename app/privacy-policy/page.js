"use client";

import Link from "next/link";

export default function PrivacyPolicyPage() {
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
          <Link href="/" style={{ fontSize: 13, color: "#2a5298", fontWeight: 600, textDecoration: "none" }}>
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <div style={{
        background: "linear-gradient(135deg, #0f2744 0%, #1e3a5f 60%, #2a5298 100%)",
        padding: "64px 24px", textAlign: "center"
      }}>
        <h1 style={{
          fontSize: 42, fontWeight: 900, color: "#fff",
          letterSpacing: "-1px", marginBottom: 16
        }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
          Last updated: May 19, 2025
        </p>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{
          background: "#fff", border: "1px solid #e2e8f0",
          borderRadius: 16, padding: "48px"
        }}>
          {[
            {
              title: "1. Introduction",
              content: "Welcome to NewYorkTaxConsultant.com. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website."
            },
            {
              title: "2. Information We Collect",
              content: "We collect information you provide directly to us, such as when you fill out our contact form including your name, email address, and message content. We also automatically collect certain information when you visit our site, including your IP address, browser type, pages visited, and time spent on pages."
            },
            {
              title: "3. How We Use Your Information",
              content: "We use the information we collect to respond to your inquiries and provide requested services, improve and optimize our website, understand how visitors use our site, and send you information you have requested. We do not sell your personal information to third parties."
            },
            {
              title: "4. Google AdSense and Cookies",
              content: "We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads."
            },
            {
              title: "5. Google Analytics",
              content: "We may use Google Analytics to analyze how visitors use our site. Google Analytics uses cookies to collect information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to our site. We use this information to improve our website."
            },
            {
              title: "6. Third Party Links",
              content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit."
            },
            {
              title: "7. Data Retention",
              content: "We retain personal information you provide through our contact form for as long as necessary to respond to your inquiry and for a reasonable period thereafter. You may request deletion of your personal information by contacting us."
            },
            {
              title: "8. Children's Privacy",
              content: "Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately."
            },
            {
              title: "9. Changes to This Policy",
              content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated date. Your continued use of the site after any changes constitutes your acceptance of the new policy."
            },
            {
              title: "10. Contact Us",
              content: "If you have any questions about this Privacy Policy or our privacy practices, please contact us through the contact form on our website at newyorktaxconsultant.com."
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: 36 }}>
              <h2 style={{
                fontSize: 18, fontWeight: 800, color: "#0f2744",
                marginBottom: 12
              }}>
                {section.title}
              </h2>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, margin: 0 }}>
                {section.content}
              </p>
            </div>
          ))}
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