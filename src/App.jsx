import React from 'react';
import { motion } from 'framer-motion';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 shadow-lg z-50">
    <h1 className="text-4xl font-bold text-center">Law Office of Rachana Shukla</h1>
    <nav className="flex justify-center space-x-4 mt-4">
      <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-indigo-100" onClick={() => scrollToSection('about')}>About</button>
      <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-indigo-100" onClick={() => scrollToSection('services')}>Services</button>
      <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-indigo-100" onClick={() => scrollToSection('contact')}>Contact</button>
    </nav>
  </header>
);

const Section = ({ id, title, children }) => (
  <motion.section 
    id={id} 
    className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-gray-50 to-gray-200"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl">
      <h2 className="text-4xl font-bold text-indigo-600 mb-4">{title}</h2>
      {children}
    </div>
  </motion.section>
);

const About = () => (
  <Section id="about" title="About Rachana Shukla">
    <p>Rachana Shukla is a dedicated legal professional with years of experience providing expert legal services. She specializes in family law, corporate law, and legal consultation. Her commitment to her clients and deep understanding of legal frameworks make her a trusted advisor in the legal community.</p>
  </Section>
);

const Services = () => (
  <Section id="services" title="Services">
    <ul className="list-disc pl-8">
      <li>Legal Consultation</li>
      <li>Family Law</li>
      <li>Corporate Law</li>
    </ul>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Contact">
    <p>Email: rachana.shukla@gmail.com</p>
    <p>Phone: +91-7544005420</p>
  </Section>
);

const App = () => (
  <div>
    <Header />
    <About />
    <Services />
    <Contact />
  </div>
);

export default App;

