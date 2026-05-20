import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.newyorktaxconsultant.com"),
  title: {
    default: "New York Tax Consultant | Expert Tax Help in NYC",
    template: "%s | NY Tax Consultant",
  },
  description: "Professional tax consulting for NYC residents, freelancers, and businesses. Expert advice on tax planning, filing, and IRS issues.",
  verification: {
    google: "F7XlEZSwydkNFbmj2CdIeaReY08Dk7k3tfIuNhN15xs",
  },
  keywords: ["NYC tax consultant", "New York tax help", "NYC tax filing", "New York City taxes", "NYC CPA", "tax planning New York"],
  authors: [{ name: "NY Tax Consultant" }],
  creator: "NY Tax Consultant",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.newyorktaxconsultant.com",
    siteName: "NY Tax Consultant",
    title: "New York Tax Consultant | Expert Tax Help in NYC",
    description: "Professional tax consulting for NYC residents, freelancers, and businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NY Tax Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New York Tax Consultant | Expert Tax Help in NYC",
    description: "Professional tax consulting for NYC residents, freelancers, and businesses.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}