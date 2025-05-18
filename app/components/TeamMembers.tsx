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
    <div className="px-6 sm:px-8 py-12 w-full flex flex-col items-center mb-20 sm:mb-40">
      {/* Title */}
      <h2 className="text-center text-xl font-bold text-[#FFF200] mb-3">The Team</h2>
      <p className='mb-10 sm:mb-16 text-center text-2xl sm:text-3xl'>Our Professional Trainers</p>

      {/* Scrollable Members with padding protection */}
      <div className="w-full relative">
        <div className="overflow-x-auto scrollbar-hide w-full pl-6 sm:pl-0">
          <div className="flex space-x-6 w-max mx-auto px-6 sm:px-0">
            {members.map((member, index) => (
              <div key={index} className="flex-shrink-0 w-40 text-center">
                {/* Circular Image */}
                <div className="w-28 h-28 mx-auto mb-3 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-sm font-medium">{member.name}</h3>

                {/* Icons */}
                <div className="flex justify-center mt-1 space-x-3 text-sm">
                  <FaPhoneAlt className="text-[#FFF200] cursor-pointer" />
                  <FaEnvelope className="text-[#FFF200] cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;