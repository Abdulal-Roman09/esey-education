import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Metadata
export const metadata = {
  title: "Esey Education - Learn Anytime, Anywhere",
  description:
    "Esey Education is an online course selling platform. Explore, learn, and grow with our curated courses.",
  keywords: [
    "online courses",
    "education",
    "next.js course platform",
    "shadcn ui",
    "react learning",
    "esey education",
  ],
  authors: [{ name: "Abdul Al Roman", url: "https://abdulalroman.vercel.app" }],
  creator: "Abdul Al Roman",
  publisher: "Esey Education",
  openGraph: {
    title: "Esey Education - Learn Anytime, Anywhere",
    description:
      "Buy and sell courses, track your progress, and manage learning easily with Esey Education.",
    url: "https://esey-education.vercel.app",
    siteName: "Esey Education",
    images: [
      {
        url: "https://esey-education.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Esey Education Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esey Education - Learn Anytime, Anywhere",
    description:
      "Esey Education is your go-to platform for online learning with modern UI and powerful features.",
    creator: "@abdulalroman",
    images: ["https://esey-education.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
