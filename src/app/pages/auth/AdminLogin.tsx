import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { Settings, Mail, Lock, ArrowRight } from "lucide-react"
import { signInWithEmail } from "../../services/authService"

export function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    signInWithEmail({ email, password, expectedRole: "admin" })
      .then(() => {
        navigate("/admin")
      })
      .catch((err) => {
        setError(err.message ?? "Login failed")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Portal</h1>
          <p className="text-slate-600">Manage system users, roles, and configuration</p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
          <p className="text-sm text-purple-900">
            <strong>System Administrators Only:</strong> Access is restricted to approved admin accounts.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2 mb-2">
                {error}
              </p>
            )}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Admin Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@emergency.gov"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter secure password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span>{loading ? "Signing in..." : "Access Admin"}</span>
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>
        </div>

        <div className="mt-6 text-center space-y-2">
          <Link to="/" className="block text-sm text-slate-600 hover:text-slate-900">
            ← Back to Public Portal
          </Link>
        </div>
      </div>
    </div>
  )
}

