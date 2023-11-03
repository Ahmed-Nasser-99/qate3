export type Product = {
  id: string;
  name: string;
  englishName?: string;
  logo: string;
  isOk: boolean;
  city?: string;
  state?: string;
  country?: string;
  description?: string;
  company?: string;
  replacements?: Product[];
};

const elbaik: Product = {
  name: "البيك",
  englishName: "Albaik",
  id: "isOk_1",
  logo: "https://ar.wikipedia.org/wiki/%D9%85%D9%84%D9%81:Albaik_logo.svg",
  isOk: true,
  city: "جدة",
  state: "مكة المكرمة",
  country: "المملكة العربية السعودية",
  description: "سلسلة مطاعم الوجبات السريعة السعودية المتخصصة بالدجاج المقلي",
};

const buffaloBurger: Product = {
  id: "isOk_2",
  isOk: true,
  name: "بافلو برجر",
  logo: "https://www.facebook.com/BuffaloBurger/photos/a.10150377323819681/10156995355904681/?__cft__[0]=AZXEn87nD7zqlOZsDsMWTivWPvnlLFoOvLg0c7Zr9SYYS8PJPn0F8R4biIfpaF3BtgVMGK_07cJC3nEIDmk6iJ0kExn_R1uUs-3vWAPs_TUXnWaJO3ST19ivPTbc-WkyPHQ&__tn__=EH-R",
  country: "مصر",
  description: "سلسلة مطاعم الوجبات السريعة المصرية المتخصصة بالبرجر",
};

const spiroSpathis: Product = {
  id: "isOk_3",
  isOk: true,
  name: "سبايرو سباثيس",
  logo: "https://upload.wikimedia.org/wikipedia/ar/d/de/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%B3%D8%A8%D8%A7%D9%8A%D8%B1%D9%88_%D8%B3%D8%A8%D8%A7%D8%AA%D8%B3.jpg",
  country: "مصر",
  description:
    "شركة المشروبات الغازية المصرية المعروفة وتعتبر اقدم شركه مياه غازيه في مصر",
};

const schnider: Product = {
  id: "isOk_4",
  isOk: true,
  name: "شنايدر",
  logo: "data:image/jpeg;base64,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",
  country: "فرنسا",
  description: "شركه مصريه للمشروبات الغازيه",
};

const willysKitchen: Product = {
  id: "isOk_5",
  isOk: true,
  name: "ويليز كيتشن",
  logo: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/387096232_718014620357920_6108030743608947522_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xnQ1Y3kLt8kAX8cR57c&_nc_ht=scontent.fcai19-4.fna&oh=00_AfBRpEQKQdmnaxvQLMGd4TJjBCodXoNO7PXa-Uz0apdFTQ&oe=654AFD71",
  country: "مصر",
  description: "سلسلة مطاعم الوجبات السريعة السعودية المتخصصة بالبرجر",
};

const bigChips: Product = {
  id: "isOk_6",
  isOk: true,
  name: "بيج شيبس",
  logo: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/283461406_130848129559193_4004209258275286462_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sUDQPovT9HMAX_wB2J5&_nc_ht=scontent-hbe1-1.xx&oh=00_AfBned5n5KQFkEL-p1MIUXIKqHPQ7yrAxf9xjx1opHU9HQ&oe=654AB0CA",
  country: "مصر",
  description: "شركه مصريه للمقرمشات",
};

const tiger: Product = {
  id: "isOk_7",
  isOk: true,
  name: "تايجر",
  logo: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/283461406_130848129559193_4004209258275286462_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sUDQPovT9HMAX_wB2J5&_nc_ht=scontent-hbe1-1.xx&oh=00_AfBned5n5KQFkEL-p1MIUXIKqHPQ7yrAxf9xjx1opHU9HQ&oe=654AB0CA",
  country: "مصر",
  description: "شركه مصريه للمقرمشات",
  company: "ايجيبت فوودؤ",
};

const espressolab: Product = {
  id: "isOk_8",
  isOk: true,
  name: "اسبريسو لاب",
  logo: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/339426915_1852489011805134_9054902161573072287_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0kb_otP3V-MAX92nLZi&_nc_ht=scontent.fcai19-4.fna&oh=00_AfAsqXMR-NLBw0cIyB3wRspedgy3oIFCdzsPeRG5a2KaHA&oe=654948FA",
  country: "مصر",
  description: "كافيه مصري منافس للشركات الاجنبيه العالميه",
};

const socialCafe: Product = {
  id: "isOk_9",
  isOk: true,
  name: "سوشيال كافيه",
  logo: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/312548622_496812989131515_8603303986331555596_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yHjcBDuZkUUAX9YDeyK&_nc_ht=scontent.fcai19-4.fna&oh=00_AfCGgUU4PKfUEmLxOrhwbq7mNRCxZD95ZdRTi6G4_O14LA&oe=654A4EC5",
  country: "مصر",
  description: "مقهي مصري بجوده عالميه",
};

const pizzaKing: Product = {
  id: "isOk_10",
  isOk: true,
  name: "بيتزا كينج",
  logo: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/310565205_490366596467660_6588939168871962968_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uRKYNZf0OHYAX9VKBVM&_nc_ht=scontent.fcai19-4.fna&oh=00_AfC7Ynf9ArPmnYwrLJ30JAcecwU2D_EBUvbtEVaRlEXXXw&oe=654A979A",
  country: "مصر",
  description: "مطعم مصري متخصص بالبيتزا",
};

const elArosaTea: Product = {
  id: "isOk_11",
  isOk: true,
  name: "العروسة ",
  logo: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/393742783_732192765607230_7537208461561463758_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z7DYnRpuAP0AX8f-m-A&_nc_ht=scontent-hbe1-1.xx&oh=00_AfCx-J9jxEKVHGREYxEL4I5mXYFXWKDtpGITzjLyMqBCGw&oe=654A5F64",
  country: "مصر",
  description: "شركه مصريه متخصصه في انتاج اجود انواع الشاي",
};

const elkabosTea: Product = {
  id: "isOk_12",
  isOk: true,
  name: "الكبوس ",
  logo: "https://scontent.fcai19-4.fna.fbcdn.net/v/t1.18169-9/223653_193281497400055_5774786_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4dc865&_nc_ohc=fmkfOA5b_UAAX824y7g&_nc_ht=scontent.fcai19-4.fna&oh=00_AfC0Ef_pui_1nested90fc2XIWlZu1tCgsSPgURLW9DwEA&oe=656C9DDE",
  country: "اليمن",
  description: "شركه مصريه متخصصه في انتاج اجود انواع الشاي",
  company: "مجموعة الكبوس للتجارة والصناعة والاستثمار",
};

const juhayna: Product = {
  id: "isOk_13",
  isOk: true,
  name: "جهينة",
  logo: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/347648810_573199185007480_4228158152817112364_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pmAa3PGxR1oAX_Nvta_&_nc_ht=scontent.fcai19-4.fna&oh=00_AfD3IbhTCCK9PNRnHdIhC0UitR_XhD-LzqobbTB94wZh2Q&oe=6549AC4C",
  country: "مصر",
  description: "شركه مصريه متخصصه في انتاج الالبان",
};

const elmaraai: Product = {
  id: "isOk_14",
  isOk: true,
  name: "المراعي",
  logo: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/355022994_650621733757228_1383541278914311903_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TsENgrxKuhkAX8mhjjI&_nc_ht=scontent.fcai19-4.fna&oh=00_AfBPji6tfrSCWLJ1-BM_Tx3hcfBVBzlT2e1yGrLKeM8uKg&oe=654AEBE0",
  country: "السعودية",
  description: "شركه سعوديه متخصصه في انتاج الالبان",
};

const samaraGum: Product = {
  id: "isOk_15",
  isOk: true,
  name: "لبان سمارة",
  logo: "https://i0.wp.com/www.almasrymarket.de/wp-content/uploads/2021/02/lebansamara.png?fit=819%2C1000&ssl=1",
  country: "مصر",
  description: "لبان مصري اصيل ومع تحيات احمد عسكر 3>",
};

export const products: Product[] = [
  {
    name: "كنتاكي",
    englishName: "Kentucky Fried Chicken",
    id: "1",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
    isOk: false,
    replacements: [elbaik],
    city: "لويفيل",
    state: "كنتاكي",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم الوجبات السريعة العالمية المعروفة بدجاجها المقلي",
  },
  {
    name: "ماكدونالدز",
    englishName: "McDonald's",
    id: "2",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png",
    isOk: false,
    replacements: [buffaloBurger, willysKitchen],
    city: "سان برناردينو",
    state: "كاليفورنيا",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم الوجبات السريعة العالمية المتخصصة بالهامبرجر",
  },
  {
    name: "بيبسي",
    englishName: "Pepsi",
    id: "3",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Pepsi-logo.png",
    isOk: false,
    replacements: [spiroSpathis, schnider],
    city: "نيو بيرن",
    state: "كارولاينا الشمالية",
    country: "الولايات المتحدة الأمريكية",
    description: "شركة المشروبات الغازية العالمية المعروفة بمشروب بيبسي الغازي",
  },
  {
    name: "كوكاكولا",
    englishName: "Coca-Cola",
    id: "4",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png",
    isOk: false,
    replacements: [spiroSpathis, schnider],
    city: "أتلانتا",
    state: "جورجيا",
    country: "الولايات المتحدة الأمريكية",
    description: "شركة المشروبات الغازية العالمية المعروفة بمشروب كوكاكولا",
  },
  {
    name: "ليز",
    englishName: "Lay's",
    id: "5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Lay%27s_logo_2019.svg",
    isOk: false,
    replacements: [bigChips, tiger],
    city: "بلانو",
    state: "تكساس",
    country: "الولايات المتحدة الأمريكية",
    description: "علامة تجارية عالمية للوجبات الخفيفة معروفة برقائق البطاطس",
  },
  {
    name: "برجر كينج",
    englishName: "Burger King",
    id: "6",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Burger-King_Logo-700x420.png",
    isOk: false,
    replacements: [buffaloBurger, willysKitchen],
    city: "ميامي",
    state: "فلوريدا",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم الوجبات السريعة العالمية المتخصصة بالبرجر",
  },
  {
    name: "ستاربكس",
    englishName: "Starbucks",
    id: "7",
    logo: "https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo.png",
    isOk: false,
    replacements: [socialCafe, espressolab],
    city: "سياتل",
    state: "واشنطن",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مقاهي عالمية متخصصة بالقهوة",
  },
  {
    name: "سبواي",
    englishName: "Subway",
    id: "8",
    logo: "https://1000logos.net/wp-content/uploads/2017/06/Subway-logo-640x356.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_81",
        isOk: true,
        name: "Super Sandwich",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Super-Sandwich-logo.png",
      },
    ],
    city: "ميلفورد",
    state: "كونيتيكت",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم وجبات سريعة عالمية متخصصة بالساندويتشات",
  },
  {
    name: "بيتزا هت",
    englishName: "Pizza Hut",
    id: "9",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Pizza-Hut-logo-640x441.png",
    isOk: false,
    replacements: [pizzaKing],
    city: "ويتشيتا",
    state: "كانساس",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم عالمية متخصصة بالبيتزا",
  },
  {
    name: "تاكو بيل",
    englishName: "Taco Bell",
    id: "11",
    logo: "https://1000logos.net/wp-content/uploads/2017/06/Taco-Bell-Logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_111",
        isOk: true,
        name: "Taco Halal",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Taco-Halal-logo.png",
      },
    ],
    city: "إيرفاين",
    state: "كاليفورنيا",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم عالمية متخصصة بالتاكو المكسيكية ",
  },
  {
    name: "كريسبي كريم",
    englishName: "Krispy Kreme",
    id: "12",
    logo: "https://1000logos.net/wp-content/uploads/2018/02/Krispy-Kreme-Logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_121",
        isOk: true,
        name: "Krispy Karak",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Krispy-Karak-logo.png",
      },
    ],
    city: "وينستون-سالم",
    state: "كارولاينا الشمالية",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مخابز عالمية متخصصة بالدونات",
  },
  {
    name: "دانكن دونتس",
    englishName: "Dunkin' Donuts",
    id: "13",
    logo: "https://1000logos.net/wp-content/uploads/2023/04/Dunkin-Donuts-logo-768x432.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_131",
        isOk: true,
        name: "Donuts Galore",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Donuts-Galore-logo.png",
      },
    ],
    city: "كانتون",
    state: "أوهايو",
    country: "الولايات المتحدة الأمريكية",
    description: " سلسلة مخابز عالمية متخصصة بالدونات",
  },
  {
    name: "دومينوز بيتزا",
    englishName: "Domino's Pizza",
    id: "14",
    logo: "https://1000logos.net/wp-content/uploads/2023/04/Dominos-logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_141",
        isOk: true,
        name: "Pizza Point",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Pizza-Point-logo.png",
      },
    ],
    city: "آن أربور",
    state: "ميشيغان",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة توصيل بيتزا عالمية",
  },
  {
    name: "بابا جونز",
    englishName: "Papa John's",
    id: "15",
    logo: "https://1000logos.net/wp-content/uploads/2023/04/Papa-Johns-logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_151",
        isOk: true,
        name: "Pizza Palace",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Pizza-Palace-logo.png",
      },
    ],
    city: "جيفرسونفيل",
    state: "تينيسي",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم بيتزا عالمية",
  },
  {
    name: "وينديز",
    englishName: "Wendy's",
    id: "16",
    logo: "https://1000logos.net/wp-content/uploads/2017/08/Wendys-Logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_161",
        isOk: true,
        name: "Wendy's Arabian Grill",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Wendys-Arabian-Grill-logo.png",
      },
    ],
    city: "كولومبس",
    state: "جورجيا",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم وجبات سريعة عالمية",
  },
  {
    name: "تشيك فليه",
    englishName: "Chick-fil-A",
    id: "17",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Chick-fil-A-logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_171",
        isOk: true,
        name: "ChickenCo",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/ChickenCo-logo.png",
      },
    ],
    city: "أتلانتا",
    state: "جورجيا",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم دجاج ووجبات سريعة عالمية",
  },
  {
    name: "ديري كوين",
    englishName: "Dairy Queen",
    id: "18",
    logo: "https://1000logos.net/wp-content/uploads/2020/12/Dairy-Queen-Logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_181",
        isOk: true,
        name: "Ice Cream Land",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Ice-Cream-Land-logo.png",
      },
    ],
    city: "إدجرتون",
    state: "ويسكونسن",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم آيس كريم عالمية",
  },
  {
    name: "ارابيز",
    englishName: "Arby's",
    id: "20",
    logo: "https://1000logos.net/wp-content/uploads/2018/04/Arbys-Logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_201",
        isOk: true,
        name: "Shawarma House",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Shawarma-House-logo.png",
      },
    ],
    city: "سان دييغو",
    state: "كاليفورنيا",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم وجبات سريعة عالمية",
  },
  {
    name: "ليبتون",
    englishName: "Lipton",
    id: "21",
    logo: "https://discoverytrail.org/wp-content/uploads/2018/05/Lipton-logo.png",
    isOk: false,
    replacements: [elArosaTea, elkabosTea],
    city: "لندن",
    state: "بريطانيا",
    country: "المملكة المتحدة",
    description: "شركة عالمية للشاي",
    company: "يونيليفر",
  },
  {
    name: "دانون",
    englishName: "Danone",
    id: "22",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Danone-logo-768x432.png",
    isOk: false,
    replacements: [elmaraai, juhayna],
    city: "باريس",
    state: "فرنسا",
    country: "فرنسا",
    description: "شركة عالمية للألبان",
    company: "دانون",
  },
  {
    name: "تشكتلس",
    englishName: "Chiclets",
    id: "23",
    logo: "https://logowik.com/content/uploads/images/chiclets-adams.jpg",
    isOk: false,
    replacements: [samaraGum],
    city: "نيويورك",
    state: "نيويورك",
    country: "الولايات المتحدة الأمريكية",
    description: "شركة لأنتاج العلكة والحلوى",
    company: "موندليز",
  },
  {
    name: "كلورتس",
    englishName: "Clorets",
    id: "24",
    logo: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/352824638_902097597553776_6900637503203201584_n.png?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fr4L-3NB5LUAX9TCU--&_nc_ht=scontent.fcai19-4.fna&oh=00_AfB4RIQugaDOmX319NMRzcHc9vvE9aCxEHaovzjLmE01Pg&oe=65494039",
    isOk: false,
    replacements: [samaraGum],
    city: "شيكاغو",
    state: "إلينوي",
    country: "الولايات المتحدة الأمريكية",
    description: "شركة لأنتاج الحلوى الطبية",
    company: "موندليز",
  },
  {
    name: "ترايدنت",
    englishName: "Trident",
    id: "25",
    logo: "https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/352769489_787331999700822_4465806166204300643_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_8neD-6-wOwAX-VsM4l&_nc_ht=scontent-hbe1-1.xx&oh=00_AfBnm1Cawn0ATFLIEeN8_pR0BSmTsG6AF7wVj7K9a7vkJQ&oe=65497B3A",
    isOk: false,
    replacements: [samaraGum],
    city: "شيكاغو",
    state: "إلينوي",
    country: "الولايات المتحدة الأمريكية",
    description: "شركة لأنتاج العلكة",
    company: "موندليز",
  },
  {
    name: "هولز",
    englishName: "Halls",
    id: "26",
    logo: "https://scontent.fcai19-4.fna.fbcdn.net/v/t39.30808-6/348225582_1374782929979766_3374070143860030986_n.png?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m_IMUjTEhnYAX8I5i6M&_nc_ht=scontent.fcai19-4.fna&oh=00_AfB7digkH-R8bUBfEs4X_rfNO-PVYz3zC_yL2uDW-u_RVw&oe=654A6059",
    isOk: false,
    replacements: [samaraGum],
    city: "وايت فييلد",
    state: "لانكشاير",
    country: "انجلترا",
    description: "شركة لأنتاج الحلوى الطبية",
    company: "موندليز",
  },
];
