import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { AlertTriangle, Mail, Lock, ArrowRight } from "lucide-react"
import { signInWithEmail } from "../../services/authService"

export function CitizenLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    signInWithEmail({ email, password, expectedRole: "citizen" })
      .then(() => {
        localStorage.setItem("citizenAuthenticated", "true")
        navigate("/citizen")
      })
      .catch((err) => {
        setError(err.message ?? "Login failed")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Citizen Login</h1>
          <p className="text-gray-600">Sign in to submit SOS requests and track your reports</p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> You only need to log in when submitting SOS requests or tracking rescue status.
            Public information is accessible without login.
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2 mb-2">
                {error}
              </p>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/auth/forgot-password" className="text-sm text-red-600 hover:text-red-700 font-medium">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span>{loading ? "Signing in..." : "Sign In"}</span>
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/auth/citizen/register" className="text-red-600 hover:text-red-700 font-medium">
                Register Now
              </Link>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 text-center space-y-2">
          <Link to="/" className="block text-sm text-gray-600 hover:text-gray-900">
            ← Back to Public Portal
          </Link>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <Link to="/auth/coordinator/login" className="text-blue-600 hover:underline">
              Coordinator Login
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/auth/rescue/login" className="text-blue-600 hover:underline">
              Rescue Team Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
