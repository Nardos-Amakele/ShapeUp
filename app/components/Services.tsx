import Image from 'next/image';

const Services = () => {
    return (
        <section className="p-20">
            <h2 className="text-3xl font-bold mb-20 text-center">Our Services</h2>

            <div className="flex items-start gap-6 px-48">
                <div className="w-24 h-24 relative p-4">
                    <Image
                        src="/your-small-image.jpg" // Replace this with your actual image path
                        alt="Service Icon"
                        fill
                        className="object-cover rounded"
                    />
                </div>

                <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between relative">
                        <span className="text-xl font-semibold ">Gym</span>

                        <div className="transform rotate-[15deg] pb-4">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 19L19 5M9 5h10v10" />
                            </svg>
                        </div>
                    </div>

                    {/* Underline under both text and arrow */}
                    <div className="h-[1px] bg-white mt-1 w-full"></div>
                </div>
                
            </div>
            
            <div className="flex items-start gap-6 px-48">
                <div className="w-24 h-24 relative p-4">
                    <Image
                        src="/your-small-image.jpg" // Replace this with your actual image path
                        alt="Service Icon"
                        fill
                        className="object-cover rounded"
                    />
                </div>

                <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between relative">
                        <span className="text-xl font-semibold ">Gym</span>

                        <div className="transform rotate-[15deg] pb-4">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 19L19 5M9 5h10v10" />
                            </svg>
                        </div>
                    </div>

                    {/* Underline under both text and arrow */}
                    <div className="h-[1px] bg-white mt-1 w-full"></div>
                </div>
                
            </div>
            
            <div className="flex items-start gap-6 px-48">
                <div className="w-24 h-24 relative p-4">
                    <Image
                        src="/your-small-image.jpg" // Replace this with your actual image path
                        alt="Service Icon"
                        fill
                        className="object-cover rounded"
                    />
                </div>

                <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between relative">
                        <span className="text-xl font-semibold ">Gym</span>

                        <div className="transform rotate-[15deg] pb-4">
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 19L19 5M9 5h10v10" />
                            </svg>
                        </div>
                    </div>

                    {/* Underline under both text and arrow */}
                    <div className="h-[1px] bg-white mt-1 w-full"></div>
                </div>
                
            </div>
        </section>
    );
};

export default Services;