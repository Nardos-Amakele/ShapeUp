"use client"
import { useState } from 'react';
import Image from 'next/image';

const SideBySideCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            leftImg: '/image1.jpg',
            rightImg: '/image2.jpg',
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
        <div className="p-20">
            <h2 className="text-xl font-bold text-center">What Our Members Say </h2>
            <h2 className="text-xl font-bold mb-12 text-center">About Us</h2>


            <div className="flex items-center justify-center gap-4">
                {/* Left arrow - only visible when can go back */}
                {canGoPrev && (
                    <button
                        onClick={goPrev}
                        className="p-2 hover:bg-gray-100 mr-16 rounded-full transition"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                )}

                {/* Images container */}
                <div className="flex items-center">
                    {/* Left image */}
                    <div className="relative mb-8 w-40 h-40 z-0">
                        <Image
                            src={items[currentIndex].leftImg}
                            alt="Left image"
                            fill
                            className="object-cover rounded-l-lg"
                        />
                    </div>

                    {/* Right image overlapping left by 20% */}
                    <div className="relative w-40 h-40 z-10 -ml-8">
                        <Image
                            src={items[currentIndex].rightImg}
                            alt="Right image"
                            fill
                            className="object-cover rounded-r-lg border-l-2 border-white"
                        />
                    </div>

                    {/* Text content */}
                    <div className="ml-8 w-52">
                        <h2 className='text-2xl font-bold pb-4'>Something</h2>
                        <p className="text-lg">{items[currentIndex].text}</p>
                    </div>
                </div>

                {/* Right arrow - only visible when can go forward */}
                {canGoNext && (
                    <button
                        onClick={goNext}
                        className="p-2 ml-16 hover:bg-gray-100 bg-blue-500 rounded-full transition"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default SideBySideCarousel;