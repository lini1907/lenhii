import { useNavigate } from "react-router"
import { ArrowRight, ArrowLeft, AlertTriangle, Users, MapPin, FileText, Camera, Edit } from "lucide-react"

export function SOSReview() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/citizen/sos/submitting")
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step 7 of 8</span>
          <span className="text-sm text-gray-500">Review & Submit</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 rounded-full" style={{ width: "87.5%" }}></div>
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Review your SOS request</h1>
        <p className="text-gray-600">Please verify all information before submitting</p>
      </div>

      <div className="space-y-6 mb-8">
        {/* Category */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Emergency Type</h3>
                <p className="text-gray-700">Wildfire</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/citizen/sos/category")}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Edit className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Incident Description</h3>
                <p className="text-gray-700">
                  Building partially collapsed after earthquake. Multiple people trapped on 2nd floor. Smoke visible. We need immediate rescue assistance.
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate("/citizen/sos/description")}
              className="p-2 hover:bg-gray-100 rounded-lg flex-shrink-0"
            >
              <Edit className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Victims */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">People Affected</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="text-sm text-gray-500">Total</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-600">5</p>
                    <p className="text-sm text-gray-500">Trapped</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-600">3</p>
                    <p className="text-sm text-gray-500">Injured</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate("/citizen/sos/victims")}
              className="p-2 hover:bg-gray-100 rounded-lg flex-shrink-0"
            >
              <Edit className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Photos */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Camera className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900">Photos & Videos</h3>
            </div>
            <button
              onClick={() => navigate("/citizen/sos/photos")}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Edit className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-700 mb-1">123 Main Street, Downtown</p>
                <p className="text-sm text-gray-500">34.0522°N, 118.2437°W</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/citizen/sos/location-manual")}
              className="p-2 hover:bg-gray-100 rounded-lg flex-shrink-0"
            >
              <Edit className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <p className="text-sm text-yellow-900">
          <strong>Important:</strong> By submitting this SOS request, you confirm that this is a genuine emergency. False reports may delay help for others and are subject to legal action.
        </p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => navigate("/citizen/sos/location-manual")}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <button
          onClick={handleSubmit}
          className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 flex items-center space-x-2 shadow-lg"
        >
          <AlertTriangle className="w-5 h-5" />
          <span>Submit SOS Request</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}