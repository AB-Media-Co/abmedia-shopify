import { useState } from 'react'
import ABMediaFooter from '../Components/ABMediaFooter'
import ABMediaLanding from '../Components/ABMediaLanding'
import CaseStudies from '../Components/Case-Studies'
import EcommerceCarousel from '../Components/EcommerceCarousel'
import FAQComponent from '../Components/FAQComponent'
import ForgeBrilliancePage from '../Components/ForgeBrilliancePage'
import Header from '../Components/Header'
import IconsLooper from '../Components/IconsLooper'
import Partners from '../Components/Partners'
import Phases from '../Components/Phases'
import PricingComponent from '../Components/PricingComponent'
import ServicesGrid from '../Components/ServicesGrid'
import ShopifyServicesSection from '../Components/ShopifyBuildLanding'
import ShopifyStrategyLanding from '../Components/ShopifyStrategyLanding'
import ContactForm from '../Components/ContactForm'


const Page2 = () => {
    const [showForm, setShowForm] = useState(false)

    return (
        <div>
            <Header />
            <button
                className="bg-[#D5FF3F] cursor-pointer md:hidden font-medium text-xl fixed z-50 w-full bottom-0 text-black px-8 py-2 hover:bg-lime-300 transition-colors"
                onClick={() => setShowForm(true)}
            >
                Book Strategy Call Now
            </button>

            <ABMediaLanding />
            <IconsLooper />
            <ShopifyServicesSection cost='₹99,999' />

            <EcommerceCarousel />
            <Partners />
            <CaseStudies />
            <ServicesGrid />
            <Phases />
            <PricingComponent cost='₹99,999'/>
            <ShopifyStrategyLanding />
            <ForgeBrilliancePage />
            <FAQComponent />
            <ABMediaFooter />

            <ContactForm
                isPopup={true}
                isOpen={showForm}
                onClose={() => setShowForm(false)}
                title="Let's Audit Your Shopify Store"
                buttonText="Get My Audit"
                onSubmit={(data) => {
                    console.log('form data:', data)
                    // any extra handling…
                }}
            />
        </div>
    )   
}

export default Page2
