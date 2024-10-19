import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/utils/theme-provider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sSwapping | Portfolio",
  description:
    "Discover sSwapping's portfolio, featuring expertise in Web Development. With a strong focus Fullstack development, I create solutions that drive results. Explore my projects, and let's collaborate to bring your vision to life.",
  openGraph: {
    siteName: "sSwapping's Portfolio",
    url: "https://links.sswapping.dev/",
  },
  twitter: {
    title: "sSwapping's Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
