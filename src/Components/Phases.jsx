import React from 'react';
import TestimonialsCarousel from './TestimonialsCarousel';
import PopupButton from './PopupButton';

const Phases = () => {
    return (
        <div className="relative min-h-[90rem] bg-black overflow-hidden py-16 px-4"
            style={{
                backgroundImage: "url('/phases.png')",
                backgroundSize: 'cover',
                //   backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mt-20 mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl  text-center md:text-left font-bold text-white mb-4">
                        FROM <span className="text-white">DISCOVERY</span> TO<br />
                        <span className="text-white">LAUNCH</span>
                    </h1>
                    <p className="text-gray-300 text-center md:text-left text-xl mb-8">Our 4 Phase Delivery Flow</p>
                    {/* <div className="flex justify-center md:justify-start">
                        <button className="bg-[#D5FF3F] text-black px-6 py-3 font-semibold hover:bg-lime-300 transition-colors max-w-[300px]">
                            Get A Free 1:1 Consultation
                        </button>
                    </div> */}

                    <div className=" flex justify-center md:justify-start ">

                        <PopupButton text='Get A Free 1:1 Consultation' className='bg-[#D5FF3F] text-black font-semibold px-4 sm:px-6 py-3 text-sm sm:text-base tracking-wide shadow-md transition-all duration-200 hover:bg-[#c4ef2f] hover:shadow-lg w-full sm:w-auto max-w-sm sm:max-w-none text-center' />
                    </div>

                </div>

                <div className="relative">
                    <div className="flex  relativel flex-col md:flex-row mt-40 items-center justify-between space-y-12 md:space-y-0 md:space-x-8">
                        <div className="md:absolute z-10 top-[4rem] left-[2rem]">
                            <div className="w-64 h-64 rounded-full bg-gradient-to-b from-[#232323] from-70% to-[#D5FF3F]/80 flex flex-col items-center justify-center text-center shadow-lg">
                                <div className="text-6xl font-bold text-white mb-2">1</div>
                                <div className="text-lg font-bold text-white mb-2">DISCOVERY</div>
                                <div className="text-sm text-white">Goals, Funnel, Stack Selection</div>
                                <div className="text-xs text-white">(Theme Vs Hydrogen Vs Plus)</div>
                            </div>
                        </div>
                        <div className="md:absolute z-10 top-[-40px] left-[22rem]">
                            <div

                                className="w-64 h-64 rounded-full bg-gradient-to-b from-[#232323] from-90% to-[#D5FF3F]/50 flex flex-col items-center justify-center text-center shadow-lg">
                                <div className="text-6xl font-bold text-white mb-2">2</div>
                                <div className="text-lg font-bold text-white mb-2 uppercase">Blueprint</div>
                                <div className="text-sm text-white">Wireframe, UI/UX, tech strategy</div>
                            </div>
                        </div>
                        <div className="md:absolute z-10  left-[41rem]">
                            <div className="w-64 h-64 rounded-full bg-gradient-to-b from-[#232323] from-90% via-[#232323] to-[#D5FF3F]/50 flex flex-col items-center justify-center text-center shadow-lg">
                                <div className="text-6xl font-bold text-white mb-2">3</div>
                                <div className="text-lg font-bold text-white mb-2 uppercase">Build</div>
                                <div className="text-sm text-white">Dev, integrations, app logic, QA</div>
                            </div>
                        </div>
                        <div className="md:absolute z-10 right-[55px] top-[-16rem]">
                            <div className="w-64 h-64 rounded-full bg-gradient-to-b from-[#232323] from-90% via-[#232323] to-[#D5FF3F]/50  flex flex-col items-center justify-center text-center shadow-lg">
                                <div className="text-6xl font-bold text-white mb-2">4</div>
                                <div className="text-lg font-bold text-white mb-2 uppercase">Launch + Scale</div>
                                <div className="text-sm text-white">Go live support, analytics, </div>
                                <div className="text-xs text-white">growth sprints</div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

            <TestimonialsCarousel />
        </div>
    );
};

export default Phases;