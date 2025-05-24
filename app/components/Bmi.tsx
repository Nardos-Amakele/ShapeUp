'use client';
import { useState } from 'react';
import Image from 'next/image';

const Bmi = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState<number | null>(null);

    const calculateBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100; // convert cm to meters
        if (!isNaN(w) && !isNaN(h) && h > 0) {
            const result = w / (h * h);
            setBmi(parseFloat(result.toFixed(2)));
        } else {
            setBmi(null);
        }
    };

    return (
        <section className="p-4 sm:p-10 lg:p-20 lg:mx-20 text-black">
            <div className="bg-[#C3C3C3] p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-center">Know Where You Fit In</h2>
                <p className="text-center text-base sm:text-lg lg:text-xl px-4 sm:px-8 lg:px-16 mb-6 sm:mb-8 lg:mb-10">
                    ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem
                </p>

                {/* Input Section */}
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                    <input
                        type="number"
                        placeholder="Weight(Kg)"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="border-2 border-black px-4 py-2 w-full text-center max-w-xs rounded-[8px]"
                    />
                    <input
                        type="number"
                        placeholder="Height(cm)"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="border-2 border-black px-4 py-2 w-full text-center max-w-xs rounded-[8px]"
                    />
                    <button
                        onClick={calculateBMI}
                        className="text-[#FFF200] bg-black px-6 sm:px-8 py-2 font-bold rounded-[8px] transition"
                    >
                        Results
                    </button>

                    {/* Display Result */}
                    {bmi !== null && (
                        <p className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4">
                            Your BMI is: {bmi}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Bmi;