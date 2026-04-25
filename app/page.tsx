import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProductsSection from '@/components/sections/ProductsSection'
import StatsSection from '@/components/sections/StatsSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import BrandIdentitySection from '@/components/sections/BrandIdentitySection'
import LogisticsSection from '@/components/sections/LogisticsSection'
import ContactSection from '@/components/sections/ContactSection'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <ProductsSection />
        <WhyUsSection />
        <BrandIdentitySection />
        <LogisticsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
