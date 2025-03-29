// Function to handle form submission
export const handleFormSubmit = async ({
  e,
  setFormSubmitted,
  setSuccessMessageVisible,
  setFormValues,
  productData,
}) => {
  e.preventDefault();
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        message: e.target.message.value,
        productName: productData.name,
        productDescription: productData.description,
        productImage: productData.image, // Передаємо зображення
        productPrice: productData.price, // Ціна продукту
        productColor: productData.color, // Колір продукту
        productSize: productData.size,   // Розмір продукту
        productQuantity: productData.quantity, // Кількість
        productSKU: productData.sku,     // SKU
      }),
      
    });

    if (response.ok) {
      setFormSubmitted(true);
      setSuccessMessageVisible(true);
      alert("Email sent successfully!");
      setFormValues({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      
      });
       
      setTimeout(() => setSuccessMessageVisible(false), 5000);
    } else {
      alert("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Error occurred");
  }
};

// Function to handle changes in form values
export const handleInputChange = (e, setFormValues) => {
  const { name, value } = e.target; // Get the name and value of the changed field
  setFormValues((prevValues) => ({
    ...prevValues, 
    [name]: value, 
  }));
};
