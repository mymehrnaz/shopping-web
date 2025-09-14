const translations = {
  en: {
     collection: ".fashion collection.",
     freeItem:"Zip-Hoded jacket",
    fashion: "Choose your own style",
   descripti:"َAntony",
    womensClothes: "Women's Clothes",
    wirelessHeadphones: "shorts 3-piece sets women",
    price: "$59.99",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    buyNow: "Buy Now",
    productin:"Damen Grafic T-shirt",
    teene:"Teenage girl",
      teeni:"Teenage girl",
      boyTem:"Boy set",
    young:"Young women",
    boy:"Men's clothes",
    sport:"Sport set",
    sporti:"Sport set",
    youngi:"Young women",
    boyi:"Young men",
    mode:"Fashionable",
    kido:"Kid's Clothes",
 switchText: "Switch to فارسی"
  },
  fa: {
     collection:".مجموعه مد و فشن.",
     freeItem:"کاپشن زیپدار",
    fashion: "سبک خود را انتخاب کنید",
    descripti:"آنتونی",
   smartwatch:"ساعت هوشمند",
    womensClothes: "لباس زنان",
    wirelessHeadphones: "شلوارک 3 تکه زنانه",
    price: "59.99 دلار",
    description: "هدفون بی‌سیم با کیفیت بالا با نویز کنسلینگ و عمر باتری طولانی.",
    buyNow: "خرید حالا",
    productin:"تیشرت گرافیکی زنانه",
    teene:"دختران نوجوان",
      teeni:"دختران نوجوان",
      boyTem:"مجموعه پسران",
    young:"زنان جوان",
    boy:"لباس مردان",
    sport:"مجموعه ورزشی",
      sporti:"مجموعه ورزشی",
       youngi:"زنان جوان",
       boyi:"مردان جوان",
       mode:"مد روز",
       kido:"لباس کودکان",
    switchText: "Switch to English",
  }
};

// مقدار اولیه زبان (می‌تونی از localStorage بخونی)
let currentLanguage = "en";

// تابع برای تغییر زبان
function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "fa" : "en";
  updateContent();
  document.getElementById("languageToggle").textContent = translations[currentLanguage].switchText;
}localStorage.setItem("language", currentLanguage);
document.addEventListener("DOMContentLoaded", () => {
  currentLanguage = localStorage.getItem("language") || "en";
  updateContent();
  document.getElementById("languageToggle").textContent = translations[currentLanguage].switchText;
  document.getElementById("languageToggle").addEventListener("click", toggleLanguage);
});

// تابع برای به‌روزرسانی متن‌ها
function updateContent() {
  document.querySelector("h1").textContent = translations[currentLanguage].fashion;
  document.querySelector(".kido").textContent = translations[currentLanguage].kido;
  document.querySelector(".mode").textContent = translations[currentLanguage].mode;
  document.querySelector(".sporti").textContent = translations[currentLanguage].sporti;
  document.querySelector(".boyi").textContent = translations[currentLanguage].boyi;
  document.querySelector(".teene").textContent = translations[currentLanguage].teene;
  document.querySelector(".teeni").textContent = translations[currentLanguage].teeni;
    document.querySelector(".boy-tem").textContent = translations[currentLanguage].boyTem;
    document.querySelector(".sport").textContent = translations[currentLanguage].sport;
  document.querySelector(".young").textContent = translations[currentLanguage].young;
   document.querySelector(".youngi").textContent = translations[currentLanguage].youngi;
   document.querySelector(".boy").textContent = translations[currentLanguage].boy;
  document.querySelector (".collection-item").textContent = translations[currentLanguage].collection;
  document.querySelector (".productin-item").textContent = translations [currentLanguage ].productin;
  document.querySelector(".womens-clothes-title").textContent = translations[currentLanguage].womensClothes;
  document.querySelector(".product-title").textContent = translations[currentLanguage].wirelessHeadphones;
  document.querySelector(".product-price").textContent = translations[currentLanguage].price;
  document.querySelector(".product-description").textContent = translations[currentLanguage].description;
  document.querySelector(".buy-now").textContent = translations[currentLanguage].buyNow;
  document.querySelector(".descripti-title").textContent = translations[currentLanguage].descripti;
  document.querySelector(".free-item").textContent = translations[currentLanguage].freeItem;
}

// لود اولیه و اضافه کردن ایونت به دکمه
document.addEventListener("DOMContentLoaded", () => {
  updateContent();
  document.getElementById("languageToggle").addEventListener("click", toggleLanguage);
});
document.body.setAttribute("lang", currentLanguage);
