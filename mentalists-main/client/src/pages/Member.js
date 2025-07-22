"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Linkedin, Twitter, Globe, ArrowRight } from "lucide-react"
import rubali from '../img/rubali.jpg';
import sarmishta from '../img/Sarmishtha.jpg';
import khushboo from '../img/khushboo.jpg';
import samik from '../img/samik.jpg';
import Dikshitha from '../img/Dikshitha.jpg';
import nakshatra from '../img/nakshatra.jpg';
import harshita from '../img/harshita.jpg';
import tanya from '../img/tanya.jpg';
import soubhik from '../img/soubhik.jpg';
import advikas from '../img/advikas.jpg';
import zoha from '../img/zoha.jpg';
import manya from '../img/manya.jpg';
import anitha from '../img/anitha.jpg';
import sulagna from '../img/sulagna.jpg';
import shristy from '../img/shristy.jpg';
import vishal from '../img/vishal.jpg';
import advikay from '../img/advikay.jpg';
import mukund from '../img/mukund.jpg';
import pooja from '../img/pooja.jpg';
import tanushka from '../img/tanushka.jpg';
import vidhi from '../img/vidhi.jpg';
import praniti from '../img/praniti.jpg';
import anshul from '../img/anshul.jpg';
import aryamaan from '../img/aryamaan.jpg';
import alisha from '../img/alisha.jpg';
import pritika from '../img/pritika.jpg';
import navya from '../img/navya.jpg';
import jiya from '../img/jiya.jpg';
import abantika from '../img/abantika.jpg';
import singhal from '../img/singhal.jpg';
import thayanithi from '../img/thayanithi.jpg';
import debanjana from '../img/debanjana.jpg';
import hero1 from '../img/memberhero1.jpg';
import hero2 from '../img/memberhero2.jpg';
import hero3 from '../img/memberhero3.jpg';

const memberData = {
  "SWIS Mentorship Team": [
    {
      name: "Ms. Rubali Chakraborty",
      designation: "Ex-Paani Foundation | Ex-CIMA | Ex-Kotak Education Foundation",
      shortDesignation: "Mentor", // Added for card display
      imageUrl: rubali,
      bio: "A finance expert with over 20 years of experience, currently serving as a Consultant at Calcutta Social Project. She has managed financial systems, donor documentation, and budgets for multiple NGOs, ensuring efficiency and transparency. As the former Head of Finance at Paani Foundation, she played a pivotal role in focusing on water conservation initiatives in Maharashtra. Her experience extends to strengthening financial systems at CIMA and Kotak Education Foundation, where she contributed to enhancing operational processes and compliance. She has also led teams on financial governance at Akanksha Foundation.",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Mr. Samik Ghosh",
      designation: "Ex-CIFF | Ex-Oxfam | Ex-IFPRI | Ex-Azim Premji Foundation",
      shortDesignation: "Mentor", // Added for card display
      imageUrl: samik,
      bio: "A Program Management, Monitoring, and Evaluation expert, with over 20 years of experience, specializing in international nutrition, public health, and sustainable development. He made significant contributions to the Integrated Food Policy Research Program at the International Food Policy Research Institute (IFPRI). His prior roles include serving at organizations like the Children's Investment Fund Foundation (CIFF), Oxfam India, and Azim Premji Foundation, where he worked on projects targeting sustainable development and public health issues. He also coordinated the Agriculture for Nutrition and Health Program under CGIAR.",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Ms. Khushboo Singh",
      designation: "Development Professional | CSR Expert | Ex-CEEW | Ex-PSI",
      shortDesignation: "Mentor", // Added for card display
      imageUrl: khushboo,
      bio: "A seasoned CSR and development professional with over 10 years of experience in driving sustainability and social impact initiatives. At Medanta Foundation, she has led transformative, health-centric programs that have enhanced access to quality care and improved community well-being. As a Fellow with the SBI Youth for India program, she addressed critical rural challenges, including public health issues and systemic development gaps in underserved communities. She was also part of the Jagriti Yatra, a nationwide journey. Her work with leading organizations like CEEW and PSI further strengthened her expertise across public health and development sectors.",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Dr. Sarmistha Basu Ghosh",
      designation: "Consultant and Thematic Expert in Teaching and Research",
      shortDesignation: "Mentor", // Added for card display
      imageUrl: sarmishta,
      bio: "Holding a Ph.D. in Organic Chemistry from the University of Burdwan, she has over 7 years of experience as a Consultant and Thematic Expert in Teaching and Research. Her career includes significant contributions to local NGOs and community institutions. She has previously worked at Camellia International School and Morning Bells Academy Prior to these roles, she served as a Project Assistant at the University of Burdwan, contributing to the advancement of scientific research. Her expertise spans medicinal chemistry, higher education, and community development, with a focus on improving lives through science and education.",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
  ],
  "SWIS Leadership Team": [
    {
      name: "Mr. Soubhik Kundu",
      designation: "Board Member - SWIS Institute | SWIS Foundation | Life Member - IRCS | SXC",
      shortDesignation: "Board Member", // Added for card display
      imageUrl:
        soubhik,
      bio: "Soubhik is a Board Member at Institute for Social Welfare and Impact Solutions (SWIS Institute) and the Chairman & Managing Trustee of SWIS Foundation, leading impactful community initiatives, driven by a mission to advance equity and inclusive leadership. He also serves as a Life Member of the Indian Red Cross Society (IRCS). Soubhik completed his early education at St. Patrick's School, Telangana, he has graduated in Economics from St. Xavier's College (Autonomous), Kolkata, post which he moved to pursue Masters in Political Science from Delhi University. He has previously worked with Singhal Enterprises, Scholaride Consulting, Pixstory, and Unschool.",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Ms. Tanya Garg",
      designation: "Board Member - SWIS Institute | IIM A | UICET PU",
      shortDesignation: "Board Member", // Added for card display
      imageUrl:
        tanya,
      bio: "Tanya is a Board Member at Institute for Social Welfare and Impact Solutions (SWIS Institute), where she ensures the smooth functioning and effective implementation of its initiatives. She has done her engineering in Food Technology and Processing from UICET, Punjab University post which she moved to pursue her MBA from the Indian Institute of Management Ahmedabad. Tanya has a strong foundation in stakeholder engagement and organisational dynamics. Drawing from her experience in demand planning at Marico Limited, she applies strategic thinking and operational efficiency which helps create high-impact, sustainable social initiatives.",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Mr. Nakshatra Jagannath",
      designation: "Board Member - SWIS Institute | Head - CCAE | Ex-D. E. Shaw Group | SXC",
      shortDesignation: "Board Member", // Added for card display
      imageUrl: nakshatra,
      bio: "Nakshatra is a Board Member at the Institute for Social Welfare and Impact Solutions (SWIS Institute), oversees the Centre for Civil Administration & Engagement (CCAE). A graduate of St. Xavier's College (Autonomous), Kolkata, he has held roles at The D. E. Shaw Group, the Council for Strategic Affairs (USA), and Raisina House. Recognised among India's Rising Leaders under 30 in Policy & Politics, he has led international policy conferences and is experienced in research, debating, and advocacy. In 2024, he represented India at the World Youth Festival in Sochi under the category 'Young Leaders of Associations, Organisations, and Political Parties'.",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Ms. Harshita Sharma",
      designation: "Board Member - SWIS Institute | Head - CSII | IIM BG | IGNOU | MH DU",
      shortDesignation: "Board Member", // Added for card display
      imageUrl:
        harshita,
      bio: "Harshita is a Board Member at Institute for Social Welfare and Impact Solutions (SWIS Institute), oversees Centre for Social Impact & Innovation (CSII). She holds a degree in Life Sciences from Miranda House, University of Delhi, followed by a Post Graduate Diploma in Corporate Social Responsibility (CSR) from IGNOU, focused on community-driven healthcare and sustainable business operations post which she moved to pursue her MBA in Hospital and Healthcare Management at Indian Institute of Management Bodh Gaya. She aims to improve healthcare accessibility and optimize hospital operations using innovative, patient-centric strategies.",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      name: "Ms. Dikshitha Karahna",
      designation: "Board Member - SWIS Institute | Head - CSAA | SMU | Loyola Academy | NIEPD",
      shortDesignation: "Board Member", // Added for card display
      imageUrl: Dikshitha,
      bio: "Dikshitha is a Board Member at Institute for Social Welfare and Impact Solutions (SWIS Institute), oversees Centre for Awareness & Action (CSAA). She holds a degree in Psychology from Loyola Academy, she has gained valuable experience in Rehabilitation Psychology and Special Education at NIEPID post which she moved to pursue her Masters in English from Sikkim Manipal University (SMU). Driven by a passion for social work, promoting literacy and mental health advocacy, she is deeply committed to creating inclusive and empathetic spaces and has supported such causes through her involvement with Team Everest NGO",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
  ],
  "SWIS Core Team": [
    {
      name: "Ms. Jiya Gudhaka",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        jiya,
      bio: "Jiya Gudhaka is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
      
    },
    {
      name: "Mr. Vishal Maheto",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        vishal,
      bio: "Vishal Maheto is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
      
    },
    {
      name: "Ms. Manya Panjwani",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        manya,
      bio: "Manya Panjwani is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
      
    },
    {
      name: "Ms. Pooja Lakshmi",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        pooja,
      bio: "Pooja Lakshmi is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
      
    },
    {
      name: "Ms. Tanushka MS",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        tanushka,
      bio: "Tanushka MS is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
      
    },
    {
      name: "Ms. Zoha Aza Khan",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        zoha,
      bio: "Zoha Aza Khan is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
      
    },
    {
      name: "Ms. Sulagna Ghosh",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        sulagna,
      bio: "Sulagna Ghosh is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
     
    },
    {
      name: "Ms. Shristy Das",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        shristy,
      bio: "Shristy Das is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
      
    },
    {
      name: "Mr. Mukund Agarwal",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl: mukund,
      bio: "Mukund Agarwal is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
      
    },
    {
      name:"Ms. K. Anitha Reddy",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        anitha,
      bio: "K. Anitha Reddy is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
    },
      
    {
      name: "Ms. Advika Sanganeria",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        advikas,
      bio: "Advika S. is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
    
    },
    {
      name: "Mr. Thayanithi",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        thayanithi,
      bio: "Thayanithi is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
     
    },
    {
      name: "Ms. Advika Yadav",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        advikay,
      bio: "Advika Yadav is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
      
    },

    {
      name: "Ms. Debanjana Biswas",
      designation: "Core Team Member",
      shortDesignation: "Core Team Member", // Added for card display
      imageUrl:
        debanjana,
      bio: "Debanjana Biswas is a dedicated Core Team Member, contributing to various initiatives within the SWIS Institute.",
      
    },
  ],
  "SWIS Founding Supporters": [
    {
      name: "Mr. Anshul Mitra",
      designation: "Founding Supporter",
      shortDesignation: "Founding Supporter", // Added for card display
      imageUrl:
        anshul,
      bio: "Anshul Mitra is a valued Founding Supporter, providing essential backing for the SWIS Institute's mission.",
     
    },
    {
      name: "Ms. Khusboo Singhal",
      designation: "Founding Supporter",
      shortDesignation: "Founding Supporter", // Added for card display
      imageUrl:
       singhal,
      bio: "Khusboo Singhal is a valued Founding Supporter, providing essential backing for the SWIS Institute's mission.",
     
    },
    {
      name: "Mr. Aryamaan Biswas",
      designation: "Founding Supporter",
      shortDesignation: "Founding Supporter", // Added for card display
      imageUrl:
        aryamaan,
      bio: "Aryamaan Biswas is a valued Founding Supporter, providing essential backing for the SWIS Institute's mission.",
      
    },
    {
      name: "Ms. Vidhi Bhageria",
      designation: "Founding Supporter",
      shortDesignation: "Founding Supporter", // Added for card display
      imageUrl:
        vidhi,
      bio: "Vidhi Bhageria is a valued Founding Supporter, providing essential backing for the SWIS Institute's mission.",
      
    },

    {
      name: "Ms. Pritika Gupta",
      designation: "Founding Supporter",
      shortDesignation: "Founding Supporter", // Added for card display
      imageUrl:
        pritika,
      bio: "Pritika Gupta is a valued Founding Supporter, providing essential backing for the SWIS Institute's mission.",
      
    },
    {
      name: "Ms. Alisha Dash",
      designation: "Founding Supporter",
      shortDesignation: "Founding Supporter", // Added for card display
      imageUrl:
        alisha,
      bio: "Alisha Dash is a valued Founding Supporter, providing essential backing for the SWIS Institute's mission.",
      
    },
    {
      name: "Ms. Navya KS",
      designation: "Founding Supporter",
      shortDesignation: "Founding Supporter", // Added for card display
      imageUrl:
       navya,
      bio: "Navya KS is a valued Founding Supporter, providing essential backing for the SWIS Institute's mission.",
      
    },
    {
      name: "Ms. Praniti Mishra",
      designation: "Founding Supporter",
      shortDesignation: "Founding Supporter", // Added for card display
      imageUrl:
        praniti,
      bio: "Praniti Mishra is a valued Founding Supporter, providing essential backing for the SWIS Institute's mission.",
      
    },
    {
      name: "Ms. Abantika Chakraborty",
      designation: "Founding Supporter",
      shortDesignation: "Founding Supporter", // Added for card display
      imageUrl:
        abantika,
      bio: "Abantika Chakraborty is a valued Founding Supporter, providing essential backing for the SWIS Institute's mission.",
      
    },
  ],
}

// Member Modal Component
const MemberModal = ({ member, onClose }) => {
  if (!member) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose} // Close when clicking outside
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full h-[90vh] sm:h-auto sm:max-h-[85vh] overflow-hidden flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="w-full md:w-1/2 flex-shrink-0 relative overflow-hidden min-h-[50vh] md:h-auto">
          <img
            src={member.imageUrl || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover grayscale-0" // Always color in modal
          />
          {/* Name overlay on image in modal */}
          <div className="absolute inset-x-0 bottom-0 bg-[#023080] bg-opacity-90 p-4 sm:p-6 text-white">
            <h3 className="text-xl sm:text-2xl font-semibold mb-1 leading-tight">{member.name}</h3>
            <div className="w-12 h-0.5 bg-[#8e9fc5] rounded-full mb-2"></div>
            <p className="text-sm sm:text-base text-[#d2d5e0] leading-relaxed">{member.shortDesignation || member.designation}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 overflow-y-auto flex-1">
          <div className="h-full flex flex-col justify-start md:justify-center">
            <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">{member.bio}</p>
            {member.socialMedia && (
              <div className="flex space-x-4 mt-4">
                {member.socialMedia.linkedin && (
                  <a
                    href={member.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#023080] hover:text-[#04307b] transition-colors"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
                {member.socialMedia.twitter && (
                  <a
                    href={member.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#023080] hover:text-[#04307b] transition-colors"
                    aria-label={`Twitter profile of ${member.name}`}
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                )}
                {member.socialMedia.website && (
                  <a
                    href={member.socialMedia.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#023080] hover:text-[#04307b] transition-colors"
                    aria-label={`Website of ${member.name}`}
                  >
                    <Globe className="w-6 h-6" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Member = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Hero carousel images
const heroImages = [hero1, hero2, hero3];

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

  const openModal = (member) => {
    setSelectedMember(member)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  const closeModal = () => {
    setSelectedMember(null)
    document.body.style.overflow = "" // Restore scrolling
  }

  const renderTeamSection = (teamName, sectionIndex) => {
    const members = memberData[teamName]
    if (!members) return null

    // Only Mentorship and Leadership teams should have clickable cards and "Read More"
    const showModalForSection = teamName === "SWIS Mentorship Team" || teamName === "SWIS Leadership Team"

    return (
      <section key={teamName} className={`py-16 lg:py-20 ${sectionIndex % 2 === 0 ? "bg-[#FCFDFF]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#023080] mb-6">{teamName}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8e9fc5] to-[#04307b] rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative w-full h-96">
                  <img
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Blue section below the image - fixed height, slides up on hover */}
                  <div className="absolute inset-x-0 bottom-0 h-[120px] bg-[#023080] bg-opacity-90 p-6 text-white flex flex-col justify-center transition-transform duration-300 group-hover:-translate-y-[40px]">
                    <h3 className="text-xl font-semibold mb-1 leading-tight">{member.name}</h3>
                    <div className="w-12 h-0.5 bg-[#8e9fc5] rounded-full mb-2"></div>
                    <p className="text-sm text-[#d2d5e0] leading-relaxed">
                      {member.shortDesignation || member.designation}
                    </p>
                  </div>

                  {/* Read More button - appears on hover, positioned below the initial blue section */}
                  {showModalForSection && (
                    <button
                      onClick={() => openModal(member)}
                      className="absolute inset-x-0 bottom-0 h-[40px] bg-[#04307b] text-white flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label={`Read more about ${member.name}`}
                    >
                      <span className="text-sm font-medium">read more</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-white">
      

      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#023080] via-[#04307b] to-[#8e9fc5]">
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

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8"
              >
               
               
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6 leading-tight"
              >
                Board & Committee Members
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg md:text-xl font-serif text-[#d2d5e0] leading-relaxed max-w-3xl"
              >
                Meet the dedicated individuals who drive our mission forward through strategic leadership, mentorship,
                and unwavering commitment to social change.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Member Sections */}
      {Object.entries(memberData).map(([teamName], sectionIndex) => renderTeamSection(teamName, sectionIndex))}

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-[#023080] to-[#04307b] py-16 lg:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 lg:px-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8">Join Our Mission</h2>
          <p className="text-lg md:text-xl text-[#d2d5e0] mb-8 leading-relaxed">
            Be part of our journey towards creating meaningful impact in communities across India. Together, we can
            build a better future for all.
          </p>
          <a
            href="/JoinUs"
            className="bg-[#8e9fc5] hover:bg-[#d2d5e0] text-[#023080] px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Get Involved
          </a>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedMember && <MemberModal member={selectedMember} onClose={closeModal} />}
      </AnimatePresence>
    </div>
  )
}

export default Member
//vnkgnk