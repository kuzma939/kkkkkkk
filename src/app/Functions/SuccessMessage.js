// Component to display a success message after form submission
// Accepts a prop `isVisible` to control its visibility
function SuccessMessage({ isVisible }) {
  // If the message is not visible, do not render anything
  if (!isVisible) return null;

  // Render the success message when `isVisible` is true
  return (
    <div className="absolute top-0 left-0 w-full bg-green-500 text-white py-4 text-center font-bold z-50">
      Thank you! Your form has been successfully submitted!
    </div>
  );
}

export default SuccessMessage;
