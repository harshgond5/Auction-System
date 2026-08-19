PLATFORM_DB = {
    "platform_name": "AuctioHub",
    "tagline": "India's Premier AI-Powered Smart Auction Platform",
    "active_auctions_count": 28,
    "total_volume_inr": "₹2,450,000",
    "categories": [
        "Electronics",
        "Mobiles",
        "Gaming",
        "Camera",
        "Fashion",
        "Vehicles",
        "Books",
        "Furniture",
        "Collectibles"
    ],
    "support_email": "support@auctionhub.com",
    "helpline": "+91 1800-AUCTION"
}

DEFAULT_USER = {
    "id": 1,
    "name": "Active User",
    "email": "user@example.com",
    "phone": "+91 9876543210",
    "location": "Greater Noida, India",
    "avatar": "https://i.pravatar.cc/300?img=12",
    "verified": True,
    "account_status": "Active & Trusted",
    
    # Buyer Metrics
    "wallet_balance": 150000.00,
    "active_bids": [
        {
            "item": "Apple MacBook Pro M3 Max",
            "current_bid": 125000,
            "my_max_bid": 130000,
            "status": "Winning"
        },
        {
            "item": "Apple iPhone 15 Pro Max",
            "current_bid": 95000,
            "my_max_bid": 92000,
            "status": "Outbid"
        }
    ],
    "watchlist": [
        "Sony Alpha A7 IV",
        "Vintage Louis Vuitton Keepall 55",
        "Royal Enfield Classic 350"
    ],
    
    # Seller Metrics
    "payout_balance": 315000.00,
    "seller_rating": 4.9,
    "total_sales": 182,
    "active_listings": [
        {
            "id": 101,
            "title": "Custom Gaming PC RTX 4090",
            "category": "Electronics",
            "reserve_price": 210000,
            "current_bid": 215000,
            "bids_received": 14,
            "status": "Live"
        }
    ]
}

featuredAuctions = [
    {
        "id": 1,
        "title": "Apple MacBook Pro M3 Max",
        "category": "Electronics",
        "seller": {"name": "TechStore India", "rating": 4.9, "verified": True, "location": "Delhi"},
        "currentBid": 125000,
        "startingBid": 100000,
        "minimumIncrement": 1000,
        "bids": 28,
        "endTime": "2026-07-25T20:30:00",
        "description": "Apple MacBook Pro powered by M3 Max Chip with 36GB RAM and 1TB SSD.",
        "specifications": {"Brand": "Apple", "Processor": "M3 Max", "RAM": "36 GB", "Storage": "1 TB SSD"}
    },
    {
        "id": 2,
        "title": "Apple iPhone 15 Pro Max",
        "category": "Mobiles",
        "seller": {"name": "Apple Hub", "rating": 4.8, "verified": True, "location": "Mumbai"},
        "currentBid": 95000,
        "startingBid": 82000,
        "minimumIncrement": 500,
        "bids": 34,
        "endTime": "2026-07-26T18:00:00",
        "description": "Brand new Apple iPhone 15 Pro Max 256GB Natural Titanium with official Apple warranty.",
        "specifications": {"Brand": "Apple", "Storage": "256 GB", "Color": "Natural Titanium", "Battery": "100%"}
    },
    {
        "id": 3,
        "title": "Sony Alpha A7 IV",
        "category": "Camera",
        "seller": {"name": "Sony Official", "rating": 5, "verified": True, "location": "Bangalore"},
        "currentBid": 108000,
        "startingBid": 90000,
        "minimumIncrement": 1000,
        "bids": 17,
        "endTime": "2026-07-24T15:45:00",
        "description": "Sony Alpha A7 IV Mirrorless Camera with 28-70mm Lens. Mint condition.",
        "specifications": {"Brand": "Sony", "Sensor": "33MP", "Lens": "28-70mm"}
    },
    {
        "id": 4,
        "title": "Sony PlayStation 5",
        "category": "Gaming",
        "seller": {"name": "Game World", "rating": 4.7, "verified": True, "location": "Pune"},
        "currentBid": 45000,
        "startingBid": 35000,
        "minimumIncrement": 500,
        "bids": 22,
        "endTime": "2026-07-23T16:30:00",
        "description": "Sony PlayStation 5 Disc Edition with DualSense Controller and original accessories.",
        "specifications": {"Brand": "Sony", "Edition": "Disc", "Storage": "825GB SSD"}
    },
    {
        "id": 5,
        "title": "Vintage Louis Vuitton Keepall 55",
        "category": "Fashion",
        "seller": {"name": "Luxury Finds", "rating": 4.9, "verified": True, "location": "Mumbai"},
        "currentBid": 65000,
        "startingBid": 45000,
        "minimumIncrement": 2000,
        "bids": 12,
        "endTime": "2026-07-28T12:00:00",
        "description": "Authentic vintage Louis Vuitton Keepall Bandoulière 55. Monogram canvas in great condition.",
        "specifications": {"Brand": "Louis Vuitton", "Material": "Monogram Canvas", "Size": "55cm"}
    },
    {
        "id": 6,
        "title": "Royal Enfield Classic 350 (2023)",
        "category": "Vehicles",
        "seller": {"name": "Auto Traders", "rating": 4.6, "verified": True, "location": "Delhi"},
        "currentBid": 145000,
        "startingBid": 120000,
        "minimumIncrement": 5000,
        "bids": 8,
        "endTime": "2026-07-30T10:00:00",
        "description": "Lightly used Royal Enfield Classic 350. Stealth Black color, single owner, all papers clear.",
        "specifications": {"Brand": "Royal Enfield", "Model": "Classic 350", "Year": "2023", "Mileage": "4500 km"}
    },
    {
        "id": 7,
        "title": "Harry Potter and the Philosopher's Stone (1st Edition)",
        "category": "Books",
        "seller": {"name": "Rare Reads", "rating": 5.0, "verified": True, "location": "Kolkata"},
        "currentBid": 250000,
        "startingBid": 180000,
        "minimumIncrement": 10000,
        "bids": 42,
        "endTime": "2026-08-05T14:00:00",
        "description": "Extremely rare first edition, first printing of Harry Potter and the Philosopher's Stone.",
        "specifications": {"Author": "J.K. Rowling", "Publisher": "Bloomsbury", "Year": "1997"}
    },
    {
        "id": 8,
        "title": "Antique Victorian Oak Dining Table",
        "category": "Furniture",
        "seller": {"name": "Heritage Antiques", "rating": 4.8, "verified": True, "location": "Jaipur"},
        "currentBid": 85000,
        "startingBid": 60000,
        "minimumIncrement": 2500,
        "bids": 6,
        "endTime": "2026-07-29T17:00:00",
        "description": "Original 19th-century Victorian solid oak dining table. Seats 8 comfortably. Restored beautifully.",
        "specifications": {"Material": "Solid Oak", "Era": "Victorian (1880s)", "Seating": "8 People"}
    }
]


fraudAnalysis = {
    "overallRisk": "Low",
    "confidence": 96,
    "aiStatus": "Verified",
    "verifiedSeller": True,
    "verifiedBuyer": True,
    "trustedDevice": True,
    "bidPattern": "Normal",
    "paymentVerified": True,
    "accountAge": "2 Years",
    "suspiciousActivity": False,
}