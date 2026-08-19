export function getWatchlist() {
  return JSON.parse(localStorage.getItem("watchlist")) || [];
}

export function addToWatchlist(auction) {
  const watchlist = getWatchlist();

  if (!watchlist.find(item => item.id === auction.id)) {
    watchlist.push(auction);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }
}

export function removeFromWatchlist(id) {
  const watchlist = getWatchlist().filter(
    item => item.id !== id
  );

  localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

export function isInWatchlist(id) {
  return getWatchlist().some(
    item => item.id === id
  );
}