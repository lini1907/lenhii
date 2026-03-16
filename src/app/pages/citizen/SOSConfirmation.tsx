import { Link } from "react-router"
import { CheckCircle, AlertTriangle, Phone, MapPin, Clock } from "lucide-react"

export function SOSConfirmation() {
  const requestId = "SOS-2026-0314-001"

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6 shadow-lg">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SOS Request Submitted!</h1>
          <p className="text-xl text-gray-700 mb-2">Help is on the way</p>
          <p className="text-lg text-gray-600">Request ID: <strong>{requestId}</strong></p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What happens next?</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Verification (5-10 min)</h3>
                <p className="text-gray-600">Emergency coordinators are reviewing your request and verifying incident details</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-orange-600">2</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Team Assignment (10-15 min)</h3>
                <p className="text-gray-600">The nearest available rescue team will be dispatched to your location</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-green-600">3</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Rescue Operation</h3>
                <p className="text-gray-600">Rescue teams will arrive and begin operations. You'll receive real-time updates</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-900 mb-2">Important Safety Information</h3>
              <ul className="text-sm text-red-900 space-y-1">
                <li>• Stay in a safe location if possible</li>
                <li>• Keep your phone charged and accessible</li>
                <li>• Follow instructions from rescue personnel</li>
                <li>• Call 911 if situation becomes immediately life-threatening</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900 mb-1">Emergency Line</p>
            <p className="text-lg font-bold text-blue-600">911</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900 mb-1">Your Location</p>
            <p className="text-sm text-gray-600">123 Main St</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
            <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-900 mb-1">Submitted</p>
            <p className="text-sm text-gray-600">2:30 PM</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/citizen/my-requests/${requestId}`}
            className="flex-1 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 text-center"
          >
            Track Rescue Status
          </Link>
          <Link
            to="/citizen"
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 text-center"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
