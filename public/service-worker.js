/* eslint-disable no-restricted-globals */
import { precaching, routing } from 'workbox-routing';
import { precaching } from 'workbox-precaching';

self.__WB_MANIFEST = [].concat(self.__WB_MANIFEST || []);
precaching.precacheAndRoute(self.__WB_MANIFEST);

routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new cacheableResponse.CacheableResponsePlugin({
    statuses: [0, 200],
  })
);
