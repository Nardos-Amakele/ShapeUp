// components/ImageTextSection.tsx
import Image from 'next/image';

const About = () => {
    return (
        <div className="flex items-center justify-center px-35 py-25 mt-50">
            {/* Image on the left */}
            <div className="w-1/2 flex justify-center items-center p-8">
                <Image
                    src="/aboutPic.jpg"
                    alt="Example"
                    width={500}
                    height={300}
                    className="object-cover rounded brightness-50"
                />
            </div>


            {/* Paragraph on the right */}
            <div className="w-1/2 px-4 py-10 -mt-10">
                <h2 className='text-3xl '> Where Fitness Meets </h2>
                <h2 className='text-3xl '>Community</h2>

                <p className="text-md py-5">
                    lorem ipsum lorem ipsum lorem ipsum lorem
                    lorem ipsum lorem lorem ipsum lorem lorem
                    ipsum lorem lorem ipsum lorem lorem ipsum
                    lorem lorem ipsum lorem lorem ipsum lorem
                    m lorem lorem ipsum lorem
                </p>
                <button className="bg-[#FFF200] font-bold  text-black px-10 py-2 rounded-lg  transition duration-300">
                    <a href="">Register</a>
                </button>
            </div>
        </div>
    );
};

export default About;
