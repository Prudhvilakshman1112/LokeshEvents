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
  /** All images for carousel: generated + live photos */
  images: string[];
  // Slots for live images/videos the client can add later
  liveImages: string[];
  liveVideos: string[];
  itemsIncluded: string[];
  benefits: string[];
  badges: string[];
  eventFlow: string[];
  customizableItems: CustomizableItem[];
}

export const catalogItems: CatalogItem[] = [
  {
    id: "doll-surprise",
    title: "Doll Surprise",
    price: 2500,
    originalPrice: 3500,
    category: "Surprise",
    description:
      "A delightful surprise package perfect for birthdays and special occasions. Features an adorable teddy doll, a delicious cake, and spectacular fire gun celebrations — all set up at the beautiful Vizag Beach Road!",
    image: "/images/doll-surprise.png",
    images: ["/images/doll-surprise.png", "/images/portfolio-birthday.png", "/images/portfolio-romantic.png"],
    liveImages: [],
    liveVideos: [],
    itemsIncluded: [
      "Teddy Doll – 1",
      "Half KG Cool Cake",
      "Fire Guns – 2",
    ],
    benefits: [
      "Professional setup at Vizag Beach Road",
      "Complete surprise coordination",
      "Photo-worthy moments guaranteed",
      "Free cleanup after event",
    ],
    badges: ["Beach Road Setup", "Budget Friendly"],
    eventFlow: [
      "We set up the surprise at chosen spot",
      "Teddy doll placed for the reveal",
      "Cake cutting ceremony",
      "Fire gun celebration & photos",
    ],
    customizableItems: [
      { name: "Teddy Doll", qty: 1, unitPrice: 600 },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: 800 },
      { name: "Fire Gun", qty: 2, unitPrice: 250 },
      { name: "Balloon Bunch", qty: 0, unitPrice: 200 },
      { name: "Flower Bouquet", qty: 0, unitPrice: 500 },
      { name: "Photo Frame (A4)", qty: 0, unitPrice: 350 },
    ],
  },
  {
    id: "doll-surprise-upgraded",
    title: "Doll Surprise (Upgraded)",
    price: 3500,
    originalPrice: 4500,
    category: "Surprise",
    description:
      "An upgraded version of our classic surprise package. Includes personalized gifts like a custom photo frame, calendar, and printed mug alongside cake and fire gun celebrations on the scenic Vizag Beach Road.",
    image: "/images/doll-surprise-upgraded.png",
    images: ["/images/doll-surprise-upgraded.png", "/images/doll-surprise.png", "/images/portfolio-birthday.png"],
    liveImages: [],
    liveVideos: [],
    itemsIncluded: [
      "Half KG Cool Cake",
      "Photo Frame – A4 Size",
      "Calendar",
      "Mug with Printing",
      "Fire Guns",
    ],
    benefits: [
      "Personalized keepsake gifts included",
      "Professional Beach Road setup",
      "Custom printed memorabilia",
      "Complete surprise coordination",
      "Photo-worthy celebration",
    ],
    badges: ["Beach Road Setup", "Personalized Gifts"],
    eventFlow: [
      "Personalized gifts arranged beautifully",
      "Surprise reveal at chosen spot",
      "Cake cutting & celebration",
      "Fire gun finale & photo session",
    ],
    customizableItems: [
      { name: "Half KG Cool Cake", qty: 1, unitPrice: 800 },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: 350 },
      { name: "Calendar", qty: 1, unitPrice: 300 },
      { name: "Mug with Printing", qty: 1, unitPrice: 250 },
      { name: "Fire Gun", qty: 2, unitPrice: 250 },
      { name: "Teddy Doll", qty: 0, unitPrice: 600 },
      { name: "Flower Bouquet", qty: 0, unitPrice: 500 },
      { name: "Balloon Bunch", qty: 0, unitPrice: 200 },
    ],
  },
  {
    id: "strangest-surprise",
    title: "Strangest Surprise",
    price: 5000,
    originalPrice: 6000,
    category: "Strangers",
    description:
      "The ultimate stranger surprise experience! Four strangers join the celebration with flowers, gifts, and loads of fun. Includes a teddy doll, bouquet, personalized gifts, and a delicious cake at Vizag Beach Road.",
    image: "/images/strangest-surprise.png",
    images: ["/images/strangest-surprise.png", "/images/strangers-surprise.png", "/images/portfolio-romantic.png"],
    liveImages: [],
    liveVideos: [],
    itemsIncluded: [
      "Teddy Doll",
      "Flower Bouquet",
      "A4 Size Photo Frame",
      "Printing Mug",
      "Greeting Card",
      "Calendar Book",
      "Half KG Cool Cake",
      "Strangers – 4 Members",
    ],
    benefits: [
      "4 fun strangers to surprise your loved one",
      "Complete personalized gift set",
      "Beautiful flower bouquet",
      "Unforgettable memories on Beach Road",
      "Professional coordination team",
    ],
    badges: ["Beach Road Setup", "4 Strangers", "Full Gift Set"],
    eventFlow: [
      "Strangers approach with flowers",
      "Gift reveal one by one",
      "Teddy & bouquet presentation",
      "Cake cutting celebration",
      "Group photo session",
    ],
    customizableItems: [
      { name: "Teddy Doll", qty: 1, unitPrice: 600 },
      { name: "Flower Bouquet", qty: 1, unitPrice: 500 },
      { name: "Photo Frame (A4)", qty: 1, unitPrice: 350 },
      { name: "Mug with Printing", qty: 1, unitPrice: 250 },
      { name: "Greeting Card", qty: 1, unitPrice: 150 },
      { name: "Calendar Book", qty: 1, unitPrice: 300 },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: 800 },
      { name: "Stranger Member", qty: 4, unitPrice: 350 },
      { name: "Fire Gun", qty: 0, unitPrice: 250 },
      { name: "Balloon Bunch", qty: 0, unitPrice: 200 },
    ],
  },
  {
    id: "strangers-surprise",
    title: "Strangers Surprise",
    price: 7000,
    originalPrice: 8500,
    category: "Strangers",
    description:
      "Our premium stranger surprise with even more gifts and excitement! Four strangers, flowers, personalized miniatures, and a complete celebration package at the iconic Vizag Beach Road.",
    image: "/images/strangers-surprise.png",
    images: ["/images/strangers-surprise.png", "/images/strangest-surprise.png", "/images/prank-surprise.png"],
    liveImages: [],
    liveVideos: [],
    itemsIncluded: [
      "Strangers – 4",
      "Single Flowers – 4",
      "Photo Frame",
      "6x8 Inch Miniature",
      "Mug with Printing",
      "Greeting Card",
      "Half KG Cake",
      "Calendar",
      "Fire Gun – 2",
    ],
    benefits: [
      "4 energetic strangers with individual flowers",
      "Premium miniature keepsake",
      "Complete personalized gift collection",
      "Fire gun celebration",
      "Vizag Beach Road scenic setup",
      "Professional event coordination",
    ],
    badges: ["Beach Road Setup", "4 Strangers", "Miniature Gift", "Fire Guns"],
    eventFlow: [
      "Strangers arrive with individual flowers",
      "Personalized gifts presented",
      "Miniature & frame reveal",
      "Cake cutting ceremony",
      "Fire gun finale & celebrations",
    ],
    customizableItems: [
      { name: "Stranger Member", qty: 4, unitPrice: 350 },
      { name: "Single Flower", qty: 4, unitPrice: 100 },
      { name: "Photo Frame", qty: 1, unitPrice: 350 },
      { name: "6x8 Inch Miniature", qty: 1, unitPrice: 800 },
      { name: "Mug with Printing", qty: 1, unitPrice: 250 },
      { name: "Greeting Card", qty: 1, unitPrice: 150 },
      { name: "Half KG Cake", qty: 1, unitPrice: 800 },
      { name: "Calendar", qty: 1, unitPrice: 300 },
      { name: "Fire Gun", qty: 2, unitPrice: 250 },
      { name: "Teddy Doll", qty: 0, unitPrice: 600 },
      { name: "Balloon Bunch", qty: 0, unitPrice: 200 },
    ],
  },
  {
    id: "prank-surprise",
    title: "Prank Surprise",
    price: 8500,
    originalPrice: 10000,
    category: "Prank",
    description:
      "The ultimate prank + surprise combo! Featuring 4 strangers, a dancing teddy doll mascot, flowers, cake, and an impressive collection of personalized gifts. Set at Vizag Beach Road for maximum impact!",
    image: "/images/prank-surprise.png",
    images: ["/images/prank-surprise.png", "/images/strangers-surprise.png", "/images/midnight-surprise.png"],
    liveImages: [],
    liveVideos: [],
    itemsIncluded: [
      "Strangers – 4",
      "Dancing Teddy Doll",
      "Single Flowers – 4",
      "Half KG Cool Cake",
      "Photo Frame",
      "Calendar",
      "Mug with Printing",
      "Cupboard Miniature 8x10 Inch",
    ],
    benefits: [
      "Hilarious prank element before surprise",
      "Dancing teddy mascot performance",
      "4 strangers for maximum fun",
      "Large cupboard miniature keepsake",
      "Complete personalized gift set",
      "Vizag Beach Road premium setup",
    ],
    badges: [
      "Beach Road Setup",
      "4 Strangers",
      "Dancing Teddy",
      "Prank Element",
    ],
    eventFlow: [
      "Prank setup & execution",
      "Strangers surprise reveal",
      "Dancing teddy performance",
      "Flowers & gifts presentation",
      "Cake cutting & celebrations",
      "Photo session with the crew",
    ],
    customizableItems: [
      { name: "Stranger Member", qty: 4, unitPrice: 350 },
      { name: "Dancing Teddy Doll", qty: 1, unitPrice: 1500 },
      { name: "Single Flower", qty: 4, unitPrice: 100 },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: 800 },
      { name: "Photo Frame", qty: 1, unitPrice: 350 },
      { name: "Calendar", qty: 1, unitPrice: 300 },
      { name: "Mug with Printing", qty: 1, unitPrice: 250 },
      { name: "Cupboard Miniature (8x10)", qty: 1, unitPrice: 1200 },
      { name: "Fire Gun", qty: 0, unitPrice: 250 },
      { name: "Balloon Bunch", qty: 0, unitPrice: 200 },
    ],
  },
  {
    id: "midnight-surprise",
    title: "Midnight Surprise",
    price: 11000,
    originalPrice: 12500,
    category: "Midnight",
    description:
      "A magical midnight celebration at Vizag Beach Road! Everything from the Prank Surprise plus a professionally edited video of the entire event. Perfect for birthdays that start at the stroke of midnight!",
    image: "/images/midnight-surprise.png",
    images: ["/images/midnight-surprise.png", "/images/prank-surprise.png", "/images/candlelight-dinner.png"],
    liveImages: [],
    liveVideos: [],
    itemsIncluded: [
      "Strangers – 4",
      "Dancing Teddy Doll",
      "Single Flowers – 4",
      "Half KG Cool Cake",
      "Photo Frame",
      "Calendar",
      "Mug with Printing",
      "Cupboard Miniature 8x10 Inch",
      "Professionally Edited Video",
    ],
    benefits: [
      "Midnight celebration at Beach Road",
      "Professional video editing included",
      "Dancing teddy performance",
      "4 strangers for maximum fun",
      "Complete personalized gift collection",
      "Magical midnight atmosphere",
      "Shareable edited video memory",
    ],
    badges: [
      "Beach Road Setup",
      "4 Strangers",
      "Dancing Teddy",
      "Edited Video",
      "Midnight Special",
    ],
    eventFlow: [
      "Pre-midnight secret setup",
      "Midnight countdown & surprise",
      "Strangers & teddy performance",
      "Flowers & gifts presentation",
      "Cake cutting at midnight",
      "Fire celebrations & video shoot",
      "Professional video delivery",
    ],
    customizableItems: [
      { name: "Stranger Member", qty: 4, unitPrice: 350 },
      { name: "Dancing Teddy Doll", qty: 1, unitPrice: 1500 },
      { name: "Single Flower", qty: 4, unitPrice: 100 },
      { name: "Half KG Cool Cake", qty: 1, unitPrice: 800 },
      { name: "Photo Frame", qty: 1, unitPrice: 350 },
      { name: "Calendar", qty: 1, unitPrice: 300 },
      { name: "Mug with Printing", qty: 1, unitPrice: 250 },
      { name: "Cupboard Miniature (8x10)", qty: 1, unitPrice: 1200 },
      { name: "Professionally Edited Video", qty: 1, unitPrice: 2500 },
      { name: "Fire Gun", qty: 0, unitPrice: 250 },
      { name: "Balloon Bunch", qty: 0, unitPrice: 200 },
    ],
  },
  {
    id: "candlelight-dinner",
    title: "Candlelight Dinner",
    price: 12500,
    originalPrice: 14000,
    category: "Dinner",
    description:
      "The ultimate romantic candlelight dinner experience on Vizag Beach Road. A round table setup with full candles, fire entry, delicious biryani & starters, cool drinks, Bluetooth music, and a complete set of personalized gifts. Police permission included!",
    image: "/images/candlelight-dinner.png",
    images: ["/images/candlelight-dinner.png", "/images/portfolio-anniversary.png", "/images/portfolio-romantic.png"],
    liveImages: [],
    liveVideos: [],
    itemsIncluded: [
      "Round Table Setup",
      "Cheers Glasses – 2",
      "Grand Fire Entry",
      "Biryani",
      "Starter",
      "Cool Drinks – 2",
      "Full Candle Setup",
      "Police Permission",
      "Bluetooth Speaker",
      "Photo Frame",
      "Calendar",
      "Mug with Printing",
      "Cupboard Miniature 8x10 Inch",
    ],
    benefits: [
      "Complete romantic dinner experience",
      "Delicious biryani & starters included",
      "Spectacular fire entry",
      "Full candle ambiance setup",
      "Police permission handled",
      "Personal Bluetooth speaker for music",
      "All personalized gifts included",
      "Most premium Beach Road experience",
    ],
    badges: [
      "Beach Road Setup",
      "Police Permission",
      "Fire Entry",
      "Full Dinner",
      "Premium",
    ],
    eventFlow: [
      "Table & candle setup on Beach Road",
      "Grand fire entry welcome",
      "Romantic candlelight ambiance",
      "Biryani & starter dinner service",
      "Music via Bluetooth speaker",
      "Gift presentation ceremony",
      "Cake cutting & cheers",
      "Photo session in candlelight",
    ],
    customizableItems: [
      { name: "Round Table Setup", qty: 1, unitPrice: 1500 },
      { name: "Cheers Glasses", qty: 2, unitPrice: 150 },
      { name: "Grand Fire Entry", qty: 1, unitPrice: 1000 },
      { name: "Biryani", qty: 1, unitPrice: 600 },
      { name: "Starter", qty: 1, unitPrice: 400 },
      { name: "Cool Drink", qty: 2, unitPrice: 100 },
      { name: "Full Candle Setup", qty: 1, unitPrice: 800 },
      { name: "Bluetooth Speaker", qty: 1, unitPrice: 500 },
      { name: "Photo Frame", qty: 1, unitPrice: 350 },
      { name: "Calendar", qty: 1, unitPrice: 300 },
      { name: "Mug with Printing", qty: 1, unitPrice: 250 },
      { name: "Cupboard Miniature (8x10)", qty: 1, unitPrice: 1200 },
      { name: "Half KG Cool Cake", qty: 0, unitPrice: 800 },
      { name: "Balloon Bunch", qty: 0, unitPrice: 200 },
    ],
  },
];

export const portfolioImages = [
  {
    src: "/images/portfolio-wedding.png",
    title: "Beach Wedding Decor",
    category: "Wedding",
  },
  {
    src: "/images/portfolio-birthday.png",
    title: "Birthday Bash",
    category: "Birthday",
  },
  {
    src: "/images/portfolio-romantic.png",
    title: "Romantic Surprise",
    category: "Surprise",
  },
  {
    src: "/images/portfolio-anniversary.png",
    title: "Anniversary Celebration",
    category: "Anniversary",
  },
  {
    src: "/images/doll-surprise.png",
    title: "Doll Surprise Setup",
    category: "Surprise",
  },
  {
    src: "/images/candlelight-dinner.png",
    title: "Candlelight Dinner",
    category: "Dinner",
  },
  {
    src: "/images/midnight-surprise.png",
    title: "Midnight Celebration",
    category: "Midnight",
  },
  {
    src: "/images/prank-surprise.png",
    title: "Prank Surprise Event",
    category: "Prank",
  },
];

/** Placeholder video testimonial slots — replace videoUrl with real URLs */
export interface CustomerVideo {
  id: string;
  title: string;
  customerName: string;
  videoUrl: string; // empty = "Coming Soon" placeholder
}

export const customerVideos: CustomerVideo[] = [
  { id: "v1", title: "Birthday Surprise Reaction", customerName: "Priya & Rahul", videoUrl: "" },
  { id: "v2", title: "Candlelight Dinner Experience", customerName: "Anitha & Kiran", videoUrl: "" },
  { id: "v3", title: "Stranger Surprise Memories", customerName: "Sneha & Vikram", videoUrl: "" },
  { id: "v4", title: "Midnight Celebration Vibes", customerName: "Divya & Arjun", videoUrl: "" },
  { id: "v5", title: "Prank Surprise Fun", customerName: "Meera & Sai", videoUrl: "" },
  { id: "v6", title: "Beach Road Romance", customerName: "Lakshmi & Ravi", videoUrl: "" },
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
