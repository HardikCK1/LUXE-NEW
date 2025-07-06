"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  Download,
  MessageSquare,
  FileText,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Eye,
  Upload,
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

const projectData = {
  name: "Premium Experience",
  client: "Sophia Martinez",
  status: "in-progress",
  progress: 75,
  startDate: "2024-01-10",
  deadline: "2024-01-25",
  totalAmount: "$5,800",
  paidAmount: "$2,900",
  remainingAmount: "$2,900",
}

const milestones = [
  { name: "Discovery & Strategy", status: "completed", date: "2024-01-12" },
  { name: "Design Concepts", status: "completed", date: "2024-01-15" },
  { name: "Development", status: "in-progress", date: "2024-01-22" },
  { name: "Testing & Launch", status: "pending", date: "2024-01-25" },
]

const messages = [
  {
    id: 1,
    from: "Camille Laurent",
    subject: "Design Concepts Ready for Review",
    date: "2024-01-18",
    preview: "Hi Sophia, I'm excited to share the initial design concepts for your premium experience...",
    unread: true,
  },
  {
    id: 2,
    from: "Development Team",
    subject: "Content Upload Request",
    date: "2024-01-16",
    preview: "We're ready to begin implementing your content. Please upload your images and copy...",
    unread: false,
  },
]

const deliverables = [
  { name: "Brand Guidelines.pdf", size: "2.4 MB", date: "2024-01-15", status: "available" },
  { name: "Design Mockups.zip", size: "15.7 MB", date: "2024-01-18", status: "available" },
  { name: "Development Preview", size: "Link", date: "2024-01-20", status: "available" },
]

export default function ClientDashboard() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="initial" animate="animate" variants={staggerContainer}>
          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-creme mb-4">Welcome back, Sophia</h1>
            <p className="text-xl text-creme/70">Your Premium Experience project is progressing beautifully.</p>
          </motion.div>

          {/* Project Overview */}
          <motion.div variants={fadeInUp} className="mb-12">
            <Card className="bg-transparent border-creme/10 hover:border-gold/30 transition-all duration-700">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-creme flex items-center justify-between">
                  Project Overview
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20 capitalize">
                    {projectData.status.replace("-", " ")}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div>
                    <p className="text-sm text-gold tracking-wider uppercase mb-2">Project</p>
                    <p className="text-lg text-creme">{projectData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gold tracking-wider uppercase mb-2">Progress</p>
                    <p className="text-lg text-creme">{projectData.progress}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gold tracking-wider uppercase mb-2">Start Date</p>
                    <p className="text-lg text-creme">{projectData.startDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gold tracking-wider uppercase mb-2">Deadline</p>
                    <p className="text-lg text-creme">{projectData.deadline}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-creme/70">Project Progress</span>
                    <span className="text-creme">{projectData.progress}%</span>
                  </div>
                  <div className="w-full bg-creme/10 rounded-full h-3">
                    <div
                      className="bg-gold h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${projectData.progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-creme/10">
                    <p className="text-sm text-gold tracking-wider uppercase mb-1">Total</p>
                    <p className="text-xl font-serif text-creme">{projectData.totalAmount}</p>
                  </div>
                  <div className="text-center p-4 border border-creme/10">
                    <p className="text-sm text-gold tracking-wider uppercase mb-1">Paid</p>
                    <p className="text-xl font-serif text-green-400">{projectData.paidAmount}</p>
                  </div>
                  <div className="text-center p-4 border border-creme/10">
                    <p className="text-sm text-gold tracking-wider uppercase mb-1">Remaining</p>
                    <p className="text-xl font-serif text-creme">{projectData.remainingAmount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Project Milestones */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-transparent border-creme/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-creme flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-gold" />
                    Project Milestones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border border-creme/10 hover:border-gold/30 transition-colors duration-300"
                    >
                      <div className="flex-shrink-0">
                        {milestone.status === "completed" ? (
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        ) : milestone.status === "in-progress" ? (
                          <Clock className="w-6 h-6 text-blue-400" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-creme/40" />
                        )}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg text-creme mb-1">{milestone.name}</h4>
                        <p className="text-sm text-creme/60">{milestone.date}</p>
                      </div>
                      <Badge
                        variant={
                          milestone.status === "completed"
                            ? "outline"
                            : milestone.status === "in-progress"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          milestone.status === "completed"
                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                            : milestone.status === "in-progress"
                              ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                              : "bg-creme/5 text-creme/40 border-creme/20"
                        }
                      >
                        {milestone.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Messages */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-transparent border-creme/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-creme flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-gold" />
                    Messages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-4 border transition-colors duration-300 ${
                        message.unread ? "border-gold/30 bg-gold/5" : "border-creme/10 hover:border-gold/30"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg text-creme font-medium">{message.from}</h4>
                        <span className="text-xs text-creme/50">{message.date}</span>
                      </div>
                      <h5 className="text-gold mb-2">{message.subject}</h5>
                      <p className="text-sm text-creme/70 mb-3 line-clamp-2">{message.preview}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gold text-gold hover:bg-gold hover:text-noir bg-transparent"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Read Message
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Deliverables & Actions */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Deliverables */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-transparent border-creme/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-creme flex items-center gap-3">
                    <FileText className="w-6 h-6 text-gold" />
                    Deliverables
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {deliverables.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-creme/10 hover:border-gold/30 transition-colors duration-300"
                    >
                      <div>
                        <h4 className="text-lg text-creme mb-1">{file.name}</h4>
                        <p className="text-sm text-creme/60">
                          {file.size} • {file.date}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gold text-gold hover:bg-gold hover:text-noir bg-transparent"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-transparent border-creme/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-creme">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-gold text-noir hover:bg-gold-light transition-all duration-500 py-3 text-sm tracking-[2px] uppercase font-medium group">
                    <Upload className="mr-2 w-4 h-4" />
                    Upload Content
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 py-3 text-sm tracking-[2px] uppercase font-medium bg-transparent"
                  >
                    <MessageSquare className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 py-3 text-sm tracking-[2px] uppercase font-medium bg-transparent"
                  >
                    <CreditCard className="mr-2 w-4 h-4" />
                    Make Payment
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-noir transition-all duration-500 py-3 text-sm tracking-[2px] uppercase font-medium bg-transparent"
                  >
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule Meeting
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
