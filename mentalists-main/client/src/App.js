import "./App.css"
import { BrowserRouter, Routes, Route, useLocation, Router } from "react-router-dom"
import { useEffect } from "react";

// Pages
import Homepage from "./pages/Start" // Updated from "./pages/Start"
import History from "./pages/New"
import FounderChairman from "./pages/FounderChairman"
import CCAE from "./pages/ccae"
import CSAA from "./pages/csaa"
import CSII from "./pages/csii"
import Member from "./pages/Member"
import Allinone from "./pages/Allinone"
import New from "./pages/New"
import COC from "./pages/coc"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"
import Education from "./pages/Education"
import SkillDevelopment from "./pages/SkillDevelopment"
import Nutrition from "./pages/Nutrition"
import Careers from "./pages/Careers"
import ScrollToTop from "./components/ScrollToTop"

// Components
import Footer from "./components/Footer"
import ScrollHeader from "./components/ScrollHeader"
import ContactPage from "./components/ContactPage"
import JoinUs from "./components/JoinUs"
import FileUploadTest from "./components/FileUploadTest"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RoutesWithNavbar />
    </BrowserRouter>
  )
}

const RoutesWithNavbar = () => {
  const location = useLocation()
  const hideNavbar = location.pathname === "/landing"

  useEffect(() => {
    const path = location.pathname.replace(/\/$/, "").toLowerCase();
    switch (path) {
      case "/privacypolicy":
        document.title = "Privacy Policy";
        break;
      case "/skilldevelopment":
        document.title = "Skill Development";
        break;
      case "/termsandconditions":
        document.title = "Terms and Conditions";
        break;
      case "/coc":
        document.title = "Code of Conduct";
        break;
      case "/founderchairman":
        document.title = "Chairman & Managing Trustee";
        break;
      case "/csii":
        document.title = "Centre for Social Impact & Innovation";
        break;
      case "/ccae":
        document.title = "Centre for Civil Administration & Engagement";
        break;
      case "/csaa":
        document.title = "Centre for Social Awareness & Action";
        break;
      default:
        document.title = "SWIS Foundation";
    }
  }, [location.pathname]);

  return (
    <>
      {!hideNavbar && <ScrollHeader />}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/history" element={<History />} />
        <Route path="/founderchairman" element={<FounderChairman />} />
        <Route path="/ccae" element={<CCAE />} />
        <Route path="/csaa" element={<CSAA />} />
        <Route path="/csii" element={<CSII />} />
        <Route path="/member" element={<Member />} />
        <Route path="/allinone" element={<Allinone />} />
        <Route path="/new" element={<New />} />
        <Route path="/coc" element={<COC />} />
        <Route path="/Nutrition" element={<Nutrition />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/SkillDevelopment" element={<SkillDevelopment />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/FileUploadTest" element={<FileUploadTest />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Nutrition" element={<Nutrition />} />
        {/* Optional: Redirect unmatched routes to homepage */}
        <Route path="*" element={<Homepage />} />
      </Routes>
      
      {!hideNavbar && <Footer />}
    </>
  )
}

export default App
