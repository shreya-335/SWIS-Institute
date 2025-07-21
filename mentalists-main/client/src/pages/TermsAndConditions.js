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
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-28 px-2 sm:px-4 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 text-center">Terms and Conditions</h1>
        <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 text-center">Please read these terms and conditions carefully before using our website.</p>
        <ol className="list-decimal pl-5 space-y-2 text-gray-800 text-sm sm:text-base">
          {sections.map((section, i) => (
            <li key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-5 w-5 text-[#023080]" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#023080] mb-1" style={{ fontFamily: '"Times New Roman", serif' }}>
                  {section.title}
                </h3>
                <p className="text-[#04307b]" style={{ fontFamily: '"Times New Roman", serif' }}>
                  {section.content}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TermsAndConditions;
