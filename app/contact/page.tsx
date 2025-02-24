import { Metadata } from "next"
import { constructMetadata } from "@/app/seo.config"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = constructMetadata({
  title: "Contact Us - Irish Lotto Results & Support",
  description: "Get in touch with the IrishLottoOnline.com team. We're here to help with any questions about Irish Lotto results, website features, or general inquiries.",
})

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 py-8 space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us" }
        ]}
      />

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We're here to help. Get in touch with our team using the information below.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Email Us</h2>
            </div>
            <p className="text-gray-600">
              For general inquiries and support:
            </p>
            <a 
              href="mailto:support@irishlottoonline.com" 
              className="text-blue-600 hover:text-blue-700 font-medium block"
            >
              support@irishlottoonline.com
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Response Time</h2>
            </div>
            <p className="text-gray-600">
              We aim to respond to all inquiries within 24-48 hours during business days. 
              For immediate results checking, please use our main website features.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 text-center">About Our Service</h2>
            <p className="text-gray-600 text-center">
              IrishLottoOnline.com provides comprehensive Irish Lotto results and information. 
              We're dedicated to delivering accurate and timely lottery results to our users. 
              For the latest draws and historical results, please visit our home page.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
