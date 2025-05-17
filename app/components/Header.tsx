import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full mt-4 z-10">
            <div className="mx-auto max-w-7xl px-6 py-2 bg-[#d9d9d930] shadow-md backdrop-blur-md text-white rounded-xl flex items-center justify-between">
                {/* Left: Logo */}
                <div className="text-md font-bold">
                    <Link href="/">ShapeUp</Link>
                </div>

                {/* Center: Navigation */}
                <nav className="flex gap-8 text-sm font-medium">
                    <Link href="#home" className="hover:text-[#FFF200] transition">Home</Link>
                    <Link href="#services" className="hover:text-[#FFF200] transition">Services</Link>
                    <Link href="#about" className="hover:text-[#FFF200] transition">About</Link>
                    <Link href="#contact" className="hover:text-[#FFF200] transition">Contact</Link>
                    <Link href="#contact" className="hover:text-[#FFF200] transition">FAQ</Link>
                </nav>

                {/* Right: Buttons */}
                <div className="flex gap-2">
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
            </div>
        </header>
    );
};

export default Header;
