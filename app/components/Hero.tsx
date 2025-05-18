import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center flex flex-col gap-10 justify-center  md:mb-70 lg:mb-10" 
            style={{ backgroundImage: "url('/headerBackground.jpg')" }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-0"></div>

            {/* Hero Left Content */}
            <div className="relative z-10 w-1/3 ml-20 text-white mb-20 my-40">
                <h1 className="text-4xl font-bold my-4">Shape Up Fitness and Sports Club</h1>
                <p className="mb-10 text-medium">
                    Achieve your fitness goals with expert guidance, flexible plans, and real results.
                </p>
                <div className="flex gap-4">
                    <Link href="/join">
                        <button className="bg-[#FFF200] text-black px-6 py-2 rounded-[8px] transition">
                            Register
                        </button>
                    </Link>
                    <Link href="/learn-more">
                        <button className="bg-[#232323] rounded-[8px] text-white px-14 py-2 transition">
                            More about ShapeUp
                        </button>
                    </Link>
                </div>
            </div>

            {/* Bottom Info Section */}
            <div className="relative mt-30 z-10 flex flex-col md:flex-row justify-between mx-4 md:mx-20 gap-4 md:gap-6 text-white pb-20 md:pb-0"> {/* Added big mobile padding-bottom */}
                {/* 1st Box */}
                <div className="flex-1 bg-white text-black bg-opacity-40 p-4 rounded-[8px]">
                    <div className="flex items-center mb-4 gap-4 md:gap-15">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-16 h-16 rounded-full border-2 border-white"
                                >
                                    <Image
                                        src="/heropic.jpg"
                                        alt={`user${i}`}
                                        width={64}
                                        height={64}
                                        className="rounded-full w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-3xl font-bold">200+</p>
                            <p className="text-sm">Members</p>
                        </div>
                    </div>
                    <p className="text-sm">
                        Be part of a supportive network that motivates you to smash every goal.
                    </p>
                </div>

                {/* 2nd Box */}
                <div className="flex-1 bg-[#303030] bg-opacity-40 p-4 rounded-[8px]">
                    <p className="mb-4 text-md font-bold">
                        From aerobics to strength training and futsal, we offer diverse workouts—all with fresh-air energy!
                    </p>
                    <hr className="border-white my-2" />
                    <p className="text-sm font-semibold">
                        Explore Our Services <Link href="/services">→</Link>
                    </p>
                </div>

                {/* 3rd Box */}
                <div className="flex-1 bg-[#FFF200] text-black bg-opacity-40 p-4 rounded-[8px]">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Got Questions?</h2>
                        <button
                            type="submit"
                            className="bg-black text-white p-2 rounded-full transition"
                        >
                            <FaArrowRight className="text-xl -rotate-45 scale-x-125" />
                        </button>
                    </div>
                    <p className="text-sm">
                        From membership plans to class schedules, our FAQ page covers it all. Dive in and find what you need to kickstart your journey!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;