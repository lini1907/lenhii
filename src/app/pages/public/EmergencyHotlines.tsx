import { Phone, Clock, MapPin, Globe, AlertTriangle } from "lucide-react"

export function EmergencyHotlines() {
  const primaryContacts = [
    {
      service: "Emergency Services",
      number: "911",
      description: "For immediate life-threatening emergencies",
      availability: "24/7",
      color: "red",
    },
    {
      service: "Disaster Response Hotline",
      number: "1-800-DISASTER",
      description: "Disaster relief and coordination",
      availability: "24/7",
      color: "orange",
    },
    {
      service: "Medical Emergency",
      number: "1-800-MEDICAL",
      description: "Non-life-threatening medical assistance",
      availability: "24/7",
      color: "blue",
    },
  ]

  const specializedServices = [
    {
      category: "Fire & Rescue",
      contacts: [
        { service: "Fire Department", number: "911" },
        { service: "Fire Prevention Hotline", number: "1-800-555-FIRE" },
        { service: "Wildfire Info Line", number: "1-800-555-WILD" },
      ],
    },
    {
      category: "Health Services",
      contacts: [
        { service: "Poison Control", number: "1-800-222-1222" },
        { service: "Mental Health Crisis", number: "988" },
        { service: "Hospital Emergency", number: "1-800-555-HOSP" },
      ],
    },
    {
      category: "Utilities & Infrastructure",
      contacts: [
        { service: "Power Outage", number: "1-800-555-POWER" },
        { service: "Gas Emergency", number: "1-800-555-GASL" },
        { service: "Water Department", number: "1-800-555-WATER" },
      ],
    },
    {
      category: "Support Services",
      contacts: [
        { service: "Red Cross", number: "1-800-RED-CROSS" },
        { service: "Disaster Relief Fund", number: "1-800-555-HELP" },
        { service: "Shelter Information", number: "1-800-555-SHELTER" },
      ],
    },
  ]

  const regionalOffices = [
    {
      region: "Northern District",
      address: "123 Emergency Lane, North City",
      phone: "1-800-555-NORTH",
      hours: "Mon-Fri 8AM-5PM",
    },
    {
      region: "Southern District",
      address: "456 Response Road, South City",
      phone: "1-800-555-SOUTH",
      hours: "Mon-Fri 8AM-5PM",
    },
    {
      region: "Eastern District",
      address: "789 Safety Street, East City",
      phone: "1-800-555-EAST",
      hours: "Mon-Fri 8AM-5PM",
    },
    {
      region: "Western District",
      address: "321 Help Highway, West City",
      phone: "1-800-555-WEST",
      hours: "Mon-Fri 8AM-5PM",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-8 lg:px-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Phone className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency Hotlines</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick access to emergency contact numbers and support services available 24/7
          </p>
        </div>

        {/* Primary Emergency Contacts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Primary Emergency Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {primaryContacts.map((contact, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border-2 shadow-lg overflow-hidden ${
                  contact.color === "red"
                    ? "border-red-300"
                    : contact.color === "orange"
                    ? "border-orange-300"
                    : "border-blue-300"
                }`}
              >
                <div
                  className={`px-6 py-4 ${
                    contact.color === "red"
                      ? "bg-red-600"
                      : contact.color === "orange"
                      ? "bg-orange-600"
                      : "bg-blue-600"
                  } text-white`}
                >
                  <h3 className="font-bold text-lg">{contact.service}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <a
                      href={`tel:${contact.number.replace(/[^0-9]/g, "")}`}
                      className="text-4xl font-bold text-gray-900 hover:text-blue-600"
                    >
                      {contact.number}
                    </a>
                  </div>
                  <p className="text-gray-700 mb-4">{contact.description}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{contact.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOS Button */}
        <div className="mb-12 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8 shadow-lg text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Need Immediate Rescue?</h2>
          <p className="text-red-100 mb-6">Submit an SOS request and get connected to rescue teams instantly</p>
          <a
            href="/citizen/sos/category"
            className="inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 shadow-xl"
          >
            Submit SOS Request
          </a>
        </div>

        {/* Specialized Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialized Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 bg-gray-100 border-b border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900">{service.category}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {service.contacts.map((contact, contactIndex) => (
                      <div key={contactIndex} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{contact.service}</p>
                        </div>
                        <a
                          href={`tel:${contact.number.replace(/[^0-9]/g, "")}`}
                          className="text-blue-600 hover:text-blue-700 font-bold"
                        >
                          {contact.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Emergency Offices */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Emergency Management Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regionalOffices.map((office, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">{office.region}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{office.address}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <a href={`tel:${office.phone.replace(/[^0-9]/g, "")}`} className="text-blue-600 hover:text-blue-700 font-medium">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Resources */}
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Online Resources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Live Disaster Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="/alerts" className="text-blue-600 hover:underline">Active Disaster Alerts</a></li>
                <li>• <a href="/map" className="text-blue-600 hover:underline">Live Disaster Map</a></li>
                <li>• <a href="/incidents" className="text-blue-600 hover:underline">Verified Incident Reports</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Safety Resources</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="/safety" className="text-blue-600 hover:underline">Safety Guidelines</a></li>
                <li>• <a href="/citizen/sos/category" className="text-blue-600 hover:underline">Submit SOS Request</a></li>
                <li>• <a href="/auth/citizen/login" className="text-blue-600 hover:underline">Track My SOS Request</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}