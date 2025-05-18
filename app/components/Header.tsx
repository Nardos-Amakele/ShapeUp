'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full mt-4 z-10">
            <div className="mx-auto max-w-7xl px-6 py-2 bg-[#d9d9d930] shadow-md backdrop-blur-md text-white rounded-xl flex items-center justify-between">
                {/* Left: Logo */}
                <div className="text-md font-bold">
                    <Link href="/">ShapeUp</Link>
                </div>

                {/* Center: Navigation (hidden on small screens) */}
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <Link href="#home" className="hover:text-[#FFF200] transition">Home</Link>
                    <Link href="#services" className="hover:text-[#FFF200] transition">Services</Link>
                    <Link href="#about" className="hover:text-[#FFF200] transition">About</Link>
                    <Link href="#contact" className="hover:text-[#FFF200] transition">Contact</Link>
                    <Link href="#faq" className="hover:text-[#FFF200] transition">FAQ</Link>
                </nav>

                {/* Right: Buttons (hidden on small screens) */}
                <div className="hidden md:flex gap-2">
                    <Link href="/login">
                        <button className="px-4 py-2 text-sm rounded hover:text-[#FFF200] transition">
                            Log In
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className="px-7 py-2 text-sm bg-white text-black rounded-[8px] transition">
                            Register
                        </button>
                    </Link>
                </div>

                {/* Burger Menu Icon (visible on small screens) */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? '✖' : '☰'}
                </button>

            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-2 px-6 py-4 bg-[#d9d9d930] shadow-md backdrop-blur-md text-white rounded-xl flex flex-col gap-4 text-sm font-medium z-50">
                    <Link href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFF200] text-center transition">Home</Link>
                    <Link href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFF200] text-center transition">Services</Link>
                    <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFF200] text-center transition">About</Link>
                    <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFF200] text-center transition">Contact</Link>
                    <Link href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFF200] text-center transition">FAQ</Link>
                    <Link href="/login" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FFF200] text-center transition">Log In</Link>

                    {/* Centered Register Button */}
                    <div className="flex justify-center">
                        <Link
                            href="/signup"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-black bg-white text-center rounded-md px-4 py-2"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            )}

        </header>
    );
};

export default Header;
