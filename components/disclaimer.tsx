import { AlertTriangle } from "lucide-react"

export function Disclaimer() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
      <div className="max-w-4xl mx-auto flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-amber-800">
          <p className="font-medium mb-1">Important Notice:</p>
          <p>
            This website is not maintained by or affiliated with the National Lottery or any official lottery organization. 
            We provide lottery results and information for reference purposes only. For official results and 
            verification, please visit <a 
              href="https://www.lottery.ie" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-900 underline hover:text-amber-950"
            >
              www.lottery.ie
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
