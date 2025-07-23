"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface EmissionsChartProps {
  data: Array<{
    month: string
    emissions: number
    cost: number
  }>
}

export function EmissionsChart({ data }: EmissionsChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={{ stroke: "#e5e7eb" }} />
          <YAxis tick={{ fontSize: 12 }} axisLine={{ stroke: "#e5e7eb" }} />
          <Tooltip
            formatter={(value: any, name: string) => [
              name === "emissions" ? `${Number(value).toFixed(1)} t CO₂e` : `$${Number(value).toFixed(0)}`,
              name === "emissions" ? "Emissions" : "Cost",
            ]}
            labelStyle={{ color: "#374151" }}
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Line
            type="monotone"
            dataKey="emissions"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
