import { useEffect } from "react"
import { useNavigate } from "react-router"
import { Loader2, CheckCircle } from "lucide-react"

export function SOSSubmitting() {
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate submission process
    const timer = setTimeout(() => {
      navigate("/citizen/sos/confirmation")
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-12">
          <Loader2 className="w-16 h-16 text-red-600 mx-auto mb-6 animate-spin" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Submitting SOS Request...</h1>
          <p className="text-gray-600 mb-8">
            Please wait while we process your emergency request and notify rescue teams
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-left">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-sm text-gray-700">Validating incident information</p>
            </div>
            <div className="flex items-center space-x-3 text-left">
              <Loader2 className="w-5 h-5 text-blue-600 flex-shrink-0 animate-spin" />
              <p className="text-sm text-gray-700">Notifying emergency coordinators</p>
            </div>
            <div className="flex items-center space-x-3 text-left opacity-50">
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0"></div>
              <p className="text-sm text-gray-500">Assigning rescue team</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6">This usually takes a few seconds...</p>
      </div>
    </div>
  )
}
