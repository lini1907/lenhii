import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { MapPin, Users, Navigation } from "lucide-react"

export function CoordinatorMap() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] gap-4">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Live Operations Map</h2>
        <div className="flex gap-4">
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 gap-1.5 px-3 py-1">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" /> 12 Active Incidents
          </Badge>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 gap-1.5 px-3 py-1">
            <div className="w-2 h-2 rounded-full bg-blue-600" /> 8 Teams Deployed
          </Badge>
        </div>
      </div>
      
      <Card className="flex-1 overflow-hidden border-slate-200 shadow-sm relative">
        <div className="absolute inset-0 opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=City&zoom=13&size=1000x600&maptype=roadmap&key=AIzaSy...')] bg-cover bg-center" />
        
        {/* Fake Map Items */}
        <div className="absolute top-1/3 left-1/3">
          <div className="relative">
             <span className="absolute -inset-4 bg-red-500 rounded-full opacity-20 animate-ping"></span>
             <MapPin className="w-10 h-10 text-red-600 absolute -top-10 -left-5 drop-shadow-md" />
          </div>
          <div className="absolute top-4 left-6 bg-white p-2 rounded shadow-lg border border-red-100 z-10 w-48 text-xs">
            <p className="font-bold text-slate-900 mb-1">SOS-9940 (Critical)</p>
            <p className="text-slate-500">Medical Emergency, 2 affected.</p>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2">
           <div className="w-8 h-8 bg-blue-600 rounded-full text-white flex items-center justify-center shadow-lg border-2 border-white -ml-4 -mt-4 z-10">
             <Navigation className="w-4 h-4" />
           </div>
           <svg className="absolute -top-16 -left-20 w-32 h-32 pointer-events-none" style={{zIndex: 1}}>
              <path d="M 100,80 Q 50,50 0,0" stroke="#3b82f6" strokeWidth="3" strokeDasharray="4 4" fill="none" className="opacity-60" />
           </svg>
        </div>

      </Card>
    </div>
  )
}