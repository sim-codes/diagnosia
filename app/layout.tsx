import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "./ui/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diagnosia",
  description: "Find answers to your health concerns",
  metadataBase: new URL('https://diagnosia-sim.vercel.app/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white flex flex-row text-[#6D6D6D]`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
