export function formatCurrency(amount) {
  if (amount === null || amount === undefined || Number.isNaN(Number(amount))) {
    return "₹0";
  }

  return `₹${Number(amount).toLocaleString("en-IN")}`;
}

/**
 * Returns a short human string like "2h 18m", "3d 4h", "Ended", etc.
 */
export function formatTimeLeft(endTime) {
  if (!endTime) return "—";

  const end = new Date(endTime).getTime();
  const now = Date.now();
  const diff = end - now;

  if (diff <= 0) {
    return "Ended";
  }

  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${secs}s`;
  return `${secs}s`;
}

export function isAuctionActive(auction) {
  if (!auction) return false;
  return (
    auction.status === "active" && new Date(auction.endTime) > new Date()
  );
}

export function resolveImageUrl(path) {
  if (!path) return "/images/default-avatar.png";
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  return `http://localhost:5000${path}`;
}
