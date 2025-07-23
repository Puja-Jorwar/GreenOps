import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Cloud,
  BarChart3,
  TrendingDown,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Cloud className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">
                Cloud Carbon Footprint
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="outline">View Demo</Button>
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Cloud className="h-20 w-20 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Measure & Reduce Your
              <span className="text-blue-600 block">
                Cloud Carbon Footprint
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Track, analyze, and optimize your cloud infrastructure's
              environmental impact across AWS, Azure, and Google Cloud. Get
              actionable insights to reduce both emissions and costs.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  View Dashboard
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45.7t</div>
              <div className="text-gray-600">CO₂e Tracked Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
              <div className="text-gray-600">Average Emission Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                $2.8K
              </div>
              <div className="text-gray-600">Monthly Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Cloud Sustainability Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to understand and optimize your cloud
              environmental impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle>Real-time Monitoring</CardTitle>
                <CardDescription>
                  Track your carbon emissions and energy consumption across all
                  cloud providers in real-time
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingDown className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle>Smart Recommendations</CardTitle>
                <CardDescription>
                  Get AI-powered suggestions to reduce emissions and costs
                  through infrastructure optimization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Share insights and coordinate sustainability efforts across
                  your development and ops teams
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-red-600 mb-4" />
                <CardTitle>Compliance Ready</CardTitle>
                <CardDescription>
                  Generate reports for sustainability compliance and ESG
                  requirements with detailed metrics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-yellow-600 mb-4" />
                <CardTitle>Multi-Cloud Support</CardTitle>
                <CardDescription>
                  Unified dashboard for AWS, Azure, Google Cloud, and other
                  major cloud providers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-indigo-600 mb-4" />
                <CardTitle>Easy Integration</CardTitle>
                <CardDescription>
                  Quick setup with existing cloud accounts and infrastructure
                  monitoring tools
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Reduce Your Cloud Carbon Footprint?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join organizations worldwide in making cloud computing more
            sustainable
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
              <Button size="lg" variant="secondary">
                Try Dashboard
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cloud className="h-6 w-6" />
                <span className="font-semibold">Cloud Carbon Footprint</span>
              </div>
              <p className="text-gray-400">
                Making cloud computing more sustainable through measurement and
                optimization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Dashboard</li>
                <li>Analytics</li>
                <li>Recommendations</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Support</li>
                <li>Community</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <div>
              &copy;{" "}
              {new Date().getFullYear() === 2025
                ? 2025
                : new Date().getFullYear()}{" "}
              &mdash; Made with <span style={{ color: "#4CAF50" }}>♥</span> by{" "}
              <strong>Team xAI</strong>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
