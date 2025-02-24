'use client';

import { formatDate } from "@/utils/formatters";

type JsonLdProps = {
  type: "LotteryResult" | "Website" | "Organization" | "BreadcrumbList" | "Article" | "FAQPage";
  data?: any;
};

export default function JsonLd({ type, data }: JsonLdProps) {
  let schema: any = {};

  switch (type) {
    case "Website":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Irish Lotto Results",
        url: "https://irishlottoonline.com",
        description: "Get the latest Irish Lotto results, check winning numbers, and view historical draws.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://irishlottoonline.com/results/history?date={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      };
      break;

    case "Organization":
      schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Irish Lotto Results",
        url: "https://irishlottoonline.com",
        logo: "https://irishlottoonline.com/logo.png",
        sameAs: [
          "https://twitter.com/irishlottoresults",
          "https://www.facebook.com/irishlottoresults",
          "https://www.instagram.com/irishlottoresults"
        ],
      };
      break;

    case "BreadcrumbList":
      if (!data?.items) return null;
      schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data.items.map((item: any, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@id": `https://irishlottoonline.com${item.href || ''}`,
            name: item.label,
          },
        })),
      };
      break;

    case "FAQPage":
      if (!data?.faqs) return null;
      schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq: any) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      };
      break;

    case "LotteryResult":
      if (!data) return null;
      schema = {
        "@context": "https://schema.org",
        "@type": "Game",
        name: `Irish Lotto Results - ${formatDate(data.drawDate)}`,
        description: `Irish Lotto results and winning numbers for ${formatDate(data.drawDate)}. Jackpot: ${data.mainDraw.jackpotAmount}`,
        url: `https://irishlottoonline.com/results/${data._id}`,
        datePublished: data.drawDate,
        provider: {
          "@type": "Organization",
          name: "Irish National Lottery",
        },
      };
      break;

    case "Article":
      if (!data) return null;
      schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.description,
        datePublished: data.date,
        dateModified: data.modified || data.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://irishlottoonline.com${data.url}`,
        },
        publisher: {
          "@type": "Organization",
          name: "Irish Lotto Results",
          logo: {
            "@type": "ImageObject",
            url: "https://irishlottoonline.com/logo.png",
          },
        },
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
