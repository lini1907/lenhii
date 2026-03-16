import { Link } from "react-router"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { MapPin, ShieldAlert, Navigation, Search, Activity, AlertCircle, AlertTriangle } from "lucide-react"
import { ImageWithFallback } from "../../components/figma/ImageWithFallback"

export function CitizenDashboard() {
  const alerts = [
    { id: 1, type: "Flood Warning", level: "Severe", location: "Downtown District", time: "10 mins ago" },
    { id: 2, type: "Road Closure", level: "Moderate", location: "Route 66 Bridge", time: "1 hr ago" }
  ]

  const myRequests = [
    { id: "SOS-8921", status: "En Route", date: "Today, 14:32", type: "Medical Emergency" }
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="border-blue-100 bg-blue-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium mb-1">Active Requests</p>
                <p className="text-3xl font-bold text-blue-900">1</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-orange-100 bg-orange-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-medium mb-1">Active Alerts</p>
                <p className="text-3xl font-bold text-orange-900">2</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-green-100 bg-green-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium mb-1">Completed</p>
                <p className="text-3xl font-bold text-green-900">5</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* SOS Section */}
          <Card className="bg-red-50 border-red-100 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <CardContent className="p-8 text-center flex flex-col items-center justify-center relative z-10">
              <ShieldAlert className="w-16 h-16 text-red-600 mb-6 animate-pulse" />
              <h2 className="text-3xl font-bold text-red-950 mb-2">Emergency Assistance</h2>
              <p className="text-red-800/80 max-w-md mx-auto mb-8">
                Press the button below to instantly alert rescue coordinators and request immediate help.
              </p>
              
              <Link to="/citizen/sos" className="block w-full max-w-xs mx-auto">
                <Button className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-red-600/30 hover:scale-105 transition-transform" variant="default">
                  SUBMIT SOS NOW
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Map Component */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-3 border-b border-slate-100 flex flex-row items-center justify-between bg-slate-50/50">
              <div className="space-y-1">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Nearby Incidents Map
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0 relative">
              <div className="h-80 w-full bg-slate-200 relative overflow-hidden">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&key=AIzaSy...')] bg-cover bg-center" />
                
                {/* Fake map elements */}
                <div className="absolute top-1/2 left-1/3">
                  <div className="relative">
                    <span className="absolute -inset-2 bg-red-500 rounded-full opacity-30 animate-ping"></span>
                    <MapPin className="w-8 h-8 text-red-600 absolute -top-8 -left-4" />
                  </div>
                </div>

                <div className="absolute top-1/4 right-1/4">
                  <MapPin className="w-6 h-6 text-yellow-500 absolute -top-6 -left-3" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Active Requests */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                My Rescue Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              {myRequests.length > 0 ? (
                <div className="space-y-4">
                  {myRequests.map((req) => (
                    <div key={req.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-slate-900">{req.id}</span>
                        <Badge variant="default" className="bg-blue-600 hover:bg-blue-600">{req.status}</Badge>
                      </div>
                      <p className="text-sm text-slate-600 mb-1">{req.type}</p>
                      <p className="text-xs text-slate-400">{req.date}</p>
                    </div>
                  ))}
                  <Link to="/citizen/my-requests">
                    <Button variant="outline" className="w-full">View All Requests</Button>
                  </Link>
                </div>
              ) : (
                <p className="text-sm text-slate-500 text-center py-4">No active rescue requests.</p>
              )}
            </CardContent>
          </Card>

          {/* Area Warnings */}
          <Card className="border-red-100">
            <CardHeader className="pb-3 bg-red-50/50">
              <CardTitle className="text-lg flex items-center gap-2 text-red-900">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Disaster Warnings
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg border border-red-100/50 bg-white shadow-sm">
                    <div className={`p-2 rounded-full mt-0.5 ${alert.level === 'Severe' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{alert.type}</h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {alert.location}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}