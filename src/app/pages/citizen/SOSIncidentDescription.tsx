import { useState } from "react"
import { useNavigate } from "react-router"
import { ArrowRight, ArrowLeft, FileText } from "lucide-react"

export function SOSIncidentDescription() {
  const navigate = useNavigate()
  const [description, setDescription] = useState("")

  const handleNext = () => {
    navigate("/citizen/sos/victims")
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step 2 of 8</span>
          <span className="text-sm text-gray-500">Describe Incident</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 rounded-full" style={{ width: "25%" }}></div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Describe the situation</h1>
            <p className="text-gray-600">Provide details about what happened</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What is happening? Please be as specific as possible.
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Example: Building partially collapsed after earthquake. Multiple people trapped on 2nd floor. Smoke visible. We need immediate rescue assistance..."
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
        />
        <p className="text-sm text-gray-500 mt-2">Minimum 20 characters ({description.length}/500)</p>
      </div>

      {/* Helpful Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-blue-900 mb-3">Helpful Tips:</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>• Mention specific hazards (fire, gas leak, structural damage)</li>
          <li>• Note any injuries and their severity</li>
          <li>• Describe accessibility issues for rescue teams</li>
          <li>• Include landmarks or reference points if applicable</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => navigate("/citizen/sos/category")}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <button
          onClick={handleNext}
          disabled={description.length < 20}
          className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}