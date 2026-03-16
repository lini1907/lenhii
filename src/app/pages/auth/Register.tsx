import { Link, useNavigate } from "react-router"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Mail, Phone, Lock, UserCheck } from "lucide-react"

export function Register() {
  const navigate = useNavigate()

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/auth/otp")
  }

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="space-y-1 pb-4 text-center">
        <CardTitle className="text-xl">Create Citizen Account</CardTitle>
        <CardDescription>Enter details to register for emergency alerts and SOS reporting.</CardDescription>
      </CardHeader>
      <form onSubmit={handleRegister}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2 relative">
            <UserCheck className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input type="text" placeholder="Full Legal Name" required className="pl-9 bg-slate-50" />
          </div>
          <div className="grid gap-2 relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input type="tel" placeholder="Mobile Number" required className="pl-9 bg-slate-50" />
          </div>
          <div className="grid gap-2 relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input type="email" placeholder="Email Address (Optional)" className="pl-9 bg-slate-50" />
          </div>
          <div className="grid gap-2 relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input type="password" placeholder="Password" required className="pl-9 bg-slate-50" />
          </div>
          
          <Button type="submit" className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700">
            Send Verification Code
          </Button>
          
        </CardContent>
        <CardFooter className="flex flex-col border-t border-slate-100 bg-slate-50 p-6">
          <p className="text-center text-sm text-slate-600">
            Already registered?{" "}
            <Link to="/auth/login" className="font-semibold text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}