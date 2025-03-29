import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";

export default function About() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "about");

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-6 sm:px-12" id="about">
      <div className="max-w-8xl mx-auto relative">
       
<div className="relative hidden sm:grid grid-cols-1 md:grid-cols-2 items-center md:gap-8 xl:gap-2">
      
          <div className="flex justify-start relative group xl:ml-36 overflow-hidden">
  <Image
    src="/hoom/about.avif"
    alt="About Image"
    width={500}
    height={600}
    className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
  />
          </div>

<div className="mt-16   bg-white dark:bg-gray-900 mb-48 w-full">
            <h2 className=" text-2xl sm:text-4xl font-extrabold text-gray dark:text-white mb-4">{menuItems[0]}</h2>
            <p className="mt-8 text-gray dark:text-gray-300 text-lg lg:text-2xl font-extrabold">
            {menuItems[1]}
             
            </p>
            <p className="mt-4 text-gray dark:text-gray-300 text-base lg:text-2xl font-extrabold">
            {menuItems[2]}
              </p>
              <p className="mt-4 text-gray dark:text-gray-300 text-base lg:text-2xl font-extrabold">
              {menuItems[3]}
              </p>
          </div>
        </div>

        {/* Макет для мобільних (окремо від grid) */}
        <div className="relative sm:hidden flex justify-center">
          <div className="relative w-full">
            {/* Зображення */}
            <div className="relative group w-full h-[450px] sm:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/hoom/about.avif"
                alt="About Image"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg  object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
  />
               
             
            </div>

            {/* Текстовий блок на всю ширину */}
            <div
  className={`absolute bottom-[5%] left-0 w-full 
    bg-white/90 dark:bg-gray-900/80 p-6 text-center transition-all duration-700`}
>

              <h2 className="text-xl font-extrabold text-gray dark:text-white mb-2">{menuItems[0]}</h2>
              <p className="text-gray font-extrabold dark:text-white text-xs sm:text-base lg:text-xl ">
              {menuItems[1]}
              </p>
              <p className="text-gray font-extrabold dark:text-white text-xs sm:text-sm md:text-base lg:text-xl  mt-2">
              {menuItems[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
