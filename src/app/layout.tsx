import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif, Instrument_Sans, Instrument_Serif, Inter, Noto_Serif, Playfair_Display, Poppins, Source_Serif_4, Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Background from "@/components/background/Background";
import Title from "@/components/header/Title";
import Controls from "@/components/header/Controls";



export const metadata: Metadata = {
  title: "Ronish",
  description: "Creating designer and Frontend developer",
};

const fontPrimary = IBM_Plex_Serif({
  weight: ["100","200","300","400", "500","600","700"],
})

const fontMono = IBM_Plex_Mono({
  weight: ["100","200","300","400", "500","600","700"],
  variable: "--font-ibm-plex-mono"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.className} ${fontMono.variable}  antialiased flex justify-center`}
      >
        <Background />
         <div className="max-w-4xl w-full flex flex-col px-4 min-h-[100dvh] z-50 relative">
          <Controls />
          <Title />
          {children}
          <Footer />
         </div>
      </body>
    </html>
  );
}
