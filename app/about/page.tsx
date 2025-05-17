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
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative"
                style={{ backgroundImage: "url('/your-background.jpg')" }} // Replace with your actual image
            >
                <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
                <button
                    onClick={scrollToAbout}
                    className="text-white text-3xl animate-bounce mt-4"
                >
                    <FaArrowDown />
                </button>
            </section>

            {/* About Section */}
            <div ref={aboutRef} className="relative z-10">
                <div className="bg-white text-black flex flex-wrap items-center justify-center px-60 py-20">
                    {/* Left Image */}
                    <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
                        <Image
                            src="/your-image.jpg"
                            alt="Example"
                            width={500}
                            height={300}
                            className="object-cover rounded"
                        />
                    </div>

                    {/* Right Text */}
                    <div className="w-full md:w-1/2 px-4 py-10">
                        <h2 className='text-sm font-bold text-yellow-500'>About Us</h2>
                        <p className="text-3xl font-bold mb-4">Where Fitness Meets Community</p>
                        <p className="text-lg mb-6">
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </p>
                        <button className="bg-[#FFF200] text-black font-semibold px-8 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            Register
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Section (overlapping previous section) */}
            <div className="-mt-32 relative z-20 px-4">
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
            <div className="flex flex-wrap items-center justify-center px-60 py-20">
                {/* Left Image */}
                <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
                    <Image
                        src="/your-image.jpg"
                        alt="Example"
                        width={500}
                        height={300}
                        className="object-cover rounded"
                    />
                </div>

                {/* Right Text with Arrow Bullets */}
                <div className="w-full md:w-1/2 px-4 py-10">
                    <h2 className="text-3xl font-bold mb-4">Where Fitness Meets Community</h2>
                    <p className="text-lg mb-6">
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                    <div className="flex gap-10">
                        <div>
                            <p className="flex items-center text-sm text-gray-700 mb-2">
                                <span className="mr-2 text-yellow-500">→</span> Personalized coaching
                            </p>
                            <p className="flex items-center text-sm text-gray-700 mb-2">
                                <span className="mr-2 text-yellow-500">→</span> Nutrition plans
                            </p>
                            <p className="flex items-center text-sm text-gray-700 mb-2">
                                <span className="mr-2 text-yellow-500">→</span> Strength training
                            </p>
                        </div>

                        <div>
                            <p className="flex items-center text-sm text-gray-700 mb-2">
                                <span className="mr-2 text-yellow-500">→</span> Flexible hours
                            </p>
                            <p className="flex items-center text-sm text-gray-700 mb-2">
                                <span className="mr-2 text-yellow-500">→</span> Group workouts
                            </p>
                            <p className="flex items-center text-sm text-gray-700 mb-2">
                                <span className="mr-2 text-yellow-500">→</span> Wellness programs
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Centered Text */}
            <div className="text-center py-20">
                <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>

            {/* 2x2 Card Grid (narrower width, taller height) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-20 max-w-4xl mx-auto">
                {[
                    'Card One: Personal Training Programs Card One: Personal Training Programs',
                    'Card Two: Group Classes and Bootcamps',
                    'Card Three: Nutrition & Wellness Coaching',
                    'Card Four: 24/7 Gym Access with Trainers',
                ].map((text, index) => (
                    <div
                        key={index}
                        className="p-8 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition h-64 w-full" // taller height, narrower width
                    >
                        <p className="text-gray-600">{text}</p>
                    </div>
                ))}
            </div>
            <TeamMembers />
            < Footer />
        </div>
    );
}
