import { useNavigate } from "react-router"
import { ArrowRight, ArrowLeft, MapPin, Navigation, Map } from "lucide-react"

export function SOSLocationAuto() {
  const navigate = useNavigate()

  const detectLocation = () => {
    // Simulate GPS detection
    setTimeout(() => {
      navigate("/citizen/sos/review")
    }, 1500)
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step 5 of 8</span>
          <span className="text-sm text-gray-500">Location</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 rounded-full" style={{ width: "62.5%" }}></div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Confirm your location</h1>
            <p className="text-gray-600">This helps rescue teams find you quickly</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <Navigation className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Auto-Detect Location</h2>
          <p className="text-gray-600 mb-6">Allow access to your device location for accurate positioning</p>
          <button
            onClick={detectLocation}
            className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 inline-flex items-center space-x-2"
          >
            <Navigation className="w-5 h-5" />
            <span>Use My Current Location</span>
          </button>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Or</p>
          <button
            onClick={() => navigate("/citizen/sos/location-manual")}
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 inline-flex items-center space-x-2"
          >
            <Map className="w-5 h-5" />
            <span>Select Location on Map</span>
          </button>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-sm text-yellow-900">
          <strong>Location Privacy:</strong> Your location is only shared with authorized rescue personnel and coordinators to facilitate emergency response.
        </p>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={() => navigate("/citizen/sos/photos")}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>
    </div>
  )
}