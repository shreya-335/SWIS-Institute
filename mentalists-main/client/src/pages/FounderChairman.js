"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Placeholder images for the rotating banner
import founderHero1 from "../img/gal1.jpg";
import founderHero2 from "../img/gal4.jpg";
import founderHero3 from "../img/gal3.jpg";

// Gallery images
import gal1 from "../img/founderHero1.jpg";
import gal2 from "../img/gal2.jpg";
import gal3 from "../img/founderHero3.jpg";
import gal4 from "../img/founderHero2.jpg";
import gal5 from "../img/gal5.jpg";
import gal6 from "../img/gal6.jpg";

// Founder image
import founder from "../img/founder.jpg";

const rotatingImages = [
  founderHero1,
  founderHero2,
  founderHero3,
];

// Gallery images
const allGalleryImages = [
  gal1,
  gal2,
  gal3,
  gal4,
  gal5,
  gal6,
];

// Founder image
const founderImage = founder;

const FounderChairman = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([allGalleryImages[0], allGalleryImages[1], allGalleryImages[2]]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rotatingImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setGalleryImages((prev) => {
      const currentFirstIndex = allGalleryImages.indexOf(prev[0]);
      const newFirstIndex = (currentFirstIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
      return [
        allGalleryImages[newFirstIndex],
        allGalleryImages[(newFirstIndex + 1) % allGalleryImages.length],
        allGalleryImages[(newFirstIndex + 2) % allGalleryImages.length],
      ];
    });
  };

  const handleNext = () => {
    setGalleryImages((prev) => {
      const currentLastIndex = allGalleryImages.indexOf(prev[2]);
      const newFirstIndex = (currentLastIndex + 1) % allGalleryImages.length;
      return [
        allGalleryImages[newFirstIndex],
        allGalleryImages[(newFirstIndex + 1) % allGalleryImages.length],
        allGalleryImages[(newFirstIndex + 2) % allGalleryImages.length],
      ];
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFDFF', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Rotating Banner Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(2, 48, 128, 0.8), rgba(4, 48, 123, 0.6)), url(${rotatingImages[currentImageIndex]}) center/cover no-repeat`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#023080]/30 via-transparent to-[#04307b]/20"></div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 60 }}
            className="backdrop-blur-md bg-white/10 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 sm:mb-8 leading-tight tracking-wide"
            >
              A timeless visionary
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mx-auto opacity-90"
            >
              whose legacy emboldens the imagination of a billion people
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 tracking-wider">SCROLL</span>
            <div className="w-0.5 h-8 bg-white/50"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Quote Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: '#023080' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-white mb-6 sm:mb-8">
                  "Our dreams have to be bigger. Our ambitions higher. Our commitment deeper.
                  And our efforts greater. This is my dream for SWIS and for India."
                </blockquote>
                <cite className="text-lg sm:text-xl font-medium text-[#8e9fc5]">— Soubhik Kundu</cite>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8e9fc5] to-[#04307b] rounded-2xl blur-lg opacity-30 transform scale-105"></div>
                <img
                  src={founderImage}
                  alt="Soubhik Kundu"
                  className="relative w-64 sm:w-80 lg:w-96 h-80 sm:h-96 lg:h-[28rem] object-cover rounded-2xl shadow-2xl border-2 border-white/20"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: '#d2d5e0' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-white/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-white/50"
          >
            <div className="text-center mb-12 lg:mb-16">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6"
                style={{ color: '#04307b' }}
              >
                Founder–Chairman
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-24 h-1 mx-auto rounded-full"
                style={{ backgroundColor: '#023080' }}
              ></motion.div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 text-gray-700 leading-relaxed mb-12 lg:mb-16">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-base sm:text-lg">
                  <strong className="font-semibold" style={{ color: '#04307b' }}>Soubhik Kundu</strong><br/>
                  <span className="text-[#8e9fc5] font-medium">Chairman & Managing Trustee – SWIS Foundation</span><br/>
                  <span className="text-[#8e9fc5] font-medium">Board Member – Institute for Social Welfare and Impact Solutions (SWIS Institute)</span>
                </p>
                
                <p className="text-sm sm:text-base leading-relaxed">
                  Soubhik Kundu is a passionate changemaker, institution builder, and social impact strategist who
                  serves as the Chairman & Managing Trustee of the SWIS Foundation – Social Welfare and Impact
                  Solutions – a mission-driven organisation committed to advancing equity, grassroots
                  transformation, and inclusive development across India. He also serves as a Board Member at the
                  SWIS Institute, which anchors research, capacity building, and strategic program delivery under the
                  foundation's umbrella.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Driven by the vision of empowering communities through expert-led and equity-centered
                  leadership, Soubhik has built a diverse ecosystem of projects, fellowships, and outreach programs
                  that span education, livelihoods, civic participation, and impact policy engagement. His efforts have
                  catalysed the formation of numerous institutional partnerships and have mobilized hundreds of
                  young changemakers across the country.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  He is also a Life Member of the Indian Red Cross Society (IRCS), reflecting his commitment to
                  humanitarian work and public service.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Soubhik completed his schooling at St. Patrick's School, Telangana, and graduated from St.
                  Xavier's College (Autonomous), Kolkata in Economics with Sociology, Political Science, and
                  International Relations post which he moved to pursue his Master's in Political Science from the
                  University of Delhi.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-sm sm:text-base leading-relaxed">
                  His professional experiences span the social sector, entrepreneurship, and consulting. He has
                  previously worked with organisations including Singhal Enterprises, Scholaride Consulting,
                  Pixstory, and Unschool. Alongside this, he has actively volunteered with NCC, NSS, Youth for
                  Seva, and TBWA, demonstrating his deep-rooted ethos of service and civic duty.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Soubhik's approach blends grassroots insight with institutional thinking, combining innovation,
                  empathy, and strategic leadership. His commitment to nation-building through youth engagement
                  and social innovation continues to inspire a generation of emerging leaders and social
                  entrepreneurs.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  As the founder of the SWIS Foundation, Soubhik envisions building a next-generation impact
                  infrastructure for India – one that is powered by research, compassion, policy literacy, and
                  community leadership, with the long-term goal of fostering a more just, equitable, and inclusive
                  society.
                </p>
              </motion.div>
            </div>

            {/* Gallery Navigation */}
            <div className="relative">
              <div className="flex justify-center items-center">
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-0 sm:left-4 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: '#023080' }}
                >
                  ←
                </motion.button>
                
                <div className="flex gap-4 sm:gap-6 overflow-hidden max-w-xs sm:max-w-2xl lg:max-w-4xl mx-12 sm:mx-20">
                  {galleryImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8e9fc5] to-[#04307b] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <img
                        src={img || "https://via.placeholder.com/300x200?text=Image+Not+Found"}
                        alt={`Gallery ${i + 1}`}
                        onError={(e) => { e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found"; }}
                        className="relative w-48 sm:w-64 lg:w-80 h-32 sm:h-44 lg:h-56 object-cover rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1"
                      />
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-0 sm:right-4 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: '#023080' }}
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default FounderChairman;