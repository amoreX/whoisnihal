import Footer from "@/components/footer/Footer";
import Controls from "@/components/header/Controls";
import Title from "@/components/header/Title";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "Ronish",
  description: "Creating designer and Frontend developer",
};

const fontPrimary = IBM_Plex_Mono({
  weight: ["100","200","300","400", "500","600","700"],
})

const fontMono = IBM_Plex_Mono({
  weight: ["100","200","300","400", "500","600","700"],
  variable: "--font-ibm-plex-mono"
}) //literally no point of this 

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
        {/* <Background /> */}
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
