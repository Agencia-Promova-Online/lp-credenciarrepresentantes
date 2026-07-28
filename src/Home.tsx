import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Segments from './components/Segments';
import SocialProof from './components/SocialProof';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Investment1395 from './components/Investment1395';
import Plans from './components/Plans';
import OrderBump from './components/OrderBump';
import FAQ from './components/FAQ';
import Form from './components/Form';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TargetAudience />
      <Problems />
      <Solutions />
      <Segments />
      {/* <SocialProof /> */}
      <AboutUs />
      
      <Investment1395 />
      {/* <Plans /> */}
      <OrderBump />
      <HowItWorks />
      <Form />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default Home;
