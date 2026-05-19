"use client";

import { useState } from "react";

export default function AdminPage() {
  const [topic, setTopic] = useState("");
  const [tag, setTag] = useState("NYC Taxes");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const tags = [
    "NYC Taxes", "Freelancers", "Real Estate",
    "Business", "IRS", "Tax Planning", "NY State"
  ];

  const generateArticle = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setResult(null);
    setCopied(false);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 4000,
          messages: [
            {
              role: "user",
              content: `You are an expert NYC tax writer. Write a comprehensive, accurate, and SEO-optimized tax article for the website NewYorkTaxConsultant.com.

Topic: ${topic}
Category: ${tag}

Return ONLY a valid JSON object with NO markdown, NO backticks, NO extra text. Just raw JSON like this:
{
  "slug": "url-friendly-slug-here",
  "tag": "${tag}",
  "title": "Article title here",
  "date": "May 19, 2025",
  "readTime": "X min read",
  "excerpt": "One compelling sentence summary of the article.",
  "content": "Full article content here using ## for section headings and double newlines between paragraphs"
}

Requirements:
- Title must be compelling and SEO-optimized
- Excerpt must be one strong sentence under 160 characters
- Content must be 1500-2000 words
- Use ## before each section heading
- Separate all paragraphs and headings with a blank line
- Include 6-8 detailed sections
- Focus on NYC-specific tax information
- Be accurate and informative
- Do not include the disclaimer in the content`
            }
          ]
        })
      });

      const data = await response.json();
      const text = data.content[0].text.trim();
      const parsed = JSON.parse(text);
      setResult(parsed);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Check the console for details.");
    }

    setLoading(false);
  };

  const generatePostCode = () => {
    if (!result) return "";
    return `  {
    slug: "${result.slug}",
    tag: "${result.tag}",
    title: "${result.title}",
    date: "${result.date}",
    readTime: "${result.readTime}",
    excerpt: "${result.excerpt}",
    content: \`
${result.content}
    \`
  },`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatePostCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", background: "#f8fafc", minHeight: "100vh" }}>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #0f2744, #1e3a5f)",
        padding: "32px 24px"
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div style={{
              width: 34, height: 34, background: "rgba(255,255,255,0.15)",
              borderRadius: 8, display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 16
            }}>⚡</div>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: "#fff", margin: 0 }}>
              AI Article Generator
            </h1>
          </div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: 0 }}>
            Generate SEO-optimized NYC tax articles instantly with Claude AI
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px" }}>

        {/* INPUT CARD */}
        <div style={{
          background: "#fff", border: "1px solid #e2e8f0",
          borderRadius: 16, padding: "32px", marginBottom: 24
        }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0f2744", marginBottom: 20 }}>
            Generate New Article
          </h2>

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#64748b", display: "block", marginBottom: 6 }}>
              ARTICLE TOPIC
            </label>
            <input
              type="text"
              value={topic}
              onChange={e => setTopic(e.target.value)}
              onKeyDown={e => e.key === "Enter" && generateArticle()}
              placeholder="e.g. How to reduce NYC income tax as a remote worker"
              style={{
                width: "100%", border: "1px solid #e2e8f0", borderRadius: 10,
                padding: "13px 16px", fontSize: 14, outline: "none",
                boxSizing: "border-box", fontFamily: "inherit", color: "#1e293b",
                background: "#f8fafc"
              }}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#64748b", display: "block", marginBottom: 8 }}>
              CATEGORY
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tags.map(t => (
                <button key={t} onClick={() => setTag(t)} style={{
                  padding: "7px 16px", borderRadius: 20, fontSize: 12, fontWeight: 600,
                  cursor: "pointer", border: "1.5px solid",
                  borderColor: tag === t ? "#0f2744" : "#e2e8f0",
                  background: tag === t ? "#0f2744" : "#fff",
                  color: tag === t ? "#fff" : "#64748b",
                  transition: "all 0.15s", fontFamily: "inherit"
                }}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generateArticle}
            disabled={loading || !topic.trim()}
            style={{
              width: "100%", background: loading ? "#94a3b8" : "#0f2744",
              color: "#fff", fontSize: 14, fontWeight: 700,
              padding: "14px", borderRadius: 10, border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              fontFamily: "inherit", transition: "background 0.2s"
            }}>
            {loading ? "✨ Generating your article..." : "⚡ Generate Article"}
          </button>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div style={{
            background: "#fff", border: "1px solid #e2e8f0",
            borderRadius: 16, padding: "48px 32px", textAlign: "center"
          }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>✨</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f2744", marginBottom: 8 }}>
              Writing your article...
            </h3>
            <p style={{ fontSize: 14, color: "#94a3b8" }}>
              Claude is researching and writing a full SEO-optimized article. This takes about 15 seconds.
            </p>
          </div>
        )}

        {/* RESULT */}
        {result && !loading && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* PREVIEW CARD */}
            <div style={{
              background: "#fff", border: "1px solid #e2e8f0",
              borderRadius: 16, overflow: "hidden"
            }}>
              <div style={{ height: 4, background: "linear-gradient(90deg, #0f2744, #2a5298)" }} />
              <div style={{ padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{
                    background: "#eef2ff", color: "#2a5298", fontSize: 10,
                    fontWeight: 700, padding: "4px 10px", borderRadius: 6,
                    textTransform: "uppercase", letterSpacing: 0.5
                  }}>
                    {result.tag}
                  </span>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>{result.date}</span>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>· {result.readTime}</span>
                </div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0f2744", marginBottom: 10, letterSpacing: "-0.3px" }}>
                  {result.title}
                </h2>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 16 }}>
                  {result.excerpt}
                </p>
                <div style={{
                  background: "#f8fafc", borderRadius: 8,
                  padding: "12px 16px", fontSize: 12,
                  color: "#64748b", fontFamily: "monospace"
                }}>
                  /blog/{result.slug}
                </div>
              </div>
            </div>

            {/* CONTENT PREVIEW */}
            <div style={{
              background: "#fff", border: "1px solid #e2e8f0",
              borderRadius: 16, padding: "28px 32px"
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f2744", marginBottom: 16 }}>
                Article Content Preview
              </h3>
              <div style={{
                background: "#f8fafc", borderRadius: 10,
                padding: "20px", maxHeight: 300,
                overflowY: "auto", fontSize: 13,
                color: "#475569", lineHeight: 1.7,
                whiteSpace: "pre-wrap", fontFamily: "inherit"
              }}>
                {result.content}
              </div>
            </div>

            {/* CODE TO COPY */}
            <div style={{
              background: "#0f2744", borderRadius: 16, padding: "28px 32px"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0 }}>
                  Add to posts.js
                </h3>
                <button onClick={handleCopy} style={{
                  background: copied ? "#10b981" : "rgba(255,255,255,0.15)",
                  color: "#fff", fontSize: 12, fontWeight: 600,
                  padding: "8px 18px", borderRadius: 8, border: "none",
                  cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s"
                }}>
                  {copied ? "✅ Copied!" : "📋 Copy Code"}
                </button>
              </div>
              <div style={{
                background: "rgba(0,0,0,0.3)", borderRadius: 10,
                padding: "16px", fontSize: 11, color: "#93c5fd",
                fontFamily: "monospace", maxHeight: 200,
                overflowY: "auto", whiteSpace: "pre-wrap", lineHeight: 1.6
              }}>
                {generatePostCode()}
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 12, margin: "12px 0 0" }}>
                Copy this code and paste it inside the array in app/blog/posts.js before the last closing bracket.
              </p>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}