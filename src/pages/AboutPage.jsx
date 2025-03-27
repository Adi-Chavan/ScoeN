import React from "react"
import {Link} from "react-router-dom"
import { BookOpen, FileText, GraduationCap, Users } from "lucide-react"

import { Button } from "../components/ui/button"
import { Navbar } from "./navbar"
import { Footer } from "./footer"

export function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">About scoeN.in</h1>
              <p className="text-xl text-blue-100">
                Empowering SPPU Engineering students to overcome challenges and achieve academic excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="scoeN.in Logo"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-center mb-8">Welcome to scoeN.in!</h2>

                <p className="text-lg">
                  At scoeN.in, we believe every student has the potential to succeed. Our PDF resources are crafted with
                  one goal: to guide and assist students of SPPU First-Year Engineering in mastering their subjects with
                  confidence. Within these pages, you'll find the most important questions, precise answers, and
                  step-by-step solutions tailored to the SPPU syllabus.
                </p>

                <p className="text-lg mt-6">
                  This resource is specifically aimed to help students who are tackling backlogs, offering clarity to
                  key topics and questions that matter most. Remember, the only condition to your success is{" "}
                  <em>your dedication and consistent effort</em>. Our tools can provide the knowledge, but only you can
                  transform it into results.
                </p>

                <p className="text-lg mt-6">
                  Here's to clearing those backlogs, excelling in exams, and aiming for the top. Study smart, work hard,
                  and believe in yourself. Together, we'll make success achievable!
                </p>

                <p className="text-lg mt-8">
                  Warm regards,
                  <br />
                  <em>Team scoeN.in</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What We Offer</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Tailored PDF Resources</h3>
                <p className="text-gray-600">
                  Comprehensive study materials specifically designed for SPPU Engineering syllabus.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Important Questions</h3>
                <p className="text-gray-600">
                  Curated selection of the most crucial questions to focus your study efforts effectively.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Backlog Support</h3>
                <p className="text-gray-600">
                  Specialized materials to help students clear pending subjects and move forward confidently.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Student Community</h3>
                <p className="text-gray-600">
                  Join fellow SPPU students in their academic journey and share experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Student Success Stories</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rahul Sharma",
                  course: "First Year Engineering",
                  quote:
                    "The PDF resources from scoeN.in helped me clear my backlog in Engineering Mathematics. The focused approach saved me countless hours of study time.",
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "Priya Patel",
                  course: "First Year Engineering",
                  quote:
                    "I was struggling with Physics until I found these materials. The step-by-step solutions made complex concepts much easier to understand.",
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "Amit Desai",
                  course: "First Year Engineering",
                  quote:
                    "Thanks to scoeN.in, I not only cleared my backlogs but scored much better than I expected. Their materials focus on exactly what's important.",
                  image: "/placeholder.svg?height=80&width=80",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.course}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Excel in Your Studies?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of SPPU students who have transformed their academic journey with our resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Explore Resources
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Meet Our Team</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Aditya Patil",
                  role: "Founder & Content Lead",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  name: "Neha Sharma",
                  role: "Academic Coordinator",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  name: "Vikram Desai",
                  role: "Technical Expert",
                  image: "/placeholder.svg?height=150&width=150",
                },
                {
                  name: "Priya Singh",
                  role: "Student Outreach",
                  image: "/placeholder.svg?height=150&width=150",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 mx-auto relative w-32 h-32 md:w-40 md:h-40">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">Have questions or feedback? We'd love to hear from you!</p>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-md"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

