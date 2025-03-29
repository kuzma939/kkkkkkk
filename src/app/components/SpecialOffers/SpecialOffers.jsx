"use client";

import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import { useRouter } from "next/navigation";

export default function SpecialOffers() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "special_offers");
  const router = useRouter();

  const handleClick = () => {
    router.push("/special-offers");
  };

  return (
    <section
      className="bg-gray-100 dark:bg-gray-800 section-container"
      aria-labelledby="special-offers-heading"
    >
      <div className="space-y-4">
        <div className="relative ml-auto 2xl:mr-24  xl:left-[-10%] max-w-6xl 2xl:max-w-5xl pr-0 md:pr-[12px] flex justify-center md:justify-end">
          {/* Image Container */}
          <div className="w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[1000px] sm:w-[80%] md:w-[60%] lg:w-[70%] relative rounded-lg overflow-hidden">
    <Image
      src="/hoom/offer.avif"
      alt="Special Offers Image"
      layout="responsive"
      width={800}    // Базова ширина для збереження пропорцій
      height={1000}  // Базова висота для збереження пропорцій (4:5)
      style={{ objectFit: "cover" }}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
      className="rounded-lg"
      priority
    />
  </div>
          {/* Text Container */}
          <div
            className={`
              absolute bottom-[5%] sm:bottom-[20%] md:bottom-[15%] lg:bottom-[20%] 
              left-1/2  lg:left-[30%] 2xl:left-[10%] transform -translate-x-1/2 
              dark:bg-gray-700 bg-white/75
              p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20 rounded-lg  
              w-full max-w-none sm:w-[65%] lg:w-[55%] 2xl:w-[90%] text-center md:text-left
              transition-all duration-500
            `}
          >
            <h2
              className={`text-base sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-8 md:mb-8
                dark:text-[#f5e8d6] text-black`}
            >
              {menuItems[0] || "Special Offers"}
            </h2>
         
            <p
              className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-4 sm:mb-8 md:mb-8 lg:mb-10 leading-relaxed 
              dark:text-gray-400 text-black`}
            >
              {menuItems[2] || "Don't miss out on these exclusive deals."}
            </p>
            <button
              onClick={handleClick}
              className={`py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 xl:py-6 xl:px-12 rounded-full 
              text-sm sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl transition-all duration-300 
              dark:bg-[#f5e8d6] dark:text-[#2e1f14] dark:hover:bg-[#d1b79e]
              bg-gray-900 text-white hover:bg-gray-700`}
              aria-label="View more special offers"
            >
              {menuItems[3] || "View More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}