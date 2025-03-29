import { useLanguage } from "../../Functions/useLanguage";

const OpeningHours = () => {
  const { translateList } = useLanguage();
  const menuItems = translateList("contact", "openninghours");
  
  return (
    <section className="bg-gray-200 dark:bg-black text-black dark:text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:pb-12 pb-8 sm:ml-0 ml-4 md:mb-0 text-center md:text-left">
        {menuItems[0]}
        </h2>
        <div className="flex flex-col space-y-6 sm:space-y-4 md:space-y-2 text-lg text-left sm:text-right sm:pl-0 pl-4 md:pr-32">
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-4">
            <p className="font-semibold text-lg sm:text-xl">{menuItems[1]}</p>
            <p className="text-gray-700  dark:text-gray-400 sm:pl-32">9:00 am – 5:00 pm</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-4">
            <p className="font-semibold text-lg sm:text-xl">{menuItems[2]}</p>
            <p className="text-gray-700 dark:text-gray-400 sm:pl-4">9:00 am – 5:00 pm</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-4">
            <p className="font-semibold text-lg sm:text-xl">{menuItems[3]}</p>
            <p className="text-gray-700 dark:text-gray-400 sm:pl-4">9:00 am – 5:00 pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};
  export default OpeningHours;
  