import React from "react";
import { useLanguage } from "../../Functions/useLanguage"; 
export default function SizeChart({ onClose }) {

  const {  translateList } = useLanguage(); 
  const menuItems = translateList("SizeTable", "header");
  
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-black rounded-lg shadow-lg p-4 md:p-6 w-11/12 sm:w-10/12 md:w-2/3 lg:w-1/2">
        <h2 className="text-lg font-bold mb-4 text-center">{menuItems[0]}</h2>
        <div className="overflow-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-900 text-xs sm:text-sm">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-900">
                <th className="border border-gray-300 px-2 sm:px-4 py-2">{menuItems[1]}</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2">{menuItems[2]}</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2">{menuItems[3]}</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2">{menuItems[4]}</th>
                <th className="border border-gray-300 px-2 sm:px-4 py-2">{menuItems[5]}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">40</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">32</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">80-83</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">60-63</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">86-89</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">42</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">34</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">84-87</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">66-69</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">90-93</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">44</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">36</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">88-91</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">70-73</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">94-97</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">46</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">38</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">92-95</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">74-77</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">98-101</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">48</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">40</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">96-99</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">78-81</td>
                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center">102-105</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 block mx-auto"
        >
          {menuItems[6]}
        </button>
      </div>
    </div>
  );
}
