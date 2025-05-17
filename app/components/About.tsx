// components/ImageTextSection.tsx
import Image from 'next/image';

const About = () => {
    return (
        <div className="flex items-center justify-center p-60">
            {/* Image on the left */}
            <div className="w-1/2 flex justify-center items-center p-8">
                <Image
                    src="/your-image.jpg" // Replace with your image path
                    alt="Example"
                    width={500}
                    height={300}
                    className="object-cover rounded"
                />
            </div>

            {/* Paragraph on the right */}
            <div className="w-1/2 px-4 py-10">
                <h2 className='text-3xl'> Where Fitness Meets Community</h2>
                <p className="text-lg py-4">
                    lorem ipsum lorem ipsum lorem ipsum lorem
                    lorem ipsum lorem lorem ipsum lorem lorem
                    ipsum lorem lorem ipsum lorem lorem ipsum
                    lorem lorem ipsum lorem lorem ipsum lorem
                    m lorem lorem ipsum lorem
                </p>
                <button className="bg-[#FFF200] font-semibold  text-black px-8 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    <a href="">Register</a>
                </button>
            </div>
        </div>
    );
};

export default About;
