import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Orctal",
  description: "Unlock a world of seamless event planning and booking with Orctal.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/OrctalFavicon.ico" />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
