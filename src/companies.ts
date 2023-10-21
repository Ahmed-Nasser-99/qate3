export type Company = {
  id: number;
  name: string;
  logo: string;
  isOk: boolean;
  replacements?: Company[];
};

export const companies: Company[] = [
  {
    name: "Kentucky Fried Chicken",
    id: 1,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Al-Baik",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Al-Baik-logo.png",
      },
    ],
  },
  {
    name: "McDonald's",
    id: 2,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Kudu",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Kudu-Logo.png",
      },
    ],
  },
  {
    name: "Pepsi",
    id: 3,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Pepsi-logo.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Panda",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Panda-logo.png",
      },
    ],
  },
  {
    name: "Coca-Cola",
    id: 4,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Coca-Cola-Logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Qawha",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Qawha-logo.png",
      },
    ],
  },
  {
    name: "Lay's",
    id: 5,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Lays-logo.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Chipsico",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Chipsico-logo.png",
      },
    ],
  },
  {
    name: "Burger King",
    id: 6,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Burger-King-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Mr. Burger",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Mr.-Burger-logo.png",
      },
    ],
  },
  {
    name: "Starbucks",
    id: 7,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Starbucks-Logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Coffee Republic",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Coffee-Republic-logo.png",
      },
    ],
  },
  {
    name: "Subway",
    id: 8,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Subway-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Super Sandwich",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Super-Sandwich-logo.png",
      },
    ],
  },
  {
    name: "Pizza Hut",
    id: 9,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Pizza-Hut-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Pizza Planet",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Pizza-Planet-logo.png",
      },
    ],
  },
  {
    name: "KFC",
    id: 10,
    logo: "https://1000logos.net/wp-content/uploads/2017/05/KFC-Logo.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Al Baik",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Al-Baik-logo.png",
      },
    ],
  },
  {
    name: "Taco Bell",
    id: 11,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Taco-Bell-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Taco Halal",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Taco-Halal-logo.png",
      },
    ],
  },
  {
    name: "Krispy Kreme",
    id: 12,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Krispy-Kreme-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Krispy Karak",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Krispy-Karak-logo.png",
      },
    ],
  },
  {
    name: "Dunkin' Donuts",
    id: 13,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Dunkin-Donuts-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Donuts Galore",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Donuts-Galore-logo.png",
      },
    ],
  },
  {
    name: "Domino's Pizza",
    id: 14,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Dominos-pizza-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Pizza Point",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Pizza-Point-logo.png",
      },
    ],
  },
  {
    name: "Papa John's",
    id: 15,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Papa-Johns-Pizza-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Pizza Palace",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Pizza-Palace-logo.png",
      },
    ],
  },
  {
    name: "Wendy's",
    id: 16,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Wendys-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Wendy's Arabian Grill",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Wendys-Arabian-Grill-logo.png",
      },
    ],
  },
  {
    name: "Chick-fil-A",
    id: 17,
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Chick-fil-A-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "ChickenCo",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/ChickenCo-logo.png",
      },
    ],
  },
  {
    name: "Dairy Queen",
    id: 18,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Dairy-Queen-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Ice Cream Land",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Ice-Cream-Land-logo.png",
      },
    ],
  },
  {
    name: "Baskin Robbins",
    id: 19,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Baskin-Robbins-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Frosty Treats",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Frosty-Treats-logo.png",
      },
    ],
  },
  {
    name: "Arby's",
    id: 20,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Arbys-logo.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Shawarma House",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Shawarma-House-logo.png",
      },
    ],
  },
  {
    name: "Popeyes",
    id: 21,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Popeyes-Louisiana-Kitchen-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Chicking",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Chicking-logo.png",
      },
    ],
  },
  {
    name: "Chipotle",
    id: 22,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Chipotle-Mexican-Grill-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Wrap It Up",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Wrap-It-Up-logo.png",
      },
    ],
  },
  {
    name: "Sonic",
    id: 23,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Sonic-Drive-In-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Super Sonic",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Super-Sonic-logo.png",
      },
    ],
  },
  {
    name: "Little Caesars",
    id: 24,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Little-Caesars-Pizza-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Pizza Prince",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Pizza-Prince-logo.png",
      },
    ],
  },
  {
    name: "Jack in the Box",
    id: 25,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Jack-In-The-Box-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Jacks Burgers",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Jacks-Burgers-logo.png",
      },
    ],
  },
  {
    name: "Carl's Jr.",
    id: 26,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Carls-Jr-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Carl's Arabic Grill",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Carls-Arabic-Grill-logo.png",
      },
    ],
  },
  {
    name: "Cold Stone Creamery",
    id: 27,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Cold-Stone-Creamery-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Cream Stone",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Cream-Stone-logo.png",
      },
    ],
  },
  {
    name: "Auntie Anne's",
    id: 28,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Auntie-Annes-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Auntie Fatima's",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Auntie-Fatimas-logo.png",
      },
    ],
  },
  {
    name: "Panera Bread",
    id: 29,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Panera-Bread-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Bread Republic",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Bread-Republic-logo.png",
      },
    ],
  },
  {
    name: "Qdoba",
    id: 30,
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Qdoba-logo-500x313.png",
    isOk: false,
    replacements: [
      {
        id: 9090909,
        isOk: true,
        name: "Wrap & Roll",
        logo: "https://1000logos.net/wp-content/uploads/2020/04/Wrap-Roll-logo.png",
      },
    ],
  },
];
