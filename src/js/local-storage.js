const KEY_WATCHED = 'watched';
const KEY_QUEUE = 'queue';
export const watched = getWatchedLocalStoradge() || [];
export const queue = getQueueLocalStoradge() || [];

export function getWatchedLocalStoradge() {
  return JSON.parse(localStorage.getItem(KEY_WATCHED));
}

export function getQueueLocalStoradge() {
  return JSON.parse(localStorage.getItem(KEY_QUEUE));
}

export function setWatchedLocalStoradge(arr) {
  localStorage.setItem(KEY_WATCHED, JSON.stringify(arr));
}

export function setQueueLocalStoradge(arr) {
  localStorage.setItem(KEY_QUEUE, JSON.stringify(arr));
}
