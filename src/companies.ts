export type Company = {
  id: string;
  name: string;
  logo: string;
  isOk: boolean;
  city?: string;
  state?: string;
  country?: string;
  description?: string;
  replacements?: Company[];
};

export const companies: Company[] = [
  {
    name: "Kentucky Fried Chicken",
    id: "1",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_11",
        isOk: true,
        name: "Al-Baik",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Al-Baik-logo.png",
      },
    ],
    city: "لويفيل",
    state: "كنتاكي",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم الوجبات السريعة العالمية المعروفة بدجاجها المقلي",
  },
  {
    name: "McDonald's",
    id: "2",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_21",
        isOk: true,
        name: "Kudu",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Kudu-Logo.png",
      },
    ],
    city: "سان برناردينو",
    state: "كاليفورنيا",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم الوجبات السريعة العالمية المتخصصة بالهامبرجر",
  },
  {
    name: "Pepsi",
    id: "3",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Pepsi-logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_31",
        isOk: true,
        name: "Panda",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Panda-logo.png",
      },
    ],
    city: "نيو بيرن",
    state: "كارولاينا الشمالية",
    country: "الولايات المتحدة الأمريكية",
    description: "شركة المشروبات الغازية العالمية المعروفة بمشروب بيبسي الغازي",
  },
  {
    name: "Coca-Cola",
    id: "4",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_41",
        isOk: true,
        name: "Qawha",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Qawha-logo.png",
      },
    ],
    city: "أتلانتا",
    state: "جورجيا",
    country: "الولايات المتحدة الأمريكية",
    description: "شركة المشروبات الغازية العالمية المعروفة بمشروب كوكاكولا",
  },
  {
    name: "Lay's",
    id: "5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Lay%27s_logo_2019.svg",
    isOk: false,
    replacements: [
      {
        id: "isOK_51",
        isOk: true,
        name: "Chipsico",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Chipsico-logo.png",
      },
    ],
    city: "بلانو",
    state: "تكساس",
    country: "الولايات المتحدة الأمريكية",
    description: "علامة تجارية عالمية للوجبات الخفيفة معروفة برقائق البطاطس",
  },
  {
    name: "Burger King",
    id: "6",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Burger-King_Logo-700x420.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_61",
        isOk: true,
        name: "Mr. Burger",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Mr.-Burger-logo.png",
      },
    ],
    city: "ميامي",
    state: "فلوريدا",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم الوجبات السريعة العالمية المتخصصة بالبرجر",
  },
  {
    name: "Starbucks",
    id: "7",
    logo: "https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_71",
        isOk: true,
        name: "Coffee Republic",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Coffee-Republic-logo.png",
      },
    ],
    city: "سياتل",
    state: "واشنطن",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مقاهي عالمية متخصصة بالقهوة",
  },
  {
    name: "Subway",
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
    name: "Pizza Hut",
    id: "9",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Pizza-Hut-logo-640x441.png",
    isOk: false,
    replacements: [
      {
        id: "isOK_91",
        isOk: true,
        name: "Pizza Planet",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Pizza-Planet-logo.png",
      },
    ],
    city: "ويتشيتا",
    state: "كانساس",
    country: "الولايات المتحدة الأمريكية",
    description: "سلسلة مطاعم عالمية متخصصة بالبيتزا",
  },
  {
    name: "Taco Bell",
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
    name: "Krispy Kreme",
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
    name: "Dunkin' Donuts",
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
    name: "Domino's Pizza",
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
    name: "Papa John's",
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
    name: "Wendy's",
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
    name: "Chick-fil-A",
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
    name: "Dairy Queen",
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
    name: "Arby's",
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
];
