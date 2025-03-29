"use client"; // Ensure this is a client-side component
import Layout from "./components/Layout"; // Import the Layout component
import Home from "./home"; // Import the Home component

export default function Page() {
 
  return (
    <Layout>
      {/* Your page-specific content */}
      <Home />
    </Layout>


  );
}
