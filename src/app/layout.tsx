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
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <header className="bg-utility-white border-b border-grey-300 py-3 sm:py-4">
          <div className="w-full mx-auto flex items-center px-4">
            <div className="flex">
              <div className="relative w-48 sm:w-80 h-[60px] sm:ml-[101px]">
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
                  className="hidden sm:block object-contain"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </header>
        <main className="max-h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
