"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Globe, Target, Award, Users, TrendingUp, Lightbulb, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

// Image imports for HeroSection
import csiiS1 from "../img/h1.jpeg";
import csiiS2 from "../img/csiiS2.jpg";
import csiiS3 from "../img/csiiS3.jpg";

// Image imports for MetricsSection
import csaa1 from "../img/csaa1.JPG";
import csaa3 from "../img/csaa3.JPG";
import csaa5 from "../img/csaa5.JPG";
import csaa7 from "../img/csaa7.jpeg";
import csaa9 from "../img/csaa9.jpeg";

// Image imports for HighlightsSection
import expert from "../img/expert.jpeg";
import field from "../img/feild.jpg";
import h4 from "../img/h4.jpeg";

// AnimatedCounter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", countAnimated }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!countAnimated) return;

    let startTime = null;
    const startCount = 0;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (end - startCount) * easeOutCubic);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [countAnimated, end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// HeroSection Component
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Centre for Social Innovation & Impact",
      subtitle: "Driving Innovation for Impact",
      description: "Exclusive, honorary program designed for individuals committed to developing leadership skills and driving meaningful social change.",
      background: csiiS1,
    },
    {
      title: "Leadership Development",
      subtitle: "Empowering Change Makers",
      description: "Transform communities through awareness and action with comprehensive leadership training.",
      background: csiiS2,
    },
    {
      title: "Social Innovation",
      subtitle: "Creating Lasting Impact",
      description: "Building skills to manage time effectively, meet deadlines, and execute projects with innovation.",
      background: csiiS3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("mission");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 slide-transition ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.background}
              alt="Hero background"
              className="w-full h-full object-cover transform transition-transform duration-[6000ms] ease-in-out scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023080]/90 via-[#04307b]/70 to-[#8e9fc5]/50"></div>
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
      </div>

      <div className="relative z-20 h-full flex items-center justify-end pt-40 md:pt-48 lg:pt-56">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="text-white max-w-4xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8"
              style={{
                fontFamily: '"Times New Roman", serif',
                color: "#ffffff",
                textShadow: "none",
                fontSize: heroSlides[currentSlide].title === "Centre for Social Innovation & Impact" ? "3.5rem" : "4rem",
                lineHeight: "1.2",
              }}
            >
              {heroSlides[currentSlide].title}
            </h1>
            <div className="w-32 h-1 mb-6 sm:mb-8" style={{ backgroundColor: "#ffffff" }}></div>
            <div
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2"
              style={{ fontFamily: '"system-ui"', color: "#ffffff", textShadow: "none" }}
            >
              {heroSlides[currentSlide].subtitle}
            </div>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#ffffff] leading-relaxed mb-6 sm:mb-8 max-w-3xl"
              style={{ fontFamily: '"system-ui"', textShadow: "none" }}
            >
              {heroSlides[currentSlide].description}
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="/JoinUs"
                className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 text-base sm:text-lg"
              >
                Apply Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-white flex flex-col items-center gap-1 sm:gap-2 animate-float hover:text-[#d2d5e0] transition-colors duration-300 cursor-pointer group"
      >
        <span className="text-xs sm:text-sm">Scroll</span>
        <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
      </button>
    </section>
  );
};

// MissionSection Component
const MissionSection = ({ isVisible }) => {
  return (
    <section id="mission" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#FCFDFF] via-[#d2d5e0]/30 to-[#8e9fc5]/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-[#8e9fc5]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#023080]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className={`text-center mb-6 sm:mb-8 md:mb-12 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light text-[#023080] mb-4 sm:mb-6 bg-gradient-to-r from-[#023080] to-[#04307b] bg-clip-text text-transparent">
            Our Mission
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isVisible ? "animate-fadeInUp stagger-1" : "opacity-0"
            }`}
          >
            <div className="text-[#023080] mb-4 sm:mb-6 flex justify-center">
              <div className="bg-gradient-to-br from-[#8e9fc5]/20 to-[#d2d5e0]/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                <Users className="w-6 sm:w-8 h-6 sm:h-8" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#023080] mb-2 sm:mb-4 text-center">
              Empowering NGOs
            </h3>
            <p className="text-[#04307b] leading-relaxed text-center text-sm sm:text-base">
              Providing small and mid-sized NGOs with tools, training, and resources to scale their impact.
            </p>
          </div>
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isVisible ? "animate-fadeInUp stagger-2" : "opacity-0"
            }`}
          >
            <div className="text-[#023080] mb-4 sm:mb-6 flex justify-center">
              <div className="bg-gradient-to-br from-[#8e9fc5]/20 to-[#d2d5e0]/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                <Target className="w-6 sm:w-8 h-6 sm:h-8" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#023080] mb-2 sm:mb-4 text-center">
              Capacity Building
            </h3>
            <p className="text-[#04307b] leading-relaxed text-center text-sm sm:text-base">
              Fostering innovation, resilience, and operational excellence beyond compliance.
            </p>
          </div>
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isVisible ? "animate-fadeInUp stagger-3" : "opacity-0"
            }`}
          >
            <div className="text-[#023080] mb-4 sm:mb-6 flex justify-center">
              <div className="bg-gradient-to-br from-[#8e9fc5]/20 to-[#d2d5e0]/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                <Award className="w-6 sm:w-8 h-6 sm:h-8" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#023080] mb-2 sm:mb-4 text-center">
              Sustainable Impact
            </h3>
            <p className="text-[#04307b] leading-relaxed text-center text-sm sm:text-base">
              Aligning organizations with the SDG framework for enduring social value.
            </p>
          </div>
        </div>

        <div className={`text-center ${isVisible ? "animate-fadeInUp stagger-4" : "opacity-0"}`}>
          <div className="bg-gradient-to-r from-[#023080] to-[#04307b] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
              Centre for Social Impact & Innovation
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-[#d2d5e0] mb-4 sm:mb-6 max-w-3xl mx-auto">
              Growth is meaningful only when it uplifts those at the grassroots. The Centre for Social Impact & Innovation stands at the intersection of strategy, support, and sustainability—empowering small and mid-sized NGOs with the tools, training, and resources they need to scale impact. Through CSR facilitation, access to grants, and powerful partnerships, CSII enables ideas to become institutions of change. We are committed to building the next generation of high-impact organizations. Our capacity-building initiatives go beyond compliance, focusing on innovation, resilience, and operational excellence. CSII supports organizations to become agile, accountable, and aligned with the broader SDG framework—ensuring that every rupee invested creates enduring social value.
            </p>
            <a
              href="/JoinUs"
              className="bg-white text-[#023080] px-6 sm:px-8 py-2 sm:py-3 md:py-4 rounded-full hover:bg-[#FCFDFF] transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ObjectivesSection Component
const ObjectivesSection = ({ isVisible }) => {
  const objectives = [
    {
      icon: <BookOpen className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Knowledge & Skills Development",
      description: "Equips students with knowledge and skills in social issues, policies, and interventions, while enhancing expertise in grant writing, CSR proposals, and impact measurement.",
      color: "from-[#023080] to-[#04307b]",
    },
    {
      icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Civic Engagement & Empathy",
      description: "Through on-ground activities like volunteering and community visits, students develop responsibility and empathy, becoming compassionate changemakers.",
      color: "from-[#04307b] to-[#8e9fc5]",
    },
    {
      icon: <Lightbulb className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Creative Thinking & Innovation",
      description: "Encouraging students to develop unique solutions for social challenges through brainstorming, design thinking, and innovative project ideas.",
      color: "from-[#8e9fc5] to-[#023080]",
    },
    {
      icon: <Target className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Project Management",
      description: "Building skills to manage time effectively, meet deadlines, and execute projects with efficiency and organization.",
      color: "from-[#023080] to-[#8e9fc5]",
    },
    {
      icon: <Award className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Institutions",
      description: "Collaborating with key institutions to enhance impact and outreach through strategic partnerships.",
      color: "from-[#04307b] to-[#023080]",
    },
  ];

  return (
    <section id="objectives" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center mb-6 sm:mb-8 md:mb-12 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#023080] mb-4 sm:mb-6">
            Objectives of this Initiative
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#04307b] max-w-3xl mx-auto">
            A comprehensive approach to fostering social leadership through education, empathy, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#FCFDFF] to-[#d2d5e0]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? `animate-scaleIn stagger-${index + 1}` : "opacity-0"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${objective.color} text-white mb-4 sm:mb-6`}
              >
                {objective.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#023080] mb-2 sm:mb-4">{objective.title}</h3>
              <p className="text-[#04307b] leading-relaxed text-sm sm:text-base">{objective.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// MetricsSection Component
const MetricsSection = ({ isVisible, countAnimated }) => {
  const impactMetrics = [
    { number: 9, suffix: "", label: "States Covered", icon: <Globe className="w-6 sm:w-8 h-6 sm:h-8" />, image: csaa1, hasImage: true },
    { number: 20, suffix: "+", label: "NGO's", icon: <Target className="w-5 sm:w-7 h-5 sm:h-7" />, hasImage: false },
    { number: 100, suffix: "+", label: "Nonprofits Supported", icon: <Award className="w-6 sm:w-8 h-6 sm:h-8" />, image: csaa3, hasImage: true },
    { number: 10, suffix: "+", label: "Corporate Partners", icon: <BookOpen className="w-5 sm:w-7 h-5 sm:h-7" />, hasImage: false },
    { number: 2000, suffix: "+", label: "Households Served", icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />, image: csaa5, hasImage: true },
    { number: 5000, suffix: "+", label: "Impacted", icon: <TrendingUp className="w-5 sm:w-7 h-5 sm:h-7" />, hasImage: false },
    { number: 10, suffix: "", label: "Grand Challenges", icon: <Lightbulb className="w-6 sm:w-8 h-6 sm:h-8" />, image: csaa7, hasImage: true },
    { number: 10, suffix: "", label: "Projects", icon: <Award className="w-5 sm:w-7 h-5 sm:h-7" />, hasImage: false },
    { number: 500, suffix: "+", label: "Senior Leaders", icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />, image: csaa9, hasImage: true }
  ];

  return (
    <section id="metrics" className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-[#FCFDFF] via-[#d2d5e0] to-[#8e9fc5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className={`text-center mb-4 sm:mb-6 md:mb-8 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 sm:mb-4 text-[#023080] italic">Our Work in Numbers</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#04307b] max-w-3xl mx-auto">Driving impactful social change through measurable outcomes</p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="
                relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg
                h-24 sm:h-28 md:h-32
              "
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {metric.hasImage ? (
                <img
                  src={metric.image}
                  alt={metric.label}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#023080] flex flex-col items-center justify-center text-white text-center px-2 sm:px-3 md:px-4">
                  <div className="text-white mb-1 flex justify-center">{metric.icon}</div>
                  <motion.div
                    initial={{ value: 0 }}
                    animate={isVisible && countAnimated ? { value: metric.number } : { value: 0 }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                    className="font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide"
                  >
                    <AnimatedCounter end={metric.number} suffix={metric.suffix} countAnimated={countAnimated} />
                  </motion.div>
                  <div className="text-white/90 font-medium text-xs sm:text-sm md:text-base mt-1 tracking-wide">
                    {metric.label}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// HighlightsSection Component
const HighlightsSection = ({ isVisible }) => {
  const highlights = [
    "Knowledge Sharing",
    "Capacity Building",
    "Large Impact",
    "Collaboration",
    "Incubation",
    "Social Leaders"
  ];

  const images = [expert, field, h4];
  const [activeHighlight, setActiveHighlight] = useState("Introduction");
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const rotateImages = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(rotateImages);
  }, [images.length]);

  return (
    <section id="highlights" className="py-6 sm:py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-4 sm:mb-6 md:mb-8 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#023080] mb-2 sm:mb-4 font-bold hover:text-[#04307b] hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
            Key Highlights of the Initiative
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#04307b] max-w-3xl mx-auto">
            Comprehensive programs designed to<br />develop social leadership and create sustainable community impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-6">
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 slide-transition ${
                    index === imageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Highlight ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-[6000ms] ease-in-out scale-105"
                  />
                </div>
              ))}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setImageIndex(index)}
                    className={`w-2 sm:w-2 md:w-3 h-2 sm:h-2 md:h-3 rounded-full transition-all duration-300 ${
                      index === imageIndex ? "bg-[#023080]" : "bg-[#023080]/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 bg-[#023080] p-4 sm:p-6 md:p-8 rounded-lg">
            <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-6 md:mb-8">
              {highlights.map((highlight) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeHighlight === highlight ? "opacity-100" : "opacity-60 hover:opacity-80"
                  }`}
                  onMouseEnter={() => setActiveHighlight(highlight)}
                >
                  <div className="relative">
                    <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-1 sm:mb-2">{highlight}</h3>
                    <div
                      className={`h-0.5 transition-all duration-300 ${
                        activeHighlight === highlight ? "w-full bg-blue-400" : "w-0 bg-white"
                      }`}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              {activeHighlight === "Knowledge Sharing" && "Provide guides, reports, and best practices to strengthen NGO's effectiveness."}
              {activeHighlight === "Capacity Building" && "To strengthen/build the capacities to strengthen management."}
              {activeHighlight === "Large Impact" && "Launch collaborative projects to expand and accelerate social change."}
              {activeHighlight === "Collaboration" && "Build a network of NGOs, funders, and experts for shared learning and partnerships."}
              {activeHighlight === "Incubation" && "Support social enterprises with mentorship, funding access, and scaling strategies."}
              {activeHighlight === "Social Leaders" && "To create a community pool of social-empathetic leaders."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTASection Component
const CTASection = ({ isVisible }) => {
  return (
    <section id="cta" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#023080] to-[#04307b] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className={isVisible ? "animate-fadeInUp" : "opacity-0"}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">
            Join Our Initiative
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#d2d5e0] mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Be part of a transformative movement to create socially aware leaders who drive systemic change through innovation and impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/JoinUs"
              className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 justify-center text-base sm:text-lg"
            >
              Apply Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main CSII Component
const CSII = () => {
  const [isVisible, setIsVisible] = useState({
    mission: false,
    objectives: false,
    metrics: false,
    highlights: false,
    cta: false,
  });
  const [countAnimated, setCountAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
            if (entry.target.id === "metrics") {
              setCountAnimated(true);
            }
          } else if (entry.target.id === "metrics" && !entry.isIntersecting) {
            setCountAnimated(false);
          }
        });
      },
      { threshold: 0.5 },
    );

    const elements = document.querySelectorAll("[id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .slide-transition { transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 2s ease-in-out infinite; }
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      <HeroSection />
      <MissionSection isVisible={isVisible.mission} />
      <ObjectivesSection isVisible={isVisible.objectives} />
      <MetricsSection isVisible={isVisible.metrics} countAnimated={countAnimated} />
      <HighlightsSection isVisible={isVisible.highlights} />
      <CTASection isVisible={isVisible.cta} />
    </div>
  );
};

export default CSII;