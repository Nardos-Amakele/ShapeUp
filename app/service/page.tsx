'use client';

import { FaArrowDown } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/ServiceCards';

export default function Page() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const scrollToContent = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
   const servicePackages = [
    {
      id: '1',
      title: 'Starter Package',
      description: 'Perfect for small businesses getting started with our services',
      services: [
        { id: 's1', name: 'Basic Consultation' },
        { id: 's2', name: 'Monthly Reports' },
        { id: 's3', name: 'Email Support' },
        { id: 's4', name: 'Setup Assistance' },
      ],
      buttonText: 'Get Started',
      color: '#f0f9ff', // Light blue background
    },
    {
      id: '2',
      title: 'Professional Package',
      description: 'Our most popular package with advanced features',
      services: [
        { id: 's5', name: 'Priority Consultation' },
        { id: 's6', name: 'Weekly Reports' },
        { id: 's7', name: '24/7 Phone Support' },
        { id: 's8', name: 'Dedicated Account Manager' },
        { id: 's9', name: 'Advanced Analytics' },
      ],
      buttonText: 'Choose Plan',
      color: '#f5f3ff', // Light purple background
    },
    {
      id: '3',
      title: 'Enterprise Solution',
      description: 'Complete package for large organizations with custom needs',
      services: [
        { id: 's10', name: 'Unlimited Consultations' },
        { id: 's11', name: 'Custom Reporting' },
        { id: 's12', name: 'Dedicated Support Team' },
        { id: 's13', name: 'Onsite Training' },
        { id: 's14', name: 'API Access' },
        { id: 's15', name: 'White-label Solutions' },
      ],
      buttonText: 'Contact Sales',
      color: '#ecfdf5', // Light green background
    },
  ];

    // Testimonials state
    const testimonials = [
        {
            text: "This gym changed my life. I've never felt stronger or more confident!",
            name: "John Doe"
        },
        {
            text: "The trainers are top-notch and the atmosphere is so motivating.",
            name: "Jane Smith"
        },
        {
            text: "Clean facilities and great customer service. Highly recommend!",
            name: "Alex Johnson"
        }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative"
                style={{ backgroundImage: "url('/your-background.jpg')" }}
            >
                <h1 className="text-5xl font-bold mb-6">Welcome to ShapeUp</h1>
                <button
                    onClick={scrollToContent}
                    className="text-white text-3xl animate-bounce mt-4"
                >
                    <FaArrowDown />
                </button>
            </section>

            {/* Alternating Sections */}
            <div ref={sectionRef} className="space-y-24 py-20 px-6 md:px-20 ">

                {/* Section 1 with two overlaying images */}
                <div className="flex flex-col md:flex-row items-center gap-8 py-20 px-36">
                    <div className="relative w-full md:w-1/2">
                        <img
                            src="/images/section1.jpg"
                            alt="Main Section"
                            className="w-full rounded-lg shadow"
                        />
                        <img
                            src="/images/section1-overlay.jpg"
                            alt="Overlay Image"
                            className="w-4/5 absolute left-1/2 -translate-x-1/2 -top-10 rounded-lg shadow-lg opacity-90"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h2 className="text-3xl font-bold">Section One Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolore.</p>
                        <button className="bg-[#FFF200] font-semibold text-black px-8 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            <a href="#">Register</a>
                        </button>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 py-20 px-36">
                    <div className="w-full md:w-1/2 space-y-4">
                        <h2 className="text-3xl font-bold">Section Two Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolore.</p>
                    </div>
                    <img src="/images/section2.jpg" alt="Section 2" className="w-full md:w-1/2 rounded-lg shadow" />
                </div>

                {/* Section 3 - Testimonials */}
                <div className="flex flex-col md:flex-row items-center gap-8 py-20 px-36">
                    <img src="/images/section3.jpg" alt="Section 3" className="w-full md:w-1/2 rounded-lg shadow" />
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-800">“</h2>
                        <p className="text-lg italic text-gray-700">{testimonials[index].text}</p>

                        {/* Name and Dots on the same line */}
                        <div className="flex items-center justify-between pt-4">
                            <div className="text-md font-semibold text-gray-600">
                                – {testimonials[index].name}
                            </div>
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-3 h-3 rounded-full transition duration-300 ${i === index ? 'bg-white border border-yellow-400' : 'bg-yellow-400'
                                            }`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-center'>
                <h2 className='text-3xl'>Perfect Plan For Your </h2>
                <h2 className='text-3xl mb-8'>Fintess Goals</h2>
                <p>lorem ipsum ipsum ipsum ipsum ipsumipsumipsumips ipsumipsumipsumips</p>
            </div>
            {/* <ServiceCards /> */}
<Carousel items={servicePackages} />            {/* the cards */}
            <div className='text-center py-20'>
                <p className='py-10'>lorem ipsum ipsum ipsum ipsum ipsumipsumipsumips ipsumipsumipsumips</p>
                <button className="border-[#FFF200] border-2 font-semibold  text-[#FFF200] px-8 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    <a href="">Register</a>
                </button>
            </div>

            <Footer />
        </>
    );
}
