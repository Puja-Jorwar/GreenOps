"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Cloud,
  Zap,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Leaf,
  Server,
  Database,
  Globe,
  ArrowLeft,
} from "lucide-react"
import { EmissionsChart } from "@/components/emissions-chart"
import { ServiceBreakdown } from "@/components/service-breakdown"
import { RegionalEmissions } from "@/components/regional-emissions"
import { RecommendationsPanel } from "@/components/recommendations-panel"
import { LoadingScreen } from "@/components/loading-screen"
import Link from "next/link"

// Mock data with different scenarios for filtering
const generateMockData = (provider: string, period: string) => {
  const baseData = {
    all: {
      totalEmissions: 45.7,
      totalCost: 2847.5,
      energyConsumption: 89.3,
      carbonIntensity: 0.512,
    },
    aws: {
      totalEmissions: 28.4,
      totalCost: 1680.2,
      energyConsumption: 55.8,
      carbonIntensity: 0.509,
    },
    azure: {
      totalEmissions: 12.1,
      totalCost: 890.3,
      energyConsumption: 23.7,
      carbonIntensity: 0.511,
    },
    gcp: {
      totalEmissions: 5.2,
      totalCost: 277.0,
      energyConsumption: 9.8,
      carbonIntensity: 0.531,
    },
  }

  const periodMultiplier = {
    "last-7-days": 0.25,
    "last-30-days": 1,
    "last-90-days": 3,
    "last-year": 12,
  }

  const data = baseData[provider as keyof typeof baseData] || baseData.all
  const multiplier = periodMultiplier[period as keyof typeof periodMultiplier] || 1

  return {
    totalEmissions: Number((data.totalEmissions * multiplier).toFixed(1)),
    totalCost: Number((data.totalCost * multiplier).toFixed(1)),
    energyConsumption: Number((data.energyConsumption * multiplier).toFixed(1)),
    carbonIntensity: data.carbonIntensity,
    monthlyTrend: [
      { month: "Jan", emissions: 38.2 * multiplier, cost: 2100 * multiplier },
      { month: "Feb", emissions: 42.1 * multiplier, cost: 2350 * multiplier },
      { month: "Mar", emissions: 39.8 * multiplier, cost: 2200 * multiplier },
      { month: "Apr", emissions: 45.7 * multiplier, cost: 2847 * multiplier },
      { month: "May", emissions: 43.2 * multiplier, cost: 2650 * multiplier },
      { month: "Jun", emissions: 41.9 * multiplier, cost: 2500 * multiplier },
    ],
    serviceBreakdown:
      provider === "aws"
        ? [
            { service: "EC2", emissions: 18.5 * multiplier, percentage: 65.1, cost: 1200 * multiplier },
            { service: "S3", emissions: 6.2 * multiplier, percentage: 21.8, cost: 280 * multiplier },
            { service: "RDS", emissions: 2.7 * multiplier, percentage: 9.5, cost: 150 * multiplier },
            { service: "Lambda", emissions: 1.0 * multiplier, percentage: 3.6, cost: 50 * multiplier },
          ]
        : provider === "azure"
          ? [
              { service: "Virtual Machines", emissions: 7.3 * multiplier, percentage: 60.3, cost: 536 * multiplier },
              { service: "Blob Storage", emissions: 2.4 * multiplier, percentage: 19.8, cost: 178 * multiplier },
              { service: "SQL Database", emissions: 1.6 * multiplier, percentage: 13.2, cost: 118 * multiplier },
              { service: "Functions", emissions: 0.8 * multiplier, percentage: 6.7, cost: 58 * multiplier },
            ]
          : provider === "gcp"
            ? [
                { service: "Compute Engine", emissions: 3.1 * multiplier, percentage: 59.6, cost: 165 * multiplier },
                { service: "Cloud Storage", emissions: 1.0 * multiplier, percentage: 19.2, cost: 53 * multiplier },
                { service: "Cloud SQL", emissions: 0.7 * multiplier, percentage: 13.5, cost: 37 * multiplier },
                { service: "Cloud Functions", emissions: 0.4 * multiplier, percentage: 7.7, cost: 22 * multiplier },
              ]
            : [
                { service: "Compute (EC2)", emissions: 18.5 * multiplier, percentage: 40.5, cost: 1200 * multiplier },
                { service: "Storage (S3)", emissions: 12.3 * multiplier, percentage: 26.9, cost: 450 * multiplier },
                { service: "Database (RDS)", emissions: 8.7 * multiplier, percentage: 19.0, cost: 680 * multiplier },
                { service: "Networking", emissions: 4.2 * multiplier, percentage: 9.2, cost: 320 * multiplier },
                { service: "Other Services", emissions: 2.0 * multiplier, percentage: 4.4, cost: 197 * multiplier },
              ],
    regionalData: [
      { region: "us-east-1", emissions: 15.2 * multiplier, intensity: 0.45 },
      { region: "eu-west-1", emissions: 12.8 * multiplier, intensity: 0.35 },
      { region: "ap-southeast-1", emissions: 10.3 * multiplier, intensity: 0.62 },
      { region: "us-west-2", emissions: 7.4 * multiplier, intensity: 0.28 },
    ],
  }
}

export default function Dashboard() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(generateMockData("all", "last-30-days"))
  const [selectedPeriod, setSelectedPeriod] = useState("last-30-days")
  const [selectedProvider, setSelectedProvider] = useState("all")

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Update data when filters change
    setData(generateMockData(selectedProvider, selectedPeriod))
  }, [selectedProvider, selectedPeriod])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <Cloud className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">Cloud Carbon Footprint</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedProvider} onValueChange={setSelectedProvider}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Cloud Provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Providers</SelectItem>
                  <SelectItem value="aws">AWS</SelectItem>
                  <SelectItem value="azure">Azure</SelectItem>
                  <SelectItem value="gcp">Google Cloud</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-7-days">Last 7 days</SelectItem>
                  <SelectItem value="last-30-days">Last 30 days</SelectItem>
                  <SelectItem value="last-90-days">Last 90 days</SelectItem>
                  <SelectItem value="last-year">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                <Leaf className="h-4 w-4 mr-2" />
                Recommendations
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Emissions</CardTitle>
              <Cloud className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.totalEmissions} t CO₂e</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1 text-red-500" />
                +2.3% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Cost</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${data.totalCost.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingDown className="h-3 w-3 inline mr-1 text-green-500" />
                -1.2% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Energy Consumption</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.energyConsumption} MWh</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1 text-orange-500" />
                +0.8% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Carbon Intensity</CardTitle>
              <Leaf className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.carbonIntensity} kg CO₂/kWh</div>
              <p className="text-xs text-muted-foreground">
                <TrendingDown className="h-3 w-3 inline mr-1 text-green-500" />
                -3.1% from last period
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="regions">Regions</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Emissions Trend</CardTitle>
                  <CardDescription>Monthly carbon emissions over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <EmissionsChart data={data.monthlyTrend} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Breakdown</CardTitle>
                  <CardDescription>Emissions by cloud service type</CardDescription>
                </CardHeader>
                <CardContent>
                  <ServiceBreakdown data={data.serviceBreakdown} />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Insights</CardTitle>
                <CardDescription>Key findings from your cloud usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Server className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="font-medium">Compute Intensive</p>
                      <p className="text-sm text-muted-foreground">
                        {data.serviceBreakdown[0]?.percentage || 40}% of total emissions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <Database className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="font-medium">Storage Optimized</p>
                      <p className="text-sm text-muted-foreground">Efficient data management</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                    <Globe className="h-8 w-8 text-orange-600" />
                    <div>
                      <p className="font-medium">Multi-Region</p>
                      <p className="text-sm text-muted-foreground">{data.regionalData.length} active regions</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service-Level Emissions</CardTitle>
                <CardDescription>Detailed breakdown by cloud service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.serviceBreakdown.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: `hsl(${index * 60}, 70%, 50%)` }}
                        />
                        <div>
                          <p className="font-medium">{service.service}</p>
                          <p className="text-sm text-muted-foreground">{service.emissions.toFixed(1)} t CO₂e</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{service.percentage.toFixed(1)}%</Badge>
                        <p className="text-sm text-muted-foreground mt-1">${service.cost.toFixed(0)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="regions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Regional Emissions</CardTitle>
                <CardDescription>Carbon footprint by geographic region</CardDescription>
              </CardHeader>
              <CardContent>
                <RegionalEmissions data={data.regionalData} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <RecommendationsPanel />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
