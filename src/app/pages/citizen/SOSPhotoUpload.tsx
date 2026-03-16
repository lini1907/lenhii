import { useState } from "react"
import { useNavigate } from "react-router"
import { ArrowRight, ArrowLeft, Camera, Upload, X } from "lucide-react"

export function SOSPhotoUpload() {
  const navigate = useNavigate()
  const [photos, setPhotos] = useState<string[]>([])

  const handleFileUpload = () => {
    // Simulate photo upload
    const newPhoto = `https://images.unsplash.com/photo-1584438784884-47f8e050e0c8?w=300&h=300&fit=crop`
    setPhotos([...photos, newPhoto])
  }

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index))
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step 4 of 8</span>
          <span className="text-sm text-gray-500">Upload Photos</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 rounded-full" style={{ width: "50%" }}></div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <Camera className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Add photos or videos</h1>
            <p className="text-gray-600">Visual evidence helps rescue teams prepare (Optional)</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
        {/* Upload Area */}
        <button
          onClick={handleFileUpload}
          className="w-full border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-red-400 hover:bg-red-50 transition-colors"
        >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-900 mb-2">Click to upload photos or videos</p>
          <p className="text-sm text-gray-500">PNG, JPG, MP4 up to 50MB</p>
        </button>

        {/* Photo Grid */}
        {photos.length > 0 && (
          <div className="mt-6 grid grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <img src={photo} alt={`Upload ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
                <button
                  onClick={() => removePhoto(index)}
                  className="absolute top-2 right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="font-bold text-blue-900 mb-3">Photo Guidelines:</h3>
        <ul className="space-y-2 text-sm text-blue-900">
          <li>• Show the extent of damage or hazard</li>
          <li>• Capture any obstacles to access</li>
          <li>• Include landmarks for location reference</li>
          <li>• Avoid photos with sensitive personal information</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => navigate("/citizen/sos/victims")}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 flex items-center space-x-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <button
          onClick={() => navigate("/citizen/sos/location-auto")}
          className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 flex items-center space-x-2"
        >
          <span>Continue</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}