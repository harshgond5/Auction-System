const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const auctionRoutes = require('./routes/auctionRoutes');
const adminProductRoutes = require("./routes/adminProductRoutes");
const bidRoutes = require("./routes/bidRoutes");

const app = express();
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Make `io` available inside our controllers
app.set('io', io);

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('joinAuction', (auctionId) => {
    socket.join(auctionId);
  });

  socket.on('leaveAuction', (auctionId) => {
    socket.leave(auctionId);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Connect Database
connectDB();

// --- QUICK CHECK FOR FIREBASE USER (STEP 3) ---
const User = require('./models/User');
setTimeout(async () => {
  try {
    const normalUser = await User.findOne({ role: "USER" });
    if (normalUser) {
      console.log('--- DB CHECK SUCCESS ---');
      console.log('Found user with role "USER":', normalUser.email || normalUser._id);
    } else {
      console.log('--- DB CHECK WARNING ---');
      console.log('No user with role "USER" found in MongoDB yet. Log in via your frontend to sync one.');
    }
  } catch (err) {
    console.error('Error checking users collection:', err.message);
  }
}, 2000);
// ----------------------------------------------

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auctions', auctionRoutes);
app.use(  "/api/admin/products",  adminProductRoutes);
app.use("/api", bidRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.stack);
  res.status(err.status || 500).json({ success: false, message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
  console.log(`AuctionHub Server & WebSockets running on port ${PORT}`);
});