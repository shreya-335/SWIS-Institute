import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Droplet } from 'lucide-react';
import soubhikbg from '../img/sbg1.png';
import hero1 from '../img/historyhero1.jpg';
import hero2 from '../img/historyhero2.jpg';
import hero3 from '../img/historyhero3.jpg';

const New = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Hero carousel images
  const heroImages = [
    hero1,
    hero2,
    hero3 
  ];

  // Timeline data with your provided content including H1 2025
  const timelineData = [
    {
      year: "2021",
      title: "The Beginning",
      subtitle: "Seeds of Change",
      description:
        "The foundation of our vision was laid with the birth of Sangharsh (संघर्ष). A movement that began with a simple yet powerful idea - to create meaningful change in society through youth-driven initiatives.",
      achievements: [
        "H1 2021: The seed of Sangharsh (संघर्ष) were sown with extensive research and community analysis",
        "Founder Soubhik Kundu began conceptualising a comprehensive youth-driven initiative for sustainable social change",
        "H2 2021: Strategic brainstorming sessions, extensive network-building, and meaningful community conversations established the foundation",
      ],
    },
    {
      year: "2022",
      title: "Foundation Building",
      subtitle: "Taking Shape",
      description:
        "From abstract concept to tangible reality - Sangharsh Empowerment Foundation was officially born. This year marked the transition from ideation to implementation with structured programs and dedicated team building.",
      achievements: [
        "H1 2022: Sangharsh Empowerment Foundation informally founded in Hyderabad with a core team of passionate changemakers",
        "Successfully launched pilot volunteering initiatives with the first cohort of dedicated youth volunteers",
        "H2 2022: Strategically expanded initial projects including systematic meal distribution and comprehensive awareness drives",
      ],
    },
    {
      year: "2023",
      title: "Official Establishment",
      subtitle: "Formal Recognition",
      description:
        "Official registration marked our evolution into a structured, legally recognized organization. This milestone year established our credibility and opened doors to larger partnerships and collaborative opportunities.",
      achievements: [
        "H1 2023: Officially registered as a not-for-profit public charitable trust with comprehensive legal documentation",
        "Successfully built a robust core team and strategically onboarded the first cohort of committed long-term volunteers",
        "H2 2023: Established strategic partnerships with 7+ shelter homes across diverse regions of India",
      ],
    },
    {
      year: "2024",
      title: "Scaling Impact",
      subtitle: "Exponential Growth",
      description:
        "A transformative year of remarkable expansion and strategic evolution. Our reach extended across multiple states while maintaining quality and impact. Strategic planning sessions shaped our ambitious future vision.",
      achievements: [
        "H1 2024: Successfully operated in 12+ diverse locations across India with consistent quality standards",
        "Organizational growth: Core team expanded to 30+ dedicated members; volunteer base surpassed 400+ active contributors",
        "H2 2024: Comprehensive strategic planning initiatives for institutional transition and sustainable growth models",
      ],
    },
    {
      year: "2025",
      title: "New Era - SWIS Foundation",
      subtitle: "Transformational Rebrand",
      description:
        "A pivotal transformation marking our evolution from Sangharsh to SWIS Foundation - Social Welfare & Impact Solutions. This strategic rebrand represents our commitment to structured growth and ambitious scaling to impact millions of lives.",
      achievements: [
        "H1 2025 (Jan–Jun): Launched the SWIS Foundation – Social Welfare & Impact Solutions",
        "Transitioned from Sangharsh to SWIS, symbolising a new era of structured growth",
        "Vision expanded to impact 2 million+ lives over the next 20 years through scalable, data-driven, and expert-led programs",
      ],
    },
  ]

  // Auto-slide for hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Slideshow - Fully Responsive */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden bg-gradient-to-br from-[#023080] via-[#04307b] to-[#8e9fc5]">
        {/* Hero Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide] || "/placeholder.svg"}
              alt={`Hero ${currentSlide + 1}`}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023080]/80 via-[#04307b]/60 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content - Responsive */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-4 sm:mb-6 md:mb-8"
              >
              
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight"
              >
                An extraordinary vision <br/>
                
                  <span className="text-[#d2d5e0] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    for an extraordinary nation
                  </span>
                
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Responsive */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Slide Indicators - Responsive */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Our History Introduction - Responsive */}
      <section className="bg-[#023080] py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#8e9fc5] rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center">
              <Droplet className="w-8 h-8 sm:w-10 sm:h-10 text-[#023080]" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 sm:mb-8"
          >
            Our History
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-[#8e9fc5] mb-6 sm:mb-8">
              From Vision to Impact
            </h3>
            <div className="w-2 h-16 sm:h-24 bg-[#d2d5e0] mx-auto opacity-60"></div>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  viewport={{ once: true }}
  className="max-w-4xl mx-auto"
>
  <p className="text-lg sm:text-xl md:text-3xl text-[#d2d5e0] leading-relaxed font-light">
    Over 4 years of dedicated service, transformative growth, and unwavering commitment to social change.
    From humble beginnings to revolutionary impact - this is our story.
  </p>
</motion.div>
</div>
</section>

<section className="bg-[#023080] py-20 px-4 sm:px-6 lg:px-12 text-white relative overflow-hidden">
  {/* Top connector line */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-[#d2d5e0] opacity-60"></div>

  {/* Centered Quote */}
  <motion.blockquote
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center max-w-5xl mx-auto text-lg sm:text-xl md:text-3xl font-light leading-relaxed mb-8 font-[Times_New_Roman,_serif]"
  >
    "Our purpose has to be clear. Our compassion stronger.<br />
    Our commitment deeper. And our impact wider.<br />
    This is my dream for SWIS and for India."
  </motion.blockquote>



  {/* Bottom Grid: Name and Image */}
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-6 px-4">
    {/* Left - Name and Title */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex-1 text-left"
    >
      <div className="text-6xl sm:text-7xl lg:text-8xl text-white  font-medium mb-2"
        style={{ fontFamily: '"Times New Roman", serif' }}>
        Soubhik<br></br> Kundu
      </div>
      <div className="text-xl sm:text-2xl text-[#d2d5e0] font-light">
        Chairman & Managing Trustee
      </div>
      <div className="text-xl sm:text-2xl text-[#d2d5e0] font-medium">
        SWIS Foundation
      </div>

      {/* Decorative Line */}
      <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#8e9fc5] to-[#d2d5e0] rounded-full mt-4"></div>
    </motion.div>

    {/* Right - Image */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex-1 flex justify-center"
    >
      <img
        src={soubhikbg}
        alt="Soubhik Kundu"
        className="h-[450px] lg:h-[550px] object-cover filter grayscale transition-all duration-500"
        style={{
          maskImage: "linear-gradient(to bottom, black 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 95%, transparent 100%)",
        }}
      />
    </motion.div>
  </div>

  {/* Bottom connector line */}
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-[#d2d5e0] opacity-60"></div>
</section>


      {/* Timeline Section - Fully Responsive with Fixed Overlap Issues */}
      <section className="relative bg-[#F5F1E8] py-12 sm:py-16 lg:py-20">
        {/* Timeline Line - Responsive positioning */}
        <div className="absolute left-6 sm:left-8 md:left-12 lg:left-20 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-[#8e9fc5] to-[#023080]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 sm:mb-20 lg:mb-24"
            >
              {/* Timeline Dot - Responsive */}
              <div className="absolute left-4 sm:left-6 md:left-10 lg:left-16 top-6 sm:top-8 w-4 h-4 sm:w-6 sm:h-6 bg-[#023080] rounded-full border-2 sm:border-4 border-white shadow-lg z-10"></div>

              {/* Year Badge - Responsive positioning with better spacing */}
              <div className="absolute left-12 sm:left-16 md:left-20 lg:left-28 top-4 sm:top-6 bg-[#023080] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-lg font-medium shadow-lg z-20">
                {item.year}
              </div>

              {/* Content Container - Enhanced responsive margins to prevent overlap */}
              <div className="ml-20 sm:ml-28 md:ml-32 lg:ml-40 xl:ml-44 mr-2 sm:mr-4 lg:mr-6">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100">
                  {/* Content */}
                  <div className="w-full">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#023080] mb-2">{item.title}</h3>
                    <h4 className="text-lg sm:text-xl text-[#8e9fc5] font-light mb-4 sm:mb-6">{item.subtitle}</h4>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 text-justify">
                      {item.description}
                    </p>

                    <div>
                      <h5 className="text-lg sm:text-xl font-medium text-[#023080] mb-4 sm:mb-6">Key Achievements</h5>
                      <div className="space-y-3 sm:space-y-4">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start space-x-3 sm:space-x-4">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#8e9fc5] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify flex-1">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#8e9fc5] to-[#04307b] rounded-full mt-6 sm:mt-8"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA - Responsive */}
      <section className="bg-gradient-to-r from-[#023080] to-[#04307b] py-12 sm:py-16 lg:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 sm:mb-8">
            The Journey Continues
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#d2d5e0] mb-6 sm:mb-8 leading-relaxed">
            Join us as we work towards impacting 2 million+ lives through our innovative, data-driven approach to social
            welfare and sustainable development.
          </p>
          <a
            href="/JoinUs"
            className="bg-[#8e9fc5] hover:bg-[#d2d5e0] text-[#023080] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
          >
            Be Part of Our Story
          </a>
        </motion.div>
      </section>
    </div>
  )
}

export default New