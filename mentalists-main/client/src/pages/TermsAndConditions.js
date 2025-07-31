import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using the SWIS website ('Site'), you agree to be bound by these Terms &amp; Conditions. If you do not agree to all of these terms, please do not access or use the Site.",
    },
    {
      title: "Website Content",
      content:
        "All content provided on the Site is for informational purposes only.",
    },
    {
      title: "Donations",
      content:
        "All donations made to SWIS are voluntary &amp; non-refundable unless explicitly stated otherwise.",
    },
    {
      title: "Refund Policy",
      content:
        "Refunds may be issued at the discretion of SWIS management. Refunds, if approved, will be processed within 5-7 working days from the date of approval. The refunded amount will be credited to the customer's bank account.",
    },
    {
      title: "Privacy Policy",
      content:
        "SWIS respects the privacy of its users. Please review our Privacy Policy to understand how we collect, use, &amp; disclose information.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on the Site, including but not limited to text, graphics, logos, images, &amp; software, is the property of SWIS &amp; is protected by copyright &amp; other intellectual property laws.",
    },
    {
      title: "Third-Party Links",
      content:
        "The Site may contain links to third-party websites that are not owned or controlled by SWIS. We are not responsible for the content or privacy practices of such websites.",
    },
    {
      title: "Indemnification",
      content:
        "You agree to indemnify &amp; hold SWIS harmless from any claims, damages, or losses arising out of your use of the Site or violation of these Terms &amp; Conditions.",
    },
    {
      title: "Changes to Terms",
      content:
        "SWIS reserves the right to modify or revise these Terms &amp; Conditions at any time. Your continued use of the Site after any such changes constitutes acceptance of the updated Terms &amp; Conditions.",
    },
  ];

  return (
    <div
      className="min-h-screen text-white font-sans pt-28 md:pt-32 lg:pt-40"
      style={{ backgroundColor: "#04307b" }}
    >
      {/* Header */}
      <header className="py-4 md:py-6 border-b border-[#d2d5e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#ffffff] mb-2 sm:mb-3"
            style={{ fontFamily: '"Times New Roman", serif' }}
          >
            Terms &amp; Conditions
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl"
            style={{ fontFamily: '"system-ui"' }}
          >
            At SWIS, we are committed to providing a clear framework for using our
            website. These terms govern your use of our services &amp; outline
            your rights &amp; responsibilities.
          </p>
        </div>
      </header>

      {/* Policy Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <div className="bg-[#d2d5e0] border border-[#8e9fc5] rounded-lg p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          {sections.map((section, i) => (
            <section key={i} className="flex items-start space-x-2 sm:space-x-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-[#023080]" />
              </div>
              <div>
                <h3
                  className="text-base sm:text-lg md:text-xl font-semibold text-[#023080] mb-1"
                  style={{ fontFamily: '"Times New Roman", serif' }}
                >
                  {section.title}
                </h3>
                <p
                  className="text-[#04307b] text-sm sm:text-base"
                  style={{ fontFamily: '"Times New Roman", serif' }}
                >
                  {section.content}
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#023080] text-white py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm md:text-base">
            If you have questions or concerns about these Terms, please{" "}
            <Link
              to="/ContactPage"
              className="underline hover:text-[#d2d5e0] transition"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;