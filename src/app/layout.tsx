import type { Metadata } from "next";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "nihal",
  description: "breaking something to build it better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-['Space_Mono'] dark h-fit antialiased">
        <div className="bg-zinc-950 dark:bg-zinc-950 light:bg-white min-h-dvh flex lg:justify-center px-6 sm:px-10">
          <div className="lg:w-[70%] xl:w-[55%] max-w-3xl w-full flex flex-col">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
