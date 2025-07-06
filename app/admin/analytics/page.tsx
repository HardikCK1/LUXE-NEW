"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Eye, MousePointer, DollarSign, Globe } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Sample analytics data
const trafficData = [
  { month: "Jan", visitors: 2400, pageviews: 4800, conversions: 24 },
  { month: "Feb", visitors: 3200, pageviews: 6400, conversions: 32 },
  { month: "Mar", visitors: 2800, pageviews: 5600, conversions: 28 },
  { month: "Apr", visitors: 4100, pageviews: 8200, conversions: 41 },
  { month: "May", visitors: 3800, pageviews: 7600, conversions: 38 },
  { month: "Jun", visitors: 4500, pageviews: 9000, conversions: 45 },
]

const deviceData = [
  { name: "Desktop", value: 45, color: "#d2b48c" },
  { name: "Mobile", value: 40, color: "#e8d9b5" },
  { name: "Tablet", value: 15, color: "#b8860b" },
]

const topPages = [
  { page: "/services", views: 12500, conversions: 125 },
  { page: "/portfolio", views: 8900, conversions: 89 },
  { page: "/", views: 15600, conversions: 78 },
  { page: "/about", views: 4200, conversions: 21 },
  { page: "/contact", views: 6800, conversions: 340 },
]

const revenueData = [
  { month: "Jan", revenue: 28000, projects: 5 },
  { month: "Feb", revenue: 35000, projects: 6 },
  { month: "Mar", revenue: 42000, projects: 7 },
  { month: "Apr", revenue: 58000, projects: 10 },
  { month: "May", revenue: 47000, projects: 8 },
  { month: "Jun", revenue: 65000, projects: 11 },
]

const stats = [
  { icon: Users, label: "Monthly Visitors", value: "4,500", change: "+18.2%", trend: "up" },
  { icon: Eye, label: "Page Views", value: "9,000", change: "+12.5%", trend: "up" },
  { icon: MousePointer, label: "Conversion Rate", value: "5.2%", change: "+0.8%", trend: "up" },
  { icon: DollarSign, label: "Monthly Revenue", value: "$65,000", change: "+24.3%", trend: "up" },
]

export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="initial" animate="animate" variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-creme mb-4">Analytics Dashboard</h1>
            <p className="text-xl text-creme/70">Comprehensive insights into your luxury digital studio performance</p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-500"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="w-8 h-8 text-gold" />
                    <Badge
                      variant="secondary"
                      className={`${stat.trend === "up" ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"}`}
                    >
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-3xl font-serif text-creme mb-2">{stat.value}</div>
                  <p className="text-sm text-creme/60">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Traffic Overview */}
          <motion.div variants={fadeInUp} className="mb-12">
            <Card className="bg-transparent border-creme/10">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-creme flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-gold" />
                  Traffic Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trafficData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f5f3ef20" />
                      <XAxis dataKey="month" stroke="#f5f3ef" />
                      <YAxis stroke="#f5f3ef" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0f0f0f",
                          border: "1px solid #d2b48c",
                          borderRadius: "4px",
                          color: "#f5f3ef",
                        }}
                      />
                      <Line type="monotone" dataKey="visitors" stroke="#d2b48c" strokeWidth={3} />
                      <Line type="monotone" dataKey="pageviews" stroke="#e8d9b5" strokeWidth={2} />
                      <Line type="monotone" dataKey="conversions" stroke="#b8860b" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Device Breakdown */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-transparent border-creme/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-creme flex items-center gap-3">
                    <Globe className="w-6 h-6 text-gold" />
                    Device Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#0f0f0f",
                            border: "1px solid #d2b48c",
                            borderRadius: "4px",
                            color: "#f5f3ef",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-6 mt-4">
                    {deviceData.map((device, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: device.color }} />
                        <span className="text-sm text-creme/70">
                          {device.name}: {device.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Revenue Tracking */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-transparent border-creme/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-creme flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-gold" />
                    Revenue Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f3ef20" />
                        <XAxis dataKey="month" stroke="#f5f3ef" />
                        <YAxis stroke="#f5f3ef" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#0f0f0f",
                            border: "1px solid #d2b48c",
                            borderRadius: "4px",
                            color: "#f5f3ef",
                          }}
                        />
                        <Bar dataKey="revenue" fill="#d2b48c" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Top Pages */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-transparent border-creme/10">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-creme flex items-center gap-3">
                  <Eye className="w-6 h-6 text-gold" />
                  Top Performing Pages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPages.map((page, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-creme/10 hover:border-gold/30 transition-colors duration-300"
                    >
                      <div className="flex-grow">
                        <h4 className="text-lg text-creme mb-1">{page.page}</h4>
                        <p className="text-sm text-creme/60">{page.views.toLocaleString()} views</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-serif text-gold">{page.conversions}</p>
                        <p className="text-sm text-creme/60">conversions</p>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm text-creme/70">
                          {((page.conversions / page.views) * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
