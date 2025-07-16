"use client"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight, Heart, Users, Zap, Building } from "lucide-react"
import rnp2 from "../img/rnp2.png"

import wecare from "../img/wecare.png"
import h1 from "../img/h1.jpeg"
import h2 from "../img/h2.jpeg"
import h3 from "../img/h3.jpeg"
import h4 from "../img/h4.jpeg"
import h5 from "../img/h5.jpeg"
import civil11 from "../img/civil (11).png"
import civil1 from "../img/civil (1).png"
import civil2 from "../img/civil (2).png"
import civil3 from "../img/civil (3).png"
import civil4 from "../img/civil (4).png"
import civil5 from "../img/civil (5).png"
import civil6 from "../img/civil (6).png"
import civil7 from "../img/civil (7).png"
import civil8 from "../img/civil (8).png"
import civil9 from "../img/civil (9).png"
import civil10 from "../img/civil (10).png"
import inst4 from "../img/inst (4).png"
import inst5 from "../img/inst (5).png"
import inst6 from "../img/inst (6).png"
import inst7 from "../img/inst (7).png"
import inst8 from "../img/inst (8).png"
import inst9 from "../img/inst (9).png"
import inst10 from "../img/inst (10).png"
import inst11 from "../img/inst (11).png"
import inst1 from "../img/inst (1).png"
import inst2 from "../img/inst (2).png"
import inst3 from "../img/inst (3).png"
import markets1 from "../img/markets (1).png"
import markets2 from "../img/markets (2).png"
import markets3 from "../img/markets (3).png"
import markets4 from "../img/markets (4).png"
import markets5 from "../img/markets (5).png"
import markets6 from "../img/markets (6).png"
import markets7 from "../img/markets (7).png"
import markets8 from "../img/markets (8).png"
import markets9 from "../img/markets (9).png"
import markets10 from "../img/markets (10).png"

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIntervention, setActiveIntervention] = useState("Education")
  const [activeCenter, setActiveCenter] = useState("Social Action")

  // Sample images for slideshow
  const slides = [h1, h2, h3, h4, h5]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 50000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Partner logos using civil society images
  const partnerLogos = [civil11, civil1, civil2, civil3, civil4, civil5, civil6, civil7, civil8, civil9, civil10]

  // Logo arrays for different categories
  const institutionLogos = [inst11, inst10, inst1, inst2, inst3, inst4, inst5, inst6, inst7, inst8, inst9]
  const marketLogos = [
    markets1,
    markets2,
    markets3,
    markets4,
    markets5,
    markets6,
    markets7,
    markets8,
    markets9,
    markets10,
  ]
  const civilSocietyLogos = [civil11, civil1, civil2, civil3, civil4, civil5, civil6, civil7, civil8, civil9, civil10]

  const interventions = {
    Education: {
      title: "Education",
      content: [
        "Our mission is to democratize access to quality education for underserved children across India. We partner with shelter homes, government schools, and slum communities to provide holistic educational support, including trained teachers, digital learning tools, and personalized mentoring. Our focus is on foundational learning and inclusive pedagogy to eliminate learning poverty and create pathways to academic success.",
      ],
    },
    SkillDevelopment: {
      title: "Skill Development",
      content: [
        "At SWIS, we equip youth with essential skills for today's fast-changing world. Through targeted initiatives like digital and financial education, vocational training, and leadership workshops, we prepare individuals for real-world challenges. Our programs are demand-driven and industry-aligned, focused on making youth job-ready and future-proof, leading to economic independence and personal dignity.",
      ],
    },
    Nutrition: {
      title: "Nutrition",
      content: [
        "Good nutrition is fundamental for health, learning, and productivity. SWIS runs sustainable nutrition programs ensuring children receive wholesome, freshly prepared meals at supported shelter homes, orphanages, and schools. Our goal is to combat malnutrition with dignity, efficiency, and active community participation, fostering a culture of nutrition through education and health check-ups.",
      ],
    },
    Healthcare: {
      title: "Healthcare",
      content: [
        "SWIS's healthcare initiatives address deep inequities in medical access for vulnerable populations. We conduct regular health camps, provide access to diagnostics and essential medicines, and deliver preventive care in urban slums and remote villages. Our outreach is people-centered, culturally sensitive, and action-oriented, bridging the last-mile health gap and ensuring everyone's right to a healthy life.",
      ],
    },
    "Relief of Poor": {
      title: "Relief of Poor",
      content: [
        "In emergencies or chronic poverty, SWIS provides swift, empathetic, and meaningful support. We distribute relief during natural disasters and support families during financial crises, identifying the most vulnerable—daily wage earners, women-led households, and orphaned children—to deliver targeted aid. Beyond temporary relief, we empower the poor through sustainable interventions, linking them to government schemes and providing access to education, healthcare, and skilling opportunities.",
      ],
    },
  }

  const centers = {
    "Social Action": {
      title: "Centre for Social Awareness & Action",
      subtitle: "CSAA",
      content: [
        "Our commitment to creating socially aware leaders is embedded in the work of the Centre for Social Awareness & Action. We recognize that lasting impact begins with understanding—and CSAA equips youth, changemakers, and professionals with the tools to analyze, engage, and act on pressing social issues. Through intensive courses, live projects, field immersions, and practical workshops, CSAA fosters a deep sense of responsibility and purpose.",
        "Our mission is to drive systemic change through education and experiential learning. By nurturing a new generation of social advocates, proposal writers, and on-ground project designers, CSAA serves as a launchpad for impact-driven careers and initiatives. Every engagement is designed to spark thought, build empathy, and translate awareness into meaningful social action.",
      ],
    },
    "Social Innovation": {
      title: "Centre for Social Impact & Innovation",
      subtitle: "CSII",
      content: [
        "Growth is meaningful only when it uplifts those at the grassroots. The Centre for Social Impact & Innovation stands at the intersection of strategy, support, and sustainability—empowering small and mid-sized NGOs with the tools, training, and resources they need to scale impact. Through CSR facilitation, access to grants, and powerful partnerships, CSII enables ideas to become institutions of change.",
        "We are committed to building the next generation of high-impact organizations. Our capacity-building initiatives go beyond compliance, focusing on innovation, resilience, and operational excellence. CSII supports organizations to become agile, accountable, and aligned with the broader SDG framework—ensuring that every rupee invested creates enduring social value.",
      ],
    },
    "Civil Administration": {
      title: "Centre for Civil Administration & Engagement",
      subtitle: "CCAE",
      content: [
        "At SWIS, we believe that democracy thrives when citizens are engaged and informed. The Centre for Civil Administration & Engagement is our initiative to build civic consciousness through fellowships, structured volunteering, and real-world exposure to public systems. By placing young citizens in the heart of governance and community action, CCAE nurtures a new culture of ethical public engagement.",
        "Our goal is to create a generation that doesn't just demand change—but knows how to deliver it. Through mentorship, training, and field experiences with local government bodies and civil society partners, CCAE transforms idealism into public leadership. Every program we run is an investment in participatory democracy and responsive governance.",
      ],
    },
  }

  const ImageSlideshow = ({ images, className = "" }) => {
    const [currentImageSlide, setCurrentImageSlide] = useState(0)
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageSlide((prev) => (prev + 1) % images.length)
      }, 3000)
      return () => clearInterval(timer)
    }, [images.length])
    return (
      <div className={`relative h-96 rounded-lg overflow-hidden ${className}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageSlide}
            src={images[currentImageSlide]}
            alt={`Slide ${currentImageSlide + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    )
  }

  const EnhancedLogoStrip = ({ logos, direction = "left", title, bgColor = "#FCFDFF" }) => {
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]
    return (
      <div className="py-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl mb-2" style={{ color: "#04307b", fontFamily: '"Times New Roman", serif' }}>
            {title}
          </h3>
          <div className="w-16 h-1 mx-auto" style={{ backgroundColor: "#04307b" }}></div>
        </div>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6 items-center"
            animate={{
              x: direction === "left" ? [0, -2000] : [-2000, 0],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="w-36 h-24 bg-white rounded-xl p-4 flex items-center justify-center shadow-xl flex-shrink-0 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: bgColor }}
              >
                <img
                  src={logo || "/placeholder.svg"}
                  alt={`${title} Partner ${index + 1}`}
                  className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    )
  }

  const ContinuousLogoStrip = ({ logos, direction = "left" }) => {
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]
    return (
      <div className="overflow-hidden relative mt-12 py-4">
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: direction === "left" ? [0, -1600] : [-1600, 0],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="w-32 h-20 bg-white rounded-lg p-3 flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ backgroundColor: "#FCFDFF" }}
            >
              <img
                src={logo || "/placeholder.svg"}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FCFDFF" }}>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-end bg-cover bg-center"
        style={{
          backgroundImage: `url(${h1})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pl-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl mb-8" style={{ fontFamily: '"Times New Roman", serif' }}>
              Turning Compassion
              <br />
              into Action
            </h1>
            <div className="w-32 h-1 mb-8" style={{ backgroundColor: "#d2d5e0" }}></div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/New">
                <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                  Our History <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/Member">
                <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                  Our Team <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* We Care Section - Using Provided Image */}
      <section className="py-0" style={{ backgroundColor: "#fdf2df" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <img
            src={wecare || "/placeholder.svg"}
            alt="WE CARE - SWIS is an Indian non-profit committed to radically impact the life of 2M+ people in the next 2 decades"
            className="w-full h-auto object-cover"
          />
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-xl">
            <p className="text-gray-700 leading-relaxed">
              {
                "SWIS is an Indian non-profit committed to radically impact the lives of 2M+ people in the next two decades."
              }
            </p>
          </div>
        </motion.div>
      </section>
      {/* Our Interventions Section */}
      <section
        className="relative py-20 flex items-center"
        style={{
          backgroundImage: `url(${h2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white min-h-[500px] overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart size={24} style={{ color: "#d2d5e0" }} />
                <span className="text-lg tracking-wide" style={{ color: "#d2d5e0" }}>
                  OUR INTERVENTIONS
                </span>
              </div>
              <h2 className="text-6xl mb-8" style={{ fontFamily: '"Times New Roman", serif' }}>
                {interventions[activeIntervention].title}
              </h2>
              <div className="space-y-6 mb-8">
                {interventions[activeIntervention].content.map((paragraph, index) => (
                  <p key={index} className="text-md leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {(activeIntervention === "Education" ||
                activeIntervention === "SkillDevelopment" ||
                activeIntervention === "Nutrition") && (
                <Link to={`/${activeIntervention.toLowerCase()}`}>
                  <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                    read more <ArrowRight size={16} />
                  </button>
                </Link>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pl-12 min-h-[500px]"
            >
              <div className="space-y-8">
                {Object.keys(interventions).map((intervention, index) => (
                  <motion.div
                    key={intervention}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeIntervention === intervention ? "opacity-100" : "opacity-60 hover:opacity-80"
                    }`}
                    onMouseEnter={() => setActiveIntervention(intervention)}
                  >
                    <div className="relative">
                      <h3 className="text-2xl text-white mb-2">{intervention.toUpperCase()}</h3>
                      <div
                        className={`h-0.5 transition-all duration-300 ${
                          activeIntervention === intervention ? "w-full bg-orange-400" : "w-0 bg-white"
                        }`}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Combined Centers Section with Exact Reference Navigation */}
      <section className="py-20" style={{ backgroundColor: "#04307b" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex justify-between gap-4 max-w-6xl mx-auto w-full">
              {Object.keys(centers).map((center) => {
                const centerIcons = {
                  "Social Action": <Users size={24} />,
                  "Social Innovation": <Zap size={24} />,
                  "Civil Administration": <Building size={24} />,
                }
                return (
                  <button
                    key={center}
                    onClick={() => setActiveCenter(center)}
                    className={`flex-1 flex items-center justify-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                      activeCenter === center
                        ? "bg-orange-400 text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {centerIcons[center]}
                    <h3 className="text-2xl" style={{ fontFamily: '"Times New Roman", serif' }}>
                      {center}
                    </h3>
                  </button>
                )
              })}
            </div>
          </motion.div>
          <div className="w-full">
            <motion.div
              key={activeCenter}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 shadow-2xl">
                <div className="text-white max-w-none">
                  <h2 className="text-6xl mb-6 leading-tight" style={{ fontFamily: '"Times New Roman", serif' }}>
                    {centers[activeCenter].subtitle}
                  </h2>
                  <h3 className="text-2xl mb-8 opacity-90" style={{ fontFamily: '"Times New Roman", serif' }}>
                    {centers[activeCenter].title}
                  </h3>
                  <p className="text-md leading-relaxed">{centers[activeCenter].content}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Partners & Collaborations Section */}
      <section className="py-20" style={{ backgroundColor: "#d2d5e0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl mb-8" style={{ color: "#04307b", fontFamily: '"Times New Roman", serif' }}>
              Partners & Collaborations
            </h2>
            <p className="text-xl md:text-2xl max-w-xl mx-auto leading-relaxed" style={{ color: "#04307b" }}>
              {
                "Building meaningful partnerships across institutions, markets, and civil society for lasting social impact."
              }
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <EnhancedLogoStrip logos={institutionLogos} direction="left" title="Institutions" bgColor="#FCFDFF" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <EnhancedLogoStrip logos={marketLogos} direction="right" title="Markets" bgColor="#FCFDFF" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <EnhancedLogoStrip logos={civilSocietyLogos} direction="left" title="Civil Society" bgColor="#FCFDFF" />
          </motion.div>
        </div>
      </section>
      {/* Enhanced Reach and Presence Section */}
      <section className="py-32 min-h-screen flex items-center" style={{ backgroundColor: "#023080" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* New Title Position */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-center mb-16"
          >
            <h2 className="text-7xl mb-3 leading-tight" style={{ fontFamily: '"Times New Roman", serif' }}>
              Reach & Presence
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90 text-center lg:text-center">
                SWIS operates across multiple states in India, bringing sustainable change to communities nationwide.
              </p>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: "#d2d5e0" }}></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: New info blocks and existing paragraph */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white flex flex-col items-center lg:items-start"
            >
              <div className="grid grid-cols-2 gap-16 ml-10 mb-12 w-full max-w-md max-h-md">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-8xl font-bold mb-2" style={{ fontFamily: '"Times New Roman", serif' }}>
                    12+
                  </h3>
                  <p className="text-3xl opacity-90">Locations</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-8xl font-bold mb-2" style={{ fontFamily: '"Times New Roman", serif' }}>
                    3K+
                  </h3>
                  <p className="text-3xl opacity-90">Benefited</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-8xl font-bold mb-2" style={{ fontFamily: '"Times New Roman", serif' }}>
                    10K+
                  </h3>
                  <p className="text-3xl opacity-90">Impacted</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-8xl font-bold mb-2" style={{ fontFamily: '"Times New Roman", serif' }}>
                    25+
                  </h3>
                  <p className="text-3xl opacity-90">Partners</p>
                </div>
              </div>
              
            </motion.div>

            {/* Right side: Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src={rnp2 || "/placeholder.svg"}
                alt="India Map showing SWIS presence across multiple states"
                className="max-w-full h-auto max-h-[800px] object-contain mr-14"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "#FCFDFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl mb-8" style={{ color: "#04307b", fontFamily: '"Times New Roman", serif' }}>
              Our Impact
            </h2>
            <p className="text-xl md:text-2xl max-w-xl mx-auto" style={{ color: "#04307b" }}>
              {"Transforming lives across India through sustainable interventions and community engagement."}
            </p>
          </motion.div>
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center text-white text-center p-6"
              style={{ backgroundColor: "#023080" }}
            >
              <h3 className="text-4xl sm:text-5xl mb-3" style={{ fontFamily: '"Times New Roman", serif' }}>
                12+
              </h3>
              <p className="text-xl sm:text-2xl">Locations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={h3 || "/placeholder.svg"}
                alt="Children studying together"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center text-white text-center p-6"
              style={{ backgroundColor: "#023080" }}
            >
              <h3 className="text-4xl sm:text-5xl mb-3" style={{ fontFamily: '"Times New Roman", serif' }}>
                3K+
              </h3>
              <p className="text-xl sm:text-2xl">Benefited</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={h4 || "/placeholder.svg"}
                alt="Community group learning"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center text-white text-center p-6"
              style={{ backgroundColor: "#023080" }}
            >
              <h3 className="text-5xl sm:text-6xl mb-4" style={{ fontFamily: '"Times New Roman", serif' }}>
                10K+
              </h3>
              <p className="text-2xl sm:text-3xl">Impacted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={h5 || "/placeholder.svg"}
                alt="Classroom learning environment"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center text-white text-center p-6"
              style={{ backgroundColor: "#023080" }}
            >
              <h3 className="text-4xl sm:text-5xl mb-3" style={{ fontFamily: '"Times New Roman", serif' }}>
                25+
              </h3>
              <p className="text-xl sm:text-2xl">Partners</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="col-span-2 aspect-[2/1] rounded-2xl overflow-hidden"
            >
              <img
                src={h1 || "/placeholder.svg"}
                alt="SWIS team members together"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Life at SWIS Section */}
      <section className="py-20 relative" style={{ backgroundColor: "#04307b" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pl-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-5xl mb-8" style={{ fontFamily: '"Times New Roman", serif' }}>
                Life at SWIS
              </h2>
              <h3 className="text-2xl mb-6" style={{ fontFamily: '"Times New Roman", serif' }}>
                Why work at SWIS?
              </h3>
              <p className="text-lg leading-relaxed mb-8">
                SWIS is one of the most impactful non-profit organizations in India. With the help of a robust,
                consistent, and merit-driven framework for people management, SWIS continues to maintain an inclusive,
                progressive, and high-performance environment, where purpose-driven talent is enabled with unprecedented
                access to opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/Member">
                  <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                    Meet Our Team <ArrowRight size={16} />
                  </button>
                </Link>
                <a
                  href="/JoinUs"
                  className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                >
                  Join Us <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <img src={h1 || "/placeholder.svg"} alt="Team collaboration" className="w-full h-full object-cover" />
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <img src={h4 || "/placeholder.svg"} alt="Impact work" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
