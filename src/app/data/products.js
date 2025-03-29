const products = [
  {
    id: 101,
    price: 1850,
    isTop: false,
    sku: "98821",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Short Leather Skirt/1.avif",
    images: [
      "/Skirts/Short Leather Skirt/2.avif",
      "/Skirts/Short Leather Skirt/3.avif",
      "/Skirts/Short Leather Skirt/4.avif",
      "/Skirts/Short Leather Skirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Short Leather Skirt",
        description: "Shortened midi-length skirt with a high waist.\nFabric: high-quality eco-leather with suede base (stretchy, doesn’t crack).",
        colors: ["caramel"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe Courte en Cuir",
        description: "Jupe courte longueur midi avec taille haute.\nTissu : simili cuir de haute qualité avec base en daim (extensible, ne se fissure pas).",
        colors: ["caramel"]
      },
      UA: {
        category: "Спідниці",
        name: "Шкіряна спідниця вкорочена",
        description: "Спідниця вкорочена міді довжини на високій посадці.\nТканина: якісна екошкіра на замшевій основі (стрейчева, не тріскається).",
        colors: ["карамель"]
      },
      RU: {
        category: "Юбки",
        name: "Кожаная юбка укороченная",
        description: "Юбка укороченная миди длины на высокой посадке.\nТкань: качественная экокожа на замшевой основе (стрейчевая, не трескающаяся).",
        colors: ["карамель"]
      }
    }
  },  
  {
    id: 100,
    price: 2000,
    isTop: false,
    sku: "98820",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Batiste Shirt/1.avif",
    images: [
      "/Shirts/Batiste Shirt/2.avif",
      {
        type: "video",
        src: "/Shirts/Batiste Shirt/IMG_7575.mp4",
        poster: "/Shirts/Batiste Shirt/1.avif"
      },
      "/Shirts/Batiste Shirt/3.avif",
      "/Shirts/Batiste Shirt/4.avif",
      "/Shirts/Batiste Shirt/5.avif",
      "/Shirts/Batiste Shirt/6.avif",
      "/Shirts/Batiste Shirt/7.avif",
      "/Shirts/Batiste Shirt/8.avif",
      "/Shirts/Batiste Shirt/9.avif",
      "/Shirts/Batiste Shirt/10.avif",
      "/Shirts/Batiste Shirt/11.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Batiste Shirt",
        description: "Shirt made of natural fabric, decorated with lace. Features puff sleeves.\nFabric: natural batiste.",
        colors: ["white", "light blue"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise en Batiste",
        description: "Chemise en tissu naturel ornée de dentelle. Manches bouffantes.\nTissu : batiste naturel.",
        colors: ["blanc", "bleu clair"]
      },
      UA: {
        category: "Сорочки",
        name: "Батистова сорочка",
        description: "Сорочка із натуральної тканини, яка оздоблена мереживом. Має рукава ліхтарики.\nТканина: натуральна тканина батист.",
        colors: ["білий", "блакитний"]
      },
      RU: {
        category: "Рубашки",
        name: "Батистовая рубашка",
        description: "Рубашка из натуральной ткани, украшенная кружевом. Имеет рукава-фонарики.\nТкань: натуральная ткань батист.",
        colors: ["белый", "голубой"]
      }
    }
  },  
 {
    id: 99,
    price: 2000,
    isTop: false,
    sku: "98819",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Batiste Shirt 2/1.avif",
    images: [
      "/Shirts/Batiste Shirt 2/2.avif",
      {
        type: "video",
        src: "/Shirts/Batiste Shirt 2/IMG_9010.mp4",
        poster: "/Shirts/Batiste Shirt 2/1.avif"
      },
      "/Shirts/Batiste Shirt 2/3.avif",
       "/Shirts/Batiste Shirt 2/4.avif",
      "/Shirts/Batiste Shirt 2/5.avif",
      "/Shirts/Batiste Shirt 2/6.avif",
      "/Shirts/Batiste Shirt 2/7.avif",
      "/Shirts/Batiste Shirt 2/8.avif",
      "/Shirts/Batiste Shirt 2/9.avif",
      "/Shirts/Batiste Shirt 2/10.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Batiste Shirt 2",
        description: "Shirt made of natural fabric, decorated with lace. Features puff sleeves.\nFabric: natural batiste.",
        colors: ["white", "light blue"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise en Batiste 2",
        description: "Chemise en tissu naturel ornée de dentelle. Manches bouffantes.\nTissu : batiste naturel.",
        colors: ["blanc", "bleu clair"]
      },
      UA: {
        category: "Сорочки",
        name: "Батистова сорочка 2",
        description: "Сорочка із натуральної тканини, яка оздоблена мереживом. Має рукава ліхтарики.\nТканина: натуральна тканина батист.",
        colors: ["білий", "блакитний"]
      },
      RU: {
        category: "Рубашки",
        name: "Батистовая рубашка 2",
        description: "Рубашка из натуральной ткани, украшенная кружевом. Имеет рукава-фонарики.\nТкань: натуральная ткань батист.",
        colors: ["белый", "голубой"]
      }
    }
  },  
  {
    id: 98,
    price: 2280,
    isTop: false,
    sku: "98818",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Freedom Shirt/1.avif",
    images: [
      "/Shirts/Freedom Shirt/2.avif",
      "/Shirts/Freedom Shirt/3.avif",
     "/Shirts/Freedom Shirt/4.avif",
      "/Shirts/Freedom Shirt/5.avif",
      "/Shirts/Freedom Shirt/6.avif",
      "/Shirts/Freedom Shirt/7.avif",
      "/Shirts/Freedom Shirt/8.avif",
      "/Shirts/Freedom Shirt/9.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Freedom Shirt",
        description: "Long-staple 100% cotton muslin. A lightweight and soft-touch fabric.",
        colors: ["mint", "milk"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise «Freedom»",
        description: "Mousseline de coton 100% à longues fibres. Un tissu léger et doux au toucher.",
        colors: ["menthe", "lait"]
      },
      UA: {
        category: "Сорочки",
        name: "Сорочка «Freedom»",
        description: "Довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["м’ята", "молоко"]
      },
      RU: {
        category: "Рубашки",
        name: "Рубашка «Freedom»",
        description: "Долговолокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь ткань.",
        colors: ["мята", "молоко"]
      }
    }
  },  
  {
    id: 97,
    price: 2550,
    isTop: false,
    sku: "98817",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Denim Skirt/1.avif",
    images: [
      "/Skirts/Denim Skirt/2.avif",
      {
        type: "video",
        src: "/Skirts/Denim Skirt/IMG_8135.mp4",
        poster: "/Skirts/Denim Skirt/1.avif"
      },
      "/Skirts/Denim Skirt/3.avif",
       "/Skirts/Denim Skirt/4.avif",
      "/Skirts/Denim Skirt/5.avif",
      "/Skirts/Denim Skirt/6.avif",
      "/Skirts/Denim Skirt/7.avif",
      "/Skirts/Denim Skirt/8.avif",
      "/Skirts/Denim Skirt/9.avif",
      "/Skirts/Denim Skirt/10.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Denim Skirt",
        description: "Denim skirt with asymmetry and pleating.\nFabric: denim cotton.",
        colors: ["light blue", "navy"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe en Jean",
        description: "Jupe en jean avec asymétrie et plis.\nTissu : jean coton.",
        colors: ["bleu clair", "bleu marine"]
      },
      UA: {
        category: "Спідниці",
        name: "Джинс спідниця",
        description: "Джинсова спідниця з асиметрією та плісеруванням.\nТканина: джинс-котон.",
        colors: ["блакитний", "синій"]
      },
      RU: {
        category: "Юбки",
        name: "Джинс юбка",
        description: "Джинсовая юбка с асимметрией и плиссировкой.\nТкань: джинс-коттон.",
        colors: ["голубой", "синий"]
      }
    }
  },  
  {
    id: 96,
    price: 1670,
    isTop: false,
    sku: "98816",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Wrap Skirt/1.avif",
    images: [
      "/Skirts/Wrap Skirt/2.avif",
      "/Skirts/Wrap Skirt/3.avif",
      "/Skirts/Wrap Skirt/4.avif",
      "/Skirts/Wrap Skirt/5.avif",
      "/Skirts/Wrap Skirt/6.avif",
      "/Skirts/Wrap Skirt/7.avif",
      "/Skirts/Wrap Skirt/8.avif",
      "/Skirts/Wrap Skirt/9.avif",
      "/Skirts/Wrap Skirt/10.avif",
      "/Skirts/Wrap Skirt/11.avif",
      "/Skirts/Wrap Skirt/12.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Wrap Skirt",
        description: "Midi wrap skirt with a slit on the leg.\nFabric: suit fabric (75% viscose, 25% polyester).",
        colors: ["caramel", "olive", "denim"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe Portefeuille",
        description: "Jupe portefeuille midi avec une fente sur la jambe.\nTissu : tissu de costume (75% viscose, 25% polyester).",
        colors: ["caramel", "olive", "denim"]
      },
      UA: {
        category: "Спідниці",
        name: "Спідниця на запах",
        description: "Спідниця міді на запах із розрізом на ніжці.\nТканина: костюмна тканина (75% віскоза, 25% поліестер).",
        colors: ["карамель", "оливка", "джинс"]
      },
      RU: {
        category: "Юбки",
        name: "Юбка на запах",
        description: "Юбка миди на запах с разрезом на ножке.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер).",
        colors: ["карамель", "оливка", "джинс"]
      }
    }
  },  
  {
    id: 95,
    price: 2250,
    isTop: false,
    sku: "98815",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Pleated Leather Skirt/1.avif",
    images: [
      "/Skirts/Pleated Leather Skirt/2.avif",
      "/Skirts/Pleated Leather Skirt/3.avif",
       "/Skirts/Pleated Leather Skirt/4.avif",
      "/Skirts/Pleated Leather Skirt/5.avif",
      "/Skirts/Pleated Leather Skirt/6.avif",
      "/Skirts/Pleated Leather Skirt/7.avif",
      "/Skirts/Pleated Leather Skirt/8.avif",
      "/Skirts/Pleated Leather Skirt/9.avif",
      "/Skirts/Pleated Leather Skirt/10.avif",
      "/Skirts/Pleated Leather Skirt/11.avif",
      "/Skirts/Pleated Leather Skirt/12.avif",
      "/Skirts/Pleated Leather Skirt/13.avif",
      "/Skirts/Pleated Leather Skirt/14.avif",
      "/Skirts/Pleated Leather Skirt/15.avif",
      "/Skirts/Pleated Leather Skirt/16.avif",
      "/Skirts/Pleated Leather Skirt/17.avif",
      "/Skirts/Pleated Leather Skirt/18.avif",
      "/Skirts/Pleated Leather Skirt/19.avif",
      "/Skirts/Pleated Leather Skirt/20.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Pleated Leather Skirt",
        description: "Maxi-length pleated skirt with a high waist.\nFabric: high-quality eco-leather with suede base (stretchy, doesn’t crack).",
        colors: ["black", "olive", "beige", "caramel", "mocha"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe Plissée en Cuir",
        description: "Jupe plissée longue avec taille haute.\nTissu : simili cuir de haute qualité avec base en daim (extensible, ne se fissure pas).",
        colors: ["noir", "olive", "beige", "caramel", "moka"]
      },
      UA: {
        category: "Спідниці",
        name: "Шкіряна спідниця плісе",
        description: "Спідниця максі довжини з плісеруванням на високій посадці.\nТканина: якісна екошкіра на замшевій основі (стрейчева, не тріскається).",
        colors: ["чорний", "оливка", "бежевий", "карамель", "мокко"]
      },
      RU: {
        category: "Юбки",
        name: "Кожаная юбка плиссе",
        description: "Юбка макси длины с плиссировкой на высокой посадке.\nТкань: качественная экокожа на замшевой основе (стрейчевая, не трескающаяся).",
        colors: ["чёрный", "оливка", "бежевый", "карамель", "мокко"]
      }
    }
  },  
  {
    id: 94,
    price: 1850,
    isTop: false,
    sku: "98814",
    size: "XS S M L XL",
    category: "Skirts",
    image: "/Skirts/Marie Leather Skirt/1.avif",
    images: [
      "/Skirts/Marie Leather Skirt/2.avif",
      "/Skirts/Marie Leather Skirt/3.avif",
      "/Skirts/Marie Leather Skirt/4.avif",
      "/Skirts/Marie Leather Skirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Skirts",
        name: "Marie Leather Skirt",
        description: "Wrap midi skirt with asymmetry, high waist, and buttons.\nFabric: high-quality eco-leather with suede base (stretchy, doesn’t crack).",
        colors: ["black"]
      },
      FR: {
        category: "Jupes",
        name: "Jupe en Cuir Marie",
        description: "Jupe portefeuille midi avec asymétrie, taille haute et boutons.\nTissu : simili cuir de haute qualité avec base en daim (extensible, ne se fissure pas).",
        colors: ["noir"]
      },
      UA: {
        category: "Спідниці",
        name: "Шкіряна спідниця Marie",
        description: "Спідниця на запах міді довжини з асиметрією на високій посадці з ґудзиками.\nТканина: якісна екошкіра на замшевій основі (стрейчева, не тріскається).",
        colors: ["чорний"]
      },
      RU: {
        category: "Юбки",
        name: "Кожаная юбка Marie",
        description: "Юбка на запах миди длины с асимметрией на высокой посадке с пуговицами.\nТкань: качественная экокожа на замшевой основе (стрейчевая, не трескающаяся).",
        colors: ["чёрный"]
      }
    }
  },  
  {
    id: 93,
    price: 2150,
    isTop: false,
    sku: "98813",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Silk Lace Blouse/1.avif",
    images: [
      "/Shirts/Silk Lace Blouse/2.avif",
      "/Shirts/Silk Lace Blouse/3.avif",
      "/Shirts/Silk Lace Blouse/14.avif",
      "/Shirts/Silk Lace Blouse/15.avif",
      "/Shirts/Silk Lace Blouse/4.avif",
      "/Shirts/Silk Lace Blouse/5.avif",
      "/Shirts/Silk Lace Blouse/6.avif",
      "/Shirts/Silk Lace Blouse/7.avif",
      "/Shirts/Silk Lace Blouse/8.avif",
      "/Shirts/Silk Lace Blouse/9.avif",
      "/Shirts/Silk Lace Blouse/10.avif",
      "/Shirts/Silk Lace Blouse/11.avif",
      "/Shirts/Silk Lace Blouse/12.avif",
      "/Shirts/Silk Lace Blouse/13.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Silk Blouse with Lace",
        description: "Delicate blouse with ruffles, lace, and a decorative button.\nFabric: Armani silk.",
        colors: ["white", "black", "beige"]
      },
      FR: {
        category: "Chemises",
        name: "Blouse en Soie avec Dentelle",
        description: "Blouse délicate avec volants, dentelle et bouton décoratif.\nTissu : soie Armani.",
        colors: ["blanc", "noir", "beige"]
      },
      UA: {
        category: "Сорочки",
        name: "Шовкова блуза з мереживом",
        description: "Ніжна блуза із воланами, мереживом та декоративним ґудзиком.\nТканина: шовк «Армані».",
        colors: ["білий", "чорний", "бежевий"]
      },
      RU: {
        category: "Рубашки",
        name: "Шелковая блуза с кружевом",
        description: "Нежная блуза с воланами, кружевом и декоративной пуговицей.\nТкань: шёлк «Армани».",
        colors: ["белый", "чёрный", "бежевый"]
      }
    }
  },  
  {
    id: 92,
    price: 1950,
    isTop: false,
    sku: "98812",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Classic Pants/1.avif",
    images: [
      "/Pants/Classic Pants/2.avif",
      "/Pants/Classic Pants/3.avif",
      "/Pants/Classic Pants/4.avif",
      "/Pants/Classic Pants/5.avif",
      "/Pants/Classic Pants/6.avif",
      "/Pants/Classic Pants/7.avif",
      "/Pants/Classic Pants/8.avif",
      "/Pants/Classic Pants/9.avif",
      "/Pants/Classic Pants/10.avif",
      "/Pants/Classic Pants/11.avif",
      "/Pants/Classic Pants/12.avif",
      "/Pants/Classic Pants/13.avif",
      "/Pants/Classic Pants/14.avif",
      "/Pants/Classic Pants/15.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Classic Pants",
        description: "Classic cut pants with a high waist and two pockets.\nFabric: suit fabric (75% viscose, 25% polyester).",
        colors: ["white", "beige", "black"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Classique",
        description: "Pantalon coupe classique avec taille haute et deux poches.\nTissu : tissu de costume (75% viscose, 25% polyester).",
        colors: ["blanc", "beige", "noir"]
      },
      UA: {
        category: "Брюки",
        name: "Класичні брюки",
        description: "Класичний фасон брюк із високою посадкою та двома кишенями.\nТканина: костюмна тканина (75% віскоза, 25% поліестер).",
        colors: ["білий", "бежевий", "чорний"]
      },
      RU: {
        category: "Брюки",
        name: "Классические брюки",
        description: "Классический фасон брюк с высокой посадкой и двумя карманами.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер).",
        colors: ["белый", "бежевый", "чёрный"]
      }
    }
  },  
  {
    id: 91,
    price: 1950,
    isTop: false,
    sku: "98811",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Wrap Palazzo Pants/1.avif",
    images: [
      "/Pants/Wrap Palazzo Pants/2.avif",
      "/Pants/Wrap Palazzo Pants/3.avif",
      "/Pants/Wrap Palazzo Pants/4.avif",
      "/Pants/Wrap Palazzo Pants/5.avif",
      "/Pants/Wrap Palazzo Pants/6.avif",
      "/Pants/Wrap Palazzo Pants/7.avif",
      "/Pants/Wrap Palazzo Pants/8.avif",
      "/Pants/Wrap Palazzo Pants/9.avif",
      "/Pants/Wrap Palazzo Pants/10.avif",
      "/Pants/Wrap Palazzo Pants/11.avif",
      "/Pants/Wrap Palazzo Pants/12.avif",
      "/Pants/Wrap Palazzo Pants/13.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Wrap Palazzo Pants",
        description: "Wrap-style high-waisted palazzo pants with two pockets.\nFabric: suit fabric (75% viscose, 25% polyester).",
        colors: ["denim", "caramel", "olive"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Palazzo Croisé",
        description: "Pantalon palazzo taille haute croisé avec deux poches.\nTissu : tissu de costume (75% viscose, 25% polyester).",
        colors: ["denim", "caramel", "olive"]
      },
      UA: {
        category: "Брюки",
        name: "Брюки на запах",
        description: "Брюки палаццо на запах із високою посадкою та двома кишенями.\nТканина: костюмна тканина (75% віскоза, 25% поліестер).",
        colors: ["джинс", "карамель", "оливка"]
      },
      RU: {
        category: "Брюки",
        name: "Брюки на запах",
        description: "Брюки палаццо на запах с высокой посадкой и двумя карманами.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер).",
        colors: ["джинс", "карамель", "оливка"]
      }
    }
  },  
  {
    id: 90,
    price: 1950,
    isTop: false,
    sku: "98810",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Palazzo Pants/1.avif",
    images: [
      "/Pants/Palazzo Pants/2.avif",
      "/Pants/Palazzo Pants/3.avif",
      "/Pants/Palazzo Pants/4.avif",
      "/Pants/Palazzo Pants/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Palazzo Pants",
        description: "High-waisted palazzo pants with two pockets.\nFabric: suit fabric (75% viscose, 25% polyester).",
        colors: ["black"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Palazzo",
        description: "Pantalon palazzo taille haute avec deux poches.\nTissu : tissu de costume (75% viscose, 25% polyester).",
        colors: ["noir"]
      },
      UA: {
        category: "Брюки",
        name: "Брюки палаццо",
        description: "Брюки палаццо із високою посадкою та двома кишенями.\nТканина: костюмна тканина (75% віскоза, 25% поліестер).",
        colors: ["чорний"]
      },
      RU: {
        category: "Брюки",
        name: "Брюки палаццо",
        description: "Брюки палаццо с высокой посадкой и двумя карманами.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер).",
        colors: ["чёрный"]
      }
    }
  },  
  {
    id: 89,
    price: 1375,
    isTop: false,
    sku: "98809",
    size: "XS S M L XL",
    category: "Sweaters",
    image: "/Sweaters/Knit Vest/1.avif",
    images: [
      "/Sweaters/Knit Vest/2.avif",
      "/Sweaters/Knit Vest/3.avif",
      "/Sweaters/Knit Vest/4.avif",
      "/Sweaters/Knit Vest/5.avif",
      "/Sweaters/Knit Vest/6.avif",
      "/Sweaters/Knit Vest/7.avif",
      "/Sweaters/Knit Vest/8.avif",
      "/Sweaters/Knit Vest/9.avif",
      "/Sweaters/Knit Vest/10.avif",
      "/Sweaters/Knit Vest/11.avif",
      "/Sweaters/Knit Vest/12.avif",
      "/Sweaters/Knit Vest/13.avif",
      "/Sweaters/Knit Vest/14.avif",
      "/Sweaters/Knit Vest/15.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Sweaters",
        name: "Knit Vest",
        description: "Oversized wool vest with a V-neck.\nFabric: knitwear (60% wool, 20% acrylic, 10% viscose, 10% elastane).",
        colors: ["beige", "white", "black"]
      },
      FR: {
        category: "Pulls",
        name: "Gilet Tricoté",
        description: "Gilet en laine oversize avec col en V.\nTissu : tricot (60% laine, 20% acrylique, 10% viscose, 10% élasthanne).",
        colors: ["beige", "blanc", "noir"]
      },
      UA: {
        category: "Светри",
        name: "Трикотажний жилет",
        description: "Oversize вовняний жилет із V-вирізом.\nТканина: трикотаж (60% вовна, 20% акрил, 10% віскоза, 10% еластан).",
        colors: ["бежевий", "білий", "чорний"]
      },
      RU: {
        category: "Свитера",
        name: "Трикотажный жилет",
        description: "Oversize шерстяной жилет с V-вырезом.\nТкань: трикотаж (60% шерсть, 20% акрил, 10% вискоза, 10% эластан).",
        colors: ["бежевый", "белый", "чёрный"]
      }
    }
  },  
  {
    id: 88,
    price: 1500,
    isTop: false,
    sku: "98808",
    size: "XS S M L XL",
    category: "Sweaters",
    image: "/Sweaters/Off-Shoulder Top/1.avif",
    images: [
      "/Sweaters/Off-Shoulder Top/2.avif",
      "/Sweaters/Off-Shoulder Top/3.avif",
      "/Sweaters/Off-Shoulder Top/4.avif",
      "/Sweaters/Off-Shoulder Top/5.avif",
      "/Sweaters/Off-Shoulder Top/6.avif",
      "/Sweaters/Off-Shoulder Top/7.avif",
      "/Sweaters/Off-Shoulder Top/8.avif",
      "/Sweaters/Off-Shoulder Top/9.avif",
      "/Sweaters/Off-Shoulder Top/10.avif",
      "/Sweaters/Off-Shoulder Top/11.avif",
      "/Sweaters/Off-Shoulder Top/12.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Sweaters",
        name: "Off-Shoulder Top",
        description: "Off-shoulder top with sleeve slits.\nFabric: 50% cashmere, 28% polyester, 28% nylon.",
        colors: ["black", "gray", "milk"]
      },
      FR: {
        category: "Pulls",
        name: "Top Épaules Dénudées",
        description: "Top à épaules dénudées avec fentes sur les manches.\nTissu : 50% cachemire, 28% polyester, 28% nylon.",
        colors: ["noir", "gris", "lait"]
      },
      UA: {
        category: "Светри",
        name: "Топ із відкритими плечима",
        description: "Топ із відкритими плечима та розрізами на рукавах.\nТканина: 50% кашемір, 28% поліестер, 28% нейлон.",
        colors: ["чорний", "сірий", "молоко"]
      },
      RU: {
        category: "Свитера",
        name: "Топ с открытыми плечами",
        description: "Топ с открытыми плечами и разрезами на рукавах.\nТкань: 50% кашемир, 28% полиэстер, 28% нейлон.",
        colors: ["чёрный", "серый", "молоко"]
      }
    }
  },  
  {
    id: 87,
    price: 1800,
    isTop: false,
    sku: "98807",
    size: "XS S M L XL",
    category: "Sweaters",
    image: "/Sweaters/Off-Shoulder Sweater/1.avif",
    images: [
      "/Sweaters/Off-Shoulder Sweater/2.avif",
      "/Sweaters/Off-Shoulder Sweater/3.avif",
      "/Sweaters/Off-Shoulder Sweater/4.avif",
     "/Sweaters/Off-Shoulder Sweater/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Sweaters",
        name: "Off-Shoulder Sweater",
        description: "Off-shoulder sweater with asymmetry.\nFabric: 50% cashmere, 28% polyester, 28% nylon.",
        colors: ["milk"]
      },
      FR: {
        category: "Pulls",
        name: "Pull Épaules Dénudées",
        description: "Pull à épaules dénudées avec asymétrie.\nTissu : 50% cachemire, 28% polyester, 28% nylon.",
        colors: ["lait"]
      },
      UA: {
        category: "Светри",
        name: "Джемпер із відкритими плечима",
        description: "Джемпер із відкритими плечима та асиметрією.\nТканина: 50% кашемір, 28% поліестер, 28% нейлон.",
        colors: ["молоко"]
      },
      RU: {
        category: "Свитера",
        name: "Джемпер с открытыми плечами",
        description: "Джемпер с открытыми плечами и асимметрией.\nТкань: 50% кашемир, 28% полиэстер, 28% нейлон.",
        colors: ["молоко"]
      }
    }
  },  
  {
    id: 86,
    price: 1825,
    isTop: false,
    sku: "98806",
    size: "XS S M L XL",
    category: "Tops",
    image: "/Top/Piped Top/1.avif",
    images: [
      "/Top/Piped Top/2.avif",
      "/Top/Piped Top/3.avif",
       "/Tops/Piped Top/4.avif",
       "/Tops/Piped Top/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Tops",
        name: "Piped Top",
        description: "Long-staple 100% cotton muslin. A lightweight and soft-touch fabric.",
        colors: ["milk"]
      },
      FR: {
        category: "Tops",
        name: "Top à Passepoil",
        description: "Mousseline de coton 100% à longues fibres. Un tissu léger et doux au toucher.",
        colors: ["lait"]
      },
      UA: {
        category: "Топи",
        name: "Топ з кантом",
        description: "Довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["молоко"]
      },
      RU: {
        category: "Топы",
        name: "Топ с кантом",
        description: "Долговолокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь ткань.",
        colors: ["молоко"]
      }
    }
  },  
  {
    id: 85,
    price: 2280,
    isTop: false,
    sku: "98805",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Jasmine Shirt/1.avif",
    images: [
      "/Shirts/Jasmine Shirt/2.avif",
      "/Shirts/Jasmine Shirt/3.avif",
      "/Shirts/Jasmine Shirt/4.avif",
       "/Shirts/Jasmine Shirt/5.avif",
       "/Shirts/Jasmine Shirt/6.avif",
       "/Shirts/Jasmine Shirt/7.avif",
       "/Shirts/Jasmine Shirt/8.avif",
       "/Shirts/Jasmine Shirt/9.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Jasmine Shirt",
        description: "Long-staple 100% cotton muslin. A lightweight and soft-touch fabric.",
        colors: ["milk", "mint"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise Jasmine",
        description: "Mousseline de coton 100% à longues fibres. Un tissu léger et doux au toucher.",
        colors: ["lait", "menthe"]
      },
      UA: {
        category: "Сорочки",
        name: "Сорочка «Jasmine»",
        description: "Довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["молоко", "м’ята"]
      },
      RU: {
        category: "Сорочки",
        name: "Рубашка «Jasmine»",
        description: "Долговолокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь ткань.",
        colors: ["молоко", "мята"]
      }
    }
  },  
  {
    id: 84,
    price: 1450,
    isTop: false,
    sku: "98804",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Linen Pants/1.avif",
    images: [
      "/Pants/Linen Pants/2.avif",
      "/Pants/Linen Pants/3.avif",
      // "/Pants/Linen Pants/4.avif",
      // "/Pants/Linen Pants/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Linen Pants",
        description: "100% natural linen pants, providing unrestricted airflow to the body.",
        colors: ["beige"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon en Lin",
        description: "Pantalon en lin 100% naturel, permettant une circulation d'air illimitée vers le corps.",
        colors: ["beige"]
      },
      UA: {
        category: "Брюки",
        name: "Лляні брюки",
        description: "Брюки із 100% натурального льону, вони забезпечують безмежний доступ повітря до тіла.",
        colors: ["бежевий"]
      },
      RU: {
        category: "Брюки",
        name: "Льняные брюки",
        description: "Брюки из 100% натурального льна, обеспечивающие неограниченный доступ воздуха к телу.",
        colors: ["бежевый"]
      }
    }
  },
  
  {
    id: 83,
    price: 1700,
    isTop: false,
    sku: "98803",
    size: "XS S M L XL",
    category: "Tops",
    image: "/Top/Linen Vest/1.avif",
    images: [
      "/Top/Linen Vest/2.avif",
      "/Top/Linen Vest/3.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Tops",
        name: "Linen Vest",
        description: "100% natural linen vest, providing unrestricted airflow to the body.",
        colors: ["beige"]
      },
      FR: {
        category: "Tops",
        name: "Gilet en Lin",
        description: "Gilet en lin 100% naturel, permettant une circulation d'air illimitée vers le corps.",
        colors: ["beige"]
      },
      UA: {
        category: "Топи",
        name: "Лляний жилет",
        description: "Жилет із 100% натурального льону, він забезпечує безмежний доступ повітря до тіла.",
        colors: ["бежевий"]
      },
      RU: {
        category: "Топы",
        name: "Льняной жилет",
        description: "Жилет из 100% натурального льна, обеспечивающий неограниченный доступ воздуха к телу.",
        colors: ["бежевый"]
      }
    }
  },
  
  {
    id: 82,
    price: 3150,
    isTop: false,
    sku: "98802",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Linen Set/1.avif",
    images: [
      "/Costumes/Linen Set/2.avif",
      "/Costumes/Linen Set/3.avif",
      "/Costumes/Linen Set/4.avif",
      "/Costumes/Linen Set/5.avif",
      "/Costumes/Linen Set/6.avif"

    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Linen Set",
        description: "100% natural linen costume, providing unrestricted airflow to the body.",
        colors: ["beige"]
      },
      FR: {
        category: "Costumes",
        name: "Ensemble en Lin",
        description: "Costume en lin 100% naturel, permettant une circulation d'air illimitée vers le corps.",
        colors: ["beige"]
      },
      UA: {
        category: "Костюми",
        name: "Лляний комплект",
        description: "Костюм із 100% натурального льону, він забезпечує безмежний доступ повітря до тіла.",
        colors: ["бежевий"]
      },
      RU: {
        category: "Костюмы",
        name: "Льняной комплект",
        description: "Костюм из 100% натурального льна, обеспечивающий неограниченный доступ воздуха к телу.",
        colors: ["бежевый"]
      }
    }
  },
  

  {
    id: 81,
    price: 1920,
    isTop: false,
    sku: "98801",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Hemp Banana Pants/1.avif",
    images: [
      "/Pants/Hemp Banana Pants/2.avif",
      "/Pants/Hemp Banana Pants/3.avif",
      // "/Pants/Hemp Banana Pants/4.avif",
      // "/Pants/Hemp Banana Pants/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Hemp Banana Pants",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Banane en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Брюки",
        name: "Конопляні брюки банани",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Брюки",
        name: "Конопляные брюки бананы",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  

  {
    id: 80,
    price: 1920,
    isTop: false,
    sku: "98800",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Hemp Palazzo Pants/1.avif",
    images: [
      "/Pants/Hemp Palazzo Pants/2.avif",
      "/Pants/Hemp Palazzo Pants/3.avif",
      // "/Pants/Hemp Palazzo Pants/4.avif",
      // "/Pants/Hemp Palazzo Pants/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Hemp Palazzo Pants",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Palazzo en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Брюки",
        name: "Конопляні брюки палаццо",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Брюки",
        name: "Конопляные брюки палаццо",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  
  {
    id: 79,
    price: 2116,
    isTop: false,
    sku: "98799",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Hemp Shirt/1.avif",
    images: [
      "/Shirts/Hemp Shirt/2.avif",
      "/Shirts/Hemp Shirt/3.avif",
      // "/Shirts/Hemp Shirt/4.avif",
      // "/Shirts/Hemp Shirt/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Hemp Shirt",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Сорочки",
        name: "Конопляна сорочка",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Рубашки",
        name: "Конопляная рубашка",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  
  {
    id: 78,
    price: 1380,
    isTop: false,
    sku: "98798",
    size: "XS S M L XL",
    category: "Tops",
    image: "/Top/Hemp Top/1.avif",
    images: [
      "/Top/Hemp Top/2.avif",
      "/Top/Hemp Top/3.avif",
      // "/Tops/Hemp Top/4.avif",
      // "/Tops/Hemp Top/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Tops",
        name: "Hemp Top",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Tops",
        name: "Top en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Топи",
        name: "Конопляний топ",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Топы",
        name: "Конопляный топ",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  


  {
    id: 77,
    price: 3300,
    isTop: false,
    sku: "98797",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Hemp Set/1.avif",
    images: [
      "/Costumes/Hemp Set/2.avif",
      "/Costumes/Hemp Set/3.avif",
      "/Costumes/Hemp Set/4.avif",
      "/Costumes/Hemp Set/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Hemp Set",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Costumes",
        name: "Ensemble en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Костюми",
        name: "Конопляний комплект",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Костюмы",
        name: "Конопляный комплект",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  
  {
    id: 76,
    price: 4030,
    isTop: false,
    sku: "98796",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Hemp Costume/1.avif",
    images: [
      "/Costumes/Hemp Costume/2.avif",
      "/Costumes/Hemp Costume/3.avif",
      "/Costumes/Hemp Costume/4.avif",
      "/Costumes/Hemp Costume/5.avif",
      "/Costumes/Hemp Costume/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Hemp Costume",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Costumes",
        name: "Costume en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Костюми",
        name: "Конопляний костюм",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Костюмы",
        name: "Конопляный костюм",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
  },
  

  {
    id: 75,
    price: 2760,
    isTop: false,
    sku: "98795",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Hemp Jumpsuit/1.avif",
    images: [
      "/Costumes/Hemp Jumpsuit/2.avif",
      "/Costumes/Hemp Jumpsuit/3.avif",
      "/Costumes/Hemp Jumpsuit/4.avif",
      "/Costumes/Hemp Jumpsuit/5.avif",
      "/Costumes/Hemp Jumpsuit/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Hemp Jumpsuit",
        description: "Double-layer muslin, 30% hemp, 70% cotton. One of the most eco-friendly fabrics as it is grown without pesticides.",
        colors: ["hemp"]
      },
      FR: {
        category: "Costumes",
        name: "Combinaison en Chanvre",
        description: "Mousseline double couche, 30% chanvre, 70% coton. L'un des tissus les plus écologiques car il est cultivé sans pesticides.",
        colors: ["chanvre"]
      },
      UA: {
        category: "Костюми",
        name: "Конопляний комбінезон",
        description: "Тканина: двошаровий муслін, 30% коноплі, 70% бавовни. Це одна з найекологічніших тканин, бо виращується без пестицидів.",
        colors: ["конопляний"]
      },
      RU: {
        category: "Костюмы",
        name: "Конопляный комбинезон",
        description: "Ткань: двухслойный муслин, 30% конопли, 70% хлопка. Одна из самых экологичных тканей, так как выращивается без пестицидов.",
        colors: ["конопляный"]
      }
    }
},

  {
    id: 74,
    price: 1900,
    isTop: false,
    sku: "98794",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Muslin Palazzo Pants/1.avif",
    images: [
      "/Pants/Muslin Palazzo Pants/2.avif",
      "/Pants/Muslin Palazzo Pants/3.avif",
      "/Pants/Muslin Palazzo Pants/4.avif",
      "/Pants/Muslin Palazzo Pants/5.avif",
      "/Pants/Muslin Palazzo Pants/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Muslin Palazzo Pants",
        description: "Long-fiber muslin made from 100% cotton. Light and soft to the touch.",
        colors: ["black", "milk"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon Palazzo en Mousseline",
        description: "Mousseline à longues fibres 100% coton. Léger et doux au toucher.",
        colors: ["noir", "lait"]
      },
      UA: {
        category: "Брюки",
        name: "Муслінові брюки палаццо",
        description: "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["чорний", "молоко"]
      },
      RU: {
        category: "Брюки",
        name: "Муслиновые брюки палаццо",
        description: "Ткань: длинноволокнистый муслин из 100% хлопка. Легкий и мягкий на ощупь.",
        colors: ["черный", "молоко"]
      }
    }
},

  

  {
    id: 73,
    price: 2024,
    isTop: false,
    sku: "98793",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Muslin Cardigan/1.avif",
    images: [
      "/Shirts/Muslin Cardigan/2.avif",
      "/Shirts/Muslin Cardigan/3.avif",
      "/Shirts/Muslin Cardigan/4.avif",
      "/Shirts/Muslin Cardigan/5.avif",
      "/Shirts/Muslin Cardigan/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Muslin Cardigan",
        description: "Long-fiber muslin made from 100% cotton. Light and soft to the touch.",
        colors: ["black", "milk"]
      },
      FR: {
        category: "Chemises",
        name: "Cardigan en Mousseline",
        description: "Mousseline à longues fibres 100% coton. Léger et doux au toucher.",
        colors: ["noir", "lait"]
      },
      UA: {
        category: "Сорочки",
        name: "Мусліновий кардиган",
        description: "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["чорний", "молоко"]
      },
      RU: {
        category: "Рубашки",
        name: "Муслиновый кардиган",
        description: "Ткань: длинноволокнистый муслин из 100% хлопка. Легкий и мягкий на ощупь.",
        colors: ["черный", "молоко"]
      }
    }
},


  {
    id: 72,
    price: 1380,
    isTop: false,
    sku: "98792",
    size: "XS S M L XL",
    category: "Tops",
    image: "/Top/Muslin Top/1.avif",
    images: [
      "/Top/Muslin Top/2.avif",
      "/Top/Muslin Top/3.avif",
      "/Top/Muslin Top/4.avif",
      "/Top/Muslin Top/5.avif",
      "/Top/Muslin Top/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Tops",
        name: "Muslin Top",
        description: "Long-fiber muslin made from 100% cotton. Light and soft to the touch.",
        colors: ["milk", "black"]
      },
      FR: {
        category: "Tops",
        name: "Top en Mousseline",
        description: "Mousseline à longues fibres 100% coton. Léger et doux au toucher.",
        colors: ["lait", "noir"]
      },
      UA: {
        category: "Топи",
        name: "Мусліновий топ",
        description: "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["молоко", "чорний"]
      },
      RU: {
        category: "Топы",
        name: "Муслиновый топ",
        description: "Ткань: длинноволокнистый муслин из 100% хлопка. Легкий и мягкий на ощупь.",
        colors: ["молоко", "черный"]
      }
    }
},

  {
    id: 71,
    price: 5300,
    isTop: false,
    sku: "98791",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Muslin 3-Piece/1.avif",
    images: [
      "/Costumes/Muslin 3-Piece/2.avif",
      "/Costumes/Muslin 3-Piece/3.avif",
      "/Costumes/Muslin 3-Piece/4.avif",
      "/Costumes/Muslin 3-Piece/5.avif",
      "/Costumes/Muslin 3-Piece/6.avif",
      "/Costumes/Muslin 3-Piece/7.avif",
      "/Costumes/Muslin 3-Piece/8.avif",
      "/Costumes/Muslin 3-Piece/9.avif",
      "/Costumes/Muslin 3-Piece/10.avif",
      "/Costumes/Muslin 3-Piece/11.avif",
      "/Costumes/Muslin 3-Piece/12.avif",
      "/Costumes/Muslin 3-Piece/13.avif",
      "/Costumes/Muslin 3-Piece/14.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Muslin 3-Piece Costume",
        description: "Long-fiber muslin made from 100% cotton. Light and soft to the touch.",
        colors: ["milk", "black", "black-white"]
      },
      FR: {
        category: "Costumes",
        name: "Costume 3 pièces en Mousseline",
        description: "Mousseline à longues fibres 100% coton. Léger et doux au toucher.",
        colors: ["lait", "noir", "noir-blanc"]
      },
      UA: {
        category: "Костюми",
        name: "Мусліновий костюм 3-ка",
        description: "Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        colors: ["молоко", "чорний", "чорно-білий"]
      },
      RU: {
        category: "Костюмы",
        name: "Муслиновый костюм 3-ка",
        description: "Ткань: длинноволокнистый муслин из 100% хлопка. Легкий и мягкий на ощупь.",
        colors: ["молоко", "черный", "черно-белый"]
      }
    }
},

  {
    id: 70,
    price: 3920,
    isTop: false,
    sku: "98790",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Maribella Dress/1.avif",
    images: [
      "/Dress/Maribella Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Maribella Dress/IMG_2330.mp4",
        poster: "/Dress/Maribella Dress/1.avif"
      },
      "/Dress/Maribella Dress/3.avif",
      "/Dress/Maribella Dress/4.avif",
      "/Dress/Maribella Dress/5.avif",
      "/Dress/Maribella Dress/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Maribella Dress",
        description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
        colors: ["blue"]
      },
      FR: {
        category: "Robes",
        name: "Robe Maribella en Lin",
        description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
        colors: ["bleu"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Maribella\"",
        description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
        colors: ["синій"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Maribella\"",
        description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
        colors: ["синий"]
      }
    }
},


  {
    id: 69,
    price: 2270,
    isTop: false,
    sku: "98789",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Linen Sundress/1.avif",
    images: [
      "/Dress/Linen Sundress/2.avif",
      "/Dress/Linen Sundress/3.avif",
      "/Dress/Linen Sundress/4.avif",
      "/Dress/Linen Sundress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Linen Sundress",
        description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
        colors: ["blue"]
      },
      FR: {
        category: "Robes",
        name: "Robe Sundress en Lin",
        description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
        colors: ["bleu"]
      },
      UA: {
        category: "Сукні",
        name: "Сарафан лляний",
        description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
        colors: ["синій"]
      },
      RU: {
        category: "Платья",
        name: "Льняной сарафан",
        description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
        colors: ["синий"]
      }
    }
},


  {
    id: 68,
    price: 3920,
    isTop: true,
    sku: "98788",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Linen Maxi Dress/1.avif",
    images: [
      "/Dress/Linen Maxi Dress/2.avif",
      "/Dress/Linen Maxi Dress/3.avif",
      "/Dress/Linen Maxi Dress/4.avif",
      "/Dress/Linen Maxi Dress/5.avif",
      "/Dress/Linen Maxi Dress/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Linen Maxi Dress",
        description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
        colors: ["blue"]
      },
      FR: {
        category: "Robes",
        name: "Robe Maxi en Lin",
        description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
        colors: ["bleu"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня лляна максі",
        description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
        colors: ["синій"]
      },
      RU: {
        category: "Платья",
        name: "Льняное макси платье",
        description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
        colors: ["синий"]
      }
    }
},


  {
    id: 67,
    price: 2100,
    isTop: false,
    sku: "98787",
    size: "XS S M L XL",
    category: "Pants",
    image: "/Pants/Cotton Pants/1.avif",
    images: [
      "/Pants/Cotton Pants/2.avif",
      "/Pants/Cotton Pants/3.avif",
      "/Pants/Cotton Pants/4.avif",
      "/Pants/Cotton Pants/5.avif",
      "/Pants/Cotton Pants/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Pants",
        name: "Cotton Pants",
        description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
        colors: ["blue", "milk"]
      },
      FR: {
        category: "Pantalons",
        name: "Pantalon en Coton",
        description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
        colors: ["bleu", "lait"]
      },
      UA: {
        category: "Брюки",
        name: "Брюки бавовняні",
        description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
        colors: ["синій", "молоко"]
      },
      RU: {
        category: "Брюки",
        name: "Хлопковые брюки",
        description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
        colors: ["синий", "молоко"]
      }
    }
},


  {
    id: 66,
    price: 2320,
    isTop: false,
    sku: "98786",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Cotton Shirt/1.avif",
    images: [
      "/Shirts/Cotton Shirt/2.avif",
      "/Shirts/Cotton Shirt/3.avif",
      "/Shirts/Cotton Shirt/4.avif",
      "/Shirts/Cotton Shirt/5.avif",
      "/Shirts/Cotton Shirt/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Cotton Shirt",
        description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
        colors: ["milk", "blue"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise en Coton",
        description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
        colors: ["lait", "bleu"]
      },
      UA: {
        category: "Сорочки",
        name: "Сорочка бавовняна",
        description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
        colors: ["молоко", "синій"]
      },
      RU: {
        category: "Рубашки",
        name: "Хлопковая рубашка",
        description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
        colors: ["молоко", "синий"]
      }
    }
},


  {
    id: 65,
    price: 4420,
    isTop: true,
    sku: "98785",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Cotton Costume/1.avif",
    images: [
      "/Costumes/Cotton Costume/2.avif",
      {
        type: "video",
        src: "/Costumes/Cotton Costume/IMG_7202.mp4",
        poster: "/Costumes/Cotton Costume/1.avif"
      },
      "/Costumes/Cotton Costume/3.avif",
      "/Costumes/Cotton Costume/4.avif",
      "/Costumes/Cotton Costume/5.avif",
      "/Costumes/Cotton Costume/6.avif",
      "/Costumes/Cotton Costume/7.avif",
      "/Costumes/Cotton Costume/8.avif",
      "/Costumes/Cotton Costume/9.avif",
      "/Costumes/Cotton Costume/10.avif",
      "/Costumes/Cotton Costume/11.avif",

    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Cotton Costume",
        description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
        colors: ["blue", "milk"]
      },
      FR: {
        category: "Costumes",
        name: "Costume en Coton",
        description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
        colors: ["bleu", "lait"]
      },
      UA: {
        category: "Костюми",
        name: "Костюм бавовняний",
        description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
        colors: ["синій", "молоко"]
      },
      RU: {
        category: "Костюмы",
        name: "Хлопковый костюм",
        description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
        colors: ["синий", "молоко"]
      }
    }
},


  {
    id: 64,
    price: 3160,
    isTop: false,
    sku: "98784",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Linen Mini Dress/1.avif",
    images: [
      "/Dress/Linen Mini Dress/2.avif",
      "/Dress/Linen Mini Dress/3.avif",
      "/Dress/Linen Mini Dress/4.avif",
      "/Dress/Linen Mini Dress/5.avif",
      "/Dress/Linen Mini Dress/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Linen Mini Dress",
        description: "Imitation of washed linen from cotton, sourced from a French fashion house in a very limited quantity. Fabric: 50% linen, 50% cotton.",
        color: "blue",
        colors: ["blue"]
      },
      FR: {
        category: "Robes",
        name: "Robe Mini en Lin",
        description: "Imitation de lin lavé en coton, provenant d'une maison de mode française en quantité très limitée. Tissu : 50% lin, 50% coton.",
        color: "bleu",
        colors: ["bleu"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня лляна міні",
        description: "Імітація вареного льону з бавовни з французького будинку моди в дуже обмеженій кількості. Тканина: 50% льон, 50% бавовна.",
        color: "синій",
        colors: ["синій"]
      },
      RU: {
        category: "Платья",
        name: "Льняное мини-платье",
        description: "Имитация вареного льна из хлопка из французского дома моды в очень ограниченном количестве. Ткань: 50% лён, 50% хлопок.",
        color: "синий",
        colors: ["синий"]
      }
    }
},

  {
    id: 63,
    price: 2024,
    isTop: false,
    sku: "98784",
    size: "XS S M L XL",
    category: "Shirts",
    image: "/Shirts/Muslin Shirt/1.avif",
    images: [
      "/Shirts/Muslin Shirt/2.avif",
      "/Shirts/Muslin Shirt/3.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Shirts",
        name: "Muslin Shirt",
        description: "Muslin shirt with adjustable drawstring sleeves. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Chemises",
        name: "Chemise en Mousseline",
        description: "Chemise en mousseline avec manches à cordon de serrage réglable. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Сорочки",
        name: "Муслінова сорочка",
        description: "Муслінова сорочка із шнурком на рукавах, який регулюється. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко"]
      },
      RU: {
        category: "Рубашки",
        name: "Муслиновая рубашка",
        description: "Муслиновая рубашка с регулируемым шнурком на рукавах. Ткань: длинноволокнистый муслин, 100% хлопок. Легкий и мягкий на ощупь.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
},


  {
    id: 62,
    price: 3924,
    isTop: false,
    sku: "98783",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Muslin Costume/1.avif",
    images: [
      "/Costumes/Muslin Costume/2.avif",
     "/Costumes/Muslin Costume/3.avif",
     "/Costumes/Muslin Costume/4.avif",
     "/Costumes/Muslin Costume/5.avif",
     "/Costumes/Muslin Costume/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Muslin Costume",
        description: "Muslin suit: shirt with adjustable drawstring sleeves + elastic waist pants. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Costumes",
        name: "Costume en Mousseline",
        description: "Costume en mousseline : chemise avec manches à cordon de serrage réglable + pantalon à taille élastique. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Костюми",
        name: "Мусліновий костюм",
        description: "Мусліновий костюм: сорочка із шнурком на рукавах, який регулюється + штани на резинці. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко"]
      },
      RU: {
        category: "Костюмы",
        name: "Муслиновый костюм",
        description: "Муслиновый костюм: рубашка с регулируемым шнурком на рукавах + брюки на резинке. Ткань: длинноволокнистый муслин, 100% хлопок. Легкий и мягкий на ощупь.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
},

  {
    id: 61,
    price: 3300,
    isTop: false,
    sku: "98782",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Veronica Dress/1.avif",
    images: [
      "/Dress/Veronica Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Veronica Dress/IMG_8347.mp4",
        poster: "/Dress/Veronica Dress/1.avif"
      },
      "/Dress/Veronica Dress/3.avif",
      "/Dress/Veronica Dress/4.avif",
      "/Dress/Veronica Dress/5.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Veronica Dress",
        description: "Fabric: Composition: 95% cotton, 5% elastane. Broderie - a light, mostly solid-colored cotton fabric with characteristic lace embroidery. The fabric is natural and breathable, making the dress very comfortable.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Veronica",
        description: "Tissu : Composition : 95% coton, 5% élasthanne. La broderie - un tissu en coton léger, principalement uni, avec une broderie en dentelle caractéristique. Le tissu est naturel et respirant, rendant la robe très confortable.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Veronica\"",
        description: "Тканина: Склад: 95% бавовна, 5% еластан. Прошва - легка, переважно однотонна, бавовняна тканина з характерною мереживною вишивкою. Тканина відноситься до натуральних і дихаючих матеріалів, за рахунок чого сукня буде дуже комфортною.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
},


  {
    id: 60,
    price: 3220,
    isTop: false,
    sku: "98781",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Muslin Sundress/1.avif",
    images: [
      "/Dress/Muslin Sundress/2.avif",
      "/Dress/Muslin Sundress/3.avif",
      "/Dress/Muslin Sundress/4.avif",
      "/Dress/Muslin Sundress/5.avif",
      "/Dress/Muslin Sundress/6.avif",
      "/Dress/Muslin Sundress/7.avif",
      "/Dress/Muslin Sundress/8.avif",
      "/Dress/Muslin Sundress/9.avif",
      "/Dress/Muslin Sundress/10.avif",
      "/Dress/Muslin Sundress/11.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Muslin Sundress",
        description: "Light wrap midi sundress with a patch pocket and belt. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "marengo",
        colors: ["marengo", "burgundy"]
      },
      FR: {
        category: "Robes",
        name: "Robe Muslin",
        description: "Robe midi portefeuille légère avec une poche plaquée et une ceinture. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "marengo",
        colors: ["marengo", "bordeaux"]
      },
      UA: {
        category: "Сукні",
        name: "Мусліновий сарафан",
        description: "Легкий сарафан на запах міді довжини із накладною кишенею та поясом. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "маренго",
        colors: ["маренго", "бордо"]
      },
      RU: {
        category: "Платья",
        name: "Муслиновый сарафан",
        description: "Лёгкий миди-сарафан на запах с накладным карманом и поясом. Ткань: длинноволокнистый муслин, 100% хлопок. Лёгкий и мягкий на ощупь.",
        color: "маренго",
        colors: ["маренго", "бордо"]
      }
    }
},


  {
    id: 59,
    price: 3565,
    isTop: false,
    sku: "98780",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Nature Dress/1.avif",
    images: [
      "/Dress/Nature Dress/2.avif",
      "/Dress/Nature Dress/3.avif",
      {
        type: "video",
        src: "/Dress/Nature Dress/IMG_6723.mp4",
        poster: "/Dress/Nature Dress/1.avif"
      },
      "/Dress/Nature Dress/4.avif",
      "/Dress/Nature Dress/5.avif",
      "/Dress/Nature Dress/6.avif",
      "/Dress/Nature Dress/7.avif",
      "/Dress/Nature Dress/8.avif",
      "/Dress/Nature Dress/9.avif",
      "/Dress/Nature Dress/10.avif",
      "/Dress/Nature Dress/11.avif",
      "/Dress/Nature Dress/12.avif",
     
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Nature Dress",
        description: "Oversized maxi dress with long sleeves and a round neckline. Features decorative buttons and two pockets. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "burgundy",
        colors: ["burgundy", "milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Nature",
        description: "Robe maxi oversize avec manches longues et encolure ronde. Boutons décoratifs et deux poches. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "bordeaux",
        colors: ["bordeaux", "lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Nature\"",
        description: "Оверсайз сукня максі довжини із довгим рукавом та округлим вирізом. Має декоративні ґудзики та дві кишені. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "бордо",
        colors: ["бордо", "молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Nature\"",
        description: "Оверсайз макси-платье с длинными рукавами и круглым вырезом. Декоративные пуговицы и два кармана. Ткань: длинноволокнистый муслин, 100% хлопок. Легкое и мягкое на ощупь.",
        color: "бордо",
        colors: ["бордо", "молоко"]
      }
    }
},

  {
    id: 58,
    price: 3565,
    isTop: false,
    sku: "98779",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Freedom Dress/1.avif",
    images: [
      "/Dress/Freedom Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Freedom Dress/IMG_6714.mp4",
        poster: "/Dress/Freedom Dress/1.avif"
      },
      "/Dress/Freedom Dress/3.avif",
      "/Dress/Freedom Dress/4.avif",
      "/Dress/Freedom Dress/5.avif",
      "/Dress/Freedom Dress/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Freedom Dress",
        description: "Layered loose-fitting maxi dress with long sleeves. Features ruffle details along the entire dress. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "burgundy",
        colors: ["burgundy", "milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Freedom",
        description: "Robe maxi ample à plusieurs couches avec des manches longues. Détails de volants le long de toute la robe. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "bordeaux",
        colors: ["bordeaux", "lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Freedom\"",
        description: "Багатошарова сукня вільного крою, має максі довжину із довгим рукавом. Деталі у вигляді рюш вздовж всієї сукні. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "бордо",
        colors: ["бордо", "молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Freedom\"",
        description: "Многослойное свободное макси-платье с длинными рукавами. Детали в виде рюшек по всей длине платья. Ткань: длинноволокнистый муслин, 100% хлопок. Легкое и мягкое на ощупь.",
        color: "бордо",
        colors: ["бордо", "молоко"]
      }
    }
},

  
  {
    id: 57,
    price: 3565,
    isTop: false,
    sku: "98778",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Valencia Dress/1.avif",
    images: [
      "/Dress/Valencia Dress/2.avif",
      "/Dress/Valencia Dress/3.avif",
      "/Dress/Valencia Dress/4.avif",
      "/Dress/Valencia Dress/5.avif",
      "/Dress/Valencia Dress/6.avif"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Valencia Dress",
        description: "Layered maxi dress with tie straps and a knot detail at the chest. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "powder",
        colors: ["powder"]
      },
      FR: {
        category: "Robes",
        name: "Robe Valencia",
        description: "Robe maxi à plusieurs couches avec des bretelles à nouer et un détail de nœud sur la poitrine. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "poudre",
        colors: ["poudre"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Valencia\"",
        description: "Багатошарова сукня максі довжини із завʼязками на бретелях. Деталі у вигляді вузла на грудях. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "пудра",
        colors: ["пудра"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Valencia\"",
        description: "Многослойное макси-платье с завязками на бретелях и узлом на груди. Ткань: длинноволокнистый муслин, 100% хлопок. Легкое и мягкое на ощупь.",
        color: "пудра",
        colors: ["пудра"]
      }
    }
},

  {
    id: 56,
    price: 3565,
    isTop: false,
    sku: "98777",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Ella Dress/1.avif",
    images: [
      "/Dress/Ella Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Ella Dress/IMG_6709.mp4",
        poster: "/Dress/Ella Dress/1.avif"
      },
      "/Dress/Ella Dress/3.avif",
      "/Dress/Ella Dress/4.avif",
      "/Dress/Ella Dress/5.avif",
      "/Dress/Ella Dress/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Ella Dress",
        description: "Asymmetrical dress with short sleeves and delicate lace inserts. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "marengo",
        colors: ["marengo"]
      },
      FR: {
        category: "Robes",
        name: "Robe Ella",
        description: "Robe asymétrique avec manches courtes et inserts en dentelle délicate. Tissu : mousseline à longues fibres, 100% coton. Léger et doux au toucher.",
        color: "marengo",
        colors: ["marengo"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Ella\"",
        description: "Сукня асиметричної довжина із вкороченим рукавчиком та вставками із ніжного мережива. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "маренго",
        colors: ["маренго"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Ella\"",
        description: "Асимметричное платье с укороченными рукавами и вставками из нежного кружева. Ткань: длинноволокнистый муслин, 100% хлопок. Легкое и мягкое на ощупь.",
        color: "маренго",
        colors: ["маренго"]
      }
    }
},

  {
    id: 55,
    price: 3220,
    isTop: false,
    sku: "98776",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Provence Dress/1.avif",
    images: [
      "/Dress/Provence Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Provence Dress/IMG_928.mp4",
        poster: "/Dress/Provence Dress/1.avif"
      },
      "/Dress/Provence Dress/3.avif",
      "/Dress/Provence Dress/4.avif",
      "/Dress/Provence Dress/5.avif",
      "/Dress/Provence Dress/6.avif",
      "/Dress/Provence Dress/7.avif",
      "/Dress/Provence Dress/8.avif",
      "/Dress/Provence Dress/9.avif",
      "/Dress/Provence Dress/10.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Dress 'Provence'",
        description: "A mini-length dress with long sleeves and ruffles at the neckline. The skirt features a delicate flounce. Fabric: long-fiber muslin made of 100% cotton. A light and soft fabric to the touch.",
        color: "milk",
        colors: ["milk", "powder"]
      },
      FR: {
        category: "Robes",
        name: "Robe « Provence »",
        description: "Robe courte avec manches longues et volants au décolleté. La jupe est ornée d’un volant délicat. Tissu : mousseline à longues fibres en 100 % coton. Un tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait", "poudre"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Provence\"",
        description: "Сукня міні довжини із довгим рукавом та оброками на вирізі. На спідниці є ніжний волан. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко", "пудра"]
      },
      RU: {
        category: "Платья",
        name: "Платье «Прованс»",
        description: "Платье мини-длины с длинными рукавами и оборками на вырезе. На юбке — нежный волан. Ткань: муслин из длинноволокнистого 100% хлопка. Лёгкая и мягкая на ощупь ткань.",
        color: "молочный",
        colors: ["молочный", "пудра"]
      }
      
    }
},

  
  {
    id: 54,
    price: 3220,
    isTop: false,
    sku: "98775",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Breeze Dress/1.avif",
    images: [
      "/Dress/Breeze Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Breeze Dress/IMG_732.mp4",
        poster: "/Dress/Breeze Dress/1.avif"
      },
      "/Dress/Breeze Dress/3.avif",
      "/Dress/Breeze Dress/4.avif",
      "/Dress/Breeze Dress/5.avif",
      "/Dress/Breeze Dress/6.avif",
      "/Dress/Breeze Dress/7.avif",
      "/Dress/Breeze Dress/8.avif",
      "/Dress/Breeze Dress/9.avif",
      "/Dress/Breeze Dress/10.avif",
      "/Dress/Breeze Dress/11.avif",
      "/Dress/Breeze Dress/12.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Breeze Dress",
        description: "Oversized asymmetrical dress with long sleeves and a V-neck. Features ruffle details along the sleeves and dress. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "fuchsia",
        colors: ["fuchsia", "milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Breeze",
        description: "Robe oversize asymétrique avec manches longues et col en V. Détails de volants le long des manches et de la robe. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "fuchsia",
        colors: ["fuchsia", "lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня «Breeze»",
        description: "Оверсайз сукня асиметричної довжини із довгим рукавом та V-вирізом. На рукавчиках та вздовж сукні деталі у вигляді рюш. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "фуксія",
        colors: ["фуксія", "молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Breeze\"",
        description: "Оверсайз платье асимметричной длины с длинными рукавами и V-образным вырезом. Детали в виде рюшек на рукавах и вдоль платья. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "фуксия",
        colors: ["фуксия", "молоко"]
      }
    }
},


  {
    id: 53,
    price: 3920,
    isTop: false,
    sku: "98774",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Teresa Dress/1.avif",
    images: [
      "/Dress/Teresa Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Teresa Dress/IMG_6729.mp4",
        poster: "/Dress/Teresa Dress/1.avif"
      },
      "/Dress/Teresa Dress/3.avif",
      "/Dress/Teresa Dress/4.avif",
      "/Dress/Teresa Dress/5.avif",
      "/Dress/Teresa Dress/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Teresa Dress",
        description: "Maxi dress that accentuates the waist with a belt. Features handmade lace, a V-neck, and buttons along the entire length. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Teresa",
        description: "Robe maxi qui souligne la taille avec une ceinture. Dispose de dentelle faite main, d'un col en V et de boutons sur toute la longueur. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Teresa\"",
        description: "Сукня максі, яка підкреслює талію завдяки поясу. Має мереживо ручної роботи, V-виріз та ґудзики по всій довжині. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Teresa\"",
        description: "Макси-платье, подчеркивающее талию поясом. Имеет ручное кружево, V-образный вырез и пуговицы по всей длине. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
},


  {
    id: 52,
    price: 3920,
    isTop: false,
    sku: "98773",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Maria Dress/1.avif",
    images: [
      "/Dress/Maria Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Maria Dress/IMG_2328.mp4",
        poster: "/Dress/Maria Dress/1.avif"
      },
      "/Dress/Maria Dress/3.avif",
      "/Dress/Maria Dress/4.avif",
      "/Dress/Maria Dress/5.avif",
      "/Dress/Maria Dress/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Maria Dress",
        description: "Maxi dress with handmade lace, lantern sleeves, and a slit on the leg. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Maria",
        description: "Robe maxi avec dentelle faite main, manches lanternes et fente sur la jambe. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня \"Maria\"",
        description: "Сукня максі із мереживом ручної роботи, рукавами ліхтариками та розрізом на ніжці. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье \"Maria\"",
        description: "Макси-платье с ручным кружевом, рукавами-фонариками и разрезом на ноге. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
},

  {
    id: 51,
    price: 3920,
    isTop: false,
    sku: "98772",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Flower Dress/1.avif",
    images: [
      "/Dress/Flower Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Flower Dress/IMG_3889.mp4",
        poster: "/Dress/Flower Dress/1.avif"
      },
      "/Dress/Flower Dress/3.avif",
      "/Dress/Flower Dress/4.avif",
      "/Dress/Flower Dress/5.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Flower Dress",
        description: "Maxi dress with lantern sleeves. Stunning details in the form of decorative flowers and ethnic ruffles throughout. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe à fleurs",
        description: "Robe maxi avec manches lanternes. Détails époustouflants sous forme de fleurs décoratives et de volants ethniques sur toute la longueur. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня з квітами",
        description: "Сукня максі із рукавами ліхтариками. Неймовірні деталі у вигляді декоративних квітів та етнічних рюш по всій довжині. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье с цветами",
        description: "Макси-платье с рукавами-фонариками. Невероятные детали в виде декоративных цветов и этнических рюш по всей длине. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
},


  {
    id: 50,
    price: 3040,
    isTop: false,
    sku: "98771",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Pinky Dress/1.avif",
    images: [
      "/Dress/Pinky Dress/2.avif",
      "/Dress/Pinky Dress/3.avif",
      "/Dress/Pinky Dress/4.avif",
      "/Dress/Pinky Dress/5.avif",
      "/Dress/Pinky Dress/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Pinky Dress",
        description: "Oversized straight-cut dress with a high waist and wide sleeves. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "powder",
        colors: ["powder"]
      },
      FR: {
        category: "Robes",
        name: "Robe Pinky",
        description: "Robe oversize à coupe droite avec taille haute et manches larges. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "poudre",
        colors: ["poudre"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня «Pinky»",
        description: "Оверсайз сукня прямого крою із високою талією та широкими рукавами. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "пудра",
        colors: ["пудра"]
      },
      RU: {
        category: "Платья",
        name: "Платье «Pinky»",
        description: "Оверсайз платье прямого кроя с высокой талией и широкими рукавами. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "пудра",
        colors: ["пудра"]
      }
    }
  },


  {
    id: 49,
    price: 3170,
    isTop: true,
    sku: "98770",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Ruffle Dress/1.avif",
    images: [
      "/Dress/Ruffle Dress/2.avif",
      {
        type: "video",
        src: "/Dress/Ruffle Dress/IMG_059.mp4",
        poster: "/Dress/Ruffle Dress/1.avif"
      },
      "/Dress/Ruffle Dress/3.avif",
      // "/Dress/Ruffle Dress/4.avif",
      "/Dress/Ruffle Dress/5.avif",
      "/Dress/Ruffle Dress/6.avif",
      "/Dress/Ruffle Dress/7.avif",
      "/Dress/Ruffle Dress/8.avif",
      "/Dress/Ruffle Dress/9.avif",
      "/Dress/Ruffle Dress/10.avif",
      "/Dress/Ruffle Dress/11.avif",
      "/Dress/Ruffle Dress/12.avif",
      "/Dress/Ruffle Dress/13.avif",
      "/Dress/Ruffle Dress/14.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Ruffle Dress",
        description: "Midi-length dress with delicate ruffles and a slit on the leg. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "powder",
        colors: ["powder", "milk", "black", "water color"]
      },
      FR: {
        category: "Robes",
        name: "Robe à volants",
        description: "Robe midi avec de délicats volants et une fente sur la jambe. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "poudre",
        colors: ["poudre", "lait", "noir", "couleur de l'eau"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня з воланами",
        description: "Сукня міді довжини із ніжними воланчиками та розрізом на ніжці. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "пудра",
        colors: ["пудра", "молоко", "чорний", "колір води"]
      },
      RU: {
        category: "Платья",
        name: "Платье с воланами",
        description: "Платье миди с нежными воланами и разрезом на ноге. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "пудра",
        colors: ["пудра", "молоко", "черный", "цвет воды"]
      }
    }
  },
  

  {
    id: 48,
    price: 3415,
    isTop: false,
    sku: "98769",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Wrap Dress/1.avif",
    images: [
      "/Dress/Wrap Dress/2.avif",
      "/Dress/Wrap Dress/3.avif",
      "/Dress/Wrap Dress/4.avif",
      "/Dress/Wrap Dress/5.avif",
      
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Wrap Dress",
        description: "Midi dress with lantern sleeves in a wrap style. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "water color",
        colors: ["water color"]
      },
      FR: {
        category: "Robes",
        name: "Robe portefeuille",
        description: "Robe midi avec manches lanterne dans un style portefeuille. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "couleur de l'eau",
        colors: ["couleur de l'eau"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня на затин",
        description: "Сукня міді із рукавами ліхтариками фасону на затин. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "колір води",
        colors: ["колір води"]
      },
      RU: {
        category: "Платья",
        name: "Платье на запах",
        description: "Платье миди с рукавами-фонариками в стиле на запах. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "цвет воды",
        colors: ["цвет воды"]
      }
    }
  },
  

  {
    id: 47,
    price: 2855,
    isTop: true,
    sku: "98768",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Muslin/1.avif",
    images: [
      "/Dress/Muslin/2.avif",
      {
        type: "video",
        src: "/Dress/Muslin/IMG_4392.mp4",
        poster: "/Dress/Muslin/1.avif"
      },
      "/Dress/Muslin/3.avif",
      "/Dress/Muslin/4.avif",
      "/Dress/Muslin/5.avif",
      "/Dress/Muslin/6.avif",
      "/Dress/Muslin/7.avif",
      "/Dress/Muslin/8.avif",
      "/Dress/Muslin/9.avif",
      "/Dress/Muslin/10.avif",
      "/Dress/Muslin/11.avif",
      "/Dress/Muslin/12.avif",
      "/Dress/Muslin/13.avif",
      "/Dress/Muslin/14.avif",
      "/Dress/Muslin/15.avif",
      "/Dress/Muslin/16.avif",
      "/Dress/Muslin/17.avif",
      "/Dress/Muslin/18.avif",
      "/Dress/Muslin/19.avif",
      "/Dress/Muslin/20.avif",
      "/Dress/Muslin/21.avif",
      "/Dress/Muslin/22.avif",
      "/Dress/Muslin/23.avif",
      "/Dress/Muslin/24.avif",
      "/Dress/Muslin/25.avif",
      "/Dress/Muslin/26.avif",
      "/Dress/Muslin/27.avif",
      "/Dress/Muslin/28.avif",
      "/Dress/Muslin/29.avif",



    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Muslin Dress",
        description: "Midi dress with short sleeves. Features buttons along the entire length, allowing for adjustable slit. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "eucalyptus",
        colors: ["eucalyptus", "milk", "powder", "water color", "mint"]
      },
      FR: {
        category: "Robes",
        name: "Robe en mousseline",
        description: "Robe midi avec manches courtes. Dotée de boutons sur toute la longueur, permettant d'ajuster la fente. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "eucalyptus",
        colors: ["eucalyptus", "lait", "poudre", "couleur de l'eau", "menthe"]
      },
      UA: {
        category: "Сукні",
        name: "Муслінова сукня",
        description: "Сукня міді із короткими рукавами. Має ґудзики по всій довжині, якими можна регулювати розріз. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "евкаліпт",
        colors: ["евкаліпт", "молоко", "пудра", "колір води", "мʼята"]
      },
      RU: {
        category: "Платья",
        name: "Муслиновое платье",
        description: "Платье миди с короткими рукавами. Имеет пуговицы по всей длине, позволяя регулировать разрез. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "эвкалипт",
        colors: ["эвкалипт", "молоко", "пудра", "цвет воды", "мята"]
      }
    }
  },
  
  
  {
    id: 46,
    price: 3335,
    isTop: false,
    sku: "98767",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Lantern/1.avif",
    images: [
      "/Dress/Lantern/2.avif",
      {
        type: "video",
        src: "/Dress/Lantern/IMG_061.mp4",
        poster: "/Dress/Lantern/1.avif"
      },
      "/Dress/Lantern/3.avif",
      "/Dress/Lantern/4.avif",
      "/Dress/Lantern/5.avif",
      "/Dress/Lantern/6.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Lantern Dress",
        description: "Delicate midi dress with lantern sleeves and handmade lace inserts. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Lanterne",
        description: "Robe midi délicate avec des manches lanterne et des inserts en dentelle faite à la main. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня ліхтарик",
        description: "Ніжна сукня міді довжини. Має рукава ліхтарики та вставки із мережива ручної роботи. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко"]
      },
      RU: {
        category: "Платья",
        name: "Платье Лантерн",
        description: "Нежное платье миди длины. Имеет рукава фонарики и вставки из кружева ручной работы. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "молоко",
        colors: ["молоко"]
      }
    }
  },
  

  {
    id: 45,
    price: 3335,
    isTop: false,
    sku: "98766",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Oversize/1.avif",
    images: [
      "/Dress/Oversize/2.avif",
      {
        type: "video",
        src: "/Dress/Oversize/IMG_060.mp4",
        poster: "/Dress/Oversize/1.avif"
      },
      "/Dress/Oversize/3.avif",
      "/Dress/Oversize/4.avif",
      "/Dress/Oversize/5.avif",
      "/Dress/Oversize/6.avif",
      "/Dress/Oversize/7.avif",
      "/Dress/Oversize/8.avif",
      "/Dress/Oversize/9.avif",
      "/Dress/Oversize/10.avif",
      "/Dress/Oversize/11.avif",
      "/Dress/Oversize/12.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Oversize Dress",
        description: "Light, minimalist oversized dress in an ethnic style with special weaving and lace detailing. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "water color",
        colors: ["water color", "milk"]
      },
      FR: {
        category: "Robes",
        name: "Robe Oversize",
        description: "Robe oversize légère et minimaliste dans un style ethnique avec un tissage spécial et des détails en dentelle. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "couleur de l'eau",
        colors: ["couleur de l'eau", "lait"]
      },
      UA: {
        category: "Сукні",
        name: "Oversize сукня",
        description: "Легка, мінімалістична оверсайз сукня в етнічному стилі з особливим плетінням і обробкою у вигляді мережива. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "колір води",
        colors: ["колір води", "молоко"]
      },
      RU: {
        category: "Платья",
        name: "Оверсайз платье",
        description: "Легкое, минималистичное оверсайз платье в этническом стиле с особым плетением и кружевной отделкой. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "цвет воды",
        colors: ["цвет воды", "молоко"]
      }
    }
  },
  

  {
    id: 44,
    price: 3920,
    isTop: true,
    sku: "98765",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Ethnic/1.avif",
    images: [
      "/Dress/Ethnic/2.avif",
      {
        type: "video",
        src: "/Dress/Ethnic/IMG_7595.mp4",
        poster: "/Dress/Ethnic/1.avif"
      },
      "/Dress/Ethnic/3.avif",
      "/Dress/Ethnic/4.avif",
      "/Dress/Ethnic/5.avif",
      "/Dress/Ethnic/6.avif",
      "/Dress/Ethnic/7.avif",
      "/Dress/Ethnic/8.avif",
      "/Dress/Ethnic/9.avif",
      "/Dress/Ethnic/10.avif",
      "/Dress/Ethnic/11.avif",
      "/Dress/Ethnic/12.avif",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Ethnic Dress",
        description: "Maxi dress with lace throughout, oversized sleeves, and ties. Fabric: long-fiber muslin, 100% cotton. Light and soft to the touch.",
        color: "milk",
        colors: ["milk", "black"]
      },
      FR: {
        category: "Robes",
        name: "Robe Ethnique",
        description: "Robe maxi avec dentelle sur toute la longueur, manches oversize et liens. Tissu : mousseline à longues fibres, 100% coton. Tissu léger et doux au toucher.",
        color: "lait",
        colors: ["lait", "noir"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня «Ethnic»",
        description: "Сукня максі із мереживом по всій довжині, оверсайз рукавами та завʼязками. Тканина: довговолокняний муслін зі 100% бавовни. Легка та мʼяка тканина на дотик.",
        color: "молоко",
        colors: ["молоко", "чорний"]
      },
      RU: {
        category: "Платья",
        name: "Платье «Ethnic»",
        description: "Макси-платье с кружевом по всей длине, оверсайз рукавами и завязками. Ткань: длинноволокнистый муслин из 100% хлопка. Легкая и мягкая на ощупь.",
        color: "молоко",
        colors: ["молоко", "чёрный"]
      }
    }
  },

  { id: 1,
    price: 3170,
    isTop: true,
    sku: "12345",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Woolen suit with skirt/9.avif",
    images: ["/Costumes/Woolen suit with skirt/10.avif", 
      {
        type: "video",
        src: "/Costumes/Woolen suit with skirt/IMG_4440.mp4",
        poster: "/Costumes/Woolen suit with skirt/1.avif"
      },
      "/Costumes/Woolen suit with skirt/11.avif",
      "/Costumes/Woolen suit with skirt/12.avif",
      "/Costumes/Woolen suit with skirt/13.avif",
      "/Costumes/Woolen suit with skirt/14.avif",
    ],
    sizes: ["XS", "S" , "M" , "L" , "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Woolen suit with skirt",
        description: "Sweater + pencil skirt. Composition: 75% natural wool, soft, does not prick the body.",
        color: "red",
        colors: ["graphite"]
      },
      FR: {
        category: "Costumes",
        name: "Costume en laine avec jupe",
        description: "Pull + jupe crayon. Composition: 75% laine naturelle, douce, ne pique pas la peau.",
        color: "rouge",
        colors: ["camel", "graphite", "gris"]
      },
      UA: {
        category: "Костюми",
        name: "Вовняний костюм зі спідницею",
        description: "Светр + олівець спідниця. Склад: 75% натуральної вовни, м'яка, не колеться.",
        color: "червоний",
        colors: ["графітовий"]
      }
    }
  },
  {
    id: 2,
    price: 3710,
    isTop: true,
    sku: "12345",
    size: "XS S M L XL",
    category: "Costumes",
    image: "/Costumes/Wool suit with trousers/7.avif",
    images: ["/Costumes/Wool suit with trousers/8.avif", "/Costumes/Wool suit with trousers/9.avif",
      "/Costumes/Wool suit with trousers/10.avif",
      "/Costumes/Wool suit with trousers/11.avif",
      "/Costumes/Wool suit with trousers/12.avif",
    ],
    sizes: ["XS", "S" , "M" , "L" , "XL"],
    translations: {
      EN: {
        category: "Costumes",
        name: "Woolen suit with trousers",
        description: "Jumper + palazzo pants\nComposition: 75% natural wool, soft, does not prick the body.",
        color: "blue",
        colors: ["graphite"]
      },
      FR: {
        category: "Costumes",
        name: "Costume en laine avec pantalon",
        description: "Pull + pantalon palazzo\nComposition: 75% laine naturelle, douce, ne pique pas la peau.",
        color: "bleu",
        colors: ["graphite"]
      },
      UA: {
        category: "Костюми",
        name: "Вовняний костюм із брюками",
        description: "Джемпер + палаццо штани\nСклад: 75% натуральної вовни, м'яка, не колеться.",
        color: "синій",
        colors: ["графітовий"]
      }
    }
  },
  // {
  //   id: 3,
  //   price: 4160,
  //   isTop: true,
  //   sku: "12345",
  //   size: "XS S M L XL",
  //   category: "Costumes",
  //   image: "/Costumes/Wool suit with vest/1.avif",
  //   images: ["/Costumes/Wool suit with vest/2.avif", "/Costumes/Wool suit with vest/3.avif"],
  //   sizes: ["XS", "S" , "M" , "L" , "XL"],
  //   translations: {
  //     EN: {
  //       name: "Wool suit with vest",
  //       description: "Vest + palazzo pants\nComposition: 75% natural wool, soft, does not sting the body.",
  //       color: "camel",
  //       colors: ["camel"]
  //     },
  //     FR: {
  //       name: "Costume en laine avec gilet",
  //       description: "Gilet + pantalon palazzo\nComposition: 75% laine naturelle, douce, ne pique pas la peau.",
  //       color: "camel",
  //       colors: ["camel"]
  //     },
  //     UA: {
    //category: "Костюми",
  //       name: "Вовняний костюм із жилетом",
  //       description: "Жилет + палаццо штани\nСклад: 75% натуральної вовни, м'яка, не колеться.",
  //       color: "камел",
  //       colors: ["камел"]
  //     }
  //   }
  // },
  {
    id: 4,
    price: 3100,
    isTop: true,
    sku: "12345",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Woolen trapeze dress/1.avif",
    images: [
    
      "/Dress/Woolen trapeze dress/2.avif", "/Dress/Woolen trapeze dress/3.avif",
      {
        type: "video",
        src: "/Dress/Woolen trapeze dress/IMG_6176.mp4",
        poster: "/Dress/Woolen trapeze dress/1.avif"
      },
      "/Dress/Woolen trapeze dress/4.avif",
      "/Dress/Woolen trapeze dress/5.avif",
      "/Dress/Woolen trapeze dress/6.avif",
    
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Woolen trapeze dress",
        description: "Trapeze dress with a pronounced belt\nComposition: 75% natural wool, soft, does not stick to the body.",
        color: "red",
        colors: ["jeans"]
      },
      FR: {
        category: "Robes",
        name: "Robe trapèze en laine",
        description: "Robe trapèze avec ceinture marquée\nComposition: 75% laine naturelle, douce, ne colle pas à la peau.",
        color: "rouge",
        colors: ["jeans"]
      },
      UA: {
        category: "Сукні",
        name: "Вовняна сукня трапеція",
        description: "Трапецеїдна сукня з виразним поясом\nСклад: 75% натуральної вовни, м'яка, не прилипає до тіла.",
        color: "червоний",
        colors: ["джинсовий"]
      }
    }
  },
  // {
  //   id: 5,
  //   price: 3100,
  //   isTop: true, // Топ продукт
  //   sku: "12345",
  //   size: "XS S M L XL",
  //   category: "Dresses",
  //   image: "/Dress/Wool A-line dress/2.avif",
  //   images: [
  //     "/Dress/Wool A-line dress/1.avif", "/Dress/Wool A-line dress/3.avif", "/Dress/Wool A-line dress/4.avif", "/Dress/Wool A-line dress/5.avif", "/Dress/Wool A-line dress/6.avif", "/Dress/Wool A-line dress/7.avif", "/Dress/Wool A-line dress/8.avif", "/Dress/Wool A-line dress/9.avif", "/Dress/Wool A-line dress/10.avif"
  //   ],
  //   sizes: ["XS", "S", "M", "L", "XL"],
  //   translations: {
  //     EN: {
  //       name: "Wool A-line dress",
  //       description: "A-line dress with pronounced seams and a front zipper\nComposition: 75% natural wool, soft, does not prick the body.",
  //       color: "blue",
  //       colors: ["gray", "camel"],
  //     },
  //     FR: {
   // category: "Robes",
  //       name: "Robe évasée en laine",
  //       description: "Robe évasée avec coutures marquées et fermeture éclair avant\nComposition: 75% laine naturelle, douce, ne pique pas la peau.",
  //       color: "bleu",
  //       colors: ["gris", "camel"]
  //     },
  //     UA: {
   // category: "Сукні",
  //       name: "Вовняна сукня А-силуета",
  //       description: "Сукня-силует із виразними швами та передньою блискавкою\nСклад: 75% натуральної вовни, м'яка, не колеться.",
  //       color: "синій",
  //       colors: ["сірий", "верблюжий"]
  //     }
  //   }
  // },
  {
    id: 6,
    price: 3100,
    isTop: true,
    sku: "12345",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Dress Grace/1.avif",
    images: ["/Dress/Dress Grace/2.avif", "/Dress/Dress Grace/3.avif", "/Dress/Dress Grace/4.avif", "/Dress/Dress Grace/5.avif", "/Dress/Dress Grace/6.avif"],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Dress Grace",
        description: "A-line dress with wide sleeves of midi length. Has pronounced ribbons near the neck. There is a cutout on the back\nFabric: high-quality costume wool",
        color: "gray",
        colors: ["gray"],
      },
      FR: {
        category: "Robes",
        name: "Robe Grace",
        description: "",
        color: "gris",
        colors: ["gris"]
      },
      UA: {
        category: "Сукні",
        name: "Сукня «Grace»",
        description: "Сукня А-силуету із широкими рукавами міді довжини. Має виражені стрічки біля горловини. На спинці є виріз\nТканина: якісна костюмна вовна",
        color: "сірий",
        colors: ["сірий"]
      },
      RU: {
        category: "Платья",
        name: "Платье Грейс",
        description: "Платье А-силуэта с широкими рукавами меди имеет выраженные швы у горловины.\n Ткань: качественная костюмная шерсть",
        color: "серый",
        colors: ["серый"]
      }
    }
  },
  {
    id: 7,
    price: 1850,
    isTop: true,
    sku: "12345",
    size: "XS S M L XL",
    category: "Dresses",
    image: "/Dress/Mini sundress/1.avif",
    images: ["/Dress/Mini sundress/2.avif", "/Dress/Mini sundress/3.avif", "/Dress/Mini sundress/4.avif", "/Dress/Mini sundress/5.avif", "/Dress/Mini sundress/6.avif"],
    sizes: ["XS", "S", "M", "L", "XL"],
    translations: {
      EN: {
        category: "Dresses",
        name: "Mini sundress",
        description: "Mini sundress with a deep neckline, side slits that can be fastened and two pockets. Can be worn as a vest. \nFabric: high-quality eco-leather on a suede base. (stretch, does not crack)",
        color: "blue",
        colors: ["black"],
      },
      FR: {
        category: "Robes",
        name: "Robe d'été mini",
        description: "Mini robe d'été avec décolleté plongeant, fentes latérales à fermeture et deux poches. Peut être porté comme un gilet. \nTissu : éco-cuir de haute qualité sur base en daim. (extensible, ne craque pas)",
        color: "bleu",
        colors: ["noir"]
      },
      UA: {
        category: "Сукні",
        name: "Сарафан mini",
        description: "Mini сарафан із глибоким декольте, розрізами збоку, які застібаються та двома кишенями. Можна носити як жилет. \nТканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )",
        color: "синій",
        colors: ["чорний"]
      },
      RU: {
        name: "Мини-сарафан",
        description: "Mini сарафан с глубоким декольте, застегивающимися разрезами сбоку и двумя карманами. Можно носить как жилет. \nТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
        color: "синий",
        colors: ["чёрный"]
      }
    }
  },
     
    {
      id: 8,
      price: 2000,
      sku: "12345",
      
      size: "XS S M L XL",
      category: "Dresses",
      image: "/Dress/Shkiriana suknya (Leather dress)/1.avif",
      images: ["/Dress/Shkiriana suknya (Leather dress)/2.avif", "/Dress/Shkiriana suknya (Leather dress)/3.avif", "/Dress/Shkiriana suknya (Leather dress)/4.avif", "/Dress/Shkiriana suknya (Leather dress)/5.avif", "/Dress/Shkiriana suknya (Leather dress)/6.avif"],
       
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Dresses",
          name: "Shkiriana suknya (Leather dress)",
          description: "Oversize dress with a small round neckline and pockets\nFabric: high-quality eco-leather on a suede base. (stretchy, does not crack)",
          color: "blue",
          colors: ["mocha", "white"],
        },
        FR: {
          category: "Robes",
          name: "Tissu Shkiryana (robe en cuir)",
          description: "Robe oversize avec petit décolleté arrondi et poches. Tissu : éco-cuir de haute qualité sur base en daim (extensible, ne craque pas).",
          colors : ["mocha", "blanc"],
        },
        UA: {
          category: "Сукні",
          name: "Шкіряна сукня",
          description: "Oversize сукня із невеликим округлим вирізом та кишенями\nТканина: якісна екошкіра на замшевій основі.(стречева, не тріскається)",
          colors: ["мокко", "білий"],
        },
        RU: {
          name: "Кожаное платье",
          description: "Oversize платье с небольшим круглым вырезом и карманами\nТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          colors : ["мокко", "белый"],
          }
      }
    },
    
    {
      id: 9,
      price: 2100,
      sku: "12345",
      
      size: "XS S M L XL",
      category: "Dresses",
      image: "/Dress/Asymmetrical_dress/1.avif",
      images: ["/Dress/Asymmetrical_dress/2.avif", "/Dress/Asymmetrical_dress/3.avif", "/Dress/Asymmetrical_dress/4.avif", "/Dress/Asymmetrical_dress/5.avif"],
       
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Dresses",
          name: "Asymmetrical dress",
          description: "Oversize asymmetrical dress with a turn-down collar and a chest pocket\n Fabric: high-quality eco-leather on a suede base. (stretchy, does not crack)",
          color: "gray",
          colors: ["gray"],
        },
        FR: {
          category: "Robes",
          name: "Robe asymétrique",
          description : "Robe oversize de coupe asymétrique avec col plaqué et poche poitrine\n Tissu : éco-cuir de haute qualité sur base en daim. (extensible, ne craque pas)",
          colors : ["gris"],
        },
        UA: {
          category: "Сукні",
          name: "Асиметрична сукня",
          description: "Oversize сукня асиметричного крою із накладним коміром та кишенею на грудях\n Тканина: якісна екошкіра на замшевій основі.(стречева, не тріскається)",
          colors: ["сірий"],
        },
        RU: {
          name: "Асимметричное платье",
          description: " Oversize платье асимметричного кроя с накладным воротником и карманом на груди\nТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся) ",
          colors: ["серый"],
        }
      }
    },
    
    {
      id: 10,
      price: 1350 ,
      sku: "12345",
      
      size: "XS S M L XL",
      category: "Tops",
      image: "/Top/Openshouldergolf/5.avif",
      images: ["/Top/Openshouldergolf/2.avif", "/Top/Openshouldergolf/3.avif", "/Top/Openshouldergolf/4.avif", "/Top/Openshouldergolf/1.avif", "/Top/Openshouldergolf/6.avif"],
       
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Tops",
          name: "Open-shoulder golf",
          description: "off-shoulder turtleneck made of soft fabric: 50% cashmere, 28% polyester, 28% nylon",
          color: "blue",
          colors: ["milky", "black"],
        },
        FR: {
          category: "Tops",
          name: "Golfer avec les épaules ouvertes",
          description: "col roulé à épaules dénudées en tissu doux : 50 % cachemire, 28 % polyester, 28 % nylon",
          colors:["lait", "noir"],
        },
        UA: {
          category: "Топи",
          name: "Гольф із відкритими плечима",
          description: "гольф із відкритими плечима із мʼякої тканини: 50% кашемір, 28% поліестер, 28% нейлон",
          colors: ["молочний", "чорний"],
        }
      }
    },
    
    
     {
      id: 11,
      price: 5225,
      sku: "12345",
      color: "beige",
      size: "XS S M L XL",
      category: "Outerwear",
      image: "/Outerwear/Leather trench coat/1.avif",
      images: ["/Outerwear/Leather trench coat/2.avif", "/Outerwear/Leather trench coat/3.avif", "/Outerwear/Leather trench coat/4.avif", 
              "/Outerwear/Leather trench coat/5.avif", "/Outerwear/Leather trench coat/6.avif"],
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Outerwear",
          name: "Leather trench coat",
          description: "Double-breasted leather trench coat in an oversize style with an included belt and two pockets. \nFabric: high-quality eco-leather on a suede base. (stretchy, does not crack)",
          colors: ["beige"], 
        },
        FR: {
          category: "Vêtements d'extérieur",
          
          name: "Trench-coat en cuir",
          description: "Trench-coat oversize en cuir à double boutonnage avec ceinture incluse et deux poches. \nTissu : éco-cuir de haute qualité sur base en daim. (extensible, incassable)",
          colors: ["beige"],
        },
        UA: {
          category: "Верхній одяг",
          name: "Шкіряний тренч",
          description: "Двобортний шкіряний тренч oversize фасону із поясом у комплекті та двома кишенями. \nТканина: якісна екошкіра на замшевій основі.(стречева, не тріскається)",
          colors: ["бежевий"],
        }
      }
    },
    
    {
      id: 12,
      price: 4920,
      sku: "12345",
      color: "camel",
      size: "XS S M L XL",
      category: "Outerwear",
      image: "/Outerwear/Camel пальто/1.avif",
      images: ["/Outerwear/Camel пальто/2.avif", "/Outerwear/Camel пальто/3.avif", "/Outerwear/Camel пальто/4.avif", "/Outerwear/Camel пальто/5.avif"],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Outerwear",
          name: "Camel Coat",
          description: "A thick, lined midi-length coat with two pockets and a belt included. The sleeves can be adjusted to your liking\nFabric: Italy. 85% wool, 15% polyester",
          colors: ["camel"],
        },
        FR: {
          category: "Vêtements d'extérieur",
          name: "Manteau Camel",
          description: "Manteau épais, de longueur midi, doublé, doté de deux poches et muni d'une ceinture. Les manches peuvent être ajustées à votre guise.\nTissu : Italie. 85% laine, 15% polyester",
          colors: ["camel"],
        },
        UA: {
          category: "Верхній одяг",
          name: "Camel пальто",
          description: "Щільне пальто міді довжини на підкладці, має дві кишені, а пояс іде у комплекті. Рукава можна регулювати, як вам зручно\nТканина:Італія. 85 % вовни, 15% поліестер",
          colors: ["камель"],
        }
      }
    },
    
    {
      id: 13,
      price: 3700,
      sku: "12345",
      color: "beige",
      size: "XS S M L XL",
      category: "Outerwear",
      image: "/Outerwear/Твідовий бомбер/1.avif",
      images: ["/Outerwear/Твідовий бомбер/2.avif", "/Outerwear/Твідовий бомбер/3.avif", "/Outerwear/Твідовий бомбер/4.avif",
               "/Outerwear/Твідовий бомбер/8.avif", "/Outerwear/Твідовий бомбер/5.avif", "/Outerwear/Твідовий бомбер/6.avif", "/Outerwear/Твідовий бомбер/7.avif"],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Outerwear",
          name: "Tweed bomber jacket",
          description: "Quilted bomber jacket with high-quality lining and two pockets",
          colors: ["graphite", "beige"], 
        },
        FR: {
          category: "Vêtements d'extérieur",
          name: "Blouson aviateur en tweed",
          description: "Bomber matelassé avec doublure de qualité et deux poches",
          colors: ["graphite", "beige"],
        },
        UA: {
          category: "Верхній одяг",
          name: "Твідовий бомбер",
          description: "Стьоганий бомбер із якісною підкладкою та двома кишенями",
          colors: ["графіт", "бежевий"],
        }
      }
    },
    
    {
      id: 14,
      price: 1800,
      sku: "12345",
      color: "blue",
      size: "XS S M L XL",
      category: "Shirts",
      image: "/Shirts/Classicshirt/2.avif",
      images: ["/Shirts/Classicshirt/1.avif", "/Shirts/Classicshirt/3.avif", "/Shirts/Classicshirt/4.avif", "/Shirts/Classicshirt/5.avif", "/Shirts/Classicshirt/1.avif"],
       
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Shirts",
          name: "Classic shirt",
          description: "Loose-fitting cotton shirt. Fabric: 100% cotton",
          colors: ["white"],
        },
        FR: {
          category: "Chemises",
          name: "Chemise classique",
          description: "Chemise en coton à coupe libre. Tissu : 100 % coton",
          colors: ["blanc"],
        },
        UA: {
          category: "Сорочки",
          name: "Класична сорочка",
          description: "Сорочка бавовняна вільного крою. Тканина: 100% бавовна",
          colors: ["білий"],
        }
      }
    },
    
    {
     id: 15,
     price: 1650,
     sku: "12345",
     color: "caramel",
     size: "XS S M L XL",
     category: "Skirts",
     image: "/Skirts/Alice/1.avif",
     images: ["/Skirts/Alice/2.avif", "/Skirts/Alice/3.avif", "/Skirts/Alice/4.avif", "//Skirts/Alice/5.avif"],
    
     sizes: ["XS", "S", "M", "L", "XL"],
     translations: {
       EN: {
        category: "Skirts",
        name: "Skirt «Alice»",
        description: "A-line skirt with ribbons along the entire length. Fabric: high-quality eco-leather on a suede base. (stretchy, does not crack)",
        colors: ["caramel"],
      },
      FR: {
        category: "Jupes",
        name: "Skirt «Alice»",
        description: "Une jupe ample en forme de trapèze avec des rubans sur toute la longueur. Tissu : cuir écologique de haute qualité sur base en daim. (extensible, ne craque pas",
        colors: ["caramel"],
      },
      UA: {
        category: "Спідницi",
         name: "Спідниця «Alice»",
         description: "Спідниця вільного крою у формі трапеції зі стрічками по всій довжині. Тканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається",
         colors: ["карамель"],
       }
     }
     },

     {
      id: 16,
      price: 5350,
      sku: "12345",
      color: "olive",
      size: "XS S M L XL",
      category: "Costumes",
      image: "/Costumes/Liana/2.avif",
      images: ["/Costumes/Liana/3.avif", "/Costumes/Liana/1.avif", "/Costumes/Liana/4.avif","/Costumes/Liana/5.avif","/Costumes/Liana/6.avif"],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Costumes",
          name: "Costume «Liana»",
          description: "Double-breasted oversize jacket + belt + straight high-rise trousers n\Suit fabric (75% viscose, 25% polyester)",
          colors: ["olive"],
        },
        FR: {
          category: "Costumes",
          name: "Costume «Liana»",
          description: "Veste oversize croisée + ceinture + pantalon droit taille haute Tissu de costume (75% viscose, 25% polyester)",
          colors: ["olive"],
        },
        UA: {
          category: "Костюми",
          name: "Костюм «Liana»",
          description: "Двобортний oversize жакет + пояс + брюки прямі на високій посадці n\Костюмна тканина ( 75% віскоза, 25% поліестер )",
          colors: ["оливка"],
        }
      }
    },
    
     {
       id: 17,
       price: 5350,
       sku: "12345",
       color: "black",
       size: "XS S M L XL",
       category: "Costumes",
       image: "/Costumes/Lucy/1.avif",
       images: ["/Costumes/Lucy/2.avif", "/Costumes/Lucy/3.avif", "/Costumes/Lucy/4.avif", "/Costumes/Lucy/5.avif", "/Costumes/Lucy/6.avif"],
        
       sizes: ["XS", "S", "M", "L", "XL"],
       translations: {
         EN: {
          category: "Costumes",
           name: "Costume Lucy",
           description: "Double-breasted oversize jacket + cropped high-rise banana pants\nSuit fabric (75% viscose, 25% polyester)",
           colors: ["black"],
         },
         FR: {
          category: "Costumes",
           name: "Costume Lucy",
           description: "Veste oversize à double boutonnage + pantacourt taille haute façon banane\nTissu de costume (75% viscose, 25% polyester)",
           colors: ["noir"],
         },
         UA: {
          category: "Костюми",
           name: "Костюм «Lucy»",
           description: "Двобортний oversize жакет + вкорочені брюки фасону бананів на високій посадці \nКостюмна тканина ( 75% віскоза, 25% поліестер )",
           colors: ["чорний"],
         }
       }
     },

    //  {
    //   id: 18,
    //   price: 4950,
    //   isTop: false, // Not marked as a top product
    //   sku: "56789",
      
    //   size: "XS S M L XL",
    //   category: "Costumes",
    //   image: "/Costumes/Suit with bermuda shorts/1.avif",
    //   images: [
    //     "/Costumes/Suit with bermuda shorts/2.avif",
    //     "/Costumes/Suit with bermuda shorts/3.avif",
    //     "/Costumes/Suit with bermuda shorts/4.avif"
    //   ],
      
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       name: "Suit with bermuda shorts",
    //       description: "Double-breasted oversized jacket + high-waisted bermuda shorts with pockets.\nFabric: suit fabric (75% viscose, 25% polyester)",
    //       color: "chocolate",
    //       colors: ["chocolate"],
    //     },
    //     FR: {
    //       name: "Costume avec bermuda",
    //       description: "Veste oversize double boutonnage + bermuda taille haute avec poches.\nTissu: tissu de costume (75% viscose, 25% polyester)",
    //       color: "chocolat",
    //       colors: ["chocolat"],
    //     },
    //     UA: {
    //       name: "Костюм із бермудами",
    //       description: "Двобортний oversize жакет + шорти-бермуди на високій посадці із кишенями.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)",
    //       color: "шоколадний",
    //       colors: ["шоколадний"],
    //     },
    //     RU: {
    //       name: "Костюм с бермудами",
    //       description: "Двухбортный oversize жакет + шорты-бермуды на высокой посадке с карманами.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)",
    //       color: "шоколадный",
    //       colors: ["шоколадный"],
    //     }
    //   }
    // },

    // {
    //   id: 19,
    //   price: 5350,
    //   isTop: false, // Not marked as a top product
    //   sku: "98765",
      
    //   size: "XS S M L XL",
    //   category: "Costumes",
    //   image: "/Costumes/Emily Suit/1.avif",
    //   images: [
    //     "/Costumes/Emily Suit/2.avif",
    //     "/Costumes/Emily Suit/3.avif",
    //     "/Costumes/Emily Suit/4.avif"
    //   ],
     
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       name: "Emily Suit",
    //       description: "Double-breasted oversized jacket + palazzo trousers with high waist, pockets, and a belt.\nFabric: suit fabric (75% viscose, 25% polyester)",
    //       color: "chocolate",
    //       colors: ["chocolate"],
    //     },
    //     FR: {
    //       name: "Costume « Emily »",
    //       description: "Veste oversize double boutonnage + pantalon palazzo taille haute avec poches et ceinture.\nTissu: tissu de costume (75% viscose, 25% polyester)",
    //       color: "chocolat",
    //       colors: ["chocolat"],
    //     },
    //     UA: {
    //       name: "Костюм «Emily»",
    //       description: "Двобортний oversize жакет + брюки палаццо на високій посадці із кишенями та поясом.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)",
    //       color: "шоколадний",
    //       colors: ["шоколадний"],
    //     },
    //     RU: {
    //       name: "Костюм «Emily»",
    //       description: "Двухбортный oversize жакет + брюки палаццо на высокой посадке с карманами и поясом.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)",
    //       color: "шоколадный",
    //       colors: ["шоколадный"],
    //     }
    //   }
    // },
    
    {
      id: 20,
      price: 3100,
      isTop: false, // Not marked as a top product
      sku: "67890",
      
      size: "XS S M L XL",
      category: "Dresses",
      image: "/Dress/Emily Dress/1.avif",
      images: [
        "/Dress/Emily Dress/2.avif",
        "/Dress/Emily Dress/3.avif",
        "/Dress/Emily Dress/4.avif",
        "/Dress/Emily Dress/5.avif",
        "/Dress/Emily Dress/6.avif",
        "/Dress/Emily Dress/7.avif",
        "/Dress/Emily Dress/8.avif",
        "/Dress/Emily Dress/9.avif",
        "/Dress/Emily Dress/10.avif",
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Dresses",
          name: "Emily Dress",
          description: "Wool midi dress with a V-neck, shortened sleeves, and pockets.\nFabric: 80% wool, 20% polyester",
          color: "gray, camel",
          colors: ["gray", "camel"],
        },
        FR: {
          category: "Robes",
          name: "Robe « Emily »",
          description: "Robe midi en laine avec col en V, manches raccourcies et poches.\nTissu: 80% laine, 20% polyester",
          color: "gris, camel",
          colors: ["gris", "camel"],
        },
        UA: {
          category: "Сукнi",
          name: "Сукня «Emily»",
          description: "Вовняна сукня міді довжини із V-вирізом, вкороченими рукавами та кишенями.\nТканина: 80% вовна, 20% поліестер",
          color: "сірий, краватний",
          colors: ["сірий", "кемел"],
        },
        RU: {
          category: "Платья",
          name: "Платье «Emily»",
          description: "Шерстяное платье миди длины с V-вырезом, укороченными рукавами и карманами.\nТкань: 80% шерсть, 20% полиэстер",
          color: "серый, краватный",
          colors: ["серый", "кемел"],
        }
      }
    },

    {
      id: 21,
      price: 3025,
      isTop: false, // Not marked as a top product
      sku: "67891",
      
      size: "XS S M L XL",
      category: "Dresses",
      image: "/Dress/Marie Dress/1.avif",
      images: [
        "/Dress/Marie Dress/2.avif",
        "/Dress/Marie Dress/3.avif",
        "/Dress/Marie Dress/4.avif",
        "/Dress/Marie Dress/5.avif"
      ],

      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Dresses",
          name: "Marie Dress",
          description: "Midi-length dress with a collar and pockets. Button closure.\nFabric: suit fabric (75% viscose, 25% polyester)",
          color: "beige",
          colors: ["beige"],
        },
        FR: {
          category: "Robes",
          name: "Robe « Marie »",
          description: "Robe midi avec col et poches. Fermeture à boutons.\nTissu: tissu de costume (75% viscose, 25% polyester)",
          color: "beige",
          colors: ["beige"],
        },
        UA: {
          category: "Сукні",
          name: "Сукня «Marie»",
          description: "Сукня міді довжини із коміром та кишенями. Застібається на ґудзики.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)",
          color: "бежевий",
          colors: ["бежевий"],
        },
        RU: {
          category: "Платья",
          name: "Платье «Marie»",
          description: "Платье миди длиной с воротником и карманами. Застёгивается на пуговицы.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)",
          color: "бежевый",
          colors: ["бежевый"],
        }
      }
    },

    {
      id: 22,
      price: 1650,
      isTop: false, // Not marked as a top product
      sku: "67892",
      
      size: "XS S M L XL",
      category: "Dresses",
      image: "/Dress/Leather Sundress/1.avif",
      images: [
        "/Dress/Leather Sundress/2.avif",
        "/Dress/Leather Sundress/3.avif",
        "/Dress/Leather Sundress/4.avif",
      ],

      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Dresses",
          name: "Leather Sundress",
          description: "Oversized sundress with a square neckline and two pockets.\nFabric: high-quality eco-leather on a suede base (stretchable, does not crack)",
          color: "black",
          colors: ["black"],
        },
        FR: {
          category: "Robes",
          name: "Robe « en cuir »",
          description: "Robe oversize avec décolleté carré et deux poches.\nTissu: cuir écologique de haute qualité sur une base en daim (extensible, ne se fissure pas)",
          color: "noir",
          colors: ["noir"],
        },
        UA: {
          category: "Сукні",
          name: "Шкіряний сарафан",
          description: "Oversize сарафан із квадратним вирізом та двома кишенями.\nТканина: якісна екошкіра на замшевій основі (стречева, не тріскається)",
          color: "чорний",
          colors: ["чорний"],
        },
        RU: {
          category: "Платья",
          name: "Кожаный сарафан",
          description: "Oversize сарафан с квадратным вырезом и двумя карманами.\nТкань: качественная экокожа на замшевой основе (стречевая, не трескающаяся)",
          color: "черный",
          colors: ["черный"],
        }
      }
    },

    {
      id: 23,
      price: 4050,
      isTop: false,
      sku: "67893",
      
      size: "XS S M L XL",
      category: "Costumes",
      image: "/Costumes/Two-Piece Suit/1.avif",
      images: [
        "/Costumes/Two-Piece Suit/2.avif",
        "/Costumes/Two-Piece Suit/3.avif",
        "/Costumes/Two-Piece Suit/4.avif",
        "/Costumes/Two-Piece Suit/5.avif",

      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Costumes",
          name: "Two-Piece Suit",
          description: "Vest with lining + palazzo pants with a high waist. Each item can be purchased separately.\nFabric: suit fabric (75% viscose, 25% polyester)",
          color: "denim",
          colors: ["jeans"],
        },
        FR: {
          category: "Costumes",
          name: "Costume 2 pièces",
          description: "Gilet doublé + pantalon palazzo taille haute. Chaque article peut être acheté séparément.\nTissu: tissu de costume (75% viscose, 25% polyester)",
          color: "bleu de denim",
        },
        UA: {
          category: "Костюми",
          name: "Костюм 2-ка",
          description: "Жилет із підкладкою + брюки палаццо із високою посадкою. Кожен елемент можна придбати окремо.\nТканина: костюмна тканина (75% віскоза, 25% поліестер)",
          color: "джинс",
        },
        RU: {
          category: "Костюмы",
          name: "Костюм 2-ка",
          description: "Жилет с подкладкой + брюки палаццо с высокой посадкой. Каждый элемент можно приобрести отдельно.\nТкань: костюмная ткань (75% вискоза, 25% полиэстер)",
          color: "джинс",
        }
      }
    },

    // {
    //   id: 24,
    //   price: 3100,
    //   isTop: false,
    //   sku: "67894",
    //   color: "camel",
    //   size: "XS S M L XL",
    //   category: "Dress",
    //   image: "/Dress/Camel Dress/1.avif",
    //   images: [
    //     "/Dress/Camel Dress/2.avif",
    //     "/Dress/Camel Dress/3.avif",
    //     "/Dress/Camel Dress/4.avif"
    //   ],
      
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   translations: {
    //     EN: {
    //       name: "Camel Dress",
    //       description: "Wool midi dress with prominent seams, cropped sleeves, and a round neckline.\nFabric: 80% wool, 20% polyester",
    //       colors: ["camel"],
    //     },
    //     FR: {
    //       name: "Robe « Camel »",
    //       description: "Robe en laine mi-longue avec coutures prononcées, manches raccourcies et col rond.\nTissu: 80% laine, 20% polyester",
    //       colors: ["camel"],
    //     },
    //     UA: {
    //       name: "Сукня “Camel”",
    //       description: "Вовняна сукня міді довжини із вираженими швами, вкороченими рукавами та округлим вирізом.\nТканина: 80% вовна, 20% поліестер",
    //       colors: ["камель"],
    //     },
    //     RU: {
    //       name: "Платье “Camel”",
    //       description: "Шерстяное платье миди длины с выраженными швами, укороченными рукавами и округлым вырезом.\nТкань: 80% шерсть, 20% полиэстер",
    //       colors: ["камель"],
    //     }
    //   }
    // },

    {
      id: 25,
      price: 3100,
      isTop: false,
      sku: "67895",
      color: "gray",
      size: "XS S M L XL",
      category: "Dresses",
      image: "/Dress/Wool Dress/1.avif",
      images: [
        "/Dress/Wool Dress/2.avif",
        "/Dress/Wool Dress/3.avif",
        "/Dress/Wool Dress/4.avif"
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Dresses",
          name: "Wool Dress",
          description: "Wool dress with wide sleeves and a high round neckline.\nFabric: 80% wool, 20% polyester",
          colors: ["gray"],
        },
        FR: {
          category: "Robes",
          name: "Robe en laine",
          description: "Robe en laine avec manches larges et encolure ronde haute.\nTissu: 80% laine, 20% polyester",
          colors: ["gris"],
        },
        UA: {
          category: "Cукні",
          name: "Вовняна сукня",
          description: "Вовняна сукня із широкими рукавами та високим округлим вирізом на горловині.\nТканина: 80% вовна, 20% поліестер",
          colors: ["сірий"],
        },
        RU: {
          category: "Платья",
          name: "Шерстяное платье",
          description: "Шерстяное платье с широкими рукавами и высоким округлым вырезом на горловине.\nТкань: 80% шерсть, 20% полиэстер",
          colors: ["серый"],
        }
      }
    },
    {
      id: 26,
      price: 2800,
      isTop: false,
      sku: "67896",
      
      size: "XS S M L XL",
      category: "Dresses",
      image: "/Dress/Jersey Two-Piece Dress/1.avif",
      images: [
        "/Dress/Jersey Two-Piece Dress/2.avif",
        "/Dress/Jersey Two-Piece Dress/3.avif",
        "/Dress/Jersey Two-Piece Dress/4.avif"
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Dresses",
          name: "Jersey Two-Piece Dress",
          description: "Dense everyday dress. Precise lines, form, design, and style. Wash each part of the dress separately.\nFabric: dense jersey knit",
          color: "black-white",
          colors: ["black-white"],
        },
        FR: {
          category: "Robes",
          name: "Robe en jersey deux pièces",
          description: "Robe quotidienne dense. Lignes précises, forme, design et style. Laver chaque partie de la robe séparément.\nTissu: jersey dense",
          color: "noir-blanc",
          colors: ["noir-blanc"],
        },
        UA: {
          category: "Сукні",
          name: "Сукня 2-ка джерсі",
          description: "Щільна сукня на кожен день. Чіткі лінії, форма, дизайн та стиль. Кожну частину сукні прати окремо.\nТканина: щільний трикотаж Джерсі",
          colors: ["чорно-білий"],
        },
        RU: {
          category: "Платья",
          name: "Платье 2-ка джерси",
          description: "Плотное платье на каждый день. Четкие линии, форма, дизайн и стиль. Каждую часть платья стирать отдельно.\nТкань: плотный трикотаж Джерси",
          colors: ["черно-белый"],
        }
      }
    },
    
    {
      id: 27,
      price: 1760,
      isTop: false,
      sku: "67897",
      
      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Jersey Pants/1.avif",
      images: [
        "/Pants/Jersey Pants/2.avif",
        "/Pants/Jersey Pants/3.avif",
        "/Pants/Jersey Pants/4.avif",
        "/Pants/Jersey Pants/5.avif",
        "/Pants/Jersey Pants/6.avif",
        "/Pants/Jersey Pants/7.avif",
        "/Pants/Jersey Pants/8.avif",
        "/Pants/Jersey Pants/9.avif", 
        "/Pants/Jersey Pants/10.avif",
      ],
     
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Pants",
          name: "Jersey Pants",
          description: "Cropped pants with an elastic waistband. Feature pronounced seams throughout the length.\nFabric: dense jersey knit",
          color: "black, cappuccino",
          colors: ["black", "cappuccino"],
        },
        FR: {
          category: "Pantalons",
          name: "Pantalon en jersey",
          description: "Pantalon court avec taille élastique. Doté de coutures prononcées sur toute la longueur.\nTissu: jersey dense",
          color: "noir, cappuccino",
          colors: ["noir", "cappuccino"],
        },
        UA: {
          category: "Брюки",
          name: "Брюки джерсі",
          description: "Вкорочені брюки на резинці. Мають шви по всій довжині.\nТканина: щільний трикотаж Джерсі",
          colors: ["чорний", "кавовий"],
        },
        RU: {
          category: "Брюки",
          name: "Брюки джерси",
          description: "Укороченные брюки на резинке. Имеют выраженные швы по всей длине.\nТкань: плотный трикотаж Джерси",
          colors: ["черный", "кавовий"],
        }
      }
    },
    
    { id: 28,
      price: 2000,
      isTop: false, // Топ продукт
      isSpecialOffer: true,
      discountPrice: 1820,
      sku: "12345",
      color: "red",
      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Banana Pants/1.avif",
      images: ["/Pants/Banana Pants/2.avif", "/Pants/Banana Pants/3.avif", "/Pants/Banana Pants/4.avif", "/Pants/Banana Pants/5.avif",
        "/Pants/Banana Pants/6.avif", "/Pants/Banana Pants/7.avif", "/Pants/Banana Pants/8.avif", "/Pants/Banana Pants/9.avif", "/Pants/Banana Pants/10.avif",
        "/Pants/Banana Pants/11.avif", "/Pants/Banana Pants/12.avif", "/Pants/Banana Pants/13.avif", "/Pants/Banana Pants/14.avif", "/Pants/Banana Pants/15.avif",
      ],
 
      sizes: ["XS", "S", "M", "L", "XL" ],
      translations: {
        EN: {
          category: "Pants",
          name: "Banana Pants",
          description: "High-waisted banana-style pants with two pockets.Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
          colors: ["Black", "Beige", "Caramel"],
        },
        FR: {
          category: "Pantalons",
          name: "Pantalons en Cuir Banane",
          description: "Pantalons taille haute style banane avec deux poches.Tissu : Cuir éco-responsable de haute qualité avec une base en suède. (Extensible, ne se fissure pas.)",
          colors: ["Noir", "Beige", "Caramel"],

        },
        UA: {
          category: "Брюки",
          name: "Шкіряні брюки банани",
          description: "Описание: Брюки фасону бананів на високій посадці із двома кишенями Тканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )",
          colors: ["Чорний", "Бежевий", "карамель"],
        },
        RU: {
          category: "Брюки",
          name: "Брюки бананы",
          description: "( Брюки фасона бананов на высокой посадке с двумя карманамиТкань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          colors: ["Черный", "Бежевый", "карамель"],
        }
      }
    },
    
    { id: 29,
      price:  1820,
      isTop: false, // Топ продукт
      sku: "12345",
      color: "red",

      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Leather Flared Pants/1.avif",
      images: ["//Pants/Leather Flared Pants/2.avif", "/Pants/Leather Flared Pants/3.avif", "/Pants/Leather Flared Pants/4.avif", "/Pants/Leather Flared Pants/5.avif", "/Pants/Leather Flared Pants/6.avif", 
        "/Pants/Leather Flared Pants/7.avif", "/Pants/Leather Flared Pants/8.avif", "/Pants/Leather Flared Pants/9.avif",],
       
      sizes: ["XS", "S", "M", "L", "XL" ],
      translations: {
        EN: {
          category: "Pants",
          name: "Leather Flared Pants",
          description: "High-waisted flared pants with pleats running along the entire length.Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
          colors: ["Black", "Powder"],
        },
        FR: {
          category: "Pantalons",
          name: "Pantalons en Cuir Pattes d’Éph",
          description: "Pantalons taille haute évasés avec des plis sur toute la longueur.Tissu : Cuir éco-responsable de haute qualité avec une base en suède. (Extensible, ne se fissure pas.)",
          colors: ["Noir", "Poudre"],
        },
        UA: {
          category: "Брюки",
          name: "Шкіряні брюки кльош ",
          description: "Брюки фасону кльош на високій посадці із стрілками по всій довжиніТканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )",
          colors: ["Чорний", "Пудра"],
        },
        RU: {
          category: "Брюки",
          name: "Брюки кльош",
          description: "Брюки фасона клеш на высокой посадке со стрелками по всей длине Ткань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          colors: ["Черный", "Пудра"],
        }
      }
    },
    
    { 
      id: 30,
      price: 1820,
      isTop: false, // Топ продукт
      sku: "12346",
      
      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Leather Pants1/4.avif",
      images: [
        "/Pants/Leather Pants1/2.avif", 
        "/Pants/Leather Pants1/3.avif", 
        "/Pants/Leather Pants1/1.avif", 
        "/Pants/Leather Pants1/5.avif",
        "/Pants/Leather Pants1/6.avif",
        "/Pants/Leather Pants1/7.avif",
        "/Pants/Leather Pants1/8.avif",
        "/Pants/Leather Pants1/9.avif",
        "/Pants/Leather Pants1/10.avif",
        "/Pants/Leather Pants1/11.avif",
        "/Pants/Leather Pants1/12.avif",
        "/Pants/Leather Pants1/13.avif",
        "/Pants/Leather Pants1/14.avif",
        
      ],
   
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Pants",
          name: "Leather Tube Pants",
          description: "Slim-fit pants with a high waist and zippers at the ankles. Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
          color: "beige, caramel, black",
          colors: ["beige", "caramel", "black"],
        },
        FR: {
          category: "Pantalon",
          name: "Pantalon en cuir tube",
          description: "Pantalon ajusté à taille haute avec fermetures éclair aux chevilles. Tissu : cuir écologique de haute qualité sur une base en daim (stretch, ne se fissure pas).",
          color: "beige, caramel, noir",
          colors: ["beige", "caramel", "noir"],
        },
        UA: {
          category: "Брюки",
          name: "Шкіряні брюки труби",
          description: "Брюки завуженого фасону на високій посадці та замочками на ніжці. Тканина: якісна екошкіра на замшевій основі. (стречева, не тріскається)",
          colors: ["бежевий", "карамель", "Чорний"],
        },
        RU: {
          category: "Брюки",
          name: "Кожаные брюки трубы",
          description: "Брюки зауженного фасона на высокой посадке и замочками на ножке. Ткань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          colors: ["Бежевый", "карамель", "Черный"],
        }
      }
    },
    
    
    { id: 31,
      price: 1820,
      isTop: false, // Топ продукт
      sku: "12345",
      
      size: "XS S M L XL",
      category: "Pants",
      image: "/Pants/Leather Pants/1.avif",
      images: ["/Pants/Leather Pants/2.avif", "/Pants/Leather Pants/3.avif", "/Pants/Leather Pants/4.avif", "/Pants/Leather Pants/5.avif",],
      
      sizes: ["XS", "S", "M", "L", "XL" ],
      translations: {
        EN: {
          category: "Pants",
          name: "Leather Pants",
          description: "Straight-cut pants with a high waist and two pockets.Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
          color: "red",
          colors: ["gray"], 
        },
        FR: {
          category: "Pantalon",
          name: "Pantalon en cuir",
          description: "Pantalon coupe droite à taille haute avec deux poches. Tissu : cuir écologique de haute qualité sur une base en daim (stretch, ne se fissure pas).",
          color: "rouge",
          colors: ["gris"],
        },
        UA: {
          category: "Брюки",
          name: "Шкіряні брюки",
          description: "Брюки прямого фасону на високій посадці із двома кишенямиТканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )",
          colors: ["сірий"],
        },
        RU: {
          category: "Брюки",
          name: "Кожаные брюки",
          description: "Брюки прямого фасона на высокой посадке с двумя карманами Ткань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          colors: ["серый"],
        }
      }
    },
    
    {
      id: 32,
      price: 1650,
      isTop: false,
      sku: "67890",
     
      size: "XS S M L XL",
      category: "Skirts",
      image: "/Skirts/Leather Pencil Skirt/1.avif",
      images: [
        "/Skirts/Leather Pencil Skirt/2.avif",
        "/Skirts/Leather Pencil Skirt/3.avif",
        "/Skirts/Leather Pencil Skirt/4.avif",
        "/Skirts/Leather Pencil Skirt/5.avif",
        "/Skirts/Leather Pencil Skirt/6.avif",
        "/Skirts/Leather Pencil Skirt/7.avif",
        "/Skirts/Leather Pencil Skirt/8.avif",
        "/Skirts/Leather Pencil Skirt/9.avif",
        "/Skirts/Leather Pencil Skirt/10.avif",
        "/Skirts/Leather Pencil Skirt/11.avif",
        "/Skirts/Leather Pencil Skirt/12.avif",
        "/Skirts/Leather Pencil Skirt/13.avif",
        "/Skirts/Leather Pencil Skirt/14.avif",
        "/Skirts/Leather Pencil Skirt/15.avif",
        "/Skirts/Leather Pencil Skirt/16.avif",
        "/Skirts/Leather Pencil Skirt/17.avif",
        "/Skirts/Leather Pencil Skirt/18.avif",
        "/Skirts/Leather Pencil Skirt/19.avif",
        "/Skirts/Leather Pencil Skirt/20.avif",
        "/Skirts/Leather Pencil Skirt/21.avif",
        "/Skirts/Leather Pencil Skirt/22.avif",
        "/Skirts/Leather Pencil Skirt/23.avif",
      ],

      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Skirts",
          name: "Leather Pencil Skirt",
          description: "Mid-length pencil skirt with a high waist and a slit on the legs. Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
          color: "black",
          colors: ["beige", "caramel", "black", "white", "mocha", "olive"],
        },
        FR: {
          category: "Jupes",
          name: "Jupe crayon en cuir",
          description: "Jupe crayon mi-longueur à taille haute avec une fente sur les jambes. Tissu : cuir écologique de haute qualité sur une base en daim (stretch, ne se fissure pas).",
          color: "noir",
          colors: ["beige", "caramel", "noir", "blanc", "mocha", "olive"],
        },
        UA: {
          category: "Спідниці",
          name: "Шкіряна спідниця-олівець",
          description: "Спідниця міді довжини фасону олівець на високій посадці із розрізом на ніжках. Тканина: якісна екошкіра на замшевій основі. (стречева, не тріскається)",
          color: "чорний",
          colors: ["бежевий", "карамель", "чорний", "білий", "мокко", "оливка"],
        },
        RU: {
          category: "Юбки",
          name: "Кожаная юбка-карандаш",
          description: "Юбка миди длины фасона карандаш на высокой посадке с разрезом на ножках. Ткань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          color: "черный",
          colors: ["бежевый", "карамель", "чёрный", "белый", "мокко", "оливка"],
        }
      }
    },

    {
      id: 33,
      price: 1650,
      isTop: false,
      sku: "12347",
    
      size: "XS S M L XL",
      category: "Skirts",
      image: "/Skirts/Leather Skirt Knot/1.avif",
      images: [
        "/Skirts/Leather Skirt Knot/2.avif", 
        "/Skirts/Leather Skirt Knot/3.avif", 
        "/Skirts/Leather Skirt Knot/4.avif", 
        "/Skirts/Leather Skirt Knot/5.avif"
      ],

      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Skirts",
          name: "Leather Skirt with Knot",
          description: "Midi-length pencil skirt with a high waist, a slit on the leg, and a decorative knot. Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
          color: "olive",
          colors: ["olive"],
        },
        FR: {
          category: "Jupes",
          name: "Jupe en cuir avec nœud",
          description: "Jupe crayon longueur midi avec une taille haute, une fente sur la jambe et un nœud décoratif. Tissu : cuir écologique de haute qualité sur une base en daim. (Stretch, ne se fissure pas.)",
          color: "olive",
          colors: ["olive"],
        },
        UA: {
          category: "Спідниці",
          name: "Шкіряна спідниця з вузлом",
          description: "Спідниця міді довжини фасону олівець на високій посадці із розрізом на ніжці та декоративним вузлом. Тканина: якісна екошкіра на замшевій основі. (стречева, не тріскається)",
          color: "оливковий",
          colors: ["оливка"],
        },
        RU: {
          category: "Юбки",
          name: "Кожаная юбка с узлом",
          description: "Юбка миди длины фасона карандаш на высокой посадке с разрезом на ножке и декоративным узлом. Ткань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          color: "оливковый",
          colors: ["оливка"],
        }
      }
    },
    
    {
      id: 34,
      price: 5360,
      isTop: false,
      sku: "12348",
      color: "burgundy",
      size: "XS S M L XL",
      category: "Costumes",
      image: "/Costumes/Wool Suit Burgundy/4.avif",
      images: [
        "/Costumes/Wool Suit Burgundy/2.avif", 
        "/Costumes/Wool Suit Burgundy/3.avif", 
        "/Costumes/Wool Suit Burgundy/1.avif", 
        "/Costumes/Wool Suit Burgundy/5.avif"
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Costumes",
          name: "Wool Suit Burgundy",
          description: "Wrap jacket with a neckline + palazzo pants. Composition: 75% natural wool, soft, does not itch against the skin.",
          color: "burgundy",
          colors: ["burgundy"],
        },
        FR: {
          category: "Costumes",
          name: "Costume en laine bordeaux",
          description: "Veste portefeuille avec encolure + pantalon palazzo. Composition : 75% laine naturelle, douce, ne gratte pas la peau.",
          color: "bordeaux",
          colors: ["bordeaux"],
        },
        UA: {
          category: "Костюми",
          name: "Вовняний костюм бургунді",
          description: "Жакет на запах із вирізом + брюки палаццо. Склад: натуральна вовна 75%, мʼяка, не колеться до тіла.",
          color: "бургундський",
          colors: ["бургунді"],
        },
        RU: {
          category: "Костюми",
          name: "Шерстяной костюм бургунди",
          description: "Жакет на запах с вырезом + брюки палаццо. Состав: натуральная шерсть 75%, мягкая, не колется телу.",
          color: "бургундский",
          colors: ["бургунди"],
        }
      }
    },

    {
      id: 35,
      price: 1800,
      isTop: false,
      sku: "12349",
      color: "mocha",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Mohair Sweater/1.avif",
      images: [
        "/Sweaters/Mohair Sweater/2.avif", 
        "/Sweaters/Mohair Sweater/3.avif", 
        "/Sweaters/Mohair Sweater/4.avif", 
        "/Sweaters/Mohair Sweater/5.avif"
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Mohair Sweater",
          description: "Loose-fit sweater with a wide neckline, can be worn off one shoulder. Composition: 100% mohair.",
          colors: ["mocha"],
        },
        FR: {
          category: "Pulls",
          name: "Pull en mohair",
          description: "Pull ample avec une large encolure, peut être porté sur une épaule. Composition : 100% mohair.",
          colors: ["moka"],
        },
        UA: {
          category: "Светри",
          name: "Светр із мохеру",
          description: "Светр вільного крою з широкой горловиною, можна спустити на одне плече. Склад: 100% мохер.",
          colors: ["мокко"],
        },
        RU: {
          category: "Светри",
          name: "Свитер из мохера",
          description: "Свитер свободного кроя с широкой горловиной, можно спустить на одно плечо. Состав: 100% мохер.",
          colors: ["мокко"],
        }
      }
    },

    {
      id: 36,
      price: 1375,
      isTop: false,
      sku: "12350",
      color: "beige",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Flare Sweater/1.avif",
      images: [
        "/Sweaters/Flare Sweater/2.avif", 
        "/Sweaters/Flare Sweater/3.avif", 
        "/Sweaters/Flare Sweater/4.avif", 
        "/Sweaters/Flare Sweater/5.avif",
        "/Sweaters/Flare Sweater/6.avif",
        "/Sweaters/Flare Sweater/7.avif",
        "/Sweaters/Flare Sweater/8.avif",
        "/Sweaters/Flare Sweater/9.avif",
        "/Sweaters/Flare Sweater/10.avif",
        "/Sweaters/Flare Sweater/11.avif",
        "/Sweaters/Flare Sweater/12.avif",
        "/Sweaters/Flare Sweater/13.avif",
        "/Sweaters/Flare Sweater/14.avif",
        "/Sweaters/Flare Sweater/15.avif",
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Flare Sweater",
          description: "Cropped sweater with a turtleneck and flared sleeves. Fabric: Knit (60% wool, 20% acrylic, 10% viscose, 10% elastane).",
          colors: ["beige", "black", "white"],
        },
        FR: {
          category: "Pulls",
          name: "Pull évasé",
          description: "Pull court avec col roulé et manches évasées. Tissu : maille (60% laine, 20% acrylique, 10% viscose, 10% élasthanne).",
          colors: ["beige", "noir", "blanc"],
        },
        UA: {
          category: "Светри",
          name: "Светр кльош",
          description: "Вкорочений светр із горлом та кльош рукавами. Тканина: трикотаж (60% вовна, 20% акрил, 10% віскоза, 10% еластан).",
          colors: ["бежевий", "чорний", "білий"],
        },
        RU: {
          category: "Светри",
          name: "Свитер клеш",
          description: "Укороченный свитер с горлом и клеш рукавами. Ткань: трикотаж (60% шерсть, 20% акрил, 10% вискоза, 10% эластан).",
          colors: ["бежевый", "черный", "белый"],
        }
      }
    },
    
    {
      id: 37,
      price: 1375,
      isTop: false,
      sku: "12351",
      color: "black",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Drawstring Sweater/1.avif",
      images: [
        "/Sweaters/Drawstring Sweater/2.avif", 
        "/Sweaters/Drawstring Sweater/3.avif", 
        "/Sweaters/Drawstring Sweater/4.avif", 
        "/Sweaters/Drawstring Sweater/5.avif",
        "/Sweaters/Drawstring Sweater/6.avif",
        "/Sweaters/Drawstring Sweater/7.avif",
        "/Sweaters/Drawstring Sweater/8.avif",
        "/Sweaters/Drawstring Sweater/9.avif",
        "/Sweaters/Drawstring Sweater/10.avif"
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Drawstring Sweater",
          description: "Wool sweater with a drawstring that adjusts the length. Fabric: Knit (60% wool, 20% acrylic, 10% viscose, 10% elastane).",
          colors: ["black", "white"],
        },
        FR: {
          category: "Pulls",
          name: "Pull avec cordon",
          description: "Pull en laine avec un cordon ajustant la longueur. Tissu : maille (60% laine, 20% acrylique, 10% viscose, 10% élasthanne).",
          colors: ["noir", "blanc"],
        },
        UA: {
          category: "Светри",
          name: "Светр зі шнурком",
          description: "Вовняний светр із шнурком, який регулює довжину. Тканина: трикотаж (60% вовна, 20% акрил, 10% віскоза, 10% еластан).",
          colors: ["чорний", "білий"],
        },
        RU: {
          category: "Светри",
          name: "Свитер со шнурком",
          description: "Шерстяной свитер со шнурком, регулирующий длину. Ткань: трикотаж (60% шерсть, 20% акрил, 10% вискоза, 10% эластан).",
          colors: ["черный", "белый"],
        }
      }
    },
    
    {
      id: 38,
      price: 1375,
      isTop: false,
      sku: "12352",
      color: "black",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Sweater Vest/1.avif",
      images: [
        "/Sweaters/Sweater Vest/2.avif", 
        "/Sweaters/Sweater Vest/3.avif", 
        "/Sweaters/Sweater Vest/4.avif", 
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Sweater Vest",
          description: "Oversized sweater with cropped sleeves. Fabric: Knit (60% wool, 20% acrylic, 10% viscose, 10% elastane).",
          colors: ["black"],
        },
        FR: {
          category: "Pulls",
          name: "Pull sans manches",
          description: "Pull oversize avec manches courtes. Tissu : maille (60% laine, 20% acrylique, 10% viscose, 10% élasthanne).",
          colors: ["noir"],
        },
        UA: {
          category: "Светри",
          name: "Светр-жилет",
          description: "Oversize светр із вкороченим рукавом. Тканина: трикотаж (60% вовна, 20% акрил, 10% віскоза, 10% еластан).",
          colors: ["чорний"],
        },
        RU: {
          category: "Светри",
          name: "Свитер-жилет",
          description: "Oversize свитер с укороченным рукавом. Ткань: трикотаж (60% шерсть, 20% акрил, 10% вискоза, 10% эластан).",
          colors: ["черный"],
        }
      }
    },

    {
      id: 39,
      price: 2800,
      isTop: false,
      isSpecialOffer: true,
      discountPrice: 2250,
      sku: "12353",
      color: "caramel",
      size: "XS S M L XL",
      category: "Skirts",
      image: "/Skirts/A-line Leather Skirt/4.avif",
      images: [
        "/Skirts/A-line Leather Skirt/2.avif", 
        "/Skirts/A-line Leather Skirt/3.avif", 
        "/Skirts/A-line Leather Skirt/1.avif", 
        "/Skirts/A-line Leather Skirt/5.avif"
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Skirts",
          name: "A-line Leather Skirt",
          description: "Maxi-length A-line skirt with a high waist and a belt. Fabric: High-quality eco-leather with a suede base. (Stretchy, does not crack.)",
          colors: ["caramel"],
        },
        FR: {
          category: "Jupes",
          name: "Jupe en cuir A-line",
          description: "Jupe longue A-line à taille haute avec ceinture. Tissu : cuir écologique de haute qualité sur une base en daim (stretch, ne se fissure pas).",
          colors: ["caramel"],
        },
        UA: {
          category: "Спідниці",
          name: "Шкіряна спідниця А-силуету",
          description: "Спідниця максі довжини А-силуету на високій посадці із поясом. Тканина: якісна екошкіра на замшевій основі. ( стречева, не тріскається )",
          colors: ["карамель"],
        },
        RU: {
          category: "Юбки",
          name: "Кожаная юбка А-силуэта",
          description: "Юбка макси длины А-силуэта на высокой посадке с поясом. Ткань: качественная экокожа на замшевой основе. (стречевая, не трескающаяся)",
          colors: ["карамель"],
        }
      }
    },

    {
      id: 40,
      price: 1250,
      isTop: false,
      sku: "54321",
      color: "beige",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Ribbed Golf/2.avif",
      images: [
        "/Sweaters/Ribbed Golf/1.avif",
        "/Sweaters/Ribbed Golf/3.avif",
        "/Sweaters/Ribbed Golf/4.avif",
        "/Sweaters/Ribbed Golf/5.avif",
        "/Sweaters/Ribbed Golf/6.avif",
        "/Sweaters/Ribbed Golf/7.avif",
        "/Sweaters/Ribbed Golf/8.avif",
        "/Sweaters/Ribbed Golf/9.avif",
        "/Sweaters/Ribbed Golf/10.avif",
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Ribbed Golf",
          description: "Basic ribbed golf for everyday wear and any outfit. Fabric: ribbed knit.",
          colors: ["beige", "olive"],
        },
        FR: {
          category: "Pulls",
          name: "Golf côtelé",
          description: "Golf côtelé basique pour un usage quotidien et pour n'importe quelle tenue. Tissu : tricot côtelé.",
          colors: ["beige", "olive"],
        },
        UA: {
          category: "Светри",
          name: "Гольф у рубчик",
          description: "Базовий гольф у рубчик на кожен день і під будь-який аутфіт. Тканина: трикотаж у рубчик.",
          colors: ["бежевий", "оливка"],

        },
        RU: {
          category: "Светри",
          name: "Гольф в рубчик",
          description: "Базовый гольф в рубчик на каждый день и под любой аутфит. Ткань: трикотаж в рубчик.",
          colors : ["бежевый", "оливка"],

        }
      }
    },
    
    {
      id: 41,
      price: 1500,
      isTop: false,
      sku: "65432",
      color: "молоко",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/Draped Golf/9.avif",
      images: [
        "/Sweaters/Draped Golf/2.avif",
        "/Sweaters/Draped Golf/3.avif",
        "/Sweaters/Draped Golf/4.avif",
        "/Sweaters/Draped Golf/5.avif",
        "/Sweaters/Draped Golf/6.avif",
        "/Sweaters/Draped Golf/7.avif",
        "/Sweaters/Draped Golf/8.avif",
        "/Sweaters/Draped Golf/1.avif",
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "Draped Golf",
          description: "Soft draped golf with sleeve slits. Fabric: 50% cashmere, 28% polyester, 28% nylon.",
          colors: ["молоко", "сірий"],
        },
        FR: {
          category: "Pulls",
          name: "Golf drapé",
          description: "Golf drapé doux avec fentes sur les manches. Tissu : 50% cachemire, 28% polyester, 28% nylon.",
          colors: ["laite", "gris"],
        },
        UA: {
          category: "Светри",
          name: "Гольф у драпіровку",
          description: "Мʼякий гольф у драпіровку із розрізами на рукавчиках. Тканина: 50% кашемір, 28% поліестер, 28% нейлон.",
          colors: ["молоко", "сірий"],
        },
        RU: {
          category: "Светри",
          name: "Гольф в драпировку",
          description: "Мягкий гольф в драпировку с разрезами на рукавах. Ткань: 50% кашемир, 28% полиэстер, 28% нейлон.",
          colors: ["молоко", "сірий"],
        }
      }
    },
    
    {
      id: 42,
      price: 1500,
      isTop: false,
      sku: "76543",
      color: "чорний",
      size: "XS S M L XL",
      category: "Sweaters",
      image: "/Sweaters/V-Neck Golf/4.avif",
      images: [
        "/Sweaters/V-Neck Golf/2.avif",
        "/Sweaters/V-Neck Golf/3.avif",
        "/Sweaters/V-Neck Golf/1.avif",
        "/Sweaters/V-Neck Golf/5.avif",
        "/Sweaters/V-Neck Golf/6.avif",
        "/Sweaters/V-Neck Golf/7.avif",
      ],
      
      sizes: ["XS", "S", "M", "L", "XL"],
      translations: {
        EN: {
          category: "Sweaters",
          name: "V-Neck Golf",
          description: "Soft V-neck golf with sleeve slits. Fabric: 50% cashmere, 28% polyester, 28% nylon.",
          colors: ["чорний", "сірий"],
        },
        FR: {
          category: "Pulls",
          name: "Golf à col en V",
          description: "Golf doux à col en V avec fentes sur les manches. Tissu : 50% cachemire, 28% polyester, 28% nylon.",
          colors: ["noir", "gris"],
        },
        UA: {
          category: "Светри",
          name: "Гольф із V-горлом",
          description: "Мʼякий гольф із V-горлом і розрізами на рукавах. Тканина: 50% кашемір, 28% поліестер, 28% нейлон.",
          colors: ["чорний", "сірий"],
        },
        RU: {
          category: "Светри",
          name: "Гольф с V-горлом",
          description: "Мягкий гольф с V-горлом и разрезами на рукавах. Ткань: 50% кашемир, 28% полиэстер, 28% нейлон.",
          colors: ["чёрный", "синий"],
        }
      }
    }
    
 ];
  export default products;
  