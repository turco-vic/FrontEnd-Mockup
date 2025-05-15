import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Mockup App",
  icons: {
    icon: "/icons/favicon.ico",
  },
  description: "A Mockup App for testing",

};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${font.variable}`}>{children}</body>
    </html>
  );
}
