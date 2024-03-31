import type { Metadata } from "next";
import { Inter, Rosario } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rosario = Rosario({
  weight: ['700', '600', '400', '500', '300'],
  variable: "--rosario-font",
  subsets: ['latin', 'vietnamese'],

})

export const metadata: Metadata = {
  title: "Maha Lakshmi Lottery | Original Mahakalshmi Lottery",
  description: "Play and win big prize with us on Mahalakshmi Lottery | Mahaxmi Lottery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="fantasy">
      <body className={`${inter.className} ${rosario.variable}`}>{children}</body>
    </html>
  );
}
