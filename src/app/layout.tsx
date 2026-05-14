import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | David - Android Platform Engineer",
    default: "David | Android Platform Engineer & AOSP Developer",
  },
  description: "Personal website and technical blog of David, an Android Developer focused on AOSP customization, SystemUI, Android architecture, and performance optimization.",
  keywords: [
    "Android development",
    "AOSP",
    "SystemUI",
    "Android architecture",
    "Android debugging",
    "Binder IPC",
    "Android performance optimization",
    "Kotlin",
    "Java"
  ],
  authors: [{ name: "David" }],
  creator: "David",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://david-aosp.dev",
    siteName: "David - Android Platform Engineer",
    title: "David | Android Platform Engineer & AOSP Developer",
    description: "Android Developer focused on AOSP customization, SystemUI, Android architecture, and performance optimization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "David | Android Platform Engineer",
    description: "Android Developer focused on AOSP customization, SystemUI, Android architecture, and performance optimization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white/20">
        <Navigation />
        <main className="flex-1 mt-16 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
