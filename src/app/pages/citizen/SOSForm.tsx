import { useState } from "react"
import { useNavigate } from "react-router"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "@radix-ui/react-label"
import { MapPin, Camera, AlertTriangle, ShieldAlert, CheckCircle2, ChevronLeft } from "lucide-react"

export function SOSForm() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    type: "",
    affected: "",
    description: "",
    location: "Detecting location...",
    media: null as File | null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3) // Confirmation step
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={() => navigate("/citizen")}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold text-slate-900">Emergency SOS Report</h1>
      </div>

      <div className="flex gap-2 mb-8">
        <div className={`h-2 flex-1 rounded-full transition-colors ${step >= 1 ? 'bg-red-600' : 'bg-slate-200'}`} />
        <div className={`h-2 flex-1 rounded-full transition-colors ${step >= 2 ? 'bg-red-600' : 'bg-slate-200'}`} />
        <div className={`h-2 flex-1 rounded-full transition-colors ${step >= 3 ? 'bg-red-600' : 'bg-slate-200'}`} />
      </div>

      {step === 1 && (
        <Card className="border-red-100 shadow-md">
          <CardHeader className="bg-red-50/50 pb-6 border-b border-red-100">
            <CardTitle className="text-xl flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              Incident Details
            </CardTitle>
            <CardDescription>Provide critical information for rescue coordinators.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label className="font-semibold text-slate-700">Type of Disaster</Label>
              <select className="w-full h-11 px-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-red-600 outline-none">
                <option value="">Select Disaster Type</option>
                <option value="flood">Flood</option>
                <option value="earthquake">Earthquake</option>
                <option value="fire">Fire / Wildfire</option>
                <option value="medical">Medical Emergency</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label className="font-semibold text-slate-700">Number of People Affected</Label>
              <Input type="number" placeholder="e.g. 5" className="h-11" />
            </div>

            <div className="space-y-2">
              <Label className="font-semibold text-slate-700">Incident Description</Label>
              <textarea 
                className="w-full h-32 p-3 border border-slate-300 rounded-md resize-none focus:ring-2 focus:ring-red-600 outline-none"
                placeholder="Briefly describe the situation..."
              ></textarea>
            </div>
            
            <Button className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700" onClick={() => setStep(2)}>
              Next: Location & Evidence
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="border-red-100 shadow-md">
          <CardHeader className="bg-red-50/50 pb-6 border-b border-red-100">
            <CardTitle className="text-xl flex items-center gap-2">
              <MapPin className="w-6 h-6 text-red-600" />
              Location & Media
            </CardTitle>
            <CardDescription>Confirm your location and upload photos.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-2">
                <Label className="font-semibold text-slate-700 flex justify-between">
                  <span>Current Location</span>
                  <span className="text-blue-600 text-sm cursor-pointer hover:underline">Edit Manually</span>
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-red-600" />
                  <Input readOnly value="14.5995° N, 120.9842° E (Auto-detected)" className="pl-10 h-12 bg-slate-50 border-green-200 text-green-700 font-medium" />
                </div>
                <div className="h-40 bg-slate-200 rounded-lg mt-2 overflow-hidden relative border border-slate-300">
                   <div className="absolute inset-0 opacity-40 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Manila&zoom=15&size=600x300&maptype=roadmap&key=AIzaSy...')] bg-cover bg-center" />
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute -inset-2 bg-red-500 rounded-full opacity-30 animate-ping"></span>
                    <MapPin className="w-8 h-8 text-red-600 relative z-10 -ml-4 -mt-8" />
                   </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-semibold text-slate-700">Evidence (Photos/Videos)</Label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 flex flex-col items-center justify-center text-slate-500 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                  <Camera className="w-8 h-8 mb-2 text-slate-400" />
                  <span className="text-sm font-medium">Tap to upload photos</span>
                  <span className="text-xs mt-1">Maximum 3 files, 10MB each</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button type="button" variant="outline" className="w-1/3 h-14 font-semibold" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit" className="w-2/3 h-14 text-lg font-bold bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30">
                  <ShieldAlert className="w-5 h-5 mr-2" />
                  SUBMIT SOS
                </Button>
              </div>
            </CardContent>
          </form>
        </Card>
      )}

      {step === 3 && (
        <Card className="border-green-200 shadow-lg text-center overflow-hidden">
          <div className="bg-green-500 h-2 w-full" />
          <CardContent className="pt-12 pb-12 px-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">SOS Transmitted</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Your emergency request <strong className="text-slate-900">#SOS-9942</strong> has been received by coordination centers. Rescue teams are being assigned.
            </p>
            
            <div className="bg-slate-50 rounded-xl p-4 mb-8 text-left border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">Status</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                <span className="font-semibold text-blue-700">Verifying Request...</span>
              </div>
            </div>

            <Button className="w-full max-w-sm h-12" onClick={() => navigate("/citizen")}>
              Return to Dashboard
            </Button>
          </CardContent>
        </Card>
      )}

    </div>
  )
}