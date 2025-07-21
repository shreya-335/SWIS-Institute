"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

interface NavigationItem {
  title: string
  href: string
  isSubheading?: boolean
  parent?: string
}

interface NavigationSection {
  title: string
  items: NavigationItem[]
}

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null)

  const navigationItems: NavigationSection[] = [
    {
      title: "About Us",
      items: [
        { title: "Our History", href: "#" },
        { title: "Chairman & Managing Trustee", href: "#" },
        { title: "Advisory Board", href: "#" },
        { title: "Board Members", href: "#" },
        { title: "Core Team", href: "#" },
        { title: "Founding Supporters", href: "#" },
        { title: "Young Change Makers", href: "#" },
        { title: "Partners & Collaborations", href: "#" },
        { title: "Reach & Presence", href: "#" },
        { title: "Privacy Policy", href: "#" },
        { title: "Terms & Conditions", href: "#" },
      ],
    },
    {
      title: "Interventions",
      items: [
        { title: "SWIS Institute", href: "#", isSubheading: true },
        { title: "Centre for Social Impact & Innovation", href: "#", parent: "SWIS Institute" },
        { title: "Centre for Social Awareness & Action", href: "#", parent: "SWIS Institute" },
        { title: "Centre for Civil Administration & Engagement", href: "#", parent: "SWIS Institute" },
        { title: "SWIS Foundation", href: "#", isSubheading: true },
        { title: "Education", href: "#", parent: "SWIS Foundation" },
        { title: "Skill Development", href: "#", parent: "SWIS Foundation" },
        { title: "Nutrition", href: "#", parent: "SWIS Foundation" },
        { title: "Healthcare", href: "#", parent: "SWIS Foundation" },
        { title: "Relief of Poor", href: "#", parent: "SWIS Foundation" },
      ],
    },
    {
      title: "Get Involved",
      items: [
        { title: "Volunteering & Internships", href: "#" },
        { title: "Corporate Partners", href: "#" },
        { title: "Non - Profits", href: "#" },
      ],
    },
    {
      title: "Careers",
      items: [
        { title: "Careers", href: "#" },
        { title: "Search & Apply", href: "#" },
        { title: "Working at SWIS Ventures", href: "#" },
        { title: "Code of Conduct", href: "#" },
      ],
    },
    {
      title: "News & Media",
      items: [
        { title: "Press Releases", href: "#" },
        { title: "Media Coverage", href: "#" },
        { title: "Photo Gallery", href: "#" },
        { title: "Video Gallery", href: "#" },
      ],
    },
  ]

  const renderInterventionsDropdown = (items: NavigationItem[]) => {
    const swisInstitute = items.filter((item) => item.parent === "SWIS Institute" || item.title === "SWIS Institute")
    const swisFoundation = items.filter((item) => item.parent === "SWIS Foundation" || item.title === "SWIS Foundation")

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* SWIS Institute Column */}
        <div>
          {swisInstitute.map((subItem, index) => {
            if (subItem.isSubheading) {
              return (
                <h3 key={index} className="font-bold text-lg mb-3 text-black border-b border-gray-300 pb-2">
                  {subItem.title}
                </h3>
              )
            } else {
              return (
                <a
                  key={index}
                  href={subItem.href}
                  className="block text-black hover:text-gray-600 transition-colors py-2 text-sm mb-1"
                >
                  {subItem.title}
                </a>
              )
            }
          })}
        </div>

        {/* SWIS Foundation Column */}
        <div>
          {swisFoundation.map((subItem, index) => {
            if (subItem.isSubheading) {
              return (
                <h3 key={index} className="font-bold text-lg mb-3 text-black border-b border-gray-300 pb-2">
                  {subItem.title}
                </h3>
              )
            } else {
              return (
                <a
                  key={index}
                  href={subItem.href}
                  className="block text-black hover:text-gray-600 transition-colors py-2 text-sm mb-1"
                >
                  {subItem.title}
                </a>
              )
            }
          })}
        </div>
      </div>
    )
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
    setActiveMobileSubmenu(null)
  }

  return (
    <div className="relative">
      {/* Desktop Dropdown Menus */}
      {activeDropdown && (
        <div
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg z-40 hidden md:block"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {activeDropdown === "Interventions" ? (
              renderInterventionsDropdown(navigationItems.find((item) => item.title === activeDropdown)?.items || [])
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {navigationItems
                  .find((item) => item.title === activeDropdown)
                  ?.items.map((subItem, index) => (
                    <a
                      key={index}
                      href={subItem.href}
                      className="block text-black hover:text-gray-600 transition-colors py-2 text-sm"
                    >
                      {subItem.title}
                    </a>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop Navigation Items */}
      <div className="hidden sm:flex items-center space-x-8">
        {/* Home Link */}
        <a href="#" className="text-white hover:text-orange-400 transition-colors py-2 font-medium">
          Home
        </a>

        {navigationItems.map((item) => (
          <div key={item.title} className="relative" onMouseEnter={() => setActiveDropdown(item.title)}>
            <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors py-2 font-medium">
              <span>{item.title}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === item.title && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-200 -mt-1.5"></div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-white hover:text-orange-400 transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay and Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 sm:hidden">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                {/* Placeholder for logo if needed in mobile menu */}
                <span className="text-lg font-bold text-black">SWIS Foundation</span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-4">
                {/* Home Link for Mobile */}
                <div className="border-b border-gray-200 pb-4">
                  <a
                    href="#"
                    className="block font-semibold text-black transition-colors py-2"
                    onClick={handleLinkClick}
                  >
                    Home
                  </a>
                </div>

                {navigationItems.map((item) => (
                  <div key={item.title} className="border-b border-gray-200 pb-4">
                    <button
                      className="w-full flex items-center justify-between font-semibold text-black py-2"
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
                            <a
                              key={index}
                              href={subItem.href}
                              className="block text-gray-600 hover:text-black transition-colors text-sm"
                              onClick={handleLinkClick}
                            >
                              {subItem.title}
                            </a>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
                {/* Add other direct links for mobile if any, similar to ScrollHeader */}
                <div className="space-y-3 pt-4">
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block font-semibold text-black transition-colors py-2"
                  >
                    Join Us
                  </a>
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block font-semibold text-black transition-colors py-2"
                  >
                    Contact Us
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
