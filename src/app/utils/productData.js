// Function to retrieve initial product data
// getInitialProductData for ContactUs converts URL parameters into a convenient product object

export const getInitialProductData = (searchParams) => {
  const productImage = searchParams.get("productImage");
  return {
  name: searchParams.get("productName") || "Unknown Product", // Default: "Unknown Product"
  price: searchParams.get("productPrice") || "0", // Default: "0"
  description: searchParams.get("productDescription") || "No description available.", // Default: No description
  image: productImage && !productImage.endsWith(".mp4")
  ? productImage
  : "/hoom/contact.avif",
  video: searchParams.get("productVideo") || null,

  color: searchParams.get("productColor") || "Not specified", // Default: Not specified
  size: searchParams.get("productSize") || "Not specified", // Default: Not specified
  quantity: searchParams.get("productQuantity") || 1, // Default value: 1
  sku: searchParams.get("productSKU") || "N/A", // Default value: "N/A"

}};

