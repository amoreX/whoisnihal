import Footer from "@/components/footer/Footer";
import Controls from "@/components/header/Controls";
import Title from "@/components/header/Title";
import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Comic_Neue,
  Comic_Relief,
  IBM_Plex_Mono,
  Inter,
} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronish",
  description: "Creating designer and Frontend developer",
};

const fontPrimary = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const fontMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
}); //literally no point of this

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.className} ${fontMono.variable} dark antialiased flex justify-center`}
      >
        <ThemeProvider>
          {/* <Background /> */}
          <div className="max-w-4xl w-full flex flex-col px-4 min-h-[100dvh] z-50 relative">
            <Controls />
            <Title />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
