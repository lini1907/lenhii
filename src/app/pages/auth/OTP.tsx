import { useNavigate } from "react-router"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { ShieldCheck } from "lucide-react"
import { useState } from "react"

export function OTP() {
  const navigate = useNavigate()
  const [code, setCode] = useState(["", "", "", "", "", ""])

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)
      if (value !== "" && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus()
      }
    }
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/citizen")
  }

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="space-y-4 pb-4 text-center items-center">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <CardTitle className="text-xl">Verify Account</CardTitle>
          <CardDescription>We sent a 6-digit code to your registered mobile number.</CardDescription>
        </div>
      </CardHeader>
      <form onSubmit={handleVerify}>
        <CardContent className="grid gap-6">
          <div className="flex justify-between gap-2 px-4">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-10 h-12 md:w-12 md:h-14 text-center text-xl font-bold rounded-lg border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />
            ))}
          </div>
          
          <Button type="submit" disabled={code.some(d => d === "")} className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700">
            Verify & Create Account
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col border-t border-slate-100 bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-600">
            Didn't receive code?{" "}
            <button type="button" className="font-semibold text-blue-600 hover:text-blue-500">
              Resend SMS
            </button>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}