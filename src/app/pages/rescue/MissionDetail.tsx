import { useParams, Link } from "react-router"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { MapPin, Users, Clock, AlertCircle, Camera, Phone, Navigation, CheckCircle, XCircle } from "lucide-react"

export function MissionDetail() {
  const { id } = useParams()

  const missionData = {
    id: id || "SOS-9940",
    type: "Medical Emergency",
    status: "New Dispatch",
    urgency: "Critical",
    location: "North Highway Bridge, Sector 4",
    coordinates: "28.6139° N, 77.2090° E",
    distance: "2.4 km",
    dispatchTime: "2:45 PM, March 14, 2026",
    reporter: "Rajesh Kumar",
    reporterPhone: "+91-9876543210",
    victims: 3,
    description: "Vehicle collision with multiple injuries. Three victims trapped in vehicle. One victim unconscious, two with severe bleeding. Urgent medical assistance required.",
    photos: ["https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?w=400"],
    resources: ["Ambulance", "Paramedics", "Fire Extraction Team"]
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Mission Details</h1>
            <Badge variant="destructive" className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-sm">
              {missionData.urgency} Priority
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200 px-3 py-1 text-sm border">
              {missionData.status}
            </Badge>
          </div>
          <p className="text-slate-500">Mission ID: <span className="font-bold text-slate-700">{missionData.id}</span></p>
        </div>
        <Link to="/rescue/missions" className="text-blue-600 hover:text-blue-800 font-medium">
          &larr; Back to Mission Queue
        </Link>
      </div>

      {/* Alert Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="bg-red-100 p-2 rounded-lg shrink-0">
            <AlertCircle className="w-6 h-6 text-red-600 animate-pulse" />
          </div>
          <div>
            <p className="font-bold text-red-900 text-lg">Critical Emergency</p>
            <p className="text-red-700 mt-1">Immediate response required - Multiple casualties reported</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-6">
          
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{missionData.type}</h2>
                  <p className="text-sm text-slate-500">Dispatched: {missionData.dispatchTime}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Incident Description</h3>
                  <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                    {missionData.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Victims
                    </h3>
                    <p className="text-slate-900 font-bold text-lg">{missionData.victims} people</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Required Resources</h3>
                    <div className="flex flex-wrap gap-2">
                      {missionData.resources.map((resource, index) => (
                        <Badge key={index} className="bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200">
                          {resource}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reporter Information */}
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" /> Reporter Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500">Name</p>
                    <p className="text-slate-900 font-medium">{missionData.reporter}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Contact</p>
                    <div className="flex items-center justify-between">
                      <p className="text-slate-900 font-medium">{missionData.reporterPhone}</p>
                      <a href={`tel:${missionData.reporterPhone}`} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors text-sm font-bold">
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photos */}
            {missionData.photos && missionData.photos.length > 0 && (
              <Card className="bg-white border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-slate-500" /> Scene Photos
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {missionData.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Scene ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border border-slate-200"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Right Column: Map & Actions */}
        <div className="space-y-6">
          <Card className="bg-white border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
            <div className="bg-slate-100 h-64 relative w-full border-b border-slate-200">
              {/* Simulated Map */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')] bg-cover bg-center opacity-50" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="absolute -inset-2 bg-red-500 rounded-full opacity-30 animate-ping"></span>
                <div className="bg-red-600 text-white p-2 rounded-full relative z-10 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
            </div>
            
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-blue-600" /> Location Details
              </h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Address</p>
                  <p className="text-slate-900 font-medium">{missionData.location}</p>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div>
                    <p className="text-sm text-slate-500">Coordinates</p>
                    <p className="text-slate-700 text-sm font-mono mt-0.5">{missionData.coordinates}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Distance</p>
                    <p className="text-blue-700 font-bold">{missionData.distance}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons at the bottom of the card */}
              <div className="mt-auto space-y-3">
                <Link to={`/rescue/missions/${id}/accept`} className="block">
                  <button className="w-full h-14 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
                    <CheckCircle className="w-5 h-5" />
                    ACCEPT MISSION
                  </button>
                </Link>
                <Link to={`/rescue/missions/${id}/reject`} className="block">
                  <button className="w-full h-12 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
                    <XCircle className="w-5 h-5" />
                    Reject / Reassign
                  </button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
