import "./globals.css";

export const metadata = {
  title: "New York Tax Consultant | Expert Tax Help in NYC",
  description: "Professional tax consulting for NYC residents, freelancers, and businesses. Expert advice on tax planning, filing, and IRS issues.",
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