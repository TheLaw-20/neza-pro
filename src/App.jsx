import React from 'react';
import Header from './components/Header/Header';
import AboutSection from './components/About/AboutSection';
import PastriesSection from './components/Pastry/PastriesSection';
import SupermarketSection from './components/Supermarket/SupermarketSection';
import TestimonialsSection from './components/Testimonial/TestimonialsSection';
import GallerySection from './components/Gallery/GallerySection';
import Features from './components/Feature/Features';
import PicturesSection from './components/Pictures/PicturesSection';
import Contact from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <AboutSection />
      <PastriesSection />
      <SupermarketSection />
      <TestimonialsSection />
      <GallerySection />
      <Features />
      <PicturesSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;