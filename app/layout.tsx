
import type { Metadata } from "next"; 
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import 'animate.css';
import AnimatedBackground from "@/public/components/AnimatedBackground";


const roboto = Roboto({
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Nahuel Henríquez",
  description: "Created by Nahuel Henríquez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html
    lang="en"
    className={`${roboto.className} ${robotoMono.className} h-full antialiased flex flex-col w-full`}
    >
      
      <body className="min-h-full flex flex-col overflow-x-hidden relative ">
        <AnimatedBackground/>
        <div className="relative z-10 flex-1">
          {children}
        </div>

      </body>
    </html>
  );
}
