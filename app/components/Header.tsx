import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full px-6 py-2 bg-white shadow-md flex items-center justify-between">
            {/* Left: Logo */}
            <div className="text-xl font-bold text-black">
                <Link href="/">ShapeUp</Link>
            </div>

            {/* Center: Navigation */}
            <nav className="flex gap-8 text-black font-medium">
                <Link href="#home" className="hover:text-blue-500 transition">Home</Link>
                <Link href="#services" className="hover:text-blue-500 transition">Services</Link>
                <Link href="#about" className="hover:text-blue-500 transition">About</Link>
                <Link href="#contact" className="hover:text-blue-500 transition">Contact</Link>
                <Link href="#contact" className="hover:text-blue-500 transition">FAQ</Link>

            </nav>

            {/* Right: Buttons */}
            <div className="flex gap-2">
                <Link href="/login">
                    <button className="px-4 py-2 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-500 transition">
                        Log In
                    </button>
                </Link>
                <Link href="/signup">
                    <button className="px-7 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Sign Up
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
