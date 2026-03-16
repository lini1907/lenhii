import { Shield, AlertTriangle, Flame, Droplets, Wind, Mountain } from "lucide-react"

export function SafetyGuidelines() {
  const guidelines = [
    {
      icon: Flame,
      title: "Wildfire Safety",
      color: "orange",
      steps: [
        "Create defensible space around your home by removing flammable materials",
        "Keep emergency supplies ready: water, food, medications, flashlight",
        "Monitor local news and evacuation orders",
        "If ordered to evacuate, leave immediately - don't wait",
        "Close all windows and doors to prevent embers from entering",
        "Turn off gas valves and pilot lights",
      ],
    },
    {
      icon: Droplets,
      title: "Flood Safety",
      color: "blue",
      steps: [
        "Never walk, swim, or drive through flood waters",
        "Move to higher ground immediately if flooding is occurring",
        "Avoid bridges over fast-moving water",
        "Turn off utilities if instructed to do so",
        "Do not touch electrical equipment if wet",
        "Listen to emergency broadcasts for evacuation information",
      ],
    },
    {
      icon: Wind,
      title: "Storm & Hurricane Safety",
      color: "gray",
      steps: [
        "Secure outdoor objects or bring them indoors",
        "Close storm shutters or board up windows",
        "Stay indoors away from windows and glass doors",
        "Take refuge in a small interior room or hallway",
        "Do not use candles - use flashlights instead",
        "Stay informed through battery-powered radio",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Earthquake Safety",
      color: "red",
      steps: [
        "DROP to the ground, take COVER under furniture, HOLD ON",
        "Stay away from windows, mirrors, and hanging objects",
        "If outdoors, move away from buildings and power lines",
        "If driving, pull over safely and stay in vehicle",
        "After shaking stops, check for injuries and damage",
        "Expect aftershocks and be prepared to drop, cover, and hold on",
      ],
    },
    {
      icon: Mountain,
      title: "Landslide Safety",
      color: "brown",
      steps: [
        "Listen for unusual sounds that might indicate moving debris",
        "Move away from the path of a landslide as quickly as possible",
        "If indoors, stay inside and get under a desk or table",
        "If outdoors, run to nearest high ground in a direction away from the slide",
        "Avoid river valleys and low-lying areas",
        "Watch for flooding after landslides",
      ],
    },
    {
      icon: AlertTriangle,
      title: "General Emergency Preparedness",
      color: "purple",
      steps: [
        "Prepare an emergency kit with 3 days of supplies",
        "Create a family communication plan",
        "Know your evacuation routes",
        "Keep important documents in waterproof container",
        "Register for local emergency alerts",
        "Learn basic first aid and CPR",
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; icon: string } } = {
      orange: { bg: "bg-orange-100", text: "text-orange-700", icon: "text-orange-600" },
      blue: { bg: "bg-blue-100", text: "text-blue-700", icon: "text-blue-600" },
      gray: { bg: "bg-gray-100", text: "text-gray-700", icon: "text-gray-600" },
      red: { bg: "bg-red-100", text: "text-red-700", icon: "text-red-600" },
      brown: { bg: "bg-amber-100", text: "text-amber-700", icon: "text-amber-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-700", icon: "text-purple-600" },
    }
    return colors[color] || colors.gray
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-8 lg:px-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Safety Guidelines</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential safety procedures for different disaster scenarios. Read and familiarize yourself with these
            guidelines to stay safe during emergencies.
          </p>
        </div>

        {/* Emergency Contact Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-6 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">In Case of Emergency</h2>
              <p className="text-red-100">Call 911 immediately or submit an SOS request through our platform</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="tel:911"
                className="px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50"
              >
                Call 911
              </a>
              <a
                href="/citizen/sos/category"
                className="px-6 py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-800"
              >
                Submit SOS
              </a>
            </div>
          </div>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guidelines.map((guideline, index) => {
            const Icon = guideline.icon
            const colors = getColorClasses(guideline.color)
            return (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className={`px-6 py-4 ${colors.bg}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h2 className={`text-xl font-bold ${colors.text}`}>{guideline.title}</h2>
                  </div>
                </div>

                <div className="p-6">
                  <ol className="space-y-3">
                    {guideline.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start space-x-3">
                        <div
                          className={`w-7 h-7 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <span className={`text-sm font-bold ${colors.text}`}>{stepIndex + 1}</span>
                        </div>
                        <span className="text-gray-700 flex-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Emergency Kit Checklist</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Water (1 gallon per person per day)</li>
                <li>• Non-perishable food (3-day supply)</li>
                <li>• Flashlight and batteries</li>
                <li>• First aid kit</li>
                <li>• Medications</li>
                <li>• Important documents</li>
              </ul>
            </div>

            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Family Communication Plan</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Designate out-of-state contact</li>
                <li>• Share emergency contact info</li>
                <li>• Choose meeting locations</li>
                <li>• Keep contacts updated</li>
                <li>• Practice your plan regularly</li>
              </ul>
            </div>

            <div className="p-6 bg-orange-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Stay Informed</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Monitor local news and weather</li>
                <li>• Sign up for emergency alerts</li>
                <li>• Follow official social media</li>
                <li>• Know your evacuation routes</li>
                <li>• Understand warning systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}