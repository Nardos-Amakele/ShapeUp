'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import Header from '../components/Header';
import TeamMembers from '../components/TeamMembers';
import Footer from '../components/Footer';

export default function HomePage() {
    const aboutRef = useRef<HTMLDivElement | null>(null);

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section
                className="h-[70vh] sm:h-screen bg-cover bg-center flex flex-col justify-center items-start sm:items-center text-white relative px-6 sm:px-0"
                style={{ backgroundImage: "url('/coverPic.jpg')" }}
            >
                <div className="ml-0 sm:ml-20">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-[#FFF200]">About Us</h1>
                    <button
                        onClick={scrollToAbout}
                        className="text-white border-2 border-white bg-[#525252] w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full text-xl sm:text-3xl animate-bounce mt-4 mx-auto "
                    >
                        <FaArrowDown />
                    </button>
                </div>
            </section>

            {/* About Section */}
            <div ref={aboutRef} className="relative z-10">
                <div className="bg-[#D9D9D9] text-black flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-12 md:py-20">
                    {/* Left Image */}
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <Image
                            src="/futsal.jpg"
                            alt="Example"
                            width={500}
                            height={400}
                            className="object-cover rounded w-full h-auto max-h-[400px]"
                        />
                    </div>

                    {/* Right Text */}
                    <div className="w-full md:w-1/2 px-2 md:px-4 py-6 md:py-10 text-center md:text-left">
                        <h2 className="text-sm font-bold text-[#FFF200]">About Us</h2>
                        <p className="text-3xl mb-4">Welcome To Our Fitness Gym</p>
                        <p className="text-lg mb-6">
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </p>
                        <button className="bg-[#FFF200] text-black px-8 py-2 rounded-lg transition duration-300">
                            Join us Now
                        </button>
                    </div>
                </div>
            </div>



            {/* Video Section (overlapping previous section) */}
            <div className="-mt-32 relative z-20 px-4 mb-20">
                <div className="max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg">
                    <video
                        controls
                        className="w-full h-[400px] object-cover rounded-xl"
                        poster="/video-poster.jpg"
                    >
                        <source src="/your-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Info Section with Arrows */}
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center px-6 md:px-40 py-12 md:py-20">
                {/* Left Image */}
                <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
                    <Image
                        src="/BW.jpg"
                        alt="Example"
                        width={500}
                        height={300}
                        className="object-cover rounded w-full h-auto max-h-[300px]"
                    />
                </div>

                {/* Right Text with Arrow Bullets */}
                <div className="w-full md:w-1/2 px-2 md:px-4 py-6 md:py-10 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Where Fitness Meets Community</h2>
                    <p className="text-lg mb-6">
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                    <div className="flex sm:flex-row gap-6 sm:gap-10 justify-center md:justify-start">
                        <div>
                            <p className="flex items-center text-sm mb-2">
                                <span className="mr-2 text-[#FFF200]">→</span> Personalized coaching
                            </p>
                            <p className="flex items-center text-sm mb-2">
                                <span className="mr-2 text-[#FFF200]">→</span> Nutrition plans
                            </p>
                            <p className="flex items-center text-sm mb-2">
                                <span className="mr-2 text-[#FFF200]">→</span> Strength training
                            </p>
                        </div>

                        <div>
                            <p className="flex items-center text-sm mb-2">
                                <span className="mr-2 text-[#FFF200]">→</span> Flexible hours
                            </p>
                            <p className="flex items-center text-sm mb-2">
                                <span className="mr-2 text-[#FFF200]">→</span> Group workouts
                            </p>
                            <p className="flex items-center text-sm mb-2">
                                <span className="mr-2 text-[#FFF200]">→</span> Wellness programs
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Centered Text */}
            <div className="text-center py-20">
                <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>

            {/* 2x2 Card Grid (narrower width on small screens) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 pb-20 max-w-4xl mx-auto">
                {[
                    'Card One: Personal Training Programs Card One: Personal Training Programs Card One: Personal Training Programs Card One: Personal Training Programs ',
                    'Card Two: Group Classes and Bootcamps',
                    'Card Three: Nutrition & Wellness Coaching',
                    'Card Four: 24/7 Gym Access with Trainers',
                ].map((text, index) => (
                    <div
                        key={index}
                        className="p-8 bg-[#FFF200] rounded-lg shadow-md hover:shadow-lg transition h-52 w-full max-w-xs sm:max-w-sm md:max-w-full mx-auto"
                    >
                        <p className="text-black">{text}</p>
                    </div>
                ))}
            </div>

            <TeamMembers />
            < Footer />
        </div>
    );
}
