const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const auctionRoutes = require('./routes/auctionRoutes');
const bidRoutes = require("./routes/bidRoutes");

const app = express();
const server = http.createServer(app);

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: '*', // In production, replace with your frontend URL
    methods: ['GET', 'POST']
  }
});

// Make `io` available inside our controllers
app.set('io', io);

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Clients will join a "room" named after the auction ID they are viewing
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


// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auctions', auctionRoutes);
// app.use("/api/admin/products", adminProductRoutes);
app.use("/api", bidRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.stack);
  res.status(err.status || 500).json({ success: false, message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5500;
// Note: We are now listening on `server`, not `app`
server.listen(PORT, () => {
  console.log(`AuctionHub Server & WebSockets running on port ${PORT}`);
});