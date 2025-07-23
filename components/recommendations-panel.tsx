"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, TrendingDown, Zap, Server, Database, Globe } from "lucide-react"

const recommendations = [
  {
    id: 1,
    title: "Optimize EC2 Instance Types",
    description: "Switch to more efficient instance types to reduce emissions by 15-20%",
    impact: "High",
    savings: "$340/month",
    co2Reduction: "8.2 t CO₂e/year",
    icon: Server,
    category: "Compute",
  },
  {
    id: 2,
    title: "Implement Auto-Scaling",
    description: "Enable auto-scaling to reduce idle resources during low-traffic periods",
    impact: "Medium",
    savings: "$180/month",
    co2Reduction: "4.5 t CO₂e/year",
    icon: TrendingDown,
    category: "Optimization",
  },
  {
    id: 3,
    title: "Migrate to Renewable Regions",
    description: "Move workloads to regions with higher renewable energy usage",
    impact: "High",
    savings: "$0/month",
    co2Reduction: "12.3 t CO₂e/year",
    icon: Zap,
    category: "Regional",
  },
  {
    id: 4,
    title: "Optimize Storage Classes",
    description: "Use appropriate S3 storage classes for infrequently accessed data",
    impact: "Medium",
    savings: "$120/month",
    co2Reduction: "2.8 t CO₂e/year",
    icon: Database,
    category: "Storage",
  },
  {
    id: 5,
    title: "Enable CDN Caching",
    description: "Implement CloudFront to reduce data transfer and server load",
    impact: "Medium",
    savings: "$95/month",
    co2Reduction: "3.1 t CO₂e/year",
    icon: Globe,
    category: "Networking",
  },
]

export function RecommendationsPanel() {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <span>Carbon Reduction Recommendations</span>
          </CardTitle>
          <CardDescription>Actionable insights to reduce your cloud carbon footprint and costs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">30.9 t CO₂e</p>
              <p className="text-sm text-muted-foreground">Potential Annual Reduction</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">$735</p>
              <p className="text-sm text-muted-foreground">Monthly Cost Savings</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">68%</p>
              <p className="text-sm text-muted-foreground">Emission Reduction</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {recommendations.map((rec) => {
          const IconComponent = rec.icon
          return (
            <Card key={rec.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold">{rec.title}</h3>
                        <Badge variant="outline">{rec.category}</Badge>
                        <Badge className={getImpactColor(rec.impact)}>{rec.impact} Impact</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{rec.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-green-600 font-medium">💰 {rec.savings}</span>
                        <span className="text-blue-600 font-medium">🌱 {rec.co2Reduction}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Implement
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
