import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
    return (
        <section
            className="w-full h-screen bg-cover bg-center flex flex-col gap-10 justify-center"
            style={{ backgroundImage: "url('/your-background.jpg')" }} // Replace with your actual image path
        >
            {/* Hero Left Content */}
            <div className="w-1/3 ml-20 text-white mb-20">
                <h1 className="text-4xl font-bold mb-4">Welcome to ShapeUp</h1>
                <p className="mb-10 text-lg">
                    Achieve your fitness goals with expert guidance, flexible plans, and real results.
                </p>
                <div className="flex gap-4">
                    <Link href="/join">
                        <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition">
                            Join Now
                        </button>
                    </Link>
                    <Link href="/learn-more">
                        <button className="bg-transparent border border-white text-white px-14 py-2 rounded hover:bg-white hover:text-black transition">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>

            {/* Bottom Info Section */}
            <div className="flex justify-between mx-20 gap-6 text-white">
                {/* 1st Box */}
                <div className="flex-1 bg-white text-black bg-opacity-40 p-4 rounded">
                    <div className="flex items-center mb-4 gap-30">
                        <div className="flex -space-x-2">
                            <Image src="/images/user1.jpg" alt="user1" width={32} height={32} className="rounded-full border-2 border-white" />
                            <Image src="/images/user2.jpg" alt="user2" width={32} height={32} className="rounded-full border-2 border-white" />
                            <Image src="/images/user3.jpg" alt="user3" width={32} height={32} className="rounded-full border-2 border-white" />
                        </div>
                        <div className="ml-4 ">
                            <p className="text-xl font-bold">200+</p>
                            <p className="text-sm">Members</p>
                        </div>
                    </div>
                    <p className="text-sm">
                        Be part of a supportive network that motivates you to smash every goal.
                    </p>
                </div>

                {/* 2nd Box */}
                <div className="flex-1 bg-white text-black bg-opacity-40 p-4 rounded">
                    <p className="mb-4 text-sm">
                        From aerobics to strength training and futsal, we offer diverse workouts—all with fresh-air energy!
                    </p>
                    <hr className="border-white my-2" />
                    <p className="text-sm font-semibold">
                        Explore Our Services <Link href="/services">→</Link>
                    </p>
                </div>

                {/* 3rd Box */}
                <div className="flex-1 bg-white text-black bg-opacity-40 p-4 rounded">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Got Questions?</h2>
                        <button
                            type="submit"
                            className="bg-yellow-400 hover:bg-yellow-500 text-black p-2 rounded-full transition"
                        >
                            <FaArrowRight />
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
