"use client"

import { Cloud } from "lucide-react"

export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center mb-8">
          <Cloud className="h-12 w-12 text-white mr-3" />
          <h1 className="text-3xl font-bold text-white">Cloud Carbon Footprint</h1>
        </div>

        <div className="mb-8">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto"></div>
        </div>

        <p className="text-white text-lg font-medium">Loading cloud data. This may take a while...</p>
        <p className="text-blue-200 text-sm mt-2">Analyzing your carbon footprint across all cloud providers</p>
      </div>
    </div>
  )
}
