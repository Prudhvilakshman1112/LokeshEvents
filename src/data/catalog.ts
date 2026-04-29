export interface CustomizableItem {
  name: string;
  qty: number;
  unitPrice: number;
}

export interface CatalogItem {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  category: string;
  description: string;
  image: string;
  images: string[];
  liveImages: string[];
  liveVideos: string[];
  itemsIncluded: string[];
  benefits: string[];
  badges: string[];
  eventFlow: string[];
  customizableItems: CustomizableItem[];
  timings?: string;
}

// Finalized add-on unit prices
const P = {
  teddy: 1500, stranger: 500, cake: 500, frame: 450, calendar: 450,
  mug: 450, greetingCard: 250, fireGun: 150, mini6x8: 2000,
  editVideo: 1500, dancer: 1000, bikeFlexi: 660, bikerVehicle: 500,
  bouquet: 550, speaker: 300, fireBlade: 150, heartKeychain: 250,
  mini8x10: 3500, mini12x18: 5200, mini15x24: 11000, carDecor: 6000,
  paperShot: 60, snowBottle: 35, beachDay: 5500, beachEvening: 7500,
};

/** Master list of every add-on a customer can choose from */
const ALL_ADDONS: CustomizableItem[] = [
  { name: "Teddy Doll", qty: 0, unitPrice: P.teddy },
  { name: "Stranger Member", qty: 0, unitPrice: P.stranger },
  { name: "Half KG Cool Cake", qty: 0, unitPrice: P.cake },
  { name: "Photo Frame (A4)", qty: 0, unitPrice: P.frame },
  { name: "Calendar Book", qty: 0, unitPrice: P.calendar },
  { name: "Printed Mug", qty: 0, unitPrice: P.mug },
  { name: "Greeting Card", qty: 0, unitPrice: P.greetingCard },
  { name: "Fire Gun", qty: 0, unitPrice: P.fireGun },
  { name: "6x8 Inch Miniature", qty: 0, unitPrice: P.mini6x8 },
  { name: "Editing Video", qty: 0, unitPrice: P.editVideo },
  { name: "Dancer Member", qty: 0, unitPrice: P.dancer },
  { name: "Bike Surprise Flexi", qty: 0, unitPrice: P.bikeFlexi },
  { name: "Biker with Vehicle", qty: 0, unitPrice: P.bikerVehicle },
  { name: "Flower Bouquet", qty: 0, unitPrice: P.bouquet },
  { name: "Bluetooth Speaker", qty: 0, unitPrice: P.speaker },
  { name: "Fire Blade", qty: 0, unitPrice: P.fireBlade },
  { name: "Heart Keychain", qty: 0, unitPrice: P.heartKeychain },
  { name: "8x10 Inch Miniature", qty: 0, unitPrice: P.mini8x10 },
  { name: "12x18 Inch Miniature", qty: 0, unitPrice: P.mini12x18 },
  { name: "15x24 Inch Miniature", qty: 0, unitPrice: P.mini15x24 },
  { name: "Car Decoration", qty: 0, unitPrice: P.carDecor },
  { name: "Paper Shot", qty: 0, unitPrice: P.paperShot },
  { name: "Snow Bottle", qty: 0, unitPrice: P.snowBottle },
];

export const catalogItems: CatalogItem[] = [
  {
    id: "doll-surprise",
    title: "Doll Surprise Package",
    price: 2500, originalPrice: 3500,
    category: "Surprise",
    description: "A delightful surprise package perfect for birthdays and special occasions. Features an adorable teddy doll, a delicious cake, and spectacular fire gun celebrations — all set up at the beautiful Vizag Beach Road!",
    image: "/images/doll-surprise.png",
    images: ["/images/doll-surprise.png"],
    liveImages: [], liveVideos: [],
    itemsIncluded: ["1 Teddy Doll", "Half KG Cool Cake", "2 Fire Guns"],
    benefits: ["Professional setup at Vizag Beach Road", "Complete surprise coordination", "Photo-worthy moments guaranteed", "Free cleanup after event"],
    badges: ["Beach Road Setup", "Budget Friendly"],
    eventFlow: ["We set up the surprise at chosen spot", "Teddy doll placed for the reveal", "Cake cutting ceremony", "Fire gun celebration & photos"],
    customizableItems: [
      { name: "Teddy Doll", qty: 1, unitPrice: P.teddy },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: P.cake },
      { name: "Fire Gun", qty: 2, unitPrice: P.fireGun },
      { name: "Flower Bouquet", qty: 0, unitPrice: P.bouquet },
      { name: "Photo Frame (A4)", qty: 0, unitPrice: P.frame },
      { name: "Calendar Book", qty: 0, unitPrice: P.calendar },
      { name: "Printed Mug", qty: 0, unitPrice: P.mug },
      { name: "Greeting Card", qty: 0, unitPrice: P.greetingCard },
      { name: "Snow Bottle", qty: 0, unitPrice: P.snowBottle },
      { name: "Paper Shot", qty: 0, unitPrice: P.paperShot },
      { name: "Heart Keychain", qty: 0, unitPrice: P.heartKeychain },
    ],
  },
  {
    id: "doll-surprise-upgraded",
    title: "Upgraded Doll Surprise",
    price: 3500, originalPrice: 4500,
    category: "Surprise",
    description: "An upgraded version of our classic surprise package with personalized gifts. Includes two teddy dolls, custom photo frame, calendar, and printed mug alongside cake and fire gun celebrations on the scenic Vizag Beach Road.",
    image: "/images/doll-surprise-upgraded.png",
    images: ["/images/doll-surprise-upgraded.png"],
    liveImages: [], liveVideos: [],
    itemsIncluded: ["2 Teddy Dolls", "Half KG Cake (Cool/Gold)", "A4 Size Photo Frame", "Calendar", "Printed Mug", "2 Fire Guns"],
    benefits: ["Personalized keepsake gifts included", "Professional Beach Road setup", "Custom printed memorabilia", "Complete surprise coordination", "Photo-worthy celebration"],
    badges: ["Beach Road Setup", "Personalized Gifts"],
    eventFlow: ["Personalized gifts arranged beautifully", "Surprise reveal at chosen spot", "Cake cutting & celebration", "Fire gun finale & photo session"],
    customizableItems: [
      { name: "Teddy Doll", qty: 2, unitPrice: P.teddy },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: P.cake },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: P.frame },
      { name: "Calendar Book", qty: 1, unitPrice: P.calendar },
      { name: "Printed Mug", qty: 1, unitPrice: P.mug },
      { name: "Fire Gun", qty: 2, unitPrice: P.fireGun },
      { name: "Flower Bouquet", qty: 0, unitPrice: P.bouquet },
      { name: "Greeting Card", qty: 0, unitPrice: P.greetingCard },
      { name: "Snow Bottle", qty: 0, unitPrice: P.snowBottle },
      { name: "Paper Shot", qty: 0, unitPrice: P.paperShot },
      { name: "Heart Keychain", qty: 0, unitPrice: P.heartKeychain },
    ],
  },
  {
    id: "strangers-base",
    title: "Strangers Surprise (Base)",
    price: 5500, originalPrice: 7000,
    category: "Strangers",
    description: "The fun stranger surprise experience! Three strangers join the celebration with gifts and loads of fun. Includes a teddy doll, personalized gifts, and a delicious cake at Vizag Beach Road.",
    image: "/images/strangest-surprise.png",
    images: ["/images/strangest-surprise.png"],
    liveImages: [], liveVideos: ["/videos/VID-20260428-WA0123.mp4", "/videos/VID-20260428-WA0125.mp4"],
    itemsIncluded: ["3 Strangers", "1 Teddy Doll", "Half KG Cool Cake", "A4 Size Photo Frame", "Calendar Book", "Printed Mug", "Greeting Card", "2 Fire Guns"],
    benefits: ["3 fun strangers to surprise your loved one", "Complete personalized gift set", "Unforgettable memories on Beach Road", "Professional coordination team"],
    badges: ["Beach Road Setup", "3 Strangers", "Full Gift Set"],
    eventFlow: ["Strangers approach with gifts", "Gift reveal one by one", "Teddy presentation", "Cake cutting celebration", "Fire gun finale & group photos"],
    customizableItems: [
      { name: "Stranger Member", qty: 3, unitPrice: P.stranger },
      { name: "Teddy Doll", qty: 1, unitPrice: P.teddy },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: P.cake },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: P.frame },
      { name: "Calendar Book", qty: 1, unitPrice: P.calendar },
      { name: "Printed Mug", qty: 1, unitPrice: P.mug },
      { name: "Greeting Card", qty: 1, unitPrice: P.greetingCard },
      { name: "Fire Gun", qty: 2, unitPrice: P.fireGun },
      { name: "Flower Bouquet", qty: 0, unitPrice: P.bouquet },
      { name: "6x8 Inch Miniature", qty: 0, unitPrice: P.mini6x8 },
      { name: "Snow Bottle", qty: 0, unitPrice: P.snowBottle },
      { name: "Paper Shot", qty: 0, unitPrice: P.paperShot },
      { name: "Heart Keychain", qty: 0, unitPrice: P.heartKeychain },
    ],
  },
  {
    id: "strangers-premium",
    title: "Strangers Surprise (Premium)",
    price: 7500, originalPrice: 9500,
    category: "Strangers",
    description: "Our premium stranger surprise with even more gifts and excitement! Four strangers, flowers, personalized miniatures, and a complete celebration package at the iconic Vizag Beach Road.",
    image: "/images/strangers-surprise.png",
    images: ["/images/strangers-surprise.png"],
    liveImages: [], liveVideos: ["/videos/VID-20260428-WA0125.mp4", "/videos/VID-20260428-WA0127.mp4", "/videos/VID-20260425-WA0016.mp4"],
    itemsIncluded: ["4 Strangers", "4 Single Flowers", "Half KG Cake", "Photo Frame", "6x8 inch Miniature", "Calendar", "Printed Mug", "Greeting Card", "2 Fire Guns"],
    benefits: ["4 energetic strangers with individual flowers", "Premium miniature keepsake", "Complete personalized gift collection", "Fire gun celebration", "Vizag Beach Road scenic setup"],
    badges: ["Beach Road Setup", "4 Strangers", "Miniature Gift", "Fire Guns"],
    eventFlow: ["Strangers arrive with individual flowers", "Personalized gifts presented", "Miniature & frame reveal", "Cake cutting ceremony", "Fire gun finale & celebrations"],
    customizableItems: [
      { name: "Stranger Member", qty: 4, unitPrice: P.stranger },
      { name: "Single Flower", qty: 4, unitPrice: 100 },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: P.cake },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: P.frame },
      { name: "6x8 Inch Miniature", qty: 1, unitPrice: P.mini6x8 },
      { name: "Calendar Book", qty: 1, unitPrice: P.calendar },
      { name: "Printed Mug", qty: 1, unitPrice: P.mug },
      { name: "Greeting Card", qty: 1, unitPrice: P.greetingCard },
      { name: "Fire Gun", qty: 2, unitPrice: P.fireGun },
      { name: "Teddy Doll", qty: 0, unitPrice: P.teddy },
      { name: "Flower Bouquet", qty: 0, unitPrice: P.bouquet },
      { name: "Snow Bottle", qty: 0, unitPrice: P.snowBottle },
      { name: "Paper Shot", qty: 0, unitPrice: P.paperShot },
    ],
  },
  {
    id: "prank-surprise",
    title: "Prank Surprise",
    price: 8000, originalPrice: 10000,
    category: "Prank",
    description: "The ultimate prank + surprise combo! Featuring 5 strangers, a teddy doll, flower bouquet, personalized gifts, snow bottles, and paper shots. Set at Vizag Beach Road for maximum impact!",
    image: "/images/prank-surprise.png",
    images: ["/images/prank-surprise.png"],
    liveImages: [], liveVideos: ["/videos/VID-20260428-WA0109.mp4"],
    itemsIncluded: ["5 Strangers", "Teddy Doll", "Flower Bouquet", "Half KG Cool Cake", "A4 Size Photo Frame", "Calendar Book", "Printed Mug", "Greeting Card", "2 Snow Bottles", "2 Paper Shots"],
    benefits: ["Hilarious prank element before surprise", "5 strangers for maximum fun", "Complete personalized gift set", "Snow bottles & paper shots celebration", "Vizag Beach Road premium setup"],
    badges: ["Beach Road Setup", "5 Strangers", "Prank Element"],
    eventFlow: ["Prank setup & execution", "Strangers surprise reveal", "Teddy & bouquet presentation", "Gifts presentation", "Cake cutting & celebrations", "Snow bottles & paper shots finale"],
    customizableItems: [
      { name: "Stranger Member", qty: 5, unitPrice: P.stranger },
      { name: "Teddy Doll", qty: 1, unitPrice: P.teddy },
      { name: "Flower Bouquet", qty: 1, unitPrice: P.bouquet },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: P.cake },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: P.frame },
      { name: "Calendar Book", qty: 1, unitPrice: P.calendar },
      { name: "Printed Mug", qty: 1, unitPrice: P.mug },
      { name: "Greeting Card", qty: 1, unitPrice: P.greetingCard },
      { name: "Snow Bottle", qty: 2, unitPrice: P.snowBottle },
      { name: "Paper Shot", qty: 2, unitPrice: P.paperShot },
      { name: "Fire Gun", qty: 0, unitPrice: P.fireGun },
      { name: "Heart Keychain", qty: 0, unitPrice: P.heartKeychain },
    ],
  },

  {
    id: "flash-mob",
    title: "Flash Mob Surprise",
    price: 8500, originalPrice: 10500,
    category: "Flash Mob",
    description: "An electrifying flash mob celebration at Vizag Beach Road! Four strangers, a dancing teddy doll mascot, flowers, cake, and premium miniature keepsake. An unforgettable performance-based surprise!",
    image: "/images/flash-mob-surprise.png",
    images: ["/images/flash-mob-surprise.png"],
    liveImages: [], liveVideos: [],
    itemsIncluded: ["4 Strangers", "Dancing Teddy Doll", "4 Single Flowers", "Half KG Cool Cake", "Photo Frame", "Cupboard Miniature (8x10 inch)", "Calendar", "Printed Mug"],
    benefits: ["Spectacular flash mob dance performance", "Dancing teddy mascot performance", "4 strangers for maximum fun", "Large cupboard miniature keepsake", "Complete personalized gift set", "Vizag Beach Road premium setup"],
    badges: ["Beach Road Setup", "4 Strangers", "Dancing Teddy", "Flash Mob"],
    eventFlow: ["Flash mob dance setup", "Strangers arrive with flowers", "Dancing teddy performance", "Gifts presentation", "Cake cutting & celebration", "Photo session with the crew"],
    customizableItems: [
      { name: "Stranger Member", qty: 4, unitPrice: 500 },
      { name: "Dancing Teddy Doll", qty: 1, unitPrice: 1500 },
      { name: "Single Flower", qty: 4, unitPrice: 100 },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: 500 },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: 450 },
      { name: "8x10 Inch Miniature", qty: 1, unitPrice: P.mini8x10 },
      { name: "Calendar Book", qty: 1, unitPrice: 450 },
      { name: "Printed Mug", qty: 1, unitPrice: 450 },
      { name: "Fire Gun", qty: 0, unitPrice: 150 },
      { name: "Flower Bouquet", qty: 0, unitPrice: 550 },
      { name: "Greeting Card", qty: 0, unitPrice: 250 },
      { name: "Dancer Member", qty: 0, unitPrice: 1000 },
    ],
  },
  {
    id: "daytime-beach-decoration",
    title: "Daytime Beach Decoration",
    price: 8500, originalPrice: 10500,
    category: "Beach Decoration",
    timings: "2:00 PM to 6:00 PM",
    description: "A beautiful daytime beach decoration setup at Vizag Beach Road with a stunning love symbol theme. Includes police permission, flower bouquet, cake, and a complete set of personalized gifts. Perfect for afternoon romantic celebrations!",
    image: "/images/daytime-beach-decoration.png",
    images: ["/images/daytime-beach-decoration.png"],
    liveImages: [], liveVideos: [],
    itemsIncluded: ["Beach Decoration Setup", "Police Permission Included", "Flower Bouquet", "Half KG Cool Cake", "Photo Frame", "Calendar", "Printed Mug", "Greeting Card", "2 Fire Guns"],
    benefits: ["Love symbol beach decoration", "Police permission handled", "Beautiful afternoon setup", "Complete personalized gifts", "Vizag Beach Road scenic location", "Professional event coordination"],
    badges: ["Beach Road Setup", "Police Permission", "Love Symbol", "Daytime"],
    eventFlow: ["Beach decoration setup by team", "Guest arrival & surprise reveal", "Flower bouquet presentation", "Cake cutting ceremony", "Gift presentation", "Fire gun celebration & photos"],
    customizableItems: [
      { name: "Beach Decoration Setup", qty: 1, unitPrice: 5500 },
      { name: "Flower Bouquet", qty: 1, unitPrice: 550 },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: 500 },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: 450 },
      { name: "Calendar Book", qty: 1, unitPrice: 450 },
      { name: "Printed Mug", qty: 1, unitPrice: 450 },
      { name: "Greeting Card", qty: 1, unitPrice: 250 },
      { name: "Fire Gun", qty: 2, unitPrice: 150 },
      { name: "Teddy Doll", qty: 0, unitPrice: 1500 },
      { name: "Snow Bottle", qty: 0, unitPrice: 35 },
      { name: "Paper Shot", qty: 0, unitPrice: 60 },
      { name: "6x8 Inch Miniature", qty: 0, unitPrice: 2000 },
    ],
  },
  {
    id: "midnight-surprise",
    title: "Midnight Surprise (Car & Bike)",
    price: 11000, originalPrice: 13500,
    category: "Midnight",
    description: "A magical midnight celebration with car decoration and bike surprise! Features a flexi banner bike surprise, teddy doll, flower bouquet, cake, and a complete set of personalized gifts with snow bottles and paper shots.",
    image: "/images/midnight-surprise.png",
    images: ["/images/midnight-surprise.png"],
    liveImages: [], liveVideos: ["/videos/VID-20260428-WA0123.mp4", "/videos/VID-20260428-WA0124.mp4"],
    itemsIncluded: ["Car Decoration", "Bike Surprise with Flexi Banner", "Teddy Doll", "Flower Bouquet", "Half KG Cool Cake", "A4 Size Photo Frame", "Calendar Book", "Printed Mug", "Greeting Card", "2 Snow Bottles", "2 Paper Shots"],
    benefits: ["Decorated car celebration", "Bike surprise with flexi banner", "Complete personalized gift collection", "Midnight magical atmosphere", "Snow bottles & paper shots", "Professional coordination"],
    badges: ["Car Decoration", "Bike Surprise", "Midnight Special"],
    eventFlow: ["Car decoration setup", "Bike surprise with flexi banner", "Teddy & bouquet presentation", "Midnight countdown & surprise", "Cake cutting at midnight", "Snow bottles & paper shots finale"],
    customizableItems: [
      { name: "Car Decoration", qty: 1, unitPrice: 6000 },
      { name: "Bike Surprise Flexi", qty: 1, unitPrice: P.bikeFlexi },
      { name: "Teddy Doll", qty: 1, unitPrice: 1500 },
      { name: "Flower Bouquet", qty: 1, unitPrice: 550 },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: 500 },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: 450 },
      { name: "Calendar Book", qty: 1, unitPrice: 450 },
      { name: "Printed Mug", qty: 1, unitPrice: 450 },
      { name: "Greeting Card", qty: 1, unitPrice: 250 },
      { name: "Snow Bottle", qty: 2, unitPrice: 35 },
      { name: "Paper Shot", qty: 2, unitPrice: 60 },
      { name: "Fire Gun", qty: 0, unitPrice: 150 },
      { name: "Editing Video", qty: 0, unitPrice: 1500 },
    ],
  },
  {
    id: "evening-beach-decoration",
    title: "Evening Beach Decoration",
    price: 11000, originalPrice: 13500,
    category: "Beach Decoration",
    timings: "6:00 PM to 8:30 PM",
    description: "A stunning evening beach decoration at Vizag Beach Road with dramatic fire entry, generator-powered lighting, and 3 staff members. Includes police permission, complete gifts, and a magical sunset celebration experience!",
    image: "/images/evening-beach-decoration.png",
    images: ["/images/evening-beach-decoration.png"],
    liveImages: [], liveVideos: ["/videos/VID-20260428-WA0121.mp4", "/videos/VID-20260428-WA0122.mp4"],
    itemsIncluded: ["Beach Decoration Setup", "Police Permission Included", "Generator & 3 Staff Members", "Fire Entry Setup", "Flower Bouquet", "Half KG Cool Cake", "Photo Frame", "Calendar", "Printed Mug", "Greeting Card", "2 Fire Guns"],
    benefits: ["Premium evening beach decoration", "Fire entry spectacle", "Generator-powered lighting", "3 dedicated staff members", "Police permission handled", "Complete personalized gift set"],
    badges: ["Beach Road Setup", "Police Permission", "Fire Entry", "Evening"],
    eventFlow: ["Beach decoration & lighting setup", "Generator & staff positioning", "Guest arrival", "Dramatic fire entry", "Bouquet & gift presentation", "Cake cutting", "Fire gun celebration & photos"],
    customizableItems: [
      { name: "Beach Decoration Setup", qty: 1, unitPrice: 7500 },
      { name: "Flower Bouquet", qty: 1, unitPrice: 550 },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: 500 },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: 450 },
      { name: "Calendar Book", qty: 1, unitPrice: 450 },
      { name: "Printed Mug", qty: 1, unitPrice: 450 },
      { name: "Greeting Card", qty: 1, unitPrice: 250 },
      { name: "Fire Gun", qty: 2, unitPrice: 150 },
      { name: "Teddy Doll", qty: 0, unitPrice: 1500 },
      { name: "6x8 Inch Miniature", qty: 0, unitPrice: 2000 },
      { name: "Bluetooth Speaker", qty: 0, unitPrice: 300 },
      { name: "Snow Bottle", qty: 0, unitPrice: 35 },
    ],
  },
  {
    id: "candlelight-dinner",
    title: "Candlelight Dinner Decor",
    price: 12500, originalPrice: 15000,
    category: "Dinner",
    timings: "6:00 PM to 8:00 PM",
    description: "The ultimate romantic candlelight dinner on Vizag Beach Road. A round table full of candles, fire entry, biryani & starters, cool drinks, Bluetooth music, and personalized gifts. Police permission included!",
    image: "/images/candlelight-dinner.png",
    images: ["/images/candlelight-dinner.png"],
    liveImages: [], liveVideos: ["/videos/VID-20260428-WA0121.mp4", "/videos/VID-20260428-WA0122.mp4"],
    itemsIncluded: ["Round Table Setup (Full of Candles)", "Police Permission Included", "Biriyani & Starters", "2 Cool Drinks & 2 Cheers", "Fire Entry Setup", "Bluetooth Speaker", "Photo Frame", "Cupboard Miniature (8x10 inch)", "Calendar", "Printed Mug"],
    benefits: ["Complete romantic dinner experience", "Delicious biriyani & starters", "Spectacular fire entry", "Full candle ambiance setup", "Police permission handled", "Bluetooth speaker for music", "All personalized gifts included"],
    badges: ["Beach Road Setup", "Police Permission", "Fire Entry", "Full Dinner", "Premium"],
    eventFlow: ["Table & candle setup on Beach Road", "Grand fire entry welcome", "Romantic candlelight ambiance", "Biriyani & starter dinner service", "Music via Bluetooth speaker", "Gift presentation ceremony", "Cheers & celebration", "Photo session in candlelight"],
    customizableItems: [
      { name: "Round Table Setup", qty: 1, unitPrice: 1500 },
      { name: "Fire Entry Setup", qty: 1, unitPrice: 1000 },
      { name: "Biriyani", qty: 1, unitPrice: 600 },
      { name: "Starter", qty: 1, unitPrice: 400 },
      { name: "Cool Drink", qty: 2, unitPrice: 100 },
      { name: "Cheers", qty: 2, unitPrice: 150 },
      { name: "Bluetooth Speaker", qty: 1, unitPrice: 300 },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: 450 },
      { name: "8x10 Inch Miniature", qty: 1, unitPrice: P.mini8x10 },
      { name: "Calendar Book", qty: 1, unitPrice: 450 },
      { name: "Printed Mug", qty: 1, unitPrice: 450 },
      { name: "Half KG Cool Cake", qty: 0, unitPrice: 500 },
      { name: "Flower Bouquet", qty: 0, unitPrice: 550 },
    ],
  },
  {
    id: "proposal-decor",
    title: "The Proposal Decor",
    price: 15500, originalPrice: 19000,
    category: "Proposal",
    timings: "6:00 PM to 8:30 PM",
    description: "The most premium proposal experience at Vizag Beach Road! \"Will you marry me?\" marquee letters, choice of 3 decoration types, fire entry, generator, Bluetooth speaker, and a complete celebration package. Make the moment unforgettable!",
    image: "/images/proposal-decor.png",
    images: ["/images/proposal-decor.png"],
    liveImages: [], liveVideos: ["/videos/VID-20260428-WA0121.mp4", "/videos/VID-20260428-WA0122.mp4"],
    itemsIncluded: ["\"Will you marry me?\" Marquee Letters", "Choice of 3 Types of Decorations", "Police Permission Included", "Generator", "Flower Bouquet", "Half KG Cool Cake", "Bluetooth Speaker", "Fire Entry Setup", "2 Fire Guns", "Photo Frame", "6x8 inch Miniature", "Calendar", "Printed Mug", "Greeting Card"],
    benefits: ["Stunning marquee letter proposal", "3 decoration style choices", "Generator-powered setup", "Fire entry spectacle", "Complete personalized gift collection", "Bluetooth speaker for music", "Police permission handled", "Most premium Beach Road experience"],
    badges: ["Beach Road Setup", "Police Permission", "Marquee Letters", "Fire Entry", "Most Premium"],
    eventFlow: ["Decoration & marquee letter setup", "Generator & lighting arrangement", "Guest arrival & fire entry", "\"Will you marry me?\" reveal", "Proposal moment", "Bouquet & gift presentation", "Cake cutting celebration", "Fire gun finale & photos"],
    customizableItems: [
      { name: "Marquee Letters Setup", qty: 1, unitPrice: 3000 },
      { name: "Decoration Setup", qty: 1, unitPrice: 3000 },
      { name: "Fire Entry Setup", qty: 1, unitPrice: 1000 },
      { name: "Bluetooth Speaker", qty: 1, unitPrice: 300 },
      { name: "Flower Bouquet", qty: 1, unitPrice: 550 },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: 500 },
      { name: "Fire Gun", qty: 2, unitPrice: 150 },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: 450 },
      { name: "6x8 Inch Miniature", qty: 1, unitPrice: 2000 },
      { name: "Calendar Book", qty: 1, unitPrice: 450 },
      { name: "Printed Mug", qty: 1, unitPrice: 450 },
      { name: "Greeting Card", qty: 1, unitPrice: 250 },
      { name: "Teddy Doll", qty: 0, unitPrice: 1500 },
      { name: "8x10 Inch Miniature", qty: 0, unitPrice: 3500 },
      { name: "Editing Video", qty: 0, unitPrice: 1500 },
    ],
  },
];

// Ensure every catalog item offers the complete add-on menu
for (const item of catalogItems) {
  const existing = new Set(item.customizableItems.map((ci) => ci.name));
  for (const addon of ALL_ADDONS) {
    if (!existing.has(addon.name)) {
      item.customizableItems.push({ ...addon });
    }
  }
}

export const portfolioImages = [
  { src: "/images/portfolio-wedding.png", title: "Beach Wedding Decor", category: "Wedding" },
  { src: "/images/portfolio-birthday.png", title: "Birthday Bash", category: "Birthday" },
  { src: "/images/portfolio-romantic.png", title: "Romantic Surprise", category: "Surprise" },
  { src: "/images/portfolio-anniversary.png", title: "Anniversary Celebration", category: "Anniversary" },
  { src: "/images/doll-surprise.png", title: "Doll Surprise Setup", category: "Surprise" },
  { src: "/images/candlelight-dinner.png", title: "Candlelight Dinner", category: "Dinner" },
  { src: "/images/midnight-surprise.png", title: "Midnight Celebration", category: "Midnight" },
  { src: "/images/prank-surprise.png", title: "Prank Surprise Event", category: "Prank" },
  { src: "/images/flash-mob-surprise.png", title: "Flash Mob Surprise", category: "Flash Mob" },
  { src: "/images/daytime-beach-decoration.png", title: "Daytime Beach Decor", category: "Beach Decoration" },
  { src: "/images/evening-beach-decoration.png", title: "Evening Beach Decor", category: "Beach Decoration" },
  { src: "/images/proposal-decor.png", title: "The Proposal Decor", category: "Proposal" },
];

/** Placeholder video testimonial slots — replace videoUrl with real URLs */
export interface CustomerVideo {
  id: string;
  title: string;
  customerName: string;
  videoUrl: string; // empty = "Coming Soon" placeholder
}

export const customerVideos: CustomerVideo[] = [
  { id: "v1", title: "Customer Review", customerName: "Happy Customer", videoUrl: "/videos/feedback-1.mp4" },
  { id: "v2", title: "Client Review", customerName: "Satisfied Client", videoUrl: "/videos/feedback-2.mp4" },
  { id: "v3", title: "Client Experience", customerName: "Delighted Customer", videoUrl: "/videos/feedback-3.mp4" },
];

export const WHATSAPP_NUMBER = "917207221469";

export function generateWhatsAppURL(cartItems: CatalogItem[]): string {
  const itemsList = cartItems
    .map(
      (item, i) =>
        `${i + 1}. ${item.title} — ₹${item.price.toLocaleString("en-IN")}`
    )
    .join("\n");

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const message = `🎉 *LK Events Inquiry*\n\nHi! I'm interested in the following packages:\n\n${itemsList}\n\n💰 *Estimated Total: ₹${total.toLocaleString("en-IN")}*\n\nPlease share availability and further details. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
