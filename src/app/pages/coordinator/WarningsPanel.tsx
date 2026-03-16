import { useState } from "react"
import { Link } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { AlertTriangle, Radio, BellRing, MapPin } from "lucide-react"

export function WarningsPanel() {
  const [broadcastMessage, setBroadcastMessage] = useState("")

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Early Warning System</h2>
          <p className="text-slate-500 text-sm">Manage disaster alerts and broadcast warnings to citizens.</p>
        </div>
        <Link 
          to="/coordinator/create-alert"
          className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold flex items-center space-x-2 hover:bg-red-700 transition-colors shadow-sm"
        >
          <BellRing className="w-5 h-5" />
          <span>Create Alert</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <Card className="border-red-200 shadow-sm bg-red-50/20">
          <CardHeader className="border-b border-red-100 bg-red-50/50">
            <CardTitle className="text-lg flex items-center gap-2 text-red-800">
              <Radio className="w-5 h-5" />
              Broadcast Emergency Alert
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Affected Area</label>
              <select className="w-full h-10 px-3 border border-slate-300 rounded-md bg-white focus:ring-2 focus:ring-red-500 outline-none">
                <option>All Districts (Citywide)</option>
                <option>Downtown Area</option>
                <option>Northern Suburbs</option>
                <option>Riverside Zones</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Alert Message</label>
              <textarea 
                className="w-full h-32 p-3 border border-slate-300 rounded-md resize-none bg-white focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter the official warning message to broadcast..."
                value={broadcastMessage}
                onChange={(e) => setBroadcastMessage(e.target.value)}
              ></textarea>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Severity Level</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="severity" defaultChecked className="text-red-600 focus:ring-red-600" />
                  <span className="text-sm text-red-700 font-medium">Critical (Evacuate)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="severity" className="text-orange-500 focus:ring-orange-500" />
                  <span className="text-sm text-orange-700 font-medium">Warning (Prepare)</span>
                </label>
              </div>
            </div>

            <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-bold mt-4" disabled={!broadcastMessage}>
              <BellRing className="w-5 h-5 mr-2" /> SEND BROADCAST
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="border-b border-slate-100 bg-slate-50/50 pb-3">
              <CardTitle className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-500" /> Metrological Data Feeds
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-3 border border-red-100 bg-red-50 rounded-lg flex gap-3 items-start">
                <div className="bg-red-100 text-red-600 p-2 rounded flex-shrink-0"><AlertTriangle className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-red-900 text-sm">Typhoon Warning: Signal 3</h4>
                  <p className="text-xs text-red-700 mt-1">Expected landfall in 4 hours. High risk of storm surges in coastal areas.</p>
                  <p className="text-[10px] text-red-500 mt-2 font-medium uppercase tracking-wider">Source: Nat'l Weather Bureau</p>
                </div>
              </div>
              
              <div className="p-3 border border-orange-100 bg-orange-50 rounded-lg flex gap-3 items-start">
                <div className="bg-orange-100 text-orange-600 p-2 rounded flex-shrink-0"><MapPin className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-orange-900 text-sm">River Water Level: Critical</h4>
                  <p className="text-xs text-orange-700 mt-1">Sensor at Riverside Bridge reads +5.2m (overflow imminent).</p>
                  <p className="text-[10px] text-orange-500 mt-2 font-medium uppercase tracking-wider">Source: Flood Control Auth</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}