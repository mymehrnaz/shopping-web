const translations = {
  en: {
     collection: ".fashion collection.",
     freeItem:"Zip-Hoded jacket",
    fashion: "Choose your own style",
   descripti:"َAntony",
    womensClothes: "Women's Clothes",
    wirelessHeadphones: "shorts 3-piece sets women",
    price: "$59.99",
    description: "Oversized zip-up hoodie in a soft pink bas",
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
    headi:"Winter baby clothes",
    kidii:"Children's clothes",
    kidiii:"boy's collection",
    kidiv:"girl's collection",
    kidv:"kids clothes",
    kidvi:"kids clothes",
    ladyi:"Short-sleeve T-shirt blush pink",
     ladyii:"A collage-style outfit",
      ladyiii:"Another collage-style outfit ",
       ladyiv:"A cream hoodie outfit with brown pants",
        ladyv:"Teenage girl outfit",
        vari:"Men's sportwear",
        varii:"White hoodie with a high collar",
        variii:"Men's sportwear",
        variv:"Men's sportwear",
        varv:"Men's sportwear",
        finchi:"winter set collection",
        finchii:"children's comfortable clothes",
        finchiii:"boy's set",
        finchiv:"kid's set",
        finchv:"kid's collection",
        finchvi:"girls denim",
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
    description: "هودی زیپدار سایز بزرگ با ضمینه صورتی",
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
       headi:"لباس زمستانه کودکان",
       kidii:"لباس بچه گانه",
       kidiii:"مجموعه پسرانه",
       kidiv:"مجموعه دخترانه",
       kidv:"لباس کودکان",
       kidvi:"لباس کودکان",
       ladyi:"تی شرت آستین کوتاه به رنگ صورتی کمرنگ",
         ladyii:"یک لباس به سبک کلاژ",
           ladyiii:"یک سبک دیگر کلاژ",
             ladyiv:"هودی کرم رنگ با شلوار قهوه ای",
               ladyv:"لباس بیرون دخترانه",
               vari:"لباس ورزشی",
               varii:"هدی سفید با یقه بلند",
               variii:"لباس ورزشی",
               variv:"لباس ورزشی",
               varv:"لباس ورزشی",
               finchi:"مجموعه ست زمستانه",
               finchii:"لباس راحتی کودکان",
               finchiii:"ست پسرانه",
               finchiv:"لباس ست کودکان",
               finchv:"ست کودکانه",
               finchvi:"جین دخترانه",
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
   document.querySelector(".ladyi").textContent = translations[currentLanguage].ladyi;
    document.querySelector(".ladyii").textContent = translations[currentLanguage].ladyii;
     document.querySelector(".ladyiii").textContent = translations[currentLanguage].ladyiii;
      document.querySelector(".ladyiv").textContent = translations[currentLanguage].ladyiv;
       document.querySelector(".ladyv").textContent = translations[currentLanguage].ladyv;
        document.querySelector(".vari").textContent = translations[currentLanguage].vari;
         document.querySelector(".varii").textContent = translations[currentLanguage].varii;
          document.querySelector(".variii").textContent = translations[currentLanguage].variii;
           document.querySelector(".variv").textContent = translations[currentLanguage].variv;
            document.querySelector(".varv").textContent = translations[currentLanguage].varv;
             document.querySelector(".finchi").textContent = translations[currentLanguage].finchi;
              document.querySelector(".finchii").textContent = translations[currentLanguage].finchii;
               document.querySelector(".finchiii").textContent = translations[currentLanguage].finchiii;
                document.querySelector(".finchiv").textContent = translations[currentLanguage].finchiv;
                 document.querySelector(".finchv").textContent = translations[currentLanguage].finchv;
                  document.querySelector(".finchvi").textContent = translations[currentLanguage].finchvi;
                  
  document.querySelector("h1").textContent = translations[currentLanguage].fashion;
    document.querySelector(".kidiii").textContent = translations[currentLanguage].kidiii;
      document.querySelector(".kidiv").textContent = translations[currentLanguage].kidiv;
        document.querySelector(".kidv").textContent = translations[currentLanguage].kidv;
          document.querySelector(".kidvi").textContent = translations[currentLanguage].kidvi;
  document.querySelector(".kido").textContent = translations[currentLanguage].kido;
  document.querySelector(".kidii").textContent = translations[currentLanguage].kidii;
  document.querySelector(".headi").textContent = translations[currentLanguage].headi;
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
