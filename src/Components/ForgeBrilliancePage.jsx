import ContactForm from './ContactForm';

export default function ForgeBrilliancePage() {

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background effects - adjusted for mobile */}
            <div className="absolute inset-0 bg-gradient-radial from-green-900/20 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-[40rem] lg:transform-none w-48 h-48 lg:w-96 lg:h-96 bg-[#BAFF39]/20 lg:bg-[#BAFF3970]/50 rounded-full blur-3xl"></div>

            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                {/* Left Section */}
                <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
                            LETS FORGE
                            <br />
                            <span>BRILLIANCE</span> HAND
                            <br />
                            IN HAND.
                        </h1>
                    </div>

                    {/* Illustration Section - hidden on small mobile, shown on larger screens */}
                    <div className="relative  sm:flex items-center justify-center lg:justify-start">
                        <div className="relative">
                            <img src="/contact.svg" alt="" className="max-w-full hidden md:block h-auto" />
                            <img src="/contact-mob.svg" alt="" className="max-w-full md:hidden mx-auto" />
                        </div>
                    </div>
                </div>

          
                    <ContactForm/>
            </div>
        </div>
    );
}