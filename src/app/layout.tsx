import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import { LanguageProvider } from '@inlang/paraglide-next';
import type { Metadata } from 'next';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { siteConfig } from '@/lib/constant';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { languageTag } from '@/paraglide/runtime.js';

export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(siteConfig.url()),
  title: {
    default: siteConfig.title(),
    template: `%s | ${siteConfig.title()}`,
  },
  description: siteConfig.description(),
  keywords: siteConfig.keywords(),
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId(),
  },
  openGraph: {
    url: siteConfig.url(),
    title: siteConfig.title(),
    description: siteConfig.description(),
    siteName: siteConfig.title(),
    images: '/opengraph-image.png',
    type: 'website',
    locale: languageTag(),
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title(),
    description: siteConfig.description(),
    images: '/opengraph-image.png',
  },
});

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
    <LanguageProvider>
      <html lang={languageTag()} suppressHydrationWarning>
        <body className={cn('min-h-screen font-sans', fonts)}>
          <TooltipProvider>
            <ThemeProvider attribute="class">
              <Header />
              <main className="min-h-[calc(100vh-5rem)]">{children}</main>
              <Footer />
            </ThemeProvider>
          </TooltipProvider>
        </body>
      </html>
    </LanguageProvider>
  );
};

export default RootLayout;