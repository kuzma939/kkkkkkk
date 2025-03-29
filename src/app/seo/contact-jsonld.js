const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "ContactPoint",
    contactType: "Customer Service", // Тип контакту
    telephone: "+123456789", // Вкажіть номер телефону
    email: "latoreatelier01@gmail.com", // Вкажіть коректну електронну пошту
    areaServed: ["UA"], // Перелік країн або регіонів
    availableLanguage: [
      { "@type": "Language", name: "Ukrainian" }, // Українська мова
      { "@type": "Language", name: "English" }, // Англійська мова
      { "@type": "Language", name: "French" }, // Французька мова
    ],
   
  },
};

export default contactJsonLd;

  