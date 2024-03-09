import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const ibx = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight : ['400','500','600','700'],
  variable : '--font-ibx-plex-sans' 
});

export const metadata: Metadata = {
  title: "imagemodify",
  description: "AI image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={cn("font-IBXPlex antialiased",ibx.variable)}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
