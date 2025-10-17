import Footer from "@/components/footer/Footer";
import Controls from "@/components/header/Controls";
import Title from "@/components/header/Title";
import { ThemeProvider } from "@/contexts/ThemeContext";
import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Comic_Neue,
  Comic_Relief,
  DM_Sans,
  IBM_Plex_Mono,
  Inter,
  Lora,
  Merriweather,
  Oswald,
  Playfair_Display,
  Quicksand,
  Raleway,
  Roboto_Slab,
} from "next/font/google";
import "./globals.css";
import Background from "@/components/background/Background";

export const metadata: Metadata = {
  title: "Ronish",
  description: "Creating designer and Frontend developer",
};

const fontPrimary = Lora({
  weight: [  "400", "500", "600", "700"],
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
          <Background />
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
