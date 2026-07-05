import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/** Google Ads コンバージョン ID。必要なら NEXT_PUBLIC_GOOGLE_ADS_ID で上書き */
const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18067811320";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "神奈川まごころ整理センター",
  description: "大和市福田の地元業者。不用品回収・遺品整理を代表が直接対応します。",
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', ${JSON.stringify(GOOGLE_ADS_ID)});
`,
          }}
        />
        <Script
          id="conversion-click-listener"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  document.addEventListener('click', function(e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a || typeof window.gtag !== 'function') return;
    var href = a.getAttribute('href') || '';
    if (href.startsWith('tel:')) {
      gtag('event', 'conversion', {
        'send_to': 'AW-18067811320/nfxtCPPyvakcEPjXs6dD'
      });
    } else if (href.indexOf('lin.ee') !== -1 || href.indexOf('line.me') !== -1) {
      gtag('event', 'conversion', {
        'send_to': 'AW-18067811320/CJnvCMKJvakcEPjXs6dD'
      });
    }
  });
`,
          }}
        />
        {process.env.NODE_ENV === "production" && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
  (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "wlvbqntydd");
`,
            }}
          />
        )}
      </body>
    </html>
  );
}
