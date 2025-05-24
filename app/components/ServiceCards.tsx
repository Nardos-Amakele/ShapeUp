'use client';
import { useState, useRef, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import { motion, PanInfo, useAnimation } from 'framer-motion';

type ServiceItem = {
  id: string;
  name: string;
};

type Car = {
  id: string;
  title: string;
  description: string;
  services: ServiceItem[];
  buttonText: string;
  color?: string;
};

type CarouselProps = {
  items: Car[];
  cardWidth?: number;
  cardHeight?: number;
  visibleCount?: number;
};

const DEFAULT_CARD_WIDTH = 280;
const DEFAULT_CARD_HEIGHT = 380;
const DEFAULT_VISIBLE_COUNT = 3;

const Carousel = ({
  items: cars,
  cardWidth = DEFAULT_CARD_WIDTH,
  cardHeight = DEFAULT_CARD_HEIGHT,
  visibleCount = DEFAULT_VISIBLE_COUNT,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(visibleCount / 2));
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  const items =
    cars.length >= visibleCount
      ? cars
      : [
          ...cars,
          ...Array(visibleCount - cars.length).fill({
            id: 'placeholder',
            title: 'Coming Soon',
            description: 'New service package coming soon',
            services: [],
            buttonText: 'Notify Me',
            color: '#FFFFFF',
          }),
        ];

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) goToPrev();
    else if (info.offset.x < -threshold) goToNext();
    else controls.start({ x: 0 });
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const getVisibleItems = () => {
    const half = Math.floor(visibleCount / 2);
    return Array.from({ length: visibleCount }).map((_, i) => {
      const index = (activeIndex - half + i + items.length) % items.length;
      return items[index];
    });
  };

  return (
    <div className="relative w-full h-[450px] overflow-hidden bg-black" ref={carouselRef}>
      <motion.div
        className="flex items-center justify-center h-full"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        animate={controls}
      >
        {getVisibleItems().map((item, index) => {
          const isCenter = index === Math.floor(visibleCount / 2);
          const zIndex = visibleCount - Math.abs(index - Math.floor(visibleCount / 2));
          const scale = isCenter ? 1 : 0.85;
          const opacity = isCenter ? 1 : 0.8;
          const xOffset = (index - Math.floor(visibleCount / 2)) * (cardWidth * 0.7);

          return (
            <motion.div
              key={`${item.id}-${index}`}
              className={`absolute rounded-xl shadow-lg overflow-hidden flex flex-col ${
                isCenter ? 'cursor-default' : 'cursor-pointer'
              }`}
              style={{
                zIndex: zIndex * 10,
                width: `${cardWidth}px`,
                height: `${isCenter ? cardHeight * 1.1 : cardHeight}px`,
                backgroundColor: isCenter ? '#FFFF20' : '#FFFFFF',
                border: isCenter ? '3px solid #000000' : '1px solid #DDDDDD',
              }}
              initial={{ x: xOffset, scale, opacity }}
              animate={{ x: xOffset, scale, opacity }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={() =>
                !isCenter &&
                (index < Math.floor(visibleCount / 2) ? goToPrev() : goToNext())
              }
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-xl font-bold mb-3 ${isCenter ? 'text-black' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`mb-4 text-sm ${isCenter ? 'text-gray-900' : 'text-gray-600'}`}>
                  {item.description}
                </p>
                
                <div className="mb-6">
                  <h4 className={`font-semibold mb-2 ${isCenter ? 'text-black' : 'text-gray-800'}`}>
                    Includes:
                  </h4>
                  <ul className="space-y-2">
                    {item.services.map((service: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
                      <li key={service.id} className="flex items-center">
                        <svg 
                          className="w-4 h-4 mr-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          style={{ color: isCenter ? '#000000' : '#22C55E' }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm ${isCenter ? 'text-black' : 'text-gray-700'}`}>
                          {service.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className={`mt-auto w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    isCenter 
                      ? 'bg-black hover:bg-gray-900 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  {item.buttonText}
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-50 p-2 text-yellow-400 hover:text-yellow-500 transition-colors bg-black rounded-full border-2 border-yellow-400"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-50 p-2 text-yellow-400 hover:text-yellow-500 transition-colors bg-black rounded-full border-2 border-yellow-400"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-40">
        {items.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? 'bg-yellow-400 w-6' : 'bg-white'
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;