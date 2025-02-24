'use client';

import Image from "next/image"

const LOGO_URLS = {
  lotto: "/lotto.svg",
  lottoPlus1: "/lottoplus1.svg",
  lottoPlus2: "/lottoplus2.svg",
}

const ALT_TEXTS = {
  lotto: "Irish Lotto Results",
  lottoPlus1: "Irish Lotto Plus 1 Results",
  lottoPlus2: "Irish Lotto Plus 2 Results",
}

export function LotteryLogo({
  variant = "lotto",
  className = "",
}: {
  variant?: "lotto" | "lottoPlus1" | "lottoPlus2"
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={LOGO_URLS[variant] || "/placeholder.svg"}
        alt={ALT_TEXTS[variant] || "Irish Lotto Results"}
        width={200}
        height={50}
        className={`object-contain ${className}`}
        priority
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.src = "/placeholder.svg"
        }}
      />
    </div>
  )
}
