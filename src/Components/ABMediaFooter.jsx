import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function ABMediaFooter() {
    return (
        <footer className="bg-black text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <h2 className="text-4xl font-bold mb-4">ab media</h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            A Full-Service Performance Marketing Agency In
                            Gurugram, New Delhi, India. We Have Launched
                            50+ Brands, Captured 100+ Leads Generated 1.7
                            Million+ Combined Revenue For More Than 50+
                            Companies Globally In The Last 7 Years.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg hidden md:block font-semibold mb-4">CONTACT</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-300">grow@abmediaco.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-300">+919999996247</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-8 h-8 text-gray-400 mt-0.5" />
                                <span className="text-sm text-gray-300 leading-relaxed">
                                    WeWork Forum, BLF Cyber City, Rd, DLF Cyber City, DLF
                                    Phase 3, Sector 24, Gurugram, Haryana 122002
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xs md:hidden">
                        <h4 className="text-white text-lg font-medium tracking-wide mb-4">QUICK LINK</h4>
                        <ul className="space-y-2">
                            {[
                                'PPC SERVICES',
                                'SOCIAL MEDIA MARKETING SERVICES',
                                'PERFORMANCE MARKETING',
                                'DEVELOPMENT',
                            ].map((label) => (
                                <li key={label}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors text-sm block whitespace-nowrap"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">FOLLOW</h3>
                        <div className="flex gap-3">
                            <a
                                href="https://www.facebook.com/abmediahq/"
                                className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-black hover:bg-lime-300 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.facebook.com/abmediahq/"
                                className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-black hover:bg-lime-300 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.facebook.com/abmediahq/"
                                className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-black hover:bg-lime-300 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.instagram.com/abmediahq/"
                                className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-black hover:bg-lime-300 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.facebook.com/abmediahq/"
                                className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-black hover:bg-lime-300 transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Services Menu */}
            <div className=" border-gray-800 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 pb-4">
                    <nav className="flex  gap-6 lg:gap-8 text-xl font-normal">
                        <a href="#" className="text-white hover:text-lime-400 transition-colors whitespace-nowrap">
                            SEO SERVICES
                        </a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="text-white hover:text-lime-400 transition-colors whitespace-nowrap">
                            PPC SERVICES
                        </a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="text-white hover:text-lime-400 transition-colors whitespace-nowrap">
                            SOCIAL MEDIA MARKETING SERVICES
                        </a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="text-white hover:text-lime-400 transition-colors whitespace-nowrap">
                            PERFORMANCE MARKETING
                        </a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="text-white hover:text-lime-400 transition-colors whitespace-nowrap">
                            DEVELOPMENT
                        </a>
                    </nav>
                </div>
            </div>

            <h2
                className="text-7xl md:text-9xl text-center font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#d1d1d1] via-[#8a8a8a] to-[#1f1f1f] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
            >
                ab media
            </h2>



            <div className="border-t border-gray-800 bg-black">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col items-center gap-2 text-sm text-gray-400">
                        {/* top links line */}
                        <div className="flex flex-wrap items-center gap-2 justify-center">
                            <a href="#" className="hover:text-lime-400 transition-colors whitespace-nowrap">
                                Terms Of Use
                            </a>
                            <span className="text-gray-600">|</span>
                            <a href="#" className="hover:text-lime-400 transition-colors whitespace-nowrap">
                                Privacy Policy
                            </a>
                            <span className="text-gray-600">|</span>
                            <span className="whitespace-nowrap">All Rights Reserved</span>
                        </div>
                        {/* copyright line */}
                        <div className="text-center">
                            <span>© Akshitbhasin Media Private Limited</span>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}