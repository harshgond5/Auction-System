export const currentUser =[{
  id: 1,
  name: "Harsh",
  email: "harsh@example.com",
  role: "Buyer",
  avatar: "https://i.pravatar.cc/300?img=12",
  verified: true,
},
  {
    id: 2,
    name: "Seller User",
    email: "seller@auctionhub.com",
    password: "Seller@123",
    role: "seller",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Admin",
    email: "admin@auctionhub.com",
    password: "Admin@123",
    role: "admin",
    avatar: "https://i.pravatar.cc/150?img=52",
  },
];

export const featuredAuctions = [
  {
    id: 1,

    title: "Apple MacBook Pro M3 Max",

    category: "Electronics",

    seller: {
      name: "TechStore India",
      rating: 4.9,
      verified: true,
      location: "Delhi",
    },

    currentBid: 125000,

    startingBid: 100000,

    minimumIncrement: 1000,

    bids: 28,

    watching: 324,

    views: 2481,

    likes: 214,

    featured: true,

    trending: true,

    aiVerified: true,

    fraudRisk: "Low",

    endTime: "2026-07-09T20:30:00",

    description:
      "Apple MacBook Pro powered by M3 Max Chip with 36GB RAM and 1TB SSD. Excellent condition with original charger and warranty.",

    specifications: {
      Brand: "Apple",
      Processor: "M3 Max",
      RAM: "36 GB",
      Storage: "1 TB SSD",
      Display: "Liquid Retina XDR",
      Condition: "Excellent",
      Warranty: "6 Months",
    },

    images: [
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=900",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900",
    ],

    bidHistory: [
      {
        bidder: "Rahul Sharma",
        amount: 125000,
        time: "2 mins ago",
      },
      {
        bidder: "Sneha",
        amount: 124000,
        time: "6 mins ago",
      },
      {
        bidder: "Amit",
        amount: 123000,
        time: "12 mins ago",
      },
    ],
  },

  {
    id: 2,

    title: "Apple iPhone 15 Pro Max",

    category: "Mobiles",

    seller: {
      name: "Apple Hub",
      rating: 4.8,
      verified: true,
      location: "Mumbai",
    },

    currentBid: 95000,

    startingBid: 82000,

    minimumIncrement: 500,

    bids: 34,

    watching: 482,

    views: 3650,

    likes: 356,

    featured: true,

    trending: true,

    aiVerified: true,

    fraudRisk: "Low",

    endTime: "2026-07-09T18:00:00",

    description:
      "Brand new Apple iPhone 15 Pro Max 256GB Natural Titanium with official Apple warranty.",

    specifications: {
      Brand: "Apple",
      Storage: "256 GB",
      Color: "Natural Titanium",
      Battery: "100%",
      Warranty: "11 Months",
      Condition: "Brand New",
    },

    images: [
      "https://images.unsplash.com/photo-1695048133142-1a204b3d1a12?w=900",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=900",
    ],

    bidHistory: [
      {
        bidder: "Neha",
        amount: 95000,
        time: "1 min ago",
      },
      {
        bidder: "Priya",
        amount: 94500,
        time: "4 mins ago",
      },
    ],
  },

  {
    id: 3,

    title: "Sony Alpha A7 IV",

    category: "Camera",

    seller: {
      name: "Sony Official",
      rating: 5,
      verified: true,
      location: "Bangalore",
    },

    currentBid: 108000,

    startingBid: 90000,

    minimumIncrement: 1000,

    bids: 17,

    watching: 142,

    views: 985,

    likes: 74,

    featured: true,

    trending: false,

    aiVerified: true,

    fraudRisk: "Low",

    endTime: "2026-07-10T15:45:00",

    description:
      "Sony Alpha A7 IV Mirrorless Camera with 28-70mm Lens. Mint condition.",

    specifications: {
      Brand: "Sony",
      Sensor: "33MP",
      Lens: "28-70mm",
      Condition: "Like New",
    },

    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900",
    ],

    bidHistory: [
      {
        bidder: "Rahul",
        amount: 108000,
        time: "9 mins ago",
      },
    ],
  },

  {
    id: 4,

    title: "Sony PlayStation 5",

    category: "Gaming",

    seller: {
      name: "Game World",
      rating: 4.7,
      verified: true,
      location: "Pune",
    },

    currentBid: 45000,

    startingBid: 35000,

    minimumIncrement: 500,

    bids: 22,

    watching: 298,

    views: 1820,

    likes: 162,

    featured: true,

    trending: true,

    aiVerified: true,

    fraudRisk: "Low",

    endTime: "2026-07-09T16:30:00",

    description:
      "Sony PlayStation 5 Disc Edition with DualSense Controller and original accessories.",

    specifications: {
      Brand: "Sony",
      Edition: "Disc",
      Storage: "825GB SSD",
      Condition: "Excellent",
    },

    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=900",
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=900",
    ],

    bidHistory: [
      {
        bidder: "Amit",
        amount: 45000,
        time: "5 mins ago",
      },
    ],
  },
];

export const fraudAnalysis = {
  overallRisk: "Low",
  confidence: 96,
  aiStatus: "Verified",
  verifiedSeller: true,
  verifiedBuyer: true,
  trustedDevice: true,
  bidPattern: "Normal",
  paymentVerified: true,
  accountAge: "2 Years",
  suspiciousActivity: false,
};
export const fraudAlerts = [
  {
    id: 1,
    bidder: "Rahul Sharma",
    auction: "Apple MacBook Pro M3 Max",
    risk: "High",
    confidence: 98,
    reason: "Rapid consecutive bids",
    action: "Manual Review",
    status: "Pending",
  },
  {
    id: 2,
    bidder: "Amit Kumar",
    auction: "Sony Alpha A7 IV",
    risk: "Medium",
    confidence: 86,
    reason: "Multiple login devices",
    action: "Monitor",
    status: "Monitoring",
  },
  {
    id: 3,
    bidder: "Neha Kapoor",
    auction: "iPhone 15 Pro Max",
    risk: "Low",
    confidence: 95,
    reason: "Normal bidding pattern",
    action: "Approved",
    status: "Safe",
  },
];

// ============================================
// LIVE ACTIVITIES
// ============================================

export const liveActivities = [
  {
    id: 1,
    type: "bid",
    user: "Rahul Sharma",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    auctionId: 1,
    product: "Apple MacBook Pro M3 Max",
    amount: 126000,
    location: "Delhi",
    verified: true,
    time: "Just now",
  },

  {
    id: 2,
    type: "win",
    user: "Priya Singh",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    auctionId: 4,
    product: "Sony PlayStation 5",
    amount: 45500,
    location: "Mumbai",
    verified: true,
    time: "20 sec ago",
  },

  {
    id: 3,
    type: "listing",
    user: "Amit Verma",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    auctionId: 3,
    product: "Sony Alpha A7 IV",
    amount: 108000,
    location: "Bangalore",
    verified: false,
    time: "1 min ago",
  },

  {
    id: 4,
    type: "bid",
    user: "Neha Kapoor",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    auctionId: 2,
    product: "iPhone 15 Pro Max",
    amount: 96000,
    location: "Pune",
    verified: true,
    time: "3 mins ago",
  },

  {
    id: 5,
    type: "watch",
    user: "Rohit Mehta",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    auctionId: 1,
    product: "Apple MacBook Pro M3 Max",
    amount: null,
    location: "Hyderabad",
    verified: false,
    time: "5 mins ago",
  },
];

// ============================================
// ACTIVITY FEED
// ============================================

export const activityFeed = [
  {
    id: 1,
    icon: "🔥",
    color: "#ef4444",
    title: "New Highest Bid",
    description:
      "Rahul Sharma placed ₹1,26,000 on Apple MacBook Pro M3 Max.",
    time: "Just now",
  },

  {
    id: 2,
    icon: "⚡",
    color: "#3b82f6",
    title: "Auction Ending Soon",
    description:
      "Sony PlayStation 5 auction ends in less than 30 minutes.",
    time: "3 mins ago",
  },

  {
    id: 3,
    icon: "🏆",
    color: "#22c55e",
    title: "Auction Won",
    description:
      "Priya Singh won Sony PlayStation 5 for ₹45,500.",
    time: "18 mins ago",
  },

  {
    id: 4,
    icon: "📦",
    color: "#8b5cf6",
    title: "New Auction Listed",
    description:
      "Sony Alpha A7 IV has been published.",
    time: "35 mins ago",
  },

  {
    id: 5,
    icon: "⭐",
    color: "#f59e0b",
    title: "Seller Earned 5 Stars",
    description:
      "TechStore India received another five-star review.",
    time: "2 hours ago",
  },

  {
    id: 6,
    icon: "🛡",
    color: "#10b981",
    title: "AI Verification Complete",
    description:
      "Apple MacBook Pro M3 Max passed authenticity verification.",
    time: "Yesterday",
  },
];

// ============================================
// NOTIFICATIONS
// ============================================

export const notifications = [
  {
    id: 1,
    type: "warning",
    title: "You have been Outbid",
    message:
      "Someone placed a higher bid on Apple MacBook Pro M3 Max.",
    time: "Just now",
    read: false,
  },

  {
    id: 2,
    type: "success",
    title: "Auction Won",
    message:
      "Congratulations! You won the Sony PlayStation 5 auction.",
    time: "1 hour ago",
    read: false,
  },

  {
    id: 3,
    type: "info",
    title: "Auction Ending Soon",
    message:
      "Your watched auction ends in less than 30 minutes.",
    time: "2 hours ago",
    read: true,
  },

  {
    id: 4,
    type: "success",
    title: "Payment Received",
    message:
      "₹45,500 has been credited to your wallet.",
    time: "Yesterday",
    read: true,
  },

  {
    id: 5,
    type: "primary",
    title: "AI Verification Completed",
    message:
      "Your newly listed auction has been AI verified.",
    time: "Yesterday",
    read: true,
  },
];
// ==============================
// Categories
// ==============================

export const categories = [
  "Electronics",
  "Mobiles",
  "Gaming",
  "Fashion",
  "Vehicles",
  "Books",
  "Furniture",
  "Collectibles",
];


// ============================================
// DEFAULT AUCTION DETAILS
// ============================================

export const auctionDetails = {
  ...featuredAuctions[0],

  seller: {
    ...featuredAuctions[0].seller,

    joined: "January 2024",

    totalSales: 182,

    responseRate: "99%",

    completedAuctions: 314,
  },

  shipping: {
    location: "Delhi",
    delivery: "3-5 Business Days",
    courier: "BlueDart",
    freeShipping: true,
  },

  payment: [
    "UPI",
    "Credit Card",
    "Debit Card",
    "Net Banking",
    "Wallet",
  ],

  returnPolicy:
    "7-Day Return available if product condition differs from description.",

  aiAnalysis: {
    authenticity: 98,
    sellerTrust: 97,
    fraudRisk: "Low",
    verifiedProduct: true,
  },
};

// ============================================
// RELATED AUCTIONS
// ============================================

export const relatedAuctions = featuredAuctions.filter(
  (item) => item.id !== featuredAuctions[0].id
);

// ============================================
// WATCHLIST
// ============================================

export const watchlist = [
  featuredAuctions[1],
  featuredAuctions[2],
  featuredAuctions[3],
];

// ============================================
// SELLER
// ============================================

export const seller = {
  ...featuredAuctions[0].seller,

  totalSales: 182,

  completedAuctions: 314,

  responseRate: "99%",

  followers: 1850,

  memberSince: "January 2024",

  description:
    "Verified electronics seller with over 300 successful auctions across India.",
};

// ============================================
// DASHBOARD STATS
// ============================================

export const dashboardStats = [
  {
    id: 1,
    title: "Revenue",
    value: "₹18,42,500",
    change: "+18.4%",
    trend: "up",
    icon: "💰",
    progress: 82,
  },

  {
    id: 2,
    title: "Live Auctions",
    value: "24",
    change: "+6",
    trend: "up",
    icon: "🔥",
    progress: 74,
  },

  {
    id: 3,
    title: "Products Sold",
    value: "286",
    change: "+14%",
    trend: "up",
    icon: "📦",
    progress: 91,
  },

  {
    id: 4,
    title: "Pending Payments",
    value: "₹1,24,500",
    change: "Processing",
    trend: "neutral",
    icon: "🏦",
    progress: 55,
  },
];

// ============================================
// MY AUCTIONS
// ============================================

export const myAuctions = featuredAuctions.map((auction, index) => ({
  id: auction.id,

  title: auction.title,

  image: auction.image,

  category: auction.category,

  currentBid: auction.currentBid,

  bids: auction.totalBids,

  endsIn: auction.timeLeft,

  status:
    index === 0
      ? "Live"
      : index === 1
      ? "Scheduled"
      : index === 2
      ? "Ending Soon"
      : "Draft",
}));

// ============================================
// MONTHLY REVENUE
// ============================================

export const revenueData = [
  { month: "Jan", value: 84000 },

  { month: "Feb", value: 122000 },

  { month: "Mar", value: 148000 },

  { month: "Apr", value: 182000 },

  { month: "May", value: 196000 },

  { month: "Jun", value: 241000 },

  { month: "Jul", value: 288000 },

  { month: "Aug", value: 315000 },

  { month: "Sep", value: 342000 },

  { month: "Oct", value: 368000 },

  { month: "Nov", value: 412000 },

  { month: "Dec", value: 468000 },
];

// ============================================
// RECENT BIDS
// ============================================

export const recentBids = [
  {
    id: 1,
    bidder: "Rahul Sharma",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    auction: featuredAuctions[0].title,
    amount: "₹1,26,000",
    status: "Leading",
    time: "Just now",
  },

  {
    id: 2,
    bidder: "Priya Singh",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    auction: featuredAuctions[1].title,
    amount: "₹97,000",
    status: "Leading",
    time: "8 mins ago",
  },

  {
    id: 3,
    bidder: "Amit Verma",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    auction: featuredAuctions[2].title,
    amount: "₹1,09,000",
    status: "Outbid",
    time: "18 mins ago",
  },

  {
    id: 4,
    bidder: "Neha Kapoor",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    auction: featuredAuctions[3].title,
    amount: "₹46,500",
    status: "Winning",
    time: "32 mins ago",
  },
];

// ============================================
// RECENT BUYERS
// ============================================

export const recentBuyers = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Delhi",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    purchases: 18,
    spent: "₹8.6L",
    verified: true,
  },

  {
    id: 2,
    name: "Priya Singh",
    city: "Mumbai",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    purchases: 15,
    spent: "₹6.4L",
    verified: true,
  },

  {
    id: 3,
    name: "Amit Verma",
    city: "Bengaluru",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    purchases: 12,
    spent: "₹5.2L",
    verified: false,
  },

  {
    id: 4,
    name: "Neha Kapoor",
    city: "Pune",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    purchases: 10,
    spent: "₹4.9L",
    verified: true,
  },
];

// ============================================
// USER PROFILE
// ============================================

export const profile = {
  id: 1,

  name: "Harsh Kumar",

  email: "harsh@example.com",

  phone: "+91 9876543210",

  location: "Greater Noida",

  joined: "January 2025",

  avatar: "https://i.pravatar.cc/300?img=12",

  bio:
    "Passionate buyer and seller specializing in premium electronics and gadgets.",

  verified: true,

  stats: {
    auctions: 24,

    bids: 186,

    won: 18,

    followers: 1290,

    following: 248,

    rating: 4.9,
  },
};

// ============================================
// BID HISTORY
// ============================================

export const bidHistory = [
  {
    id: 1,
    bidder: "Rahul Sharma",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    amount: "₹1,26,000",
    time: "Just now",
    verified: true,
    status: "Highest Bid",
  },
  {
    id: 2,
    bidder: "Priya Singh",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    amount: "₹1,25,000",
    time: "3 mins ago",
    verified: true,
    status: "Outbid",
  },
  {
    id: 3,
    bidder: "Amit Verma",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    amount: "₹1,24,000",
    time: "8 mins ago",
    verified: false,
    status: "Outbid",
  },
  {
    id: 4,
    bidder: "Neha Kapoor",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    amount: "₹1,23,000",
    time: "15 mins ago",
    verified: true,
    status: "Outbid",
  },
  {
    id: 5,
    bidder: "Arjun Mehta",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    amount: "₹1,22,000",
    time: "28 mins ago",
    verified: true,
    status: "Outbid",
  },
  {
    id: 6,
    bidder: "Karan Patel",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg",
    amount: "₹1,21,000",
    time: "42 mins ago",
    verified: false,
    status: "Outbid",
  },
];
// ============================================
// SELLER AUCTIONS
// ============================================

export const sellerAuctions = [
  {
    id: 1,
    title: "Apple MacBook Pro M3 Max",
    category: "Laptop",
    currentBid: "₹1,25,000",
    bids: 28,
    timeLeft: "2h 18m",
    status: "Live",
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600",
  },
  {
    id: 2,
    title: "iPhone 15 Pro Max",
    category: "Mobile",
    currentBid: "₹95,000",
    bids: 34,
    timeLeft: "1h 42m",
    status: "Live",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
  },
  {
    id: 3,
    title: "Sony Alpha A7 IV",
    category: "Camera",
    currentBid: "₹1,08,000",
    bids: 17,
    timeLeft: "5h 12m",
    status: "Live",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
  },
  {
    id: 4,
    title: "PlayStation 5",
    category: "Gaming",
    currentBid: "₹45,000",
    bids: 22,
    timeLeft: "3h 05m",
    status: "Ended",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600",
  },
];