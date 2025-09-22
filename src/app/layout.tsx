import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Inter, Work_Sans } from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "Ronish",
  description: "Creating designer and Frontend developer",
};

const fontPrimary = Inter({
  weight: ["100","200","300","400", "500","600","700", "800", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.className}  antialiased flex justify-center`}
      >
         <div className="max-w-4xl w-full px-4">
          {children}
         </div>
      </body>
    </html>
  );
}
