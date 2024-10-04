import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const ArimoFont = Arimo({ subsets: ["latin"] });

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
      <body className={ArimoFont.className}>
        <ThemeProvider enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  );
}
