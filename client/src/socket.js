import { io } from 'socket.io-client';

// We strip '/api' off the base URL so it connects to the root Express server
const SOCKET_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5500/api').replace('/api', '');

export const socket = io(SOCKET_URL, {
  autoConnect: true,
  reconnection: true,
});