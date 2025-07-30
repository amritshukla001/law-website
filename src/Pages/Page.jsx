"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Scale, Users, Shield, Award, Clock, CheckCircle, Star, Menu, X } from "lucide-react"

export default function LawFirmWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    concern: "",
  })

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will get back to you soon!")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    closeMobileMenu()

    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerHeight = 80 // Approximate height of fixed header
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center shadow-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Mishra & Shukla Associates</span>
                <p className="text-xs text-gray-600">Legal Excellence Since 1986</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
              <a
                href="#strengths"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
                onClick={(e) => handleNavClick(e, "strengths")}
              >
                Our Strengths
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
                onClick={(e) => handleNavClick(e, "services")}
              >
                Services
              </a>
              <a
                href="#team"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
                onClick={(e) => handleNavClick(e, "team")}
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                  onClick={(e) => handleNavClick(e, "about")}
                >
                  About
                </a>
                <a
                  href="#strengths"
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                  onClick={(e) => handleNavClick(e, "strengths")}
                >
                  Our Strengths
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                  onClick={(e) => handleNavClick(e, "services")}
                >
                  Services
                </a>
                <a
                  href="#team"
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                  onClick={(e) => handleNavClick(e, "team")}
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            We don't just know the law— 
              <span className="text-amber-400 block mt-2">we live it</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              For those who need it the most, with clarity, courage and commitment, we stand by you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Legal Consultation
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Who We Are?</h2>
              <p className="text-2xl text-amber-600 font-semibold">"Our works, our commitment."</p>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-8 text-lg">
              <p>
                Founded by two highly reputed advocates—<strong className="text-gray-900">Mr. Surendra Mishra</strong>{" "}
                and <strong className="text-gray-900">Mrs. Rachna Shukla</strong>—our work represents a powerful blend
                of decades-long experience, multi-domain legal practice, and an unflinching commitment to justice.
              </p>
              <p>
                With roots in Patna High Court and practice extending to CAT, tribunals, and multiple legal forums, the
                pillar is built on trust, precision, and dedication. From complex constitutional matters to focused
                representation in criminal, civil, labour, and administrative disputes, we offer end-to-end legal
                solutions that are strategic, timely, and tailored to each client's unique needs.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border-l-4 border-amber-600 shadow-lg">
                <p className="text-lg font-medium text-gray-900 italic">
                  We believe the law should be accessible, effective, and humane—and that legal representation is not
                  just about arguments, but about understanding, service, and strength.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Core Strengths Section */}
      <div id="strengths" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Core Strengths</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on decades of experience and unwavering commitment to excellence
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Mentorship Card */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl border border-amber-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mr-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Guided Mentorship</h3>
                    <p className="text-amber-600 font-semibold">40+ Years of Excellence</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Guided by the mentorship of <strong>Advocate Surendra Mishra</strong>, a highly respected practitioner
                  at the Patna High Court since 1986, offering invaluable insight across constitutional, civil,
                  criminal, and university law.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Constitutional Law
                  </span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Civil Law
                  </span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Criminal Law
                  </span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    University Law
                  </span>
                </div>
              </div>

              {/* Active Practice Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Active Practice</h3>
                    <p className="text-blue-600 font-semibold">Specialized Expertise</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Strengthened by the active practice of <strong>Advocate Rachna Shukla</strong>, with one decade of
                  focused litigation before the Central Administrative Tribunal, Patna, known for her work in service
                  matters, writ jurisdiction, and railway claims.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Service Matters
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Writ Jurisdiction
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Railway Claims
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    CAT Practice
                  </span>
                </div>
              </div>
            </div>

            {/* Combined Strength */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 text-white text-center shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6">Collective Excellence</h3>
              <p className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto text-gray-200">
                Together, our collective knowledge and courtroom presence form the backbone of our legal approach. With
                regular appearances before the Patna High Court, CAT, and various tribunals, our work remains committed
                to delivering strategic, ethical, and client-focused legal solutions.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <Clock className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">40+ Years</h4>
                  <p className="text-gray-300 text-sm">Combined Experience</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <CheckCircle className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Strategic</h4>
                  <p className="text-gray-300 text-sm">Legal Solutions</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <Star className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Client-Focused</h4>
                  <p className="text-gray-300 text-sm">Approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Drives Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">What Drives Us?</h2>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our mission is to provide exceptional legal representation rooted in integrity, clarity, and
                  client-first thinking. We aim to bridge the gap between legal complexities and real-life solutions by
                  offering services that are accessible, timely, and strategically sound.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">We are committed to:</h3>
                <ul className="space-y-4 text-gray-700">
                  {[
                    "Upholding the rule of law with diligence and ethics",
                    "Delivering honest legal advice and robust courtroom advocacy",
                    "Supporting our clients through every legal challenge, big or small",
                    "Remaining responsive, respectful, and reliable at every step",
                    "Building long-term trust through results—not promises",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-10 rounded-2xl text-center border-l-4 border-amber-600 shadow-lg">
              <p className="text-xl text-gray-800 italic leading-relaxed">
                "At the core of our work lies the belief that law is not just a profession—but a responsibility. We
                strive every day to honour that responsibility with precision, professionalism, and compassion."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Star className="w-8 h-8 text-amber-600" />,
                  title: "Mentorship That Matters",
                  description:
                    "Backed by the wisdom and guidance of Advocate Surendra Mishra, with nearly four decades of High Court experience.",
                },
                {
                  icon: <Scale className="w-8 h-8 text-amber-600" />,
                  title: "Strong Litigation Experience",
                  description:
                    "Advocate Rachna Shukla brings 10 years of practical expertise before the Central Administrative Tribunal and the Patna High Court.",
                },
                {
                  icon: <Users className="w-8 h-8 text-amber-600" />,
                  title: "Client-Centric Approach",
                  description: "We listen, assess, and act—every step is taken with your best interests in focus.",
                },
                {
                  icon: <Shield className="w-8 h-8 text-amber-600" />,
                  title: "Ethical and Transparent Practice",
                  description: "We maintain the highest standards of integrity and professionalism in all matters.",
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
                  title: "Versatile Legal Expertise",
                  description:
                    "From writs to service law, criminal matters to administrative claims—we deliver well-rounded representation.",
                },
                {
                  icon: <Award className="w-8 h-8 text-amber-600" />,
                  title: "Trusted by Institutions",
                  description:
                    "Our legal insight is relied upon by universities, public bodies, and major organisations.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
                >
                  <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Values, Aspirations */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Our Mission",
                  content:
                    "Our mission is to uphold the values of justice, integrity, and accountability through every aspect of our work. We are committed to providing legally sound, timely, and thoughtful solutions to individuals, professionals, and institutions alike—ensuring that every matter is addressed with the seriousness, respect, and clarity it deserves.",
                },
                {
                  title: "Our Values",
                  content:
                    "At the core of our work lies an unwavering commitment to ethics, sincerity, and diligence. We believe that the law is not just a profession, but a responsibility—to serve with honesty, to act with fairness, and to uphold the dignity of every client we represent. We value clarity in communication, respect in conduct, and excellence in preparation.",
                },
                {
                  title: "What We Aspire To Be",
                  content:
                    "We envision a practice built on trust, competence, and consistency—where legal guidance is not only about resolving disputes but also about empowering individuals with clarity and confidence. Our aim is to be recognized for our integrity, our commitment to justice, and our ability to deliver thoughtful, solution-driven legal support.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-amber-600 mb-6">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Our Partners</h2>
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {/* Mr. Surendra Mishra */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-10 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Users className="w-16 h-16 text-amber-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Mr. Surendra Mishra</h3>
                  <p className="text-xl text-amber-600 font-semibold">Mentor</p>
                  <p className="text-gray-600 mt-2">Practicing since 1986</p>
                </div>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    Advocate Surendra Mishra stands as a pillar of legal wisdom and experience, with a distinguished
                    career that began in 1986 and has since spanned nearly four decades. As a respected member of the
                    Patna High Court Bar, he has built a reputation for his sharp legal acumen, clarity of thought, and
                    unwavering commitment to justice.
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Constitutional Law",
                        "Service Law",
                        "Civil Disputes",
                        "Criminal Defence",
                        "Administrative Matters",
                      ].map((spec, index) => (
                        <span
                          key={index}
                          className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Notable Clients:</h4>
                    <ul className="text-sm space-y-2">
                      {[
                        "Bihar State Industrial Development Corporation (BSIDC)",
                        "Siddhu Kanhu University (Bhagalpur)",
                        "Aryabhatta Knowledge University (Patna)",
                        "Bank of India",
                        "Armed Forces Tribunal (AFT), Kolkata Bench",
                      ].map((client, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
                          {client}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mrs. Rachna Shukla */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-10 border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Scale className="w-16 h-16 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Mrs. Rachna Shukla</h3>
                  <p className="text-xl text-blue-600 font-semibold">Lead Counsel</p>
                  <p className="text-gray-600 mt-2">10+ Years Experience</p>
                </div>
                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    Advocate Rachna Shukla brings over one decade of dedicated legal practice, marked by precision,
                    perseverance, and a deep understanding of service and administrative law. As a primary practicing
                    counsel before the Central Administrative Tribunal (CAT), Patna, she has developed a reputation for
                    her focused advocacy, especially in matters concerning government service disputes.
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Service Law",
                        "Administrative Law",
                        "Railway Claims",
                        "Writ Petitions",
                        "Family Law",
                        "Criminal Law",
                      ].map((spec, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Education:</h4>
                    <p className="text-sm bg-blue-50 p-4 rounded-lg">
                      Graduated from Patna Women's College, known for academic excellence and strong foundation in
                      social sciences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Junior Counsels */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Junior Counsels</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Prerna Pandey</h4>
                  <p className="text-amber-600 font-semibold mb-4">Junior Advocate</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Practicing at the Patna High Court since 02.03.2020, demonstrating exceptional skills in conducting
                    comprehensive legal research and drafting legal documents. She regularly assists in preparing
                    arguments and strategies for hearings in civil disputes, matrimonial cases, and writ petitions.
                  </p>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Education:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                        B.B.A. LL.B. - Symbiosis Law School, Noida
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                        LL.M. - Symbiosis Law School, Pune
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Anshita Kant</h4>
                  <p className="text-amber-600 font-semibold mb-4">Upcoming Young Lawyer</p>
                  <p className="text-gray-700 leading-relaxed">
                    A passionate and determined young legal mind currently pursuing law from Lloyd Law College. With a
                    strong foundation in law and a commitment to justice, she aims to contribute meaningfully to the
                    legal profession.
                  </p>
                </div>
              </div>
            </div>

            {/* Clients */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Esteemed Clients</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Bank of India (BOI)",
                  "Bihar State Industrial Development Corporation (BSIDC)",
                  "Bihar Paper Mills Ltd.",
                  "Sido Kanhu University (Bhagalpur)",
                  "Aryabhatta Knowledge University (Patna)",
                ].map((client, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl shadow-md text-center p-6 hover:shadow-lg transition-shadow"
                  >
                    <p className="font-medium text-gray-700">{client}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <blockquote className="text-3xl md:text-4xl font-bold text-white leading-relaxed">
              "When the law feels distant, we bring it close to you, because justice isn't just a right—it's a promise
              we protect."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Contact Section */}
       <div id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 text-gray-900">
              Get In Touch
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-6 sm:mb-8">Fill out the form below and we'll get back to you soon.</p>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name (required)</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Email (required)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Phone (required)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Concern</label>
                    <textarea
                      name="concern"
                      value={formData.concern}
                      onChange={handleInputChange}
                      placeholder="Describe your legal concern or question"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-vertical transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">Email Us</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3 sm:ml-16">
                    <p className="text-gray-700 text-base sm:text-lg break-all">rachanashukla@yahoo.com</p>
                    <p className="text-gray-700 text-base sm:text-lg break-all">lawyersurendramishra@gmail.com</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">Call Us</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3 sm:ml-16">
                    <p className="text-gray-700 text-base sm:text-lg">+91 7544005420</p>
                    <p className="text-gray-700 text-base sm:text-lg">+91 9801606586</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">Office</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3 sm:ml-16">
                    <p className="text-gray-700 text-base sm:text-lg">Patna High Court, Patna</p>
                    <p className="text-gray-700 text-sm sm:text-base">President Room, Advocate Association</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">Mishra & Shukla Associates</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Providing exceptional legal representation rooted in integrity, clarity, and client-first thinking.
                </p>
                <p className="text-amber-400 font-semibold">Legal Excellence Since 1986</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Practice Areas</h3>
                <ul className="space-y-3 text-gray-400">
                  {[
                    "Constitutional Law",
                    "Service Law",
                    "Criminal Law",
                    "Civil Disputes",
                    "Administrative Law",
                    "Family Law",
                  ].map((area, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-amber-600 mr-3" />
                    <p>Patna High Court, Patna</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-amber-600 mr-3" />
                    <p>+91 7544005420</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-amber-600 mr-3" />
                    <p>rachanashukla@yahoo.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Mishra & Shukla Associates. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}