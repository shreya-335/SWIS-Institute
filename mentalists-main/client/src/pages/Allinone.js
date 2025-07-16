"use client"

import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

// Inline Button Component
const Button = React.forwardRef(({ className = "", variant = "default", size = "default", ...props }, ref) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  }

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

// Inline Card Components
const Card = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
))
Card.displayName = "Card"

const CardContent = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))
CardContent.displayName = "CardContent"

// Main Component
const Allinone = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#023080" }}
      >
        <div className="container mx-auto px-4 py-12 sm:py-20 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center lg:text-left"
            >
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 font-light">"</div>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed font-light">
                SWIS is the place for those who dare to tackle the seemingly impossible challenges of our society and
                invent solutions that overcome them.
              </p>
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 font-light text-right">"</div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8 sm:mt-12"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-1 sm:mb-2">Soubhik</h2>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-2 sm:mb-4">Kundu</h2>
                <p className="text-base sm:text-lg opacity-90">Chairman & Managing Director, SWIS</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white/20 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Soubhik Kundu - Chairman & Managing Director"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Interventions Section */}
      <section className="py-12 sm:py-20" style={{ backgroundColor: "#FCFDFF" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6" style={{ color: "#023080" }}>
              Our Interventions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We are an extraordinary family of people who invent solutions that go on to empower a nation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              {
                title: "Education",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=300&fit=crop",
                path: "/education",
              },
              {
                title: "Skill Development",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
                path: "/SkillDevelopment",
              },
              {
                title: "Nutrition",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=300&fit=crop",
                path: "/nutrition",
              },
              {
                title: "Healthcare",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
                path: "/healthcare",
              },
              {
                title: "Relief of Poor",
                image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop",
                path: "/relief-of-poor",
              },
            ].map((intervention, index) => (
              <motion.div
                key={intervention.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={intervention.image || "/placeholder.svg"}
                      alt={intervention.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <h3 className="text-xl sm:text-2xl font-light text-white mb-2 sm:mb-3">{intervention.title}</h3>
                      <Link to={intervention.path}>
                        <Button
                          variant="outline"
                          className="text-white border-white hover:bg-white hover:text-black transition-colors text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 bg-transparent"
                        >
                          Know More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity & Inclusion Section */}
      <section className="py-12 sm:py-20" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 sm:mb-8" style={{ color: "#023080" }}>
              Diversity & Inclusion
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 text-center lg:text-left"
            >
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                We take pride in the diversity of our people that make up the SWIS family.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                The SWIS Diversity & Inclusion Charter articulates our affirmation and unwavering commitment to the
                values of Diversity, Equity and Inclusion.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                SWIS emphasizes the principle of non-discrimination on the basis of race, colour, religion, gender,
                gender-identity (or non-disclosure thereof), age, marital status, national origin, disability, sexual
                orientation, place of birth and/or any other dimension of diversity.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                We believe that our rich and diverse human resource reflects the wonderful diversity of our nation and
                gives us a sustainable competitive advantage.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                Each of our members are provided with an opportunity to participate, contribute and grow within SWIS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mt-8 lg:mt-0 flex justify-center"
            >
              <div className="w-full max-w-md h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Diversity and Inclusion"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grievance Redressal Section */}
      <section className="py-12 sm:py-20" style={{ backgroundColor: "#023080" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 sm:mb-8">
              Grievance Redressal Mechanism
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white p-6 sm:p-8 lg:p-12">
              <CardContent className="space-y-4 sm:space-y-6 pt-0">
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  All members have the responsibility to comply with the Equal Opportunity Policy.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  The organization's commitment towards inclusion reflects strongly in the non-discrimination statement,
                  which is a part of the organization's Code of Conduct.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  All members are encouraged to report any incidents of violation of this policy, and Heads of
                  Departments should act promptly when concerns arise, or complaints are filed.
                </p>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8 text-center"
            >
              <Button className="bg-white text-blue-900 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg">
                Equal Opportunity Policy document (PDF) →
              </Button>
            </motion.div>

            <div className="mt-8 sm:mt-12 text-white text-xs sm:text-sm space-y-1 sm:space-y-2 text-center">
              <p className="font-semibold">Disclaimer:</p>
              <p>
                In case any of the provisions hereinabove, contravenes any law or any instrument having force of law,
                theFU law time being in-force shall prevail.
              </p>
              <p>
                Wherever the policy is translated in the vernacular language for easy understanding by the members, if
                there is any conflict or varied interpretation of the policy in vernacular language, the interpretation
                of English version shall prevail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Allinone
