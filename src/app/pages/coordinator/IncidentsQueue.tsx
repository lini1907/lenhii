import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { Input } from "../../components/ui/input"
import { Search, Filter, Check, X, MapPin, Eye, AlertTriangle, Bell } from "lucide-react"
import { Link } from "react-router"

export function IncidentsQueue() {
  const [filter, setFilter] = useState("unverified")
  
  const incidents = [
    { id: "SOS-9942", type: "Flood", location: "Downtown District", time: "2 mins ago", status: "unverified", dup: false, affected: 5 },
    { id: "SOS-9941", type: "Flood", location: "Downtown District", time: "5 mins ago", status: "unverified", dup: true, affected: 3 },
    { id: "SOS-9940", type: "Medical", location: "North Highway", time: "15 mins ago", status: "verified", dup: false, affected: 1 },
    { id: "SOS-9939", type: "Fire", location: "Industrial Park", time: "22 mins ago", status: "rejected", dup: false, affected: 0 }
  ]

  const filtered = incidents.filter(i => i.status === filter)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Incident Queue</h2>
          <p className="text-slate-500 text-sm">Review, verify, and dismiss incoming emergency reports.</p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto items-center">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input placeholder="Search SOS ID or location..." className="pl-9 bg-white" />
          </div>
          <Button variant="outline" size="icon" className="bg-white shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
          <Link
            to="/coordinator/create-alert"
            className="flex bg-red-600 text-white px-4 py-2 rounded-md font-bold items-center justify-center space-x-2 hover:bg-red-700 transition-colors shadow-sm ml-1 h-10 whitespace-nowrap"
          >
            <Bell className="w-4 h-4" />
            <span className="hidden sm:inline">Create Alert</span>
          </Link>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
        {["unverified", "verified", "rejected"].map((status) => (
          <Button
            key={status}
            variant={filter === status ? "default" : "outline"}
            onClick={() => setFilter(status)}
            className={`capitalize whitespace-nowrap ${filter === status ? "bg-red-600 text-white hover:bg-red-700" : "bg-white text-slate-600 hover:text-slate-900"}`}
          >
            {status} ({incidents.filter(i => i.status === status).length})
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Incident List Table */}
        <Card className="lg:col-span-2 border-slate-200 shadow-sm overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 bg-slate-50/80 border-b border-slate-200 uppercase">
                <tr>
                  <th className="px-6 py-4 font-semibold">Incident ID</th>
                  <th className="px-6 py-4 font-semibold">Type & Area</th>
                  <th className="px-6 py-4 font-semibold">Time</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((item) => (
                  <tr key={item.id} className={`hover:bg-slate-50/50 transition-colors ${item.dup ? "bg-orange-50/30" : ""}`}>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900 flex items-center gap-2">
                        {item.id}
                        {item.dup && (
                          <Badge variant="outline" className="text-[10px] px-1.5 py-0 text-orange-600 border-orange-200 bg-orange-50">
                            Possible Duplicate
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">Affected: {item.affected}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{item.type}</div>
                      <div className="text-slate-500 flex items-center gap-1 text-xs mt-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500">
                      {item.time}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm" className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50">
                          <Eye className="w-4 h-4 mr-1" /> View
                        </Button>
                        {item.status === 'unverified' && (
                          <>
                            <Button size="sm" className="h-8 bg-emerald-600 hover:bg-emerald-700 text-white px-3">
                              <Check className="w-4 h-4 mr-1" /> Verify
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8 text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-200">
                              <X className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                      No {filter} incidents found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Side Panels */}
        <div className="space-y-6">
          <Card className="border-slate-200 shadow-sm bg-white">
            <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50">
              <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" /> Selected Incident Location
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <div className="h-48 w-full bg-slate-200 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Downtown&zoom=14&size=400x200&maptype=roadmap&key=AIzaSy...')] bg-cover bg-center" />
                 <div className="absolute top-1/2 left-1/2 -ml-2 -mt-4">
                  <span className="absolute -inset-1 bg-red-500 rounded-full opacity-40 animate-ping"></span>
                  <MapPin className="w-6 h-6 text-red-600 relative z-10" />
                 </div>
               </div>
            </CardContent>
          </Card>

          <Card className="border-red-100 shadow-sm bg-white">
            <CardHeader className="pb-3 border-b border-red-50 bg-red-50/30">
              <CardTitle className="text-sm font-semibold text-red-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600" /> Data Comparison
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-500">Gov Weather Data</span>
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Severe Flood Risk</Badge>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-500">Water Level Sensor</span>
                <span className="font-semibold text-slate-900">+4.2m (Critical)</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-500">Report Confidence</span>
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none">High (85%)</Badge>
              </div>
              <p className="text-xs text-slate-400 mt-2">Correlated with 2 nearby sensors and official meteorological alerts.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}