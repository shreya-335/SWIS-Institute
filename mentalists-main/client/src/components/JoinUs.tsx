"use client"

import type React from "react"
import { useState } from "react"
import axios from "axios"
import { Upload, X, Users } from "lucide-react"

interface FormData {
  domain: string
  firstName: string
  lastName: string
  contact: string
  dateOfBirth: string
  email: string
  whyJoinUs: string
  questionsForUs: string
}

interface FormStatus {
  submitting: boolean
  submitted: boolean
  error: string | null
  success: string | null
}

const JoinUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    domain: "",
    firstName: "",
    lastName: "",
    contact: "",
    dateOfBirth: "",
    email: "",
    whyJoinUs: "",
    questionsForUs: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    submitting: false,
    submitted: false,
    error: null,
    success: null,
  })

  const domainOptions = [
    { value: "ccae", label: "CCAE - Centre for Civil Administration & Engagement" },
    { value: "csii", label: "CSII - Centre for Social Innovation & Impact" },
    { value: "csaa", label: "CSAA - Centre for Social Awareness & Action" },
    { value: "general", label: "General Volunteer" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (status.error || status.success) {
      setStatus((prev) => ({ ...prev, error: null, success: null }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Age validation
    const dobParts = formData.dateOfBirth.split("/");
    if (dobParts.length !== 3) {
      setStatus({ ...status, error: "Please enter your date of birth in DD/MM/YYYY format." });
      return;
    }
    const [day, month, year] = dobParts.map(Number);
    const dob = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    if (isNaN(age) || age < 8) {
      setStatus({ ...status, error: "You must be at least 8 years old to fill this form." });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null, success: null });

    try {
      const submitData = {
        ...formData,
        selectedInitiative: formData.domain,
      };
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await axios.post(`${apiUrl}/volunteer-simple`, submitData, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      });

      if (response.data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
          success: response.data.message || "Thank you for your application! We will get back to you soon.",
        })

        // Reset form
        setFormData({
          domain: "",
          firstName: "",
          lastName: "",
          contact: "",
          dateOfBirth: "",
          email: "",
          whyJoinUs: "",
          questionsForUs: "",
        })
      }
    } catch (error: any) {
      console.error("Application submission error:", error)

      let errorMessage = "Something went wrong. Please try again."

      if (error.code === "ECONNABORTED") {
        errorMessage = "please wait a minute and try again. If the issue persists, contact us via email."//request timeout
      } else if (error.code === "ERR_NETWORK") {
        errorMessage = "Cannot connect to server. Make sure backend is running on port 5000."
      } else if (error.response) {
        errorMessage = error.response.data?.message || `Server error: ${error.response.status}`
      } else if (error.request) {
        errorMessage = "No response from server. Check if backend is running."
      }

      setStatus({
        submitting: false,
        submitted: false,
        error: null,
        success: null,
      })
    }
  }

  if (status.submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h1>
            <p className="text-lg text-gray-600 mb-6">{status.success}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-2 sm:px-4 lg:px-8 pt-24 sm:pt-36">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-2 sm:mb-4">Join Our Mission</h1>
          <p className="text-base sm:text-xl text-blue-700 mb-4 sm:mb-6 max-w-3xl mx-auto">
            Be part of a community dedicated to creating positive social change.
          </p>
          <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-blue-600">
            <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-base sm:text-lg font-medium">Together We Make a Difference</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Application Form */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-sm">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">JOIN US</h2>
              <p className="text-gray-600 text-sm sm:text-base">Fill out the form below to join our mission.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Domain Selection */}
              <div>
                <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                  Which domain do you want to join? <span className="text-red-500">*</span>
                </label>
                <select
                  id="domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select Domain</option>
                  {domainOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Contact and Date of Birth */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Email"
                />
              </div>

              {/* Why Join Us */}
              <div>
                <label htmlFor="whyJoinUs" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join us? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="whyJoinUs"
                  name="whyJoinUs"
                  value={formData.whyJoinUs}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Why do you want to join us?"
                />
              </div>

              {/* Questions for Us */}
              <div>
                <label htmlFor="questionsForUs" className="block text-sm font-medium text-gray-700 mb-2">
                  Any questions for us?
                </label>
                <textarea
                  id="questionsForUs"
                  name="questionsForUs"
                  value={formData.questionsForUs}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Any questions for us?"
                />
              </div>

              {status.error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600 text-sm">{status.error}</p>
                </div>
              )}

              {status.success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-600 text-sm">{status.success}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full py-3 px-6 rounded-md font-medium text-white transition-colors ${
                  status.submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                }`}
              >
                {status.submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>

          {/* Organizational Partnership */}
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-sm">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Organizational Partnership</h2>
              <p className="text-gray-600 mb-8">
                Is your organization interested in partnering with us? We welcome collaborations that align with our
                mission.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Get in Touch</h3>
                <a
                  href="mailto:swisfoundation@gmail.com"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>swisfoundation@gmail.com</span>
                </a>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-1">Strategic Partnerships</h4>
                  <p className="text-sm text-blue-700">Long-term collaborations</p>
                </div>

                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-1">Corporate Social Responsibility</h4>
                  <p className="text-sm text-blue-700">CSR initiatives</p>
                </div>

                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-1">Community Projects</h4>
                  <p className="text-sm text-blue-700">Joint community impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs