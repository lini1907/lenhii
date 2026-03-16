import { useState } from "react"
import { useNavigate } from "react-router"
import { ArrowRight, ArrowLeft, Users, Plus, Minus } from "lucide-react"

export function SOSVictimsCount() {
  const navigate = useNavigate()
  const [victims, setVictims] = useState(1)
  const [trapped, setTrapped] = useState(0)
  const [injured, setInjured] = useState(0)

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step 3 of 8</span>
          <span className="text-sm text-gray-500">Number of Victims</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 rounded-full" style={{ width: "37.5%" }}></div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">How many people affected?</h1>
            <p className="text-gray-600">Help us understand the scope of the emergency</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <label className="block text-lg font-medium text-gray-900 mb-4">Total number of people affected</label>
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={() => setVictims(Math.max(1, victims - 1))}
              className="w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center"
            >
              <Minus className="w-6 h-6 text-gray-700" />
            </button>
            <span className="text-5xl font-bold text-gray-900 w-32 text-center">{victims}</span>
            <button
              onClick={() => setVictims(victims + 1)}
              className="w-14 h-14 bg-red-100 hover:bg-red-200 rounded-lg flex items-center justify-center"
            >
              <Plus className="w-6 h-6 text-red-700" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <label className="block text-lg font-medium text-gray-900 mb-4">People trapped or unable to evacuate</label>
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={() => setTrapped(Math.max(0, trapped - 1))}
              className="w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center"
            >
              <Minus className="w-6 h-6 text-gray-700" />
            </button>
            <span className="text-5xl font-bold text-gray-900 w-32 text-center">{trapped}</span>
            <button
              onClick={() => setTrapped(trapped + 1)}
              className="w-14 h-14 bg-orange-100 hover:bg-orange-200 rounded-lg flex items-center justify-center"
            >
              <Plus className="w-6 h-6 text-orange-700" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <label className="block text-lg font-medium text-gray-900 mb-4">People with injuries</label>
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={() => setInjured(Math.max(0, injured - 1))}
              className="w-14 h-14 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center"
            >
              <Minus className="w-6 h-6 text-gray-700" />
            </button>
            <span className="text-5xl font-bold text-gray-900 w-32 text-center">{injured}</span>
            <button
              onClick={() => setInjured(injured + 1)}
              className="w-14 h-14 bg-red-100 hover:bg-red-200 rounded-lg flex items-center justify-center"
            >
              <Plus className="w-6 h-6 text-red-700" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => navigate("/citizen/sos/description")}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <button
          onClick={() => navigate("/citizen/sos/photos")}
          className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 flex items-center space-x-2"
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}