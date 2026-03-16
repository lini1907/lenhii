import { Link, useParams } from "react-router"
import { AlertTriangle, MapPin, Clock, Users, ArrowLeft, Navigation, Phone, Share2 } from "lucide-react"

export function DisasterAlertDetail() {
  const { id } = useParams()

  // Mock data - in real app, fetch based on id
  const alert = {
    id: id || "1",
    type: "Wildfire",
    severity: "Critical",
    title: "Major Wildfire Spreading in Northern Hills",
    location: "Northern Hills District",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    affectedAreas: ["Zone A", "Zone B", "Zone C"],
    time: "2 hours ago",
    issuedAt: "March 14, 2026 10:30 AM",
    status: "Active",
    description:
      "A fast-moving wildfire has been reported in the Northern Hills District. Strong winds are contributing to rapid spread. Multiple structures are threatened. Immediate evacuation is recommended for all residents in affected zones.",
    updates: [
      { time: "2 hours ago", message: "Fire crews deployed to establish containment lines" },
      { time: "1 hour ago", message: "Evacuation orders issued for Zone A and Zone B" },
      { time: "30 minutes ago", message: "Additional units requested from neighboring districts" },
    ],
    safetyInstructions: [
      "Evacuate immediately if you are in Zone A, B, or C",
      "Follow designated evacuation routes only",
      "Take essential items and important documents",
      "Close all windows and doors before leaving",
      "Do not return until authorities declare it safe",
    ],
    evacuationCenters: [
      { name: "Central Community Center", address: "123 Main St", capacity: "500 people" },
      { name: "Sports Complex", address: "456 Oak Ave", capacity: "800 people" },
    ],
    estimatedAffected: "15,000",
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/alerts"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Alerts</span>
        </Link>

        {/* Alert Header */}
        <div className="bg-white rounded-xl border-2 border-red-300 shadow-lg overflow-hidden mb-6">
          <div
            className={`px-6 py-4 ${
              alert.severity === "Critical" ? "bg-red-600" : "bg-orange-600"
            } text-white`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-8 h-8" />
                <div>
                  <p className="text-sm font-medium opacity-90">{alert.type} Alert</p>
                  <h1 className="text-2xl font-bold">{alert.title}</h1>
                </div>
              </div>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                {alert.severity}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">{alert.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Issued</p>
                  <p className="font-medium text-gray-900">{alert.issuedAt}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Est. Affected</p>
                  <p className="font-medium text-gray-900">{alert.estimatedAffected} people</p>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">{alert.description}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
            <Navigation className="w-5 h-5" />
            <span>Navigate to Safety</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700">
            <Phone className="w-5 h-5" />
            <span>Emergency Contact</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700">
            <Share2 className="w-5 h-5" />
            <span>Share Alert</span>
          </button>
        </div>

        {/* Safety Instructions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Safety Instructions</h2>
          <ul className="space-y-3">
            {alert.safetyInstructions.map((instruction, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-gray-700">{instruction}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Affected Areas */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Affected Areas</h2>
          <div className="flex flex-wrap gap-3">
            {alert.affectedAreas.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-red-50 text-red-700 rounded-lg font-medium border border-red-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Evacuation Centers */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Evacuation Centers</h2>
          <div className="space-y-4">
            {alert.evacuationCenters.map((center, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200"
              >
                <div>
                  <h3 className="font-bold text-gray-900">{center.name}</h3>
                  <p className="text-sm text-gray-600">{center.address}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Capacity</p>
                  <p className="font-bold text-gray-900">{center.capacity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Updates */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Live Updates</h2>
          <div className="space-y-4">
            {alert.updates.map((update, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{update.time}</p>
                  <p className="text-gray-900">{update.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
