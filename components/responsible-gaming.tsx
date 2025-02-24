import { AlertCircle, Heart, Phone } from "lucide-react"

export function ResponsibleGaming() {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Responsible Gaming</h2>
          <p className="text-gray-600 mt-2">Play Safe, Stay in Control</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Set Limits</h3>
            </div>
            <p className="text-sm text-gray-600">
              Set personal limits for your gaming activity. Never spend more than you can afford to lose.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Support Available</h3>
            </div>
            <p className="text-sm text-gray-600">
              If you need help or support, contact Problem Gambling Ireland for free, confidential support.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-gray-800">Get Help</h3>
            </div>
            <p className="text-sm text-gray-600">
              Gambling Helpline: 1800 753 753 (24/7 Free Support)
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Must be 18 or older to play. Please gamble responsibly. 
            For more information visit <a href="https://www.gamblingcare.ie" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">www.gamblingcare.ie</a>
          </p>
        </div>
      </div>
    </div>
  )
}
