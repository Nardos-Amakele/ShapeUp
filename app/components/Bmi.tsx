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
        <section className="p-20 mx-20 text-black">
            <div className="bg-white p-10">
                <h2 className="text-3xl font-bold mb-5 text-center">Know Where You Fit</h2>
                <p className="text-center px-10 mb-10">
                    ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem
                </p>

                {/* Input Section */}
                <div className="flex flex-col items-center gap-6">
                    <input
                        type="number"
                        placeholder="Enter weight in kg"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full text-center max-w-xs"
                    />
                    <input
                        type="number"
                        placeholder="Enter height in cm"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full text-center max-w-xs"
                    />
                    <button
                        onClick={calculateBMI}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Calculate BMI
                    </button>

                    {/* Display Result */}
                    {bmi !== null && (
                        <p className="text-xl font-semibold mt-4">
                            Your BMI is: {bmi}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Bmi;
