"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X, Heart, Users, Globe } from "lucide-react"
import { Link } from "react-router-dom"

const ScrollHeader = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null) // New state for mobile submenus
  const hoverTimeoutRef = useRef(null)

  // Import images using require for better compatibility
  const bluelogo = require("../img/bluelogo.png")
  const whitelogo = require("../img/whitelogo.png")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50) // Reduced threshold for faster transition
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const navigationItems = [
    {
      title: "About Us",
      items: [
        {
          title: "Our History",
          href: "/history",
          description: "Learn about our journey and milestones",
        },
        {
          title: "Privacy Policy",
          href: "/PrivacyPolicy",
          description: "Data protection policies",
        },

        {
          title: "Terms & Conditions",
          href: "/TermsAndConditions",
          description: "Terms of service",
        },


        {
          title: "Chairman & Managing Trustee",
          href: "/founderchairman",
          description: "Meet our leadership team",
        },
        {
          title: "Board & Committee Members",
          href: "/member",
          description: "Our strategic advisors and mentors",
        },
        

        
        
      ],
    },
    {
      title: "Interventions",
      items: [
        { title: "SWIS Institute", href: "#", description: "", isSubheading: true },
        {
          title: "Centre for Social Impact & Innovation",
          href: "/csii",
          description: "Innovation hub for social change",
          parent: "SWIS Institute",
        },
        {
          title: "Centre for Social Awareness & Action",
          href: "/csaa",
          description: "Community engagement and awareness",
          parent: "SWIS Institute",
        },
        {
          title: "Centre for Civil Administration & Engagement",
          href: "/ccae",
          description: "Governance and civic programs",
          parent: "SWIS Institute",
        },
        { title: "SWIS Foundation", href: "#", description: "", isSubheading: true },
        {
          title: "Education",
          href: "/Education",
          description: "Quality education initiatives",
          parent: "SWIS Foundation",
        },
        {
          title: "Skill Development",
          href: "/SkillDevelopment",
          description: "Vocational training programs",
          parent: "SWIS Foundation",
        },
        {
          title: "Nutrition",
          href: "/Nutrition",
          description: "Food security and nutrition",
          parent: "SWIS Foundation",
        },
      ],
    },
    {
      title: "Careers",
      items: [
        { title: "Careers", href: "/Careers", description: "Available positions" },
        { title: "Working at SWIS", href: "/allinone", description: "Employee experience" },
        { title: "Code of Conduct", href: "/coc", description: "Our values and ethics" },
      ],
    },
  ]

  const handleMouseEnter = (dropdownName) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setActiveDropdown(dropdownName)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay before hiding
  }

  const handleLinkClick = () => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
    setActiveMobileSubmenu(null) // Close any open mobile submenus
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
  }

  const renderDropdownItems = (items) => {
    if (activeDropdown === "Interventions") {
      // Special layout for Interventions with two columns
      const swisInstitute = items.filter((item) => item.parent === "SWIS Institute" || item.title === "SWIS Institute")
      const swisFoundation = items.filter(
        (item) => item.parent === "SWIS Foundation" || item.title === "SWIS Foundation",
      )

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SWIS Institute Column */}
          <div>
            {swisInstitute.map((subItem, index) => {
              if (subItem.isSubheading) {
                return (
                  <div key={index}>
                    <h3
                      className="font-bold text-lg mb-3 mt-6 first:mt-0 border-b pb-2"
                      style={{
                        color: "#023080",
                        borderColor: "#8e9fc5",
                      }}
                    >
                      {subItem.title}
                    </h3>
                  </div>
                )
              } else {
                return (
                  <Link
                    key={index}
                    to={subItem.href}
                    onClick={handleLinkClick}
                    className={`group block p-3 rounded-lg transition-all duration-200 hover:shadow-sm ${
                      subItem.parent ? "ml-4" : ""
                    }`}
                    style={{
                      backgroundColor: "white",
                      borderLeft: "3px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderLeftColor = "#023080"
                      e.currentTarget.style.backgroundColor = "#d2d5e0"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderLeftColor = "transparent"
                      e.currentTarget.style.backgroundColor = "white"
                    }}
                  >
                    <h4
                      className="font-semibold text-base mb-1 group-hover:text-blue-700 transition-colors"
                      style={{ color: "#04307b" }}
                    >
                      {subItem.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#8e9fc5" }}>
                      {subItem.description}
                    </p>
                  </Link>
                )
              }
            })}
          </div>

          {/* SWIS Foundation Column */}
          <div>
            {swisFoundation.map((subItem, index) => {
              if (subItem.isSubheading) {
                return (
                  <div key={index}>
                    <h3
                      className="font-bold text-lg mb-3 mt-6 first:mt-0 border-b pb-2"
                      style={{
                        color: "#023080",
                        borderColor: "#8e9fc5",
                      }}
                    >
                      {subItem.title}
                    </h3>
                  </div>
                )
              } else {
                return (
                  <Link
                    key={index}
                    to={subItem.href}
                    onClick={handleLinkClick}
                    className={`group block p-3 rounded-lg transition-all duration-200 hover:shadow-sm ${
                      subItem.parent ? "ml-4" : ""
                    }`}
                    style={{
                      backgroundColor: "white",
                      borderLeft: "3px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderLeftColor = "#023080"
                      e.currentTarget.style.backgroundColor = "#d2d5e0"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderLeftColor = "transparent"
                      e.currentTarget.style.backgroundColor = "white"
                    }}
                  >
                    <h4
                      className="font-semibold text-base mb-1 group-hover:text-blue-700 transition-colors"
                      style={{ color: "#04307b" }}
                    >
                      {subItem.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#8e9fc5" }}>
                      {subItem.description}
                    </p>
                  </Link>
                )
              }
            })}
          </div>
        </div>
      )
    } else {
      // Regular layout for other dropdowns
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href}
              onClick={handleLinkClick}
              className="group block p-3 rounded-lg transition-all duration-200 hover:shadow-sm"
              style={{
                backgroundColor: "white",
                borderLeft: "3px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = "#023080"
                e.currentTarget.style.backgroundColor = "#d2d5e0"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = "transparent"
                e.currentTarget.style.backgroundColor = "white"
              }}
            >
              <h4
                className="font-semibold text-base mb-1 group-hover:text-blue-700 transition-colors"
                style={{ color: "#04307b" }}
              >
                {subItem.title}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: "#8e9fc5" }}>
                {subItem.description}
              </p>
            </Link>
          ))}
        </div>
      )
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-lg" : "bg-gradient-to-b from-black/60 via-black/30 to-transparent"
        }`}
      >
        {/* Top Info Bar - Hidden when scrolled */}
        <div
          className={`border-b transition-all duration-500 ${
            scrolled
              ? "h-0 opacity-0 overflow-hidden border-transparent -translate-y-full"
              : "h-12 opacity-100 border-white/20"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12 text-sm">
              {/* Left side - Rankings */}
              <div className="flex items-center space-x-4 lg:space-x-8 text-white/90">
                <div className="flex items-center space-x-2">
                  <span style={{ color: "#8e9fc5" }}>IND Ranks 132</span>
                  <span className="hidden sm:inline">- Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span style={{ color: "#8e9fc5" }}>IND Ranks 111</span>
                  <span className="hidden sm:inline">- Hunger</span>
                </div>
              </div>

              {/* Right side - Actions */}
              <div className="hidden lg:flex items-center space-x-6 text-white/90">
                <Link to="/new" className="hover:text-white transition-colors">
                  Impact Report
                </Link>
                <Link to="/ContactPage" className="hover:text-white transition-colors">
                  Donate Now
                </Link>
                <Link to="/ContactPage" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}
          >
            {/* Logo - Increased size */}
            <div className="flex items-center">
              <Link to="/homepage">
                <img
                  src={scrolled ? bluelogo : whitelogo}
                  alt="SWIS Foundation"
                  className={`transition-all duration-500 ${scrolled ? "h-16 w-auto" : "h-20 w-auto"}`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Home Link */}
              <Link
                to="/homepage"
                className={`transition-colors py-2 font-medium ${
                  scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-orange-400"
                }`}
              >
                Home
              </Link>

              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center space-x-1 transition-colors py-2 font-medium ${
                      scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-orange-400"
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Direct Links */}
              <Link
                to="/JoinUs"
                className={`transition-colors py-2 font-medium ${
                  scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-orange-400"
                }`}
              >
                Join Us
              </Link>

              <Link
                to="/ContactPage"
                className={`transition-colors py-2 font-medium ${
                  scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-orange-400"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button
                className={`transition-colors ${
                  scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-orange-400"
                }`}
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                className={`transition-colors ${
                  scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-orange-400"
                }`}
              >
                <Users className="w-5 h-5" />
              </button>
              <button
                className={`transition-colors ${
                  scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-orange-400"
                }`}
              >
                <Globe className="w-5 h-5" />
              </button>

              {/* Mobile menu button */}
              <button
                className={`md:hidden transition-colors ${
                  scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-orange-400"
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Dropdown Menu */}
        {activeDropdown && (
          <div
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t z-40 -mt-px hidden md:block"
            style={{ backgroundColor: "#FCFDFF" }}
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2" style={{ color: "#023080" }}>
                  {activeDropdown}
                </h2>
                <div className="w-12 h-0.5 rounded" style={{ backgroundColor: "#8e9fc5" }}></div>
              </div>

              {renderDropdownItems(navigationItems.find((item) => item.title === activeDropdown)?.items || [])}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-full max-w-xs shadow-xl" style={{ backgroundColor: "#FCFDFF" }}>
            <div className="p-6 overflow-y-auto h-full">
              {" "}
              {/* Added overflow-y-auto and h-full */}
              <div className="flex items-center justify-between mb-8">
                <Link to="/homepage" onClick={handleLinkClick}>
                  <img src={bluelogo || "/placeholder.svg"} alt="SWIS Foundation" className="h-12 w-auto" />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-gray-700"
                  style={{ color: "#8e9fc5" }}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="space-y-4">
                {/* Home Link for Mobile */}
                <div className="border-b pb-4" style={{ borderColor: "#d2d5e0" }}>
                  <Link
                    to="/homepage"
                    onClick={handleLinkClick}
                    className="block font-semibold transition-colors py-2"
                    style={{ color: "#023080" }}
                  >
                    Home
                  </Link>
                </div>

                {navigationItems.map((item) => (
                  <div key={item.title} className="border-b pb-4" style={{ borderColor: "#d2d5e0" }}>
                    <button
                      className="w-full flex items-center justify-between font-semibold py-2"
                      style={{ color: "#023080" }}
                      onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === item.title ? null : item.title)}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${activeMobileSubmenu === item.title ? "rotate-180" : ""}`}
                      />
                    </button>
                    {activeMobileSubmenu === item.title && (
                      <div className="space-y-2 pl-4 pt-2">
                        {item.items
                          .filter((subItem) => !subItem.isSubheading)
                          .map((subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.href}
                              onClick={handleLinkClick}
                              className="block transition-colors text-sm py-1 hover:text-[#04307b]"
                              style={{ color: "#8e9fc5" }}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Direct Links for Mobile */}
                <div className="space-y-3 pt-4">
                  <Link
                    to="/JoinUs"
                    onClick={handleLinkClick}
                    className="block font-semibold transition-colors py-2"
                    style={{ color: "#023080" }}
                  >
                    Join Us
                  </Link>
                  <Link
                    to="/ContactPage"
                    onClick={handleLinkClick}
                    className="block font-semibold transition-colors py-2"
                    style={{ color: "#023080" }}
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ScrollHeader
