import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PubliMoney",
  description: "Avalie anúncios e ganhe dinheiro!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4T1G0YKPEM" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-4T1G0YKPEM');
        `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
