import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const InterFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rubin Johny",
  description: "Portfolio | 2024",
  openGraph: {
    title: "Rubin Johny",
    description:
      "Rubin's portfolio website. Take a look at the cool stuff I've build over the past 7 years as a software engineer",
    url: "https://rubin-johny.vercel.app/",
    siteName: "Rubin Johny's Portfolio",
    type: "website",
    images: [
      {
        url: "https://pinfkw3gneg9cnan.public.blob.vercel-storage.com/rubin-johny-cover-m6OkirOfexRe8Gp20CyDOwDDGnnuMI.jpg",
        secureUrl:
          "https://pinfkw3gneg9cnan.public.blob.vercel-storage.com/rubin-johny-cover-m6OkirOfexRe8Gp20CyDOwDDGnnuMI.jpg",
        width: 1200,
        height: 630,
        alt: "Preview image for Rubin Johny",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rubinjohny",
    title: "Rubin Johny",
    description:
      "Rubin's portfolio website. Take a look at the cool stuff I've build over the past 7 years as a software engineer",
    creator: "@rubinjohny",
    images: {
      url: "https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png",
      alt: "Preview image for Rubin Johny",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={InterFont.className}>
        <div id="root">
          <ThemeProvider enableSystem>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}
