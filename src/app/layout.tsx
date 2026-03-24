import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MetaMinds Store — AI Products & Solutions",
  description:
    "Discover MetaMinds' suite of AI-powered products, tools, and solutions. From chatbots to automation pipelines — all in one place.",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "MetaMinds Store — AI Products & Solutions",
    description: "From productivity tools to outreach automation — discover the products built by MetaMinds.",
    type: "website",
    siteName: "MetaMinds Store",
    images: [{ url: "/logo.jpeg" }],
  },
  twitter: {
    card: "summary",
    title: "MetaMinds Store — AI Products & Solutions",
    description: "From productivity tools to outreach automation — discover the products built by MetaMinds.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} h-full`} style={{ scrollBehavior: "smooth" }}>
      <body className={`min-h-full antialiased bg-white text-[#1E2E69] ${sora.className}`}>
        {children}
      </body>
    </html>
  );
}
