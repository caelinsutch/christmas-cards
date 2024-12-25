import type { Metadata } from "next";
import { Space_Grotesk, Chewy } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const chewy = Chewy({
  variable: "--font-chewy",
  weight: ['400'],
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Riya + Caelin Christmas 22024",
  description: "For our friends  + family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${chewy.variable} font-sans antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
