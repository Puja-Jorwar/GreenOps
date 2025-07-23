"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface RegionalEmissionsProps {
  data: Array<{
    region: string
    emissions: number
    intensity: number
  }>
}

export function RegionalEmissions({ data }: RegionalEmissionsProps) {
  return (
    <div className="space-y-6">
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="region" tick={{ fontSize: 12 }} axisLine={{ stroke: "#e5e7eb" }} />
            <YAxis tick={{ fontSize: 12 }} axisLine={{ stroke: "#e5e7eb" }} />
            <Tooltip
              formatter={(value: any, name: string) => [
                name === "emissions" ? `${Number(value).toFixed(1)} t CO₂e` : `${Number(value).toFixed(3)} kg CO₂/kWh`,
                name === "emissions" ? "Emissions" : "Carbon Intensity",
              ]}
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar dataKey="emissions" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((region, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h4 className="font-medium">{region.region}</h4>
            <div className="mt-2 space-y-1">
              <p className="text-sm text-muted-foreground">
                Emissions: <span className="font-medium">{region.emissions.toFixed(1)} t CO₂e</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Carbon Intensity: <span className="font-medium">{region.intensity} kg CO₂/kWh</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
