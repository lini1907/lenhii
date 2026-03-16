import { Link } from "react-router"
import { FileText, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export function MySOSRequests() {
  const requests = [
    {
      id: "SOS-2026-0314-001",
      type: "Wildfire",
      status: "In Progress",
      location: "123 Main Street",
      victims: 12,
      submittedAt: "2 hours ago",
      rescueTeam: "Team Alpha",
      statusColor: "orange",
    },
    {
      id: "SOS-2026-0312-045",
      type: "Flood",
      status: "Completed",
      location: "456 Oak Avenue",
      victims: 5,
      submittedAt: "2 days ago",
      rescueTeam: "Team Bravo",
      statusColor: "green",
    },
    {
      id: "SOS-2026-0310-023",
      type: "Building Collapse",
      status: "Completed",
      location: "789 Pine Road",
      victims: 8,
      submittedAt: "4 days ago",
      rescueTeam: "Team Charlie",
      statusColor: "green",
    },
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My SOS Requests</h1>
        <p className="text-gray-600">Track the status of your emergency requests</p>
      </div>

      <div className="space-y-6">
        {requests.map((request) => (
          <Link
            key={request.id}
            to={`/citizen/my-requests/${request.id}`}
            className="block"
          >
            <Card className="hover:border-blue-300 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{request.type}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          request.statusColor === "green"
                            ? "bg-green-100 text-green-700"
                            : request.statusColor === "orange"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {request.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Request ID: {request.id}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{request.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{request.victims} people</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{request.submittedAt}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <FileText className="w-4 h-4" />
                        <span>{request.rescueTeam}</span>
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {requests.length === 0 && (
        <div className="text-center py-16">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">No SOS requests yet</h3>
          <p className="text-gray-600 mb-6">You haven't submitted any emergency requests</p>
          <Link
            to="/citizen/sos/category"
            className="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
          >
            Submit SOS Request
          </Link>
        </div>
      )}
    </div>
  )
}