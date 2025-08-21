import ContactForm from './ContactForm';
import PopupButton from './PopupButton';

const ABMediaLanding = () => {

    return (
        <div className="min-h-screen "
            style={{
                backgroundImage: "url('/HeroSectionBg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Main Content */}
            <main className="px-6 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-center">

                    {/* Left Column - Content (3/5 width) */}
                    <div className="lg:col-span-3  space-y-8">
                        <h1 className="text-4xl lg:text-5xl text-white xl:text-6xl font-semibold leading-tight">
                            YOUR ADS ARE GETTING SMARTER. IS YOUR SHOPIFY STORE STILL A DUMB TEMPLATE?
                        </h1>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                            2025, Performance Comes From The Post-Click Experience. We Build Conversion-Optimized Shopify Stores That Double ROAS, Increase Retention, And Actually Scale.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* <button className="bg-[#D5FF3F] cursor-pointer text-black px-8 py-2 font-semibold hover:bg-lime-300 transition-colors">
                                Boost Conversions
                            </button> */}
                            <PopupButton
                                text="Boost Conversions"
                                className='bg-[#D5FF3F] text-black font-semibold px-4 sm:px-6 py-3 text-sm sm:text-base tracking-wide shadow-md transition-all duration-200 hover:bg-[#c4ef2f] hover:shadow-lg w-full sm:w-auto max-w-sm sm:max-w-none text-center' />

                            {/* <button className="border cursor-pointer border-white text-white px-8 py-2 font-semibold hover:bg-white hover:text-black transition-colors">
                                Audit My Store
                            </button> */}
                        </div>
                    </div>

                    {/* Right Column - Form (2/5 width) */}
                    <div className="lg:col-span-2 mt-10 relative">
                        {/* Illustration */}
                        <div className="absolute -top-22 right-8 flex items-center justify-center">
                            <img src="/formanim.gif" alt="" className="scale-x-[-1]" />
                        </div>

                        <ContactForm />

                    </div>
                </div>
            </main>
        </div>
    );
};

export default ABMediaLanding;
