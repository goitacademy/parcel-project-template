import {
  watched,
  queue,
  setWatchedLocalStoradge,
  setQueueLocalStoradge,
} from './local-storage';

export function onAddToWatched(id) {
   if (watched.includes(id)) {
    return;
  }
  watched.push(id);
  setWatchedLocalStoradge(watched);
  
}

export function onAddToQueue(id) {
    if (queue.includes(id)) {
    return;
  }
  queue.push(id);
  setQueueLocalStoradge(queue);
}
