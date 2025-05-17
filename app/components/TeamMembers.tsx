'use client';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const members = [
  {
    name: 'Nardos Amakele',
    image: '/images/member1.jpg',
  },
  {
    name: 'Samuel Tesfaye',
    image: '/images/member2.jpg',
  },
  {
    name: 'Lidiya Gebru',
    image: '/images/member3.jpg',
  },
  {
    name: 'Dawit Mekonnen',
    image: '/images/member4.jpg',
  },
];

const TeamMembers = () => {
  return (
    <div className="px-8 py-12 w-full flex flex-col items-center">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold mb-10">Meet Our Team</h2>

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
              <div className="flex justify-center mt-1 space-x-3 text-blue-600 text-sm">
                <FaPhoneAlt className="hover:text-blue-800 cursor-pointer" />
                <FaEnvelope className="hover:text-blue-800 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
