
"use client";  
import React from "react";
import { useLanguage } from "../../Functions/useLanguage";
//import SeedButton from "../SeedButtonBackend/SeedButton";


const Conditions = () => {
  const { translateList } = useLanguage(); // Отримання перекладів
  const menuItems = translateList("Conditions", "hero");

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px", fontSize: "18px", lineHeight: "1.6", color: "#333", textAlign: "left" }}>
     
      {/*<SeedButton />*/}
      {/* Головний заголовок */}
      <h1 style={{ fontWeight: "bold", fontSize: "32px", marginBottom: "24px" }}>
        {menuItems[0]}
      </h1>

      {/* Розділ 1 */}
      <h2 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "12px" }}>
        {menuItems[1]}
      </h2>
      <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
        <li>{menuItems[2]}</li>
        <li>{menuItems[3]}</li>
        <li>{menuItems[4]}</li>
        <li>{menuItems[5]}</li>
      </ul>

      {/* Розділ 2 */}
      <h2 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "24px", marginBottom: "12px" }}>
        {menuItems[6]}
      </h2>
      <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
        <li>{menuItems[7]}</li>
        <li>{menuItems[8]}</li>
      </ul>

      {/* Розділ 3 */}
      <h2 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "24px", marginBottom: "12px" }}>
        {menuItems[9]}
      </h2>
      <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
        <li>{menuItems[10]}</li>
        <li>{menuItems[11]}</li>
      </ul>
      <p>{menuItems[12]}</p>

      {/* Розділ 4 */}
      <h2 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "24px", marginBottom: "12px" }}>
      {menuItems[13]}
      </h2>
      <p>{menuItems[14]}</p>
      <p>{menuItems[15]} <a href="tel:+380675795497" style={{ fontWeight: "bold", color: "#000", textDecoration: "underline" }}>+380 97 367 82 57</a></p>
    </main>
  );
};

export default Conditions;
