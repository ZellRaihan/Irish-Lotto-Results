import { Metadata } from "next"
import { constructMetadata } from "@/app/seo.config"

export const metadata: Metadata = constructMetadata({
  title: "Terms & Conditions | Irish Lotto Results",
  description: "Terms and conditions for using the Irish Lotto Results website. Please read these terms carefully before using our services.",
  type: "article",
})

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">Last updated: February 22, 2025</p>
        </div>

        <div className="prose prose-green max-w-none">
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                Welcome to Irish Lotto Results. These terms and conditions outline the rules and regulations for the use of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Website Usage</h2>
              <p className="text-gray-600">
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Irish Lotto Results if you do not accept all of the terms and conditions stated on this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Results Accuracy</h2>
              <p className="text-gray-600">
                While we strive to provide accurate lottery results, we cannot guarantee the accuracy of all information. Always verify results with official sources before making any claims.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600">
                The content, organization, graphics, design, and other matters related to this site are protected under applicable copyrights and other proprietary laws. The copying, redistribution, use, or publication by you of any such matters or any part of the site is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600">
                Irish Lotto Results shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Please check this page regularly for any updates.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
