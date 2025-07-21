import { CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Data Collection",
      content:
        "We collect personal information such as name, email address, contact number, and address solely for the purpose of communication, donation processing, and providing updates on our activities.",
    },
    {
      title: "Information Usage",
      content:
        "The personal data collected will be used only for the intended purposes and will not be shared, sold, or rented to third parties unless required by law.",
    },
    {
      title: "Security Measures",
      content:
        "We employ industry-standard security measures to safeguard the personal information provided to us against unauthorized access, alteration, disclosure, or destruction.",
    },
    {
      title: "Data Retention",
      content:
        "Personal information will be retained only for as long as necessary to fulfill the purposes for which it was collected or as required by law.",
    },
    {
      title: "Cookies",
      content:
        "Our website may use cookies to enhance user experience. Users can choose to set their web browsers to refuse cookies or to alert them when cookies are being sent.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.",
    },
    {
      title: "Children's Privacy",
      content:
        "We do not knowingly collect personal information from children under the age of 13. If you believe that we may have collected personal information from a child under 13, please contact us immediately.",
    },
    {
      title: "Opt-Out",
      content:
        "Users can opt-out of receiving communications from us at any time by contacting us directly or using the unsubscribe link provided in our communications.",
    },
    {
      title: "Updates to Privacy Policy",
      content:
        "We reserve the right to update our privacy policy at any time. Users will be notified of any changes to our privacy policy on our website.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-28 px-2 sm:px-4 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 text-center">Your privacy is important to us. This policy explains how we handle your data.</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm sm:text-base">
          {sections.map((section, i) => (
            <li key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-5 w-5 text-[#023080]" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#023080] mb-1" style={{ fontFamily: '"Times New Roman", serif' }}>{section.title}</h3>
                <p className="text-[#04307b]" style={{ fontFamily: '"Times New Roman", serif' }}>{section.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PrivacyPolicy