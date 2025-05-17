"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SideBySideCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            leftImg: '/hannah.jpg',
            rightImg: '/bodyBuilding.jpg',
            text: 'First item text description here'
        },
        {
            leftImg: '/image3.jpg',
            rightImg: '/image4.jpg',
            text: 'Second item text description here'
        },
        // Add more items as needed
    ];

    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < items.length - 1;

    const goPrev = () => canGoPrev && setCurrentIndex(currentIndex - 1);
    const goNext = () => canGoNext && setCurrentIndex(currentIndex + 1);

    return (
        <div className="p-8 mt-10"> {/* Reduced padding from p-20 to p-8 */}
            <h2 className="text-3xl font-medium text-center">What Our Members Say</h2>
            <h2 className="text-3xl font-medium mb-12 text-center">About Us</h2>

            <div className="flex items-center justify-center gap-4">
                {/* Left arrow - only visible when can go back */}
                {canGoPrev && (
                    <button
                        onClick={goPrev}
                        className="p-3 mr-16 text-black text-lg bg-[#FFF200] rounded-full transition"
                    >
                            <FaArrowLeft className="text-2xl font-extralight" />
                    </button>
                )}

                {/* Images container */}
                <div className="flex items-center">
                    {/* Left image */}
                    <div className="relative mb-20 w-40 h-56 z-0"> {/* Increased height from 40 to 56 */}
                        <Image
                            src={items[currentIndex].leftImg}
                            alt="Left image"
                            fill
                            className="object-cover rounded-l-lg"
                        />
                    </div>

                    {/* Right image overlapping left by 20% */}
                    <div className="relative w-40 h-56 z-10 -ml-8 mr-20"> {/* Increased height from 40 to 56 */}
                        <Image
                            src={items[currentIndex].rightImg}
                            alt="Right image"
                            fill
                            className="object-cover rounded-r-lg border-l-2 border-white"
                        />
                    </div>

                    {/* Text content */}
                    <div className="ml-8 w-52">
                        <h2 className='text-3xl font-medium pb-4'>Something</h2>
                        <p className="text-lg">{items[currentIndex].text}</p>
                    </div>
                </div>

                {/* Right arrow - only visible when can go forward */}
                {canGoNext && (
                    <button
                        onClick={goNext}
                        className="p-3 ml-16 text-black text-lg bg-[#FFF200] rounded-full transition"
                    >
                            <FaArrowRight className="text-2xl font-extralight" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SideBySideCarousel;
