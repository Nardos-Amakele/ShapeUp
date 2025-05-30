import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="px-6 py-12 lg:px-45 mb-40">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side: Contact Info */}
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl font-medium mb-6">Get in Touch</h2>
                    <div className="space-y-4 text-base sm:text-lg">
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <FaPhone className="text-[#FFF200]" />
                            <span>+123 456 7890</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <FaEnvelope className="text-[#FFF200]" />
                            <span>email@example.com</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <FaMapMarkerAlt className="text-[#FFF200]" />
                            <span>123 Main St, City, Country</span>
                        </div>
                    </div>
                </div>

                {/* Right side: Map */}
                <div className="flex-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0862151727844!2d-122.41941548468115!3d37.77492977975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c15c87977%3A0xa577aebf50c7ec69!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1600000000000"
                        width="100%"
                        height="200"
                        allowFullScreen
                        loading="lazy"
                        className="shadow border-4 rounded-[8px] border-[#FFF200] w-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
