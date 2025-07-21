"use client"

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Globe, Target, Award, Users, TrendingUp, Lightbulb, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { BookOpen as GraduationCap, Leaf } from "lucide-react"; // Added missing icons

// Image imports for HeroSection
import csaaS1 from "../img/csaaS1.jpeg";
import csaaS2 from "../img/csaaS2.jpeg";
import csaaS3 from "../img/csaaS3.jpeg";

// Image imports for HighlightsSection
import R1 from "../img/action.JPG";
import R2 from "../img/talk.JPG";
import R3 from "../img/crowdfunding.jpeg";

// Image imports for MetricsSection
import csaa1 from "../img/csaa1.JPG";
import csaa3 from "../img/csaa3.JPG";
import csaa5 from "../img/csaa5.JPG";
import csaa7 from "../img/csaa7.jpeg";
import csaa9 from "../img/csaa9.jpeg";

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
      title: "Centre for Social Awareness & Action",
      subtitle: "Empowering Social Leaders",
      description: "Equipping youth and professionals with tools to analyze, engage, and act on pressing social issues.",
      background: csaaS1
    },
    {
      title: "Driving Systemic Change",
      subtitle: "Through Education & Action",
      description: "Fostering a new generation of social advocates and project designers through experiential learning.",
      background: csaaS2
    },
    {
      title: "Building Impactful Careers",
      subtitle: "Launchpad for Change",
      description: "Sparking thought, building empathy, and translating awareness into meaningful social action.",
      background: csaaS3
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('mission');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 slide-transition ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
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

      <div className="relative z-20 h-full flex items-center justify-end pt-20 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="text-white max-w-4xl">
            <h1
              className="text-5xl md:text-7xl mb-8"
              style={{
                fontFamily: '"Times New Roman", serif',
                color: '#ffffff',
                textShadow: 'none',
                fontSize: heroSlides[currentSlide].title === "Centre for Social Awareness & Action" ? '3.5rem' : '4rem',
                lineHeight: '1.2'
              }}
            >
              {heroSlides[currentSlide].title}
            </h1>
            <div className="w-32 h-1 mb-8" style={{ backgroundColor: "#ffffff" }}></div>
            <div
              className="text-2xl sm:text-3xl lg:text-4xl mt-2"
              style={{ fontFamily: '"system-ui"', color: '#ffffff', textShadow: 'none' }}
            >
              {heroSlides[currentSlide].subtitle}
            </div>

            <p
              className="text-lg sm:text-xl text-[#ffffff] leading-relaxed mb-8 max-w-3xl"
              style={{ fontFamily: '"system-ui"', textShadow: 'none' }}
            >
              {heroSlides[currentSlide].description}
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="/JoinUs"
                className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
              >
                Apply Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 right-4 sm:right-8 text-white flex flex-col items-center gap-2 animate-float hover:text-[#d2d5e0] transition-colors duration-300 cursor-pointer group"
      >
        <span className="text-sm">Scroll</span>
        <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
      </button>
    </section>
  );
};

// MissionSection Component
const MissionSection = ({ isVisible }) => {
  return (
    <section id="mission" className="py-16 sm:py-20 bg-gradient-to-br from-[#FCFDFF] via-[#d2d5e0]/30 to-[#8e9fc5]/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#8e9fc5]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#023080]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-[#023080] mb-8 bg-gradient-to-r from-[#023080] to-[#04307b] bg-clip-text text-transparent">
            Our Mission
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isVisible ? 'animate-fadeInUp stagger-1' : 'opacity-0'
            }`}
          >
            <div className="text-[#023080] mb-6 flex justify-center">
              <div className="bg-gradient-to-br from-[#8e9fc5]/20 to-[#d2d5e0]/30 p-4 rounded-2xl">
                <Users className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#023080] mb-4 text-center">
              Social Awareness
            </h3>
            <p className="text-[#04307b] leading-relaxed text-center text-sm sm:text-base">
              Equipping youth with knowledge and skills to analyze and address pressing social issues.
            </p>
          </div>
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isVisible ? 'animate-fadeInUp stagger-2' : 'opacity-0'
            }`}
          >
            <div className="text-[#023080] mb-6 flex justify-center">
              <div className="bg-gradient-to-br from-[#8e9fc5]/20 to-[#d2d5e0]/30 p-4 rounded-2xl">
                <Target className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#023080] mb-4 text-center">
              Experiential Learning
            </h3>
            <p className="text-[#04307b] leading-relaxed text-center text-sm sm:text-base">
              Fostering empathy and responsibility through live projects and field immersions.
            </p>
          </div>
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isVisible ? 'animate-fadeInUp stagger-3' : 'opacity-0'
            }`}
          >
            <div className="text-[#023080] mb-6 flex justify-center">
              <div className="bg-gradient-to-br from-[#8e9fc5]/20 to-[#d2d5e0]/30 p-4 rounded-2xl">
                <Award className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#023080] mb-4 text-center">
              Impactful Careers
            </h3>
            <p className="text-[#04307b] leading-relaxed text-center text-sm sm:text-base">
              Launching careers for social advocates and project designers through practical training.
            </p>
          </div>
        </div>

        <div className={`text-center ${isVisible ? 'animate-fadeInUp stagger-4' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#023080] to-[#04307b] text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">
              Centre for Social Awareness & Action
            </h3>
            <p className="text-lg sm:text-xl text-[#d2d5e0] mb-8 max-w-3xl mx-auto">
              Our commitment to creating socially aware leaders is embedded in the work of the Centre for Social Awareness & Action. We recognize that lasting impact begins with understanding—and CSAA equips youth, changemakers, and professionals with the tools to analyze, engage, and act on pressing social issues. Through intensive courses, live projects, field immersions, and practical workshops, CSAA fosters a deep sense of responsibility and purpose.
            </p>
            <a href="/JoinUs" className="bg-white text-[#023080] px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#FCFDFF] transition-all duration-300 transform hover:scale-105">
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
      icon: <BookOpen className="w-8 h-8" />,
      title: "Knowledge & Skills Development",
      description: "Equips students with knowledge and skills in social issues, policies, and interventions, while enhancing expertise in grant writing, CSR proposals, and impact measurement.",
      color: "from-[#023080] to-[#04307b]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Civic Engagement & Empathy",
      description: "Fosters responsibility and empathy through volunteering and community visits, empowering students to become compassionate changemakers.",
      color: "from-[#04307b] to-[#8e9fc5]"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Thinking & Innovation",
      description: "Encourages students to develop unique solutions for social challenges through brainstorming and design thinking.",
      color: "from-[#8e9fc5] to-[#023080]"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Project Management",
      description: "Builds skills to manage time effectively, meet deadlines, and execute projects with efficiency and organization.",
      color: "from-[#023080] to-[#8e9fc5]"
    }
  ];

  return (
    <section id="objectives" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#023080] mb-6">
            Objectives of this Initiative
          </h2>
          <p className="text-lg sm:text-xl text-[#04307b] max-w-3xl mx-auto">
            A comprehensive approach to fostering social leadership through education, empathy, and innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#FCFDFF] to-[#d2d5e0]/30 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? `animate-scaleIn stagger-${index + 1}` : 'opacity-0'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${objective.color} text-white mb-6`}>
                {objective.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#023080] mb-4">{objective.title}</h3>
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
    { number: 9, suffix: "", label: "States Covered", icon: <Globe className="w-8 h-8" />, image: csaa1, hasImage: true },
    { number: 25, suffix: "+", label: "Schools", icon: <Target className="w-7 h-7" />, hasImage: false },
    { number: 100, suffix: "+", label: "Nonprofits Supported", icon: <Award className="w-8 h-8" />, image: csaa3, hasImage: true },
    { number: 10, suffix: "+", label: "Universities", icon: <BookOpen className="w-7 h-7" />, hasImage: false },
    { number: 2000, suffix: "+", label: "Households Served", icon: <Users className="w-8 h-8" />, image: csaa5, hasImage: true },
    { number: 3000, suffix: "+", label: "Students", icon: <TrendingUp className="w-7 h-7" />, hasImage: false },
    { number: 10, suffix: "", label: "Grand Challenges", icon: <Lightbulb className="w-8 h-8" />, image: csaa7, hasImage: true },
    { number: 10, suffix: "", label: "Sustainable Projects", icon: <Award className="w-7 h-7" />, hasImage: false },
    { number: 500, suffix: "+", label: "Senior Leaders", icon: <Users className="w-8 h-8" />, image: csaa9, hasImage: true }
  ];

  return (
    <section id="metrics" className="py-12 bg-gradient-to-br from-[#FCFDFF] via-[#d2d5e0] to-[#8e9fc5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className={`text-center mb-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-[#023080] italic">Our Work in Numbers</h2>
          <p className="text-lg sm:text-xl text-[#04307b] max-w-3xl mx-auto">Driving impactful social change through measurable outcomes</p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="
                relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg
                h-28 sm:h-32
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
                <div className="w-full h-full bg-[#023080] flex flex-col items-center justify-center text-white text-center px-2 sm:px-3">
                  {/* ✅ Icon centered and slightly smaller */}
                  <div className="text-white mb-1 flex justify-center">{metric.icon}</div>
                  
                  {/* ✅ Smaller number text for balance */}
                  <motion.div
                    initial={{ value: 0 }}
                    animate={isVisible && countAnimated ? { value: metric.number } : { value: 0 }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                    className="font-extrabold text-2xl sm:text-3xl tracking-wide"
                  >
                    <AnimatedCounter end={metric.number} suffix={metric.suffix} countAnimated={countAnimated} />
                  </motion.div>
                  
                  {/* ✅ Label with reduced size */}
                  <div className="text-white/90 font-medium text-sm sm:text-base mt-1 tracking-wide">
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
    "Introduction",
    "Talk",
    "Action-Based",
    "Field",
    "Expert",
    "Crowdfunding"
  ];

  const images = [R1, R2, R3];
  const [activeHighlight, setActiveHighlight] = useState("Introduction");
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const rotateImages = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(rotateImages);
  }, [images.length]);

  return (
    <section id="highlights" className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-4 sm:mb-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#023080] mb-4 font-bold hover:text-[#04307b] hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
            Key Highlights of the Initiative
          </h2>
          <p className="text-lg sm:text-xl text-[#04307b] max-w-3xl mx-auto">
            Comprehensive programs designed to<br />develop social leadership and create sustainable community impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-6">
            <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 slide-transition ${
                    index === imageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Highlight ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-[6000ms] ease-in-out scale-105"
                  />
                </div>
              ))}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === imageIndex ? 'bg-[#023080]' : 'bg-[#023080]/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 bg-[#023080] p-4 sm:p-6 rounded-lg">
            <div className="space-y-4 mb-8">
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
                    <h3 className="text-2xl text-white mb-2">{highlight}</h3>
                    <div
                      className={`h-0.5 transition-all duration-300 ${
                        activeHighlight === highlight ? "w-full bg-blue-400" : "w-0 bg-white"
                      }`}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-white text-md leading-relaxed">
              {activeHighlight === "Introduction" && "Introducing our initiative to foster social leadership."}
              {activeHighlight === "Talk" && "Engaging discussions to inspire action."}
              {activeHighlight === "Action-Based" && "Hands-on projects driving real change."}
              {activeHighlight === "Field" && "Practical field experiences for impactful learning."}
              {activeHighlight === "Expert" && "Guidance from industry experts and leaders."}
              {activeHighlight === "Crowdfunding" && "Community-supported funding for initiatives."}
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
    <section id="cta" className="py-16 sm:py-20 bg-gradient-to-r from-[#023080] to-[#04307b] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className={isVisible ? 'animate-fadeInUp' : 'opacity-0'}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8">
            Join Our Initiative
          </h2>
          <p className="text-lg sm:text-xl text-[#d2d5e0] mb-8 sm:mb-12 leading-relaxed">
            Be part of a transformative movement to create socially aware leaders who drive systemic change through education and action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/JoinUs" className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 justify-center">
              Apply Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main CentreSocialAwareness Component
const CentreSocialAwareness = () => {
  const [isVisible, setIsVisible] = useState({
    mission: false,
    objectives: false,
    partners: false,
    metrics: false,
    highlights: false,
    cta: false
  });
  const [countAnimated, setCountAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            if (entry.target.id === 'metrics') {
              setCountAnimated(true);
            }
          } else if (entry.target.id === 'metrics' && !entry.isIntersecting) {
            setCountAnimated(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-28 px-2 sm:px-4 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 text-center">Centre for Social Awareness & Action</h1>
        <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 text-center">Driving systemic change through awareness and action.</p>
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
    </div>
  );
};

export default CentreSocialAwareness;