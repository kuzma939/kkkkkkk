import React from "react";
import { useLanguage } from '../../Functions/useLanguage';
import { FaTag, FaMoneyBillWave, FaPalette, FaRulerVertical, FaBoxes, FaBarcode, FaInfoCircle } from "react-icons/fa";

/**
 * Component to display product details, including translated fields, if available.
 * The component does not render if the form is submitted or if no product data is provided.
 * @param {Object} props - Properties passed to the component.
 * @param {Object} props.productData - The data of the product to be displayed.
 * @param {boolean} props.formSubmitted - Flag indicating whether the form has been submitted.
 */
const ProductDetails = ({ productData, formSubmitted }) => {
  const { language } = useLanguage(); // Retrieve the current language using a custom hook.

  // Get the translated product name based on the current language, with fallback to default or placeholder.
  const translatedName = productData.translations?.[language]?.name || productData.name || "Unnamed Product";

  // Get the translated product description based on the current language, with fallback to default or placeholder.
  const translatedDescription = productData.translations?.[language]?.description || productData.description || "No Description";

  // Do not render the component if the form is submitted or if no product data is provided.
  if (formSubmitted || !productData) return null;

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-950 dark:text-white p-6 sm:p-8 rounded-lg shadow-lg" aria-labelledby="product-details-heading">
      <h2 id="product-details-heading" className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Product Details
      </h2>
      <dl className="w-full max-w-lg space-y-4">
        <div className="flex flex-wrap justify-between items-start">
          <dt className="text-sm sm:text-base font-semibold flex items-center gap-2">
            <FaTag className="text-gray-600 dark:text-lime-400" /> Product Name:
          </dt>
          <dd className="text-sm sm:text-base break-words max-w-[70%]">{translatedName}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm sm:text-base font-semibold flex items-center gap-2">
            <FaBarcode className="text-gray-600 dark:text-gray-400" /> SKU:
          </dt>
          <dd className="text-sm sm:text-base">{productData.sku}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm sm:text-base font-semibold flex items-center gap-2">
            <FaMoneyBillWave className="text-gray-600 dark:text-green-400" /> Price:
          </dt>
          <dd className="text-sm sm:text-base">{productData.price}₴</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm sm:text-base font-semibold flex items-center gap-2">
            <FaPalette className="text-gray-600 dark:text-blue-400" /> Color:
          </dt>
          <dd className="text-sm sm:text-base">{productData.color}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm sm:text-base font-semibold flex items-center gap-2">
            <FaRulerVertical className="text-gray-600 dark:text-purple-400" /> Size:
          </dt>
          <dd className="text-sm sm:text-base">{productData.size}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm sm:text-base font-semibold flex items-center gap-2">
            <FaBoxes className="text-gray-600 dark:text-orange-400" /> Quantity:
          </dt>
          <dd className="text-sm sm:text-base">{productData.quantity}</dd>
        </div>
       
        <div className="flex flex-col">
          <dt className="text-sm sm:text-base font-semibold flex items-center gap-2">
            <FaInfoCircle className="text-gray-600 dark:text-yellow-400" /> Description:
          </dt>
          <dd className="text-sm sm:text-base mt-1">{translatedDescription}</dd>
        </div>
      </dl>
    </section>
  );
};

export default ProductDetails;