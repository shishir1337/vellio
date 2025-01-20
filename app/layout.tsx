import { GeistSans } from "geist/font/sans";
import { Bodoni_Moda } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vellio Properties Ltd. | UK Real Estate Investment",
    template: "%s | Vellio Properties Ltd",
  },
  description:
    "Vellio Properties Ltd is a leading real estate investment firm focused on high-potential properties across the UK.",
  keywords: [
    "real estate",
    "property investment",
    "UK property",
    "Vellio Properties Ltd",
  ],
  authors: [{ name: "Vellio Properties Ltd" }],
  creator: "Vellio Properties Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.vellioproperties.com",
    siteName: "Vellio Properties Ltd",
    title: "Vellio Properties Ltd | UK Real Estate Investment",
    description:
      "Vellio Properties Ltd is a leading real estate investment firm focused on high-potential properties across the UK.",
    images: [
      {
        url: "https://www.vellioproperties.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vellio Properties Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vellio Properties Ltd | UK Real Estate Investment",
    description:
      "Vellio Properties Ltd is a leading real estate investment firm focused on high-potential properties across the UK.",
    images: ["https://www.vellioproperties.com/twitter-image.jpg"],
    creator: "@VellioProperties",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "L_Y1xSCSyc-7V5jPYqpZ5N9qGttMhN0AdYNs6OrMof8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(GeistSans.variable, bodoni.variable)}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MVSMKJBS');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vellio Properties Ltd",
              url: "https://www.vellioproperties.com",
              logo: "https://www.vellioproperties.com/logo.png",
              sameAs: [
                "https://www.facebook.com/people/Vellio-Properties/61567786766589/",
                "https://www.youtube.com/@VellioPropertiesLtd",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVSMKJBS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ScrollToTop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XSQ9HBGQG8`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XSQ9HBGQG8');
          `}
        </Script>
      </body>
    </html>
  );
}
