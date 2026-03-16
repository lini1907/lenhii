import { useState } from "react"
import { useNavigate } from "react-router"
import { ArrowRight, ArrowLeft, MapPin, Search } from "lucide-react"

export function SOSLocationManual() {
  const navigate = useNavigate()
  const [address, setAddress] = useState("")

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step 5 of 8</span>
          <span className="text-sm text-gray-500">Select Location</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 rounded-full" style={{ width: "62.5%" }}></div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Select location on map</h1>
        <p className="text-gray-600">Click on the map or search for an address</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Simulated Map */}
            <div className="relative bg-gradient-to-br from-blue-50 to-green-50 h-[500px]">
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-10 grid-rows-10 h-full">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="border border-gray-400"></div>
                  ))}
                </div>
              </div>
              {/* Center marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MapPin className="w-12 h-12 text-red-600 drop-shadow-lg" />
              </div>
              {/* Instruction */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-gray-900">Click anywhere to set location</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">Search Address</h3>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
              Search
            </button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4">Selected Location</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium text-gray-900">123 Main Street, Downtown</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Coordinates</p>
                <p className="font-medium text-gray-900">34.0522°N, 118.2437°W</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate("/citizen/sos/review")}
            className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2"
          >
            <MapPin className="w-5 h-5" />
            <span>Confirm Location</span>
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => navigate("/citizen/sos/location-auto")}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <button
          onClick={() => navigate("/citizen/sos/review")}
          className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 flex items-center space-x-2"
        >
          <span>Continue to Review</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}