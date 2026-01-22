import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import AITutor from "@/components/AITutor";
import WhatsAppSection from "@/components/WhatsAppSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <AITutor />
      <WhatsAppSection />
      <Footer />
    </div>
  );
};

export default Index;
