import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#FFF200] text-black px-4 sm:px-10 py-4">
            <h2 className="text-2xl font-bold text-center sm:text-left">ShapeUp</h2>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                {/* Left: Brand Name - empty but kept for layout */}
                <div className="w-full lg:w-1/3"></div>

                {/* Right: Links and Contact */}
                <div className="flex flex-col sm:flex-row gap-10 w-full lg:w-3/5 justify-between">
                    {/* Column 1 */}
                    <div className="text-center sm:text-left">
                        <p className="mb-1 text-sm sm:text-base">About Us</p>
                        <p className="mb-1 text-sm sm:text-base">Careers</p>
                        <p className="mb-1 text-sm sm:text-base">Press</p>
                    </div>

                    {/* Column 2 */}
                    <div className="text-center sm:text-left">
                        <p className="mb-1 text-sm sm:text-base">Programs</p>
                        <p className="mb-1 text-sm sm:text-base">Membership</p>
                        <p className="mb-1 text-sm sm:text-base">Support</p>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-semibold text-xl mb-2">Connect With Us</h3>
                        <form className="relative w-full max-w-[280px] sm:max-w-sm mx-auto sm:mx-0">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="p-2 sm:p-3 pr-10 sm:pr-12 w-full bg-[#d9d9d9e8] rounded-[8px] text-black text-sm sm:text-base"
                            />
                            <button
                                type="submit"
                                className="absolute top-1/2 right-1 sm:right-2 transform -translate-y-1/2 bg-black text-[#FFF200] p-1 sm:p-2 rounded-full transition"
                            >
                                <FaArrowRight className="text-lg sm:text-xl font-extralight" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Center Text */}
            <div className="text-center font-extralight mt-10 text-sm">
                © {new Date().getFullYear()} ShapeUp. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;