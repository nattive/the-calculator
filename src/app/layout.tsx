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
        <header className="bg-utility-white border-b border-grey-300 py-4">
          <div className="max-w-4xl mx-auto flex items-center px-4">
            <div className="flex items-center">
              <div className="relative w-56 h-[40px]">
                <Image
                  src="/THS Asset Bank/Layer 17-1.png"
                  alt="TrustedHousesitters"
                  fill
                  priority
                  className="object-contain"
                  sizes="260px"
                />
              </div>
            </div>
          </div>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}