import { Button } from "@/components/ui/button"
import { formatCurrency, formatDate } from "@/utils/formatters"
import { LotteryLogo } from "@/components/lottery-logo"
import LotteryDatePicker from "@/components/lottery-date-picker"
import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import type { LotteryDraw } from "@/types/lottery"
import { WithId } from "mongodb"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Metadata } from "next"
import { constructMetadata } from "@/app/seo.config"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = constructMetadata({
  title: "Irish Lotto Results History",
  description: "Browse historical Irish Lotto results, winning numbers, and jackpot amounts. Check past draws and track lottery trends.",
  type: "article",
})

// Force SSR
export const dynamic = 'force-dynamic'
export const revalidate = 0

const ITEMS_PER_PAGE = 5;

async function getLotteryResults(page: number = 1): Promise<{ results: WithId<LotteryDraw>[], totalPages: number }> {
  try {
    const client = await clientPromise;
    const db = client.db("lottery");
    const skip = (page - 1) * ITEMS_PER_PAGE;

    // Get total count for pagination
    const totalCount = await db.collection<LotteryDraw>("lottoresults").countDocuments();
    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

    const results = await db
      .collection<LotteryDraw>("lottoresults")
      .find({})
      .sort({ drawDate: -1 })
      .skip(skip)
      .limit(ITEMS_PER_PAGE)
      .toArray();

    return { results, totalPages };
  } catch (error) {
    console.error('Error fetching lottery results:', error);
    throw error;
  }
}

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const currentPage = Number(searchParams.page) || 1;
  const { results, totalPages } = await getLotteryResults(currentPage);
  const latestResult = results[0];

  // Prepare breadcrumb data for JSON-LD
  const breadcrumbData = {
    items: [
      { name: "Home", url: "/" },
      { name: "Results History", url: "/results/history" }
    ]
  };

  return (
    <>
      <JsonLd type="BreadcrumbList" data={breadcrumbData} />
      <JsonLd type="Article" data={{
        title: "Irish Lotto Results History",
        description: "Complete archive of Irish Lotto results and winning numbers",
        image: "/og-history.jpg",
        date: new Date().toISOString()
      }} />

      <div className="max-w-5xl mx-auto p-4 py-8 space-y-12">
        {/* Hero Section */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-3xl" />

          <div className="relative px-6 py-12 sm:px-12 sm:py-16 rounded-3xl border border-blue-100">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              {/* Title and Description */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    Results History
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Browse historical Irish Lotto draws
                </p>
              </div>

              {/* Date Picker */}
              <div className="flex-shrink-0">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg shadow-blue-500/5 p-2 border border-blue-100">
                  <LotteryDatePicker selected={new Date(latestResult.drawDate)} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="space-y-6">
          <div className="grid gap-4">
            {results.map((result) => (
              <Link
                key={result._id}
                href={`/results/${result._id}`}
                className="block group"
              >
                <div
                  className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Left section: Date and Numbers */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <h3 className="font-semibold text-gray-800">
                          {formatDate(result.drawDate)}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-gray-600">Winning Numbers</div>
                          <div className="flex flex-wrap gap-2">
                            {result.mainDraw.winningNumbers.standard.map((number, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center justify-center w-8 h-8 text-sm font-bold rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm"
                              >
                                {number}
                              </span>
                            ))}
                            <div className="flex items-center">
                              <div className="h-px w-3 bg-gray-300" />
                              <span
                                className="inline-flex items-center justify-center w-8 h-8 text-sm font-bold rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-sm"
                              >
                                {result.mainDraw.winningNumbers.bonus}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right section: Jackpot and Button */}
                    <div className="flex flex-col gap-3 sm:items-end">
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-gray-600">Jackpot Prize</div>
                        <div className="text-lg font-bold text-gray-800">
                          {formatCurrency(result.mainDraw.jackpotAmount)}
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto text-blue-600 hover:text-blue-700 hover:bg-blue-50 border-blue-200 hover:border-blue-300"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-2">
            <Link href={`/results/history?page=${Math.max(1, currentPage - 1)}`}>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 border-blue-200 hover:border-blue-300"
                disabled={currentPage <= 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
            </Link>
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
            <Link href={`/results/history?page=${Math.min(totalPages, currentPage + 1)}`}>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 border-blue-200 hover:border-blue-300"
                disabled={currentPage >= totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
