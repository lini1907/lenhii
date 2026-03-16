import { useNavigate, useParams } from "react-router"
import { CheckCircle, Users, ArrowRight } from "lucide-react"

export function IncidentApproval() {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleApprove = () => {
    setTimeout(() => {
      navigate("/coordinator/assign")
    }, 1500)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Approve Incident #{id}</h1>
        <p className="text-xl text-slate-600 mb-8">This incident will be added to the active queue</p>

        <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
          <h3 className="font-bold text-slate-900 mb-4">What happens next?</h3>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <p className="text-slate-700">Incident will be marked as verified and active</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <p className="text-slate-700">Available rescue teams will be notified</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <p className="text-slate-700">You can assign teams from the assignment panel</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => navigate(`/coordinator/incidents/${id}`)}
            className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={handleApprove}
            className="flex-1 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2"
          >
            <span>Approve Incident</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
