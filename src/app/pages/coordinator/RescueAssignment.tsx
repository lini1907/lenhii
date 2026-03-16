import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import { MapPin, Users, Activity, CheckCircle2, Search, Clock, ShieldAlert } from "lucide-react"

export function RescueAssignment() {
  const [selectedIncident, setSelectedIncident] = useState("SOS-9940")

  const incidents = [
    { id: "SOS-9940", type: "Medical Emergency", location: "North Highway Bridge", time: "15 mins ago", severity: "High" },
    { id: "SOS-9937", type: "Flood Trapped", location: "Downtown District", time: "30 mins ago", severity: "Critical" },
  ]

  const teams = [
    { id: "Alpha-1", status: "Available", distance: "2.5 km", type: "Medical / Swift Water", members: 4 },
    { id: "Bravo-2", status: "Available", distance: "4.1 km", type: "Heavy Rescue", members: 6 },
    { id: "Charlie-3", status: "On Mission", distance: "1.2 km", type: "Medical", members: 3 },
  ]

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-8rem)] gap-6 overflow-hidden">
      
      {/* Left Panel - Incidents */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4 overflow-hidden bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="p-4 border-b border-slate-100 bg-slate-50/80">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            Verified Incidents
          </h2>
          <p className="text-xs text-slate-500 mt-1">Select an incident to assign a team.</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {incidents.map(inc => (
            <div 
              key={inc.id}
              onClick={() => setSelectedIncident(inc.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedIncident === inc.id 
                  ? "border-orange-500 bg-orange-50 ring-2 ring-orange-500/20" 
                  : "border-slate-200 hover:border-orange-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-slate-900">{inc.id}</span>
                <Badge className={inc.severity === "Critical" ? "bg-red-100 text-red-700 hover:bg-red-100" : "bg-orange-100 text-orange-700 hover:bg-orange-100"}>
                  {inc.severity}
                </Badge>
              </div>
              <p className="font-medium text-slate-800 text-sm mb-1">{inc.type}</p>
              <div className="flex items-center text-xs text-slate-500 gap-3">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {inc.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {inc.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center/Right - Map and Teams */}
      <div className="flex-1 flex flex-col gap-6 overflow-hidden">
        
        {/* Map Area */}
        <div className="h-1/2 rounded-xl border border-slate-200 shadow-sm bg-slate-100 relative overflow-hidden flex-shrink-0">
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-slate-200 flex gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-red-600 rounded-full animate-pulse" /> Incident</div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-blue-600 rounded-sm" /> Available Team</div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-slate-400 rounded-sm opacity-50" /> Busy Team</div>
          </div>
          
          <div className="absolute inset-0 opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=City+Center&zoom=13&size=800x400&maptype=roadmap&key=AIzaSy...')] bg-cover bg-center" />
          
          {/* Fake Markers */}
          <div className="absolute top-1/2 left-1/3 -ml-3 -mt-3">
            <div className="relative">
              <span className="absolute -inset-2 bg-red-500 rounded-full opacity-30 animate-ping"></span>
              <MapPin className="w-8 h-8 text-red-600 absolute -top-8 -left-4" />
            </div>
          </div>
          
          <div className="absolute top-1/4 right-1/3">
            <Users className="w-6 h-6 text-blue-600 absolute -top-6 -left-3 bg-white rounded-full p-1 shadow-md border-2 border-blue-600" />
            <span className="absolute -top-10 -left-6 bg-blue-900 text-white text-[10px] px-1.5 py-0.5 rounded shadow whitespace-nowrap">Alpha-1</span>
          </div>
        </div>

        {/* Teams List */}
        <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              Available Rescue Teams
            </h3>
            <span className="text-xs font-medium text-slate-500 bg-slate-200 px-2 py-1 rounded-full">{teams.filter(t => t.status === 'Available').length} Ready</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map(team => (
              <Card key={team.id} className={`border ${team.status === 'Available' ? 'border-blue-100 hover:border-blue-300' : 'border-slate-100 opacity-60'} transition-colors`}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="font-bold text-slate-900">{team.id}</div>
                    <Badge variant={team.status === 'Available' ? 'success' : 'secondary'} className={team.status === 'Available' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100' : ''}>
                      {team.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 text-sm text-slate-600 mb-4">
                    <p className="flex items-center gap-2"><Activity className="w-4 h-4 text-slate-400" /> {team.type}</p>
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> {team.distance} away</p>
                    <p className="flex items-center gap-2"><Users className="w-4 h-4 text-slate-400" /> {team.members} members</p>
                  </div>
                  
                  <Button 
                    className="w-full h-10 bg-red-600 hover:bg-red-700 font-semibold text-white" 
                    disabled={team.status !== 'Available'}
                  >
                    Assign Mission
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}