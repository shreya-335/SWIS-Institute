import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import soubhikbg from "../img/sbg1.png";
import edu1 from "../img/edu2.jpg";
import skill1 from "../img/skill1.jpg";


// Inline Button Component
const Button = React.forwardRef(({ className = "", variant = "default", size = "default", ...props }, ref) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Inline Card Components
const Card = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

// Main Component
const Allinone = () => {
  return (
    <div className="min-h-screen bg-[#023080] pt-24
    ">
      {/* Hero Section */}
   <section className="py-16 sm:py-20 lg:py-24  relative overflow-hidden " style={{ backgroundColor: "#023080" }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      
      {/* Quote Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 lg:pr-8"
      >
        {/* Quote with styled quote marks */}
        <div className="relative">
          {/* Opening quote mark */}
          <div className="absolute -top-6 -left-6 text-9xl text-[#F5F1E8] font-serif opacity-70">
            “
          </div>
          
          {/* Quote Text */}
          <blockquote className="text-xl sm:text-2xl md:text-3xl text-[#F5F1E8] font-light leading-relaxed mb-8 pl-8 pr-8 pt-8">
            Dedication over designation, sincerity over seniority, values over valuables, effort over results, loyalty over royalty — because real impact comes not from titles or trophies, but from purpose, passion, and perseverance.
          </blockquote>
          
          {/* Closing quote mark */}
          <div className="absolute -bottom-24 -right-6 text-9xl text-[#F5F1E8] font-serif opacity-70">
            ”
          </div>
        </div>
        
        {/* Author info */}
        <div className="mt-8">
          <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F5F1E8] mb-2"
          style={{ fontFamily: '"Times New Roman", serif' }}>
            Soubhik
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#F5F1E8] mb-4"
          style={{ fontFamily: '"Times New Roman", serif' }}>
            Kundu
          </div>
          <div className="text-base sm:text-lg text-gray-600 mt-2 text-[#F5F1E8]">
            Chairman & Managing Trustee, SWIS
          </div>
        </div>
      </motion.div>

      {/* Portrait with circular design elements */}
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
  </div>
</section>


      {/* Our Interventions Section */}
      <section className="py-20" style={{ backgroundColor: "#FCFDFF" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-light mb-6" style={{ color: "#023080", fontFamily: '"Times New Roman", serif'  }}>
              Our Interventions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are an extraordinary family of people who invent solutions that go on to empower a nation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Education", image: edu1, path: "/education" },
              { title: "Skill Development", image: skill1, path: "/SkillDevelopment" },
              { title: "Nutrition", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=300&fit=crop", path: "/nutrition" },
              { title: "Healthcare", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop", path: "/healthcare" },
              { title: "Relief of Poor", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop", path: "/relief-of-poor" }
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
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={intervention.image}
                      alt={intervention.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-light text-white mb-3">{intervention.title}</h3>
                      <Link to={intervention.path}>
                        <Button
                          variant="outline"
                          className="text-white border-white hover:bg-white hover:text-black transition-colors"
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
      <section className="py-20" style={{ backgroundColor: "#F5F5DC" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-light mb-8" style={{ color: "#023080" , fontFamily: '"Times New Roman", serif' }}>
              Diversity & Inclusion
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-gray-700">We take pride in the diversity of our people that make up the SWIS family.</p>
              <p className="text-lg leading-relaxed text-gray-700">
                The SWIS Diversity & Inclusion Charter articulates our affirmation and unwavering commitment to the values of Diversity, Equity and Inclusion.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                SWIS emphasizes the principle of non-discrimination on the basis of race, colour, religion, gender, gender-identity (or non-disclosure thereof), age, marital status, national origin, disability, sexual orientation, place of birth and/or any other dimension of diversity.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We believe that our rich and diverse human resource reflects the wonderful diversity of our nation and gives us a sustainable competitive advantage.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Each of our members are provided with an opportunity to participate, contribute and grow within SWIS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 rounded-lg overflow-hidden">
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
      <section className="py-20" style={{ backgroundColor: "#023080" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl lg:text-6xl font-medium text-white mb-8">
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
            <Card className="bg-white p-8 lg:p-12">
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  All members have the responsibility to comply with the Equal Opportunity Policy.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  The organization's commitment towards inclusion reflects strongly in the non-discrimination statement, which is a part of the organization's Code of Conduct.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  All members are encouraged to report any incidents of violation of this policy, and Heads of Departments should act promptly when concerns arise, or complaints are filed.
                </p>
              </CardContent>
            </Card>

       

            <div className="mt-12 text-white text-sm space-y-2">
              <p className="font-semibold">Disclaimer:</p>
              <p>
                In case any of the provisions hereinabove, contravenes any law or any instrument having force of law, theFU law time being in-force shall prevail.
              </p>
              <p>
                Wherever the policy is translated in the vernacular language for easy understanding by the members, if there is any conflict or varied interpretation of the policy in vernacular language, the interpretation of English version shall prevail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Allinone;