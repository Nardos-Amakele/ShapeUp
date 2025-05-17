'use client';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowDown } from 'react-icons/fa';
import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {
    const contactRef = useRef<HTMLDivElement | null>(null);

    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section
                className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white relative"
                style={{ backgroundImage: "url('/coverPic.jpg')" }} // Replace with your actual image
            >
                <h1 className="text-5xl  ml-20 font-bold mb-6 text-[#FFF200]">Get in Touch</h1>
                <button
                    onClick={scrollToContact}
                    className="text-white border-2 border-white bg-[#525252] w-14 h-14 flex items-center justify-center rounded-full ml-20 text-3xl animate-bounce mt-4"
                >
                    <FaArrowDown />
                </button>

            </section>

            {/* Contact Section */}
            <section ref={contactRef} className="py-20 px-10 md:px-32 bg-black">

                <div className="flex flex-col md:flex-row gap-10">
                    {/* Left: Contact Info */}
                    <div className="flex-1 space-y-2 mt-10">
                        <h2 className='text-[#FFF200] text-lg font-light'>Contact </h2>
                        <p className='text-2xl'>Have any questions?</p>
                        <p className='text-2xl'> Feel free to reach out</p>
                        <p> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem i lorem i</p>
                        <div className="flex items-center gap-4">
                            <FaPhone className="text-[#FFF200] text-xl" />
                            <p className='text-sm'>+123 456 7890</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-[#FFF200] text-xl" />
                            <p className='text-sm'>info@shapeup.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-[#FFF200] text-xl" />
                            <p className='text-sm'>123 Fitness St, Fit City</p>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <form className="flex-1 p-8 rounded shadow space-y-4">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-1/2 p-2 border-b-2 border-[#FFF200] rounded"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-1/2 p-2 border-b-2 border-[#FFF200] rounded"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border-b-2 border-[#FFF200] rounded"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full p-2 border-b-2 border-[#FFF200] rounded"
                        />
                        <button
                            type="submit"
                            className="bg-[#FFF200] text-black font-semibold py-2 px-6 rounded-[8px] transition w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full px-30 mb-40 h-[400px]">
                <div className="w-full h-full filter brightness-75">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9022265180504!2d90.39094131543133!3d23.750903594624487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0d0a2d1f3%3A0x72510545dc1c2f03!2sDhaka!5e0!3m2!1sen!2sbd!4v1632835683646!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        allowFullScreen
                        className="border-0 w-full h-full"
                    ></iframe>
                </div>
            </section>


            <Footer />
        </>
    );
}
