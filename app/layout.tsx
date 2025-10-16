import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import InteractiveBackground from "@/components/interactive-background";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { profile } from "@/data/profile";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.metaDescription,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.metaDescription,
    type: "website",
    locale: "es_ES"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.metaDescription
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <body className={`${sans.variable} h-full bg-background text-foreground antialiased`}>
        <InteractiveBackground>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </InteractiveBackground>
      </body>
    </html>
  );
}
