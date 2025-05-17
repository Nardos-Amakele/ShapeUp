import Image from 'next/image';

const Services = () => {
    return (
        <section className="p-20">
            <h2 className="text-4xl font-medium mb-20 text-center">Explore Our Offerings</h2>

            <div className="flex items-end gap-6 px-40 mb-6"> {/* Changed items-start to items-end */}
                <div className="w-24 h-24 relative p-4 -mb-[1px]"> {/* Added negative margin-bottom */}
                    <Image
                        src="/bodyBuilding.jpg"
                        alt="Service Icon"
                        fill
                        className="object-cover rounded"
                    />
                </div>

                <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between relative">
                        <span className="text-2xl font-medium">Body Building</span>
                        <div className="transform rotate-[15deg] pb-4 text-[#FFF200]">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 19L19 5M9 5h10v10" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-[1px] bg-white mt-1 w-full"></div>
                </div>
            </div>
            
            <div className="flex items-end gap-6 px-40 mb-6"> {/* Changed items-start to items-end */}
                <div className="w-24 h-24 relative p-4 -mb-[1px]"> {/* Added negative margin-bottom */}
                    <Image
                        src="/aerobics.jpg"
                        alt="Service Icon"
                        fill
                        className="object-cover rounded"
                    />
                </div>

                <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between relative">
                        <span className="text-2xl font-medium">Aerobics</span>
                        <div className="transform rotate-[15deg] pb-4 text-[#FFF200]">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 19L19 5M9 5h10v10" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-[1px] bg-white mt-1 w-full"></div>
                </div>
            </div>
            
            <div className="flex items-end gap-6 px-40 mb-6"> 
                <div className="w-24 h-24 relative p-4 -mb-[1px]"> 
                    <Image
                        src="/futsal.jpg"
                        alt="Service Icon"
                        fill
                        className="object-cover rounded"
                    />
                </div>

                <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between relative">
                        <span className="text-2xl font-medium">Futsal</span>
                        <div className="transform rotate-[15deg] text-[#FFF200] pb-4">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M5 19L19 5M9 5h10v10" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-[1px] bg-white mt-1 w-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Services;