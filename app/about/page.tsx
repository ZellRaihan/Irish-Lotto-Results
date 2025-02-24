import { Metadata } from "next"
import { constructMetadata } from "@/app/seo.config"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = constructMetadata({
  title: "About Us - Irish Lotto Results & Information",
  description: "Learn about IrishLottoOnline.com, your trusted source for Irish Lotto results, winning numbers, and prize breakdowns. We provide accurate and timely lottery information.",
})

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 py-8 space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About Us" }
        ]}
      />

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About IrishLottoOnline.com
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted destination for Irish Lotto results, winning numbers, and comprehensive prize information
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
              At IrishLottoOnline.com, we are dedicated to providing accurate, timely, and comprehensive Irish Lotto results. 
              Our mission is to make it easy for players to check their numbers and stay informed about all Irish Lotto games.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">What We Offer</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Real-time Irish Lotto results</li>
              <li>• Complete prize breakdowns</li>
              <li>• Historical results archive</li>
              <li>• Lotto Plus 1 and Plus 2 information</li>
              <li>• Raffle numbers and winners</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Why Choose Us</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-medium text-gray-800">Accuracy</h3>
              <p className="text-sm text-gray-600">
                We ensure all results are verified and accurate, pulling directly from official sources.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-gray-800">Speed</h3>
              <p className="text-sm text-gray-600">
                Results are updated promptly after each draw, keeping you informed without delay.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-gray-800">Comprehensive</h3>
              <p className="text-sm text-gray-600">
                Access complete information including prize breakdowns and historical data.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
          <p className="text-gray-600">
            Have questions or suggestions? Visit our <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">Contact page</a> to get in touch with us.
          </p>
        </div>
      </div>
    </div>
  )
}
