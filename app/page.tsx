import { Button } from "@/components/ui/button"
import { formatCurrency, formatDublinDate } from "@/utils/formatters"
import { LotteryLogo } from "@/components/lottery-logo"
import LotteryDatePicker from "@/components/lottery-date-picker"
import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import type { LotteryDraw } from "@/types/lottery"
import { WithId } from "mongodb"
import { differenceInDays, addDays, isSaturday, isWednesday, nextWednesday, nextSaturday, format } from "date-fns"
import { Timer, Calendar, ChevronRight } from "lucide-react"
import { Metadata } from "next"
import { constructMetadata } from "./seo.config"
import Image from 'next/image';
import clsx from 'clsx';
import HomeContent from '@/components/home-content';
import { ResponsibleGaming } from '@/components/responsible-gaming';
import { Disclaimer } from '@/components/disclaimer';

export const metadata: Metadata = constructMetadata({
  title: "Irish Lotto Results Tonight with Winning Numbers for All 3 Draws",
  description: "Latest Irish Lotto results for tonight's draw. Check winning numbers and prizes for all 3 draws - Main Draw, Plus 1, and Plus 2. Complete prize breakdowns and raffle results available.",
  type: "website",
  keywords: [
    "Irish Lotto Results Tonight",
    "Irish Lotto Winning Numbers",
    "All 3 Draws Results",
    "Irish Lotto Main Draw",
    "Irish Lotto Plus 1",
    "Irish Lotto Plus 2",
    "Tonight's Lotto Results",
    "Irish Lottery Numbers",
    "Irish Lotto Prize Breakdown",
    "Latest Lotto Results"
  ]
})

// Force SSR
export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getLotteryResults(): Promise<{
  latest: WithId<LotteryDraw>;
  pastResults: WithId<LotteryDraw>[];
}> {
  try {
    const client = await clientPromise;
    const db = client.db("lottery");

    // Add cache-busting timestamp to force fresh data
    const currentTimestamp = new Date().getTime();

    // Get latest result
    const latestResult = await db
      .collection<LotteryDraw>("lottoresults")
      .find({})
      .sort({ drawDate: -1 })
      .limit(1)
      .toArray();

    // Get past 3 results excluding the latest
    const pastResults = await db
      .collection<LotteryDraw>("lottoresults")
      .find({
        _id: { $ne: latestResult[0]._id }
      })
      .sort({ drawDate: -1 })
      .limit(3)
      .toArray();

    return {
      latest: latestResult[0],
      pastResults
    };
  } catch (error) {
    console.error('Error fetching lottery results:', error);
    throw error;
  }
}

function getNextDrawDate(lastDrawDate: Date): Date {
  // Always use the lastDrawDate as the base for calculating next draw

  // If last draw was Wednesday, next draw is Saturday
  if (isWednesday(lastDrawDate)) {
    return nextSaturday(lastDrawDate)
  }
  // If last draw was Saturday, next draw is next Wednesday
  else if (isSaturday(lastDrawDate)) {
    return nextWednesday(addDays(lastDrawDate, 1))
  }
  // For other days, get the nearest Wednesday or Saturday from the last draw date
  else {
    const nextWed = nextWednesday(lastDrawDate)
    const nextSat = nextSaturday(lastDrawDate)
    return nextWed < nextSat ? nextWed : nextSat
  }
}

function ResultBox({
  variant = "lotto",
  jackpotAmount,
  numbers,
  bonus,
  isHighlighted = false,
}: {
  variant: "lotto" | "lottoPlus1" | "lottoPlus2"
  jackpotAmount: number
  numbers: number[]
  bonus: number
  isHighlighted?: boolean
}) {
  return (
    <div
      className={clsx(
        "bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",
        isHighlighted && "ring-2 ring-indigo-500"
      )}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-start justify-between">
          <div className="w-24">
            <LotteryLogo variant={variant} className="h-8" />
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500 font-medium">Jackpot</div>
            <div className="text-base font-semibold text-emerald-600">
              {formatCurrency(jackpotAmount)}
            </div>
          </div>
        </div>
      </div>

      {/* Numbers */}
      <div className="p-4 space-y-4">
        {/* Main Numbers */}
        <div className="grid grid-cols-6 gap-2">
          {numbers.map((number, index) => (
            <div
              key={number}
              className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center text-base font-semibold text-emerald-700 transform transition-all duration-300 hover:scale-110 hover:shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {number}
            </div>
          ))}
        </div>

        {/* Bonus */}
        <div className="flex items-center justify-center gap-2">
          <div className="text-sm font-medium text-gray-500">Bonus Ball</div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 flex items-center justify-center text-base font-semibold text-pink-600 transform transition-all duration-300 hover:scale-110 hover:shadow-md">
            {bonus}
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function Home() {
  const { latest: currentData, pastResults } = await getLotteryResults();

  // Check if latest results are more than 2 days old
  const daysSinceLastDraw = differenceInDays(
    new Date(),
    new Date(currentData.drawDate)
  );

  // Show coming soon if latest result is more than 2 days old
  const showComingSoon = daysSinceLastDraw >= 2;
  const nextDrawDate = showComingSoon ? getNextDrawDate(new Date(currentData.drawDate)) : null;
  const nextDrawDateString = nextDrawDate ? format(nextDrawDate, 'yyyy-MM-dd') : '';

  return (
    <div className="max-w-[95%] sm:max-w-4xl mx-auto p-2 sm:p-4 py-4 sm:py-8 space-y-4 sm:space-y-8">
      {/* Current Results - Hero Section */}
      <div className="bg-gradient-to-b from-emerald-50 via-green-50/20 to-teal-50/20 p-3 sm:p-6 rounded-2xl shadow-lg border border-emerald-100/50">
        <div className="text-center space-y-4">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
              Irish Lotto Results
            </h1>
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-indigo-400/10 blur-lg transform scale-110"></div>
                <p className="relative text-lg sm:text-xl font-medium text-gray-600 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-purple-100/30 shadow-sm">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                    {formatDublinDate(currentData.drawDate)}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-2 border border-emerald-100/50 hover:shadow-md transition-all duration-300">
            <LotteryDatePicker selected={new Date(currentData.drawDate)} />
          </div>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <ResultBox
            variant="lotto"
            jackpotAmount={currentData.mainDraw.jackpotAmount}
            numbers={currentData.mainDraw.winningNumbers.standard}
            bonus={currentData.mainDraw.winningNumbers.bonus}
          />
          <ResultBox
            variant="lottoPlus1"
            jackpotAmount={currentData.plusOne.jackpotAmount}
            numbers={currentData.plusOne.winningNumbers.standard}
            bonus={currentData.plusOne.winningNumbers.bonus}
          />
          <ResultBox
            variant="lottoPlus2"
            jackpotAmount={currentData.plusTwo.jackpotAmount}
            numbers={currentData.plusTwo.winningNumbers.standard}
            bonus={currentData.plusTwo.winningNumbers.bonus}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
          <Link href={`/results/${currentData._id}`} passHref>
            <Button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 w-full sm:w-auto">
              View Complete Results
            </Button>
          </Link>
          <Link href={`/results/${currentData._id}#prize-breakdown`} passHref>
            <Button className="bg-green-500 text-white hover:bg-green-600 w-full sm:w-auto">
              View Prize Breakdown
            </Button>
          </Link>
        </div>
      </div>

      {/* Next Draw Section */}
      {showComingSoon && (
        <div className="relative overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-teal-500/5 blur-3xl transform rotate-12 scale-150" />
          
          <div className="relative bg-gradient-to-br from-white/80 via-emerald-50/30 to-teal-50/30 backdrop-blur-xl border border-emerald-200/50 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500">
            {/* Animated corner accents */}
            <div className="absolute h-8 w-8 border-t-2 border-l-2 border-emerald-500/30 top-4 left-4 animate-pulse" />
            <div className="absolute h-8 w-8 border-t-2 border-r-2 border-emerald-500/30 top-4 right-4 animate-pulse" />
            <div className="absolute h-8 w-8 border-b-2 border-l-2 border-emerald-500/30 bottom-4 left-4 animate-pulse" />
            <div className="absolute h-8 w-8 border-b-2 border-r-2 border-emerald-500/30 bottom-4 right-4 animate-pulse" />
            
            {/* Content */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              {/* Timer Icon with animated ring */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-xl opacity-20 animate-pulse" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0.5 bg-white/80 rounded-full" />
                  <Timer className="w-8 h-8 text-emerald-600 relative z-10 animate-pulse" />
                  {/* Animated ring */}
                  <div className="absolute inset-0 border-4 border-emerald-400/30 rounded-full animate-[spin_3s_linear_infinite]" />
                </div>
              </div>
              
              <div className="flex-grow space-y-4 text-center sm:text-left">
                {/* Title with gradient */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent mb-2">
                    Next Draw Coming Soon
                  </h3>
                  <p className="text-gray-600 text-lg">
                    The next Irish Lotto draw will be held on{' '}
                    <span className="font-semibold text-emerald-700">
                      {formatDublinDate(nextDrawDate!)}
                    </span>
                    . Check back for the latest results!
                  </p>
                </div>
                
                {/* Button with hover effects */}
                <div className="pt-2">
                  <Link href={`/results/${nextDrawDateString}`} passHref>
                    <Button
                      size="lg"
                      className="group relative px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                    >
                      {/* Button gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-xl" />
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                      {/* Button content */}
                      <div className="relative flex items-center gap-2">
                        <span>View Next Draw Details</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl" />
            </div>
            <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      )}
      
      {/* Results History */}
      <div className="bg-gradient-to-b from-emerald-50 via-green-50/20 to-teal-50/20 rounded-2xl shadow-lg p-6 sm:p-8 border border-emerald-100/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
            Results History
          </h2>
          <Link
            href="/results/history"
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center gap-1"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="overflow-x-auto -mx-3 sm:mx-0">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 sm:p-3 text-left text-xs sm:text-sm font-semibold text-gray-600">Date</th>
                <th className="p-2 sm:p-3 text-left text-xs sm:text-sm font-semibold text-gray-600">Numbers</th>
                <th className="p-2 sm:p-3 text-left text-xs sm:text-sm font-semibold text-gray-600">Bonus</th>
                <th className="p-2 sm:p-3"></th>
              </tr>
            </thead>
            <tbody>
              {pastResults.map((result) => (
                <tr key={result._id} className="border-b border-gray-100 hover:bg-indigo-50/50 transition-colors duration-200">
                  <td className="p-2 sm:p-3 font-medium text-gray-800 text-xs sm:text-sm">
                    {formatDublinDate(result.drawDate)}
                  </td>
                  <td className="p-2 sm:p-3">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {result.mainDraw.winningNumbers.standard.map((number, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-yellow-100 text-yellow-800 font-medium text-xs"
                        >
                          {number}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-2 sm:p-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 text-green-800 font-medium text-xs">
                      {result.mainDraw.winningNumbers.bonus}
                    </span>
                  </td>
                  <td className="p-2 sm:p-3 text-right">
                    <Link href={`/results/${result._id}`} passHref>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1"
                      >
                        View
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/results/history"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-indigo-600 transition-all duration-200 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <Calendar className="w-4 h-4" />
            View Past Results
          </Link>
        </div>
      </div>

      {/* Irish Lotto Banner */}
      <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
        <Image
          src="/og-image.webp"
          alt="Irish Lotto Results"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 95vw, 896px"
          priority
        />
      </div>

      <div className="mt-8">
        <HomeContent />
      </div>

      <div className="mt-8">
        <Disclaimer />
      </div>

      <div className="mt-8">
        <ResponsibleGaming />
      </div>
    </div>
  )
}
