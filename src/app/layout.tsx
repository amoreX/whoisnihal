import type { Metadata } from "next";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nihal",
  description: "Nihal Rahman - CS Student & Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-['Space_Mono'] dark h-fit antialiased">
        <div className="bg-zinc-950 dark:bg-zinc-950 light:bg-white min-h-dvh flex lg:justify-center px-8">
          <div className="lg:w-[50%] w-full flex flex-col">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
