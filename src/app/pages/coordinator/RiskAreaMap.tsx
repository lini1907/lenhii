import { AlertTriangle, MapPin } from "lucide-react"

export function RiskAreaMap() {
  const riskZones = [
    { id: 1, name: "Zone A - Northern Hills", risk: "High", type: "Wildfire", lat: 60, lng: 30 },
    { id: 2, name: "Zone B - River Valley", risk: "Medium", type: "Flood", lat: 40, lng: 50 },
    { id: 3, name: "Zone C - Coastal Area", risk: "Low", type: "Storm", lat: 70, lng: 70 },
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Risk Area Map</h1>
        <p className="text-slate-600">Geographical view of disaster risk zones</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative bg-slate-100 h-[600px]">
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-10 grid-rows-10 h-full">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className="border border-slate-400"></div>
                  ))}
                </div>
              </div>

              {riskZones.map((zone) => {
                let sizeClass = 'w-16 h-16';
                let bgClass = 'bg-yellow-600/30';
                let borderClass = 'border-yellow-600';
                let textClass = 'text-yellow-600';

                if (zone.risk === 'High') {
                  sizeClass = 'w-24 h-24';
                  bgClass = 'bg-red-600/30';
                  borderClass = 'border-red-600';
                  textClass = 'text-red-600';
                } else if (zone.risk === 'Medium') {
                  sizeClass = 'w-20 h-20';
                  bgClass = 'bg-orange-600/30';
                  borderClass = 'border-orange-600';
                  textClass = 'text-orange-600';
                }

                return (
                  <div
                    key={zone.id}
                    className="absolute"
                    style={{ left: `${zone.lng}%`, top: `${zone.lat}%` }}
                  >
                    <div className={`relative group ${sizeClass} ${bgClass} rounded-full flex items-center justify-center border-2 ${borderClass}`}>
                      <AlertTriangle className={`w-8 h-8 ${textClass}`} />
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white px-3 py-2 rounded text-xs whitespace-nowrap z-10">
                        {zone.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Risk Zones</h3>
            <div className="space-y-3">
              {riskZones.map((zone) => {
                let cardBorder = 'border-yellow-300';
                let cardBg = 'bg-yellow-50';
                let badgeBg = 'bg-yellow-100';
                let badgeText = 'text-yellow-700';

                if (zone.risk === 'High') {
                  cardBorder = 'border-red-300';
                  cardBg = 'bg-red-50';
                  badgeBg = 'bg-red-100';
                  badgeText = 'text-red-700';
                } else if (zone.risk === 'Medium') {
                  cardBorder = 'border-orange-300';
                  cardBg = 'bg-orange-50';
                  badgeBg = 'bg-orange-100';
                  badgeText = 'text-orange-700';
                }

                return (
                  <div key={zone.id} className={`p-4 rounded-lg border-2 ${cardBorder} ${cardBg}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900">{zone.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${badgeBg} ${badgeText}`}>
                        {zone.risk}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{zone.type} Risk</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Legend</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                <span className="text-slate-700">High Risk</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
                <span className="text-slate-700">Medium Risk</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-yellow-600 rounded-full"></div>
                <span className="text-slate-700">Low Risk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}