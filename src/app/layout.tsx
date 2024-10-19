import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const InterFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rubin Johny",
  description: "Portfolio for Rubin Johny | 2024",
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
