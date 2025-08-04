import './App.css'
import ABMediaFooter from './Components/ABMediaFooter'
import ABMediaLanding from './Components/ABMediaLanding'
import CaseStudies from './Components/Case-Studies'
import EcommerceCarousel from './Components/EcommerceCarousel'
import FAQComponent from './Components/FAQComponent'
import ForgeBrilliancePage from './Components/ForgeBrilliancePage'
import Header from './Components/Header'
import IconsLooper from './Components/IconsLooper'
import Partners from './Components/Partners'
import Phases from './Components/Phases'
import PricingComponent from './Components/PricingComponent'
import ServicesGrid from './Components/ServicesGrid'
import ShopifyServicesSection from './Components/ShopifyBuildLanding'
import ShopifyStrategyLanding from './Components/ShopifyStrategyLanding'

function App() {

  return (
    <>
      <Header />
      <button className="bg-[#D5FF3F]  md:hidden  fixed z-50 w-full bottom-0 text-black px-8 py-2 font-semibold hover:bg-lime-300 transition-colors">
        Audit My Store
      </button>
      <ABMediaLanding />
      <IconsLooper />
      <ShopifyServicesSection />
      <EcommerceCarousel />
      <Partners />
      <CaseStudies />
      <ServicesGrid />
      <Phases />
      <PricingComponent />
      <ShopifyStrategyLanding />
      <ForgeBrilliancePage />
      <FAQComponent />
      <ABMediaFooter />
    </>
  )
}

export default App
