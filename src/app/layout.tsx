import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import Image from "next/image";

// Load Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "TrustedHousesitters - Pet Sitting Cost Calculator",
  description: "Calculate and compare pet sitting costs with TrustedHousesitters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${poppins.variable} font-sans antialiased bg-white dark:bg-dark-bg-950`}>
        <header className="   border-b border-gray-300  py-3 sm:py-4">
          <div className="w-full mx-auto flex items-center px-4">
            <div className="flex">
              <div className="relative w-48 sm:w-80 h-16 sm:ml-24">
                <Image
                  src="/THS Logo mobile.svg"
                  alt="TrustedHousesitters"
                  fill
                  priority
                  className="object-contain sm:hidden"
                  sizes="192px"
                />
                <Image
                  src="/THS-Logo-Horizontal-Green-RGB.svg"
                  alt="TrustedHousesitters"
                  fill
                  priority
                  className="hidden sm:block object-contain text-utility-white"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </header>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}