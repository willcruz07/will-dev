import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
//<meta name="google-site-verification" content="_l7Ilx3tvQDwe_513YGRnNImpFUPCKIRlPR7bj3vIAA" />

export const metadata: Metadata = {
  title: "Will Dev",
  verification: {
    google: "_l7Ilx3tvQDwe_513YGRnNImpFUPCKIRlPR7bj3vIAA"
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
