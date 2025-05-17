'use client';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const members = [
  {
    name: 'Nardos Amakele',
    image: '/heroPic.jpg',
  },
  {
    name: 'Samuel Tesfaye',
    image: '/hannah.jpg',
  },
  {
    name: 'Lidiya Gebru',
    image: '/guyGreen.jpg',
  },
  {
    name: 'Dawit Mekonnen',
    image: '/bodyBuilding.jpg',
  },
];

const TeamMembers = () => {
  return (
    <div className="px-8 py-12 w-full flex flex-col items-center mb-40">
      {/* Title */}
      <h2 className="text-center text-xl font-bold text-[#FFF200] mb-3">The Team</h2>
      <p className='mb-16 text-center text-3xl'> Our Professional Trainers</p>

      {/* Scrollable Members */}
      <div className="overflow-x-auto scrollbar-hide w-full">
        <div className="flex space-x-6 justify-center">
          {members.map((member, index) => (
            <div key={index} className="flex-shrink-0 w-40 text-center">
              {/* Circular Image */}
              <div className="w-28 h-28 mx-auto mb-3 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm font-medium">{member.name}</h3>

              {/* Icons */}
              <div className="flex justify-center mt-1 space-x-3 text-sm">
                <FaPhoneAlt className=" text-[#FFF200] cursor-pointer" />
                <FaEnvelope className=" text-[#FFF200] cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
