import Image from 'next/image';

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-35 py-16 lg:py-25 mt-10 lg:mt-50">
            {/* Image on top for small screens, left for large */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-8">
                <Image
                    src="/aboutPic.jpg"
                    alt="Example"
                    width={500}
                    height={300}
                    className="object-cover rounded brightness-50"
                />
            </div>

            {/* Text below for small screens, right for large */}
            <div className="w-full lg:w-1/2 px-4 py-10 lg:py-10 -mt-4 lg:-mt-10 text-center lg:text-left">
                <h2 className="text-3xl">Where Fitness Meets</h2>
                <h2 className="text-3xl">Community</h2>

                <p className="text-md py-5">
                    lorem ipsum lorem ipsum lorem ipsum lorem
                    lorem ipsum lorem lorem ipsum lorem lorem
                    ipsum lorem lorem ipsum lorem lorem ipsum
                    lorem lorem ipsum lorem lorem ipsum lorem
                    m lorem lorem ipsum lorem
                </p>
                <button className="bg-[#FFF200] font-bold text-black px-10 py-2 rounded-lg transition duration-300">
                    <a href="">Register</a>
                </button>
            </div>
        </div>
    );
};

export default About;
