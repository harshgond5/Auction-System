export const profiles = {
  buyer: {
    id: 1,
    role: "Buyer",
    verified: true,

    name: "Harsh Gond",
    username: "harshbuyer",

    avatar: "https://i.pravatar.cc/300?img=12",

    email: "buyer@auctionhub.com",
    phone: "+91 9876543210",
    dob: "2004-05-16",
    gender: "Male",
    occupation: "Student",

    bio:
      "Technology enthusiast who enjoys participating in online auctions and discovering great deals.",

    address: {
      street: "123 MG Road",
      city: "Bhopal",
      state: "Madhya Pradesh",
      country: "India",
      pincode: "462001",
    },

    bank: {
      accountName: "Harsh Gond",
      accountNumber: "XXXX XXXX 4521",
      ifsc: "SBIN0001234",
      bankName: "State Bank of India",
      upi: "harsh@upi",
    },

    kyc: {
      aadhaar: true,
      pan: true,
      selfie: true,
      progress: 100,
    },
  },

  seller: {
    id: 2,
    role: "Seller",
    verified: true,

    name: "Aarav Sharma",
    username: "aaravseller",

    avatar: "https://i.pravatar.cc/300?img=22",

    email: "seller@auctionhub.com",
    phone: "+91 9876500000",
    dob: "1998-08-22",
    gender: "Male",
    occupation: "Business Owner",

    bio:
      "Verified seller dealing in premium electronics and collectibles with 5+ years of auction experience.",

    address: {
      street: "45 Park Street",
      city: "Delhi",
      state: "Delhi",
      country: "India",
      pincode: "110001",
    },

    bank: {
      accountName: "Aarav Sharma",
      accountNumber: "XXXX XXXX 7845",
      ifsc: "HDFC0000456",
      bankName: "HDFC Bank",
      upi: "aarav@okhdfcbank",
    },

    kyc: {
      aadhaar: true,
      pan: true,
      selfie: false,
      progress: 75,
    },
  },

  admin: {
    id: 3,
    role: "Administrator",
    verified: true,

    name: "Admin User",
    username: "auctionadmin",

    avatar: "https://i.pravatar.cc/300?img=60",

    email: "admin@auctionhub.com",
    phone: "+91 9999999999",
    dob: "1995-01-10",
    gender: "Male",
    occupation: "Platform Administrator",

    bio:
      "Responsible for platform management, fraud detection, dispute resolution, and auction moderation.",

    address: {
      street: "Corporate Office",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      pincode: "560001",
    },

    bank: {
      accountName: "AuctionHub Pvt Ltd",
      accountNumber: "XXXX XXXX 9999",
      ifsc: "ICIC0000999",
      bankName: "ICICI Bank",
      upi: "auctionhub@icici",
    },

    kyc: {
      aadhaar: true,
      pan: true,
      selfie: true,
      progress: 100,
    },
  },
};

export const activity = {
  buyer: [
    {
      id: 1,
      title: "Placed highest bid on MacBook Pro",
      time: "10 min ago",
    },
    {
      id: 2,
      title: "Won PlayStation 5 auction",
      time: "Yesterday",
    },
    {
      id: 3,
      title: "Payment completed",
      time: "2 days ago",
    },
    {
      id: 4,
      title: "Added new item to watchlist",
      time: "3 days ago",
    },
  ],

  seller: [
    {
      id: 1,
      title: "Created new auction",
      time: "1 hour ago",
    },
    {
      id: 2,
      title: "Received highest bid",
      time: "Yesterday",
    },
    {
      id: 3,
      title: "Auction completed",
      time: "2 days ago",
    },
    {
      id: 4,
      title: "KYC submitted",
      time: "5 days ago",
    },
  ],

  admin: [
    {
      id: 1,
      title: "Resolved fraud report",
      time: "20 min ago",
    },
    {
      id: 2,
      title: "Approved seller verification",
      time: "Today",
    },
    {
      id: 3,
      title: "Reviewed dispute case",
      time: "Yesterday",
    },
    {
      id: 4,
      title: "Platform analytics updated",
      time: "Yesterday",
    },
  ],
};