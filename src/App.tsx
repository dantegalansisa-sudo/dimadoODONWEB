import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import HeroSection from './sections/HeroSection';
import BentoServicesSection from './sections/BentoServicesSection';
import CEOSection from './sections/CEOSection';
import TeamSection from './sections/TeamSection';
import TeamPhotoSection from './sections/TeamPhotoSection';
import ARSSection from './sections/ARSSection';
import StatsSection from './sections/StatsSection';
import ProcessSection from './sections/ProcessSection';
import LocationsSection from './sections/LocationsSection';
import GallerySection from './sections/GallerySection';
import TestimonialsSection from './sections/TestimonialsSection';
import LocationImageSection from './sections/LocationImageSection';
import ContactSection from './sections/ContactSection';
import SecretariasSection from './sections/SecretariasSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div id="inicio" style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <BentoServicesSection />
      <CEOSection />
      <StatsSection />
      <TeamSection />
      <SecretariasSection />
      <TeamPhotoSection />
      <ARSSection />
      <ProcessSection />
      <TestimonialsSection />
      <LocationsSection />
      <GallerySection />
      <LocationImageSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
