import { Link, useParams } from "react-router"
import { ArrowLeft, MapPin, Users, Clock, Shield, CheckCircle, Navigation } from "lucide-react"

export function SOSRequestDetail() {
  const { id } = useParams()

  const request = {
    id: id || "SOS-2026-0314-001",
    type: "Wildfire",
    status: "In Progress",
    location: "123 Main Street, Downtown",
    victims: 12,
    submittedAt: "March 14, 2026 2:30 PM",
    description: "Building partially collapsed. Multiple people trapped on 2nd floor.",
    rescueTeam: {
      name: "Team Alpha",
      leader: "Captain Smith",
      status: "En Route",
      eta: "15 minutes",
    },
    timeline: [
      { time: "2:30 PM", event: "SOS request submitted" },
      { time: "2:35 PM", event: "Request verified by coordinator" },
      { time: "2:40 PM", event: "Rescue Team Alpha assigned" },
      { time: "2:45 PM", event: "Team departed base" },
      { time: "Now", event: "Team en route to location" },
    ],
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Link
        to="/citizen/my-requests"
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to My Requests</span>
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden mb-6">
        <div className="px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Request ID: {request.id}</p>
              <h1 className="text-2xl font-bold">{request.type} Emergency</h1>
            </div>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
              {request.status}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-medium text-gray-900">{request.location}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">People Affected</p>
                <p className="font-medium text-gray-900">{request.victims}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Submitted</p>
                <p className="font-medium text-gray-900">{request.submittedAt}</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700">{request.description}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Assigned Rescue Team</h2>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
            {request.rescueTeam.status}
          </span>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-4">
          <h3 className="font-bold text-gray-900 mb-1">{request.rescueTeam.name}</h3>
          <p className="text-gray-600 mb-4">Led by {request.rescueTeam.leader}</p>
          <div className="flex items-center space-x-2 text-lg">
            <Navigation className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-blue-600">ETA: {request.rescueTeam.eta}</span>
          </div>
        </div>

        <button className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
          <Navigation className="w-5 h-5" />
          <span>Track Team Location</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Rescue Progress Timeline</h2>
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200"></div>
          <div className="space-y-6">
            {request.timeline.map((item, index) => (
              <div key={index} className="relative flex items-start space-x-4">
                <div className={`w-4 h-4 ${index === request.timeline.length - 1 ? 'bg-blue-600 animate-pulse' : 'bg-green-600'} rounded-full border-4 border-white relative z-10`}></div>
                <div>
                  <p className="text-sm text-gray-500">{item.time}</p>
                  <p className="font-medium text-gray-900">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}