"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  MessageSquare,
  DollarSign,
  TrendingUp,
  Calendar,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
} from "lucide-react"

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

const stats = [
  { icon: Users, label: "Active Clients", value: "24", change: "+12%" },
  { icon: MessageSquare, label: "New Inquiries", value: "8", change: "+25%" },
  { icon: DollarSign, label: "Monthly Revenue", value: "$47,500", change: "+18%" },
  { icon: TrendingUp, label: "Conversion Rate", value: "68%", change: "+5%" },
]

const recentInquiries = [
  {
    id: 1,
    name: "Sophia Martinez",
    email: "sophia@example.com",
    service: "Premium Experience",
    status: "new",
    date: "2024-01-15",
    message: "Looking for a luxury website for my boudoir photography business...",
  },
  {
    id: 2,
    name: "Isabella Chen",
    email: "isabella@example.com",
    service: "Bespoke Estate",
    status: "in-progress",
    date: "2024-01-14",
    message: "Need a complete digital transformation for my content platform...",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    email: "elena@example.com",
    service: "Essential Presence",
    status: "completed",
    date: "2024-01-13",
    message: "Simple but elegant website for my modeling portfolio...",
  },
]

const activeProjects = [
  {
    id: 1,
    client: "Mira K.",
    project: "Editorial Portfolio",
    progress: 85,
    deadline: "2024-01-20",
    status: "on-track",
  },
  {
    id: 2,
    client: "Clara W.",
    project: "Membership Site",
    progress: 60,
    deadline: "2024-01-25",
    status: "on-track",
  },
  {
    id: 3,
    client: "Ava S.",
    project: "E-Commerce Platform",
    progress: 30,
    deadline: "2024-02-01",
    status: "delayed",
  },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="initial" animate="animate" variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-creme mb-4">Admin Dashboard</h1>
            <p className="text-xl text-creme/70">Manage your luxury digital studio</p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-500"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="w-8 h-8 text-gold" />
                    <Badge variant="secondary" className="bg-gold/10 text-gold border-gold/20">
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="text-3xl font-serif text-creme mb-2">{stat.value}</div>
                  <p className="text-sm text-creme/60">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Inquiries */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-transparent border-creme/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-creme flex items-center gap-3">
                    <Mail className="w-6 h-6 text-gold" />
                    Recent Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div
                      key={inquiry.id}
                      className="p-4 border border-creme/10 hover:border-gold/30 transition-colors duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-medium text-creme">{inquiry.name}</h4>
                          <p className="text-sm text-creme/60">{inquiry.email}</p>
                        </div>
                        <Badge
                          variant={
                            inquiry.status === "new"
                              ? "default"
                              : inquiry.status === "in-progress"
                                ? "secondary"
                                : "outline"
                          }
                          className={
                            inquiry.status === "new"
                              ? "bg-gold text-noir"
                              : inquiry.status === "in-progress"
                                ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                : "bg-green-500/10 text-green-400 border-green-500/20"
                          }
                        >
                          {inquiry.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gold mb-3">{inquiry.service}</p>
                      <p className="text-sm text-creme/70 mb-3 line-clamp-2">{inquiry.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-creme/50">{inquiry.date}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gold text-gold hover:bg-gold hover:text-noir bg-transparent"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Active Projects */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-transparent border-creme/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-creme flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-gold" />
                    Active Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activeProjects.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 border border-creme/10 hover:border-gold/30 transition-colors duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-medium text-creme">{project.client}</h4>
                          <p className="text-sm text-gold">{project.project}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {project.status === "on-track" ? (
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-red-400" />
                          )}
                          <Badge
                            variant={project.status === "on-track" ? "outline" : "destructive"}
                            className={
                              project.status === "on-track" ? "bg-green-500/10 text-green-400 border-green-500/20" : ""
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-creme/70">Progress</span>
                          <span className="text-creme">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-creme/10 rounded-full h-2">
                          <div
                            className="bg-gold h-2 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-creme/50">
                          <Clock className="w-4 h-4" />
                          Due: {project.deadline}
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gold text-gold hover:bg-gold hover:text-noir bg-transparent"
                        >
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
