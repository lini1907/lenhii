import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Users, Activity, AlertTriangle, CheckCircle } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", incidents: 40, verified: 24 },
  { name: "Tue", incidents: 30, verified: 13 },
  { name: "Wed", incidents: 20, verified: 18 },
  { name: "Thu", incidents: 27, verified: 19 },
  { name: "Fri", incidents: 18, verified: 9 },
  { name: "Sat", incidents: 23, verified: 12 },
  { name: "Sun", incidents: 34, verified: 28 },
]

export function SystemManagement() {
  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">System Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Registered Citizens</p>
              <p className="text-2xl font-bold text-slate-900">142,893</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Active Rescue Teams</p>
              <p className="text-2xl font-bold text-slate-900">48</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Weekly Incidents</p>
              <p className="text-2xl font-bold text-slate-900">192</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Resolution Rate</p>
              <p className="text-2xl font-bold text-slate-900">94%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Incident Reporting Volume</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer key="rc" width="100%" height="100%">
              <BarChart key="bc" id="system-chart" data={data}>
                <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} />
                <XAxis key="x-axis" dataKey="name" axisLine={false} tickLine={false} />
                <YAxis key="y-axis" axisLine={false} tickLine={false} />
                <Tooltip key="tooltip" />
                <Bar key="bar-incidents" dataKey="incidents" fill="#94a3b8" radius={[4, 4, 0, 0]} name="Total Reports" />
                <Bar key="bar-verified" dataKey="verified" fill="#ef4444" radius={[4, 4, 0, 0]} name="Verified Emergencies" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}