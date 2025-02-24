import { Metadata } from "next"
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types"

export const siteConfig = {
  name: "Irish Lotto Results",
  description: "Get the latest Irish Lotto results, check numbers, and view historical draws. Official source for Irish lottery numbers and jackpot information.",
  url: process.env.NODE_ENV === 'production' 
    ? "https://irishlottoonline.com"
    : "http://localhost:3000",
  ogImage: "https://irishlottoonline.com/og-image.webp",
  social: {
    twitter: "https://twitter.com/irishlottoonline",
    facebook: "https://facebook.com/irishlottoonline",
    instagram: "https://instagram.com/irishlottoonline",
    youtube: "https://youtube.com/@irishlottoonline",
    linkedin: "https://linkedin.com/company/irishlottoonline",
    pinterest: "https://pinterest.com/irishlottoonline"
  },
  socialHandles: {
    twitter: "@irishlottoonline",
    facebook: "irishlottoonline",
    instagram: "@irishlottoonline",
    youtube: "@irishlottoonline",
    linkedin: "irishlottoonline",
    pinterest: "irishlottoonline"
  },
  keywords: [
    "Irish Lotto",
    "Lottery Results",
    "Irish Lottery",
    "Lotto Numbers",
    "Irish Lotto Results",
    "Lottery Checker",
    "Ireland Lottery",
    "Irish Lottery Results Today",
    "Irish Lotto Numbers",
    "Irish Lottery Numbers",
    "Irish Lotto Checker"
  ],
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_ID",
    bing: "YOUR_BING_VERIFICATION_ID",
    yandex: "YOUR_YANDEX_VERIFICATION_ID"
  }
}

export type SeoProps = {
  title: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "article" | "website"
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = "website",
}: SeoProps): Metadata {
  const metadataBase = new URL(siteConfig.url)
  
  return {
    title: {
      default: title,
      template: "%s",
    },
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: "Zell Raihan" }],
    creator: "Zell Raihan",
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: siteConfig.verification.google,
      other: {
        'msvalidate.01': siteConfig.verification.bing,
        'yandex-verification': siteConfig.verification.yandex,
      },
    },
    openGraph: {
      title: title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: siteConfig.socialHandles.twitter,
      site: siteConfig.socialHandles.twitter,
    },
    alternates: {
      canonical: url,
    },
    metadataBase,
  }
}
