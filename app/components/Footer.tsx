import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-black p-10">
            <h2 className="text-3xl font-bold">ShapeUp</h2>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                {/* Left: Brand Name */}
                <div className="w-full lg:w-1/3">
                </div>

                {/* Right: Links and Contact */}
                <div className="flex flex-col sm:flex-row gap-10 w-full lg:w-3/5 justify-between">
                    {/* Column 1 */}
                    <div>
                        <p className="mb-1">About Us</p>
                        <p className="mb-1">Careers</p>
                        <p className="mb-1">Press</p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <p className="mb-1">Programs</p>
                        <p className="mb-1">Membership</p>
                        <p className="mb-1">Support</p>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="font-bold text-xl mb-2">Connect With Us</h3>
                        <form className="relative w-full max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-3 pr-12 w-full  bg-white text-black"
                            />
                            <button
                                type="submit"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-full transition"
                            >
                                <FaArrowRight />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Center Text */}
            <div className="text-center mt-10 text-sm ">
                © {new Date().getFullYear()} ShapeUp. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
