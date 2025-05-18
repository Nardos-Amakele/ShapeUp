import Image from 'next/image';

const Services = () => {
    return (
        <section className="px-6 lg:px-40 py-10 lg:py-20">
            <h2 className="text-2xl lg:text-4xl font-medium mb-8 lg:mb-16 text-center">Explore Our Offerings</h2>

            {/* Body Building */}
            <div className="flex flex-row items-end gap-4 lg:gap-6 mb-4 lg:mb-6">
                <div className="w-16 h-16 lg:w-24 lg:h-24 relative p-3 lg:p-4 -mb-[1px]">
                    <Image
                        src="/bodyBuilding.jpg"
                        alt="Body Building"
                        fill
                        className="object-cover rounded"
                    />
                </div>

                <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between relative">
                        <span className="text-lg lg:text-2xl font-medium">Body Building</span>
                        <div className="transform rotate-[15deg] pb-2 lg:pb-4 text-[#FFF200]">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="lg:w-[30px] lg:h-[30px]"
                            >
                                <path d="M5 19L19 5M9 5h10v10" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-[1px] bg-white mt-1 w-full"></div>
                </div>
            </div>

            {/* Aerobics */}
            <div className="flex flex-row items-end gap-4 lg:gap-6 mb-4 lg:mb-6">
                <div className="w-16 h-16 lg:w-24 lg:h-24 relative p-3 lg:p-4 -mb-[1px]">
                    <Image
                        src="/aerobics.jpg"
                        alt="Aerobics"
                        fill
                        className="object-cover rounded"
                    />
                </div>

                <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between relative">
                        <span className="text-lg lg:text-2xl font-medium">Aerobics</span>
                        <div className="transform rotate-[15deg] pb-2 lg:pb-4 text-[#FFF200]">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="lg:w-[30px] lg:h-[30px]"
                            >
                                <path d="M5 19L19 5M9 5h10v10" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-[1px] bg-white mt-1 w-full"></div>
                </div>
            </div>

            {/* Futsal */}
            <div className="flex flex-row items-end gap-4 lg:gap-6 mb-4 lg:mb-6">
                <div className="w-16 h-16 lg:w-24 lg:h-24 relative p-3 lg:p-4 -mb-[1px]">
                    <Image
                        src="/futsal.jpg"
                        alt="Futsal"
                        fill
                        className="object-cover rounded"
                    />
                </div>

                <div className="pt-1 flex-1">
                    <div className="flex items-center justify-between relative">
                        <span className="text-lg lg:text-2xl font-medium">Futsal</span>
                        <div className="transform rotate-[15deg] pb-2 lg:pb-4 text-[#FFF200]">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="lg:w-[30px] lg:h-[30px]"
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