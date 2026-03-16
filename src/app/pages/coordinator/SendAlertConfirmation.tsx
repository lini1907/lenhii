import { useNavigate } from "react-router"
import { CheckCircle, Bell, Users, MapPin } from "lucide-react"

export function SendAlertConfirmation() {
  const navigate = useNavigate()

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
          <CheckCircle className="w-12 h-12 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Alert Sent Successfully!</h1>
        <p className="text-xl text-slate-600 mb-8">Emergency notifications have been dispatched to all affected areas</p>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 mb-8">
          <h3 className="font-bold text-slate-900 mb-6">Alert Summary</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-orange-600" />
                <span className="text-slate-700">Alert Type</span>
              </div>
              <span className="font-bold text-slate-900">Wildfire Warning</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="text-slate-700">Affected Areas</span>
              </div>
              <span className="font-bold text-slate-900">4 zones</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700">Recipients</span>
              </div>
              <span className="font-bold text-slate-900">~15,000 people</span>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-emerald-900 mb-3">Delivery Channels</h3>
          <div className="grid grid-cols-3 gap-4 text-sm text-emerald-900">
            <div>
              <p className="font-bold text-2xl">100%</p>
              <p>SMS Sent</p>
            </div>
            <div>
              <p className="font-bold text-2xl">100%</p>
              <p>Email Sent</p>
            </div>
            <div>
              <p className="font-bold text-2xl">100%</p>
              <p>App Notifications</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/coordinator/monitoring")}
            className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50"
          >
            Back to Monitoring
          </button>
          <button
            onClick={() => navigate("/coordinator/create-alert")}
            className="flex-1 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
          >
            Send Another Alert
          </button>
        </div>
      </div>
    </div>
  )
}
