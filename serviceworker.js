const CACHE_NAME = "anon-chef-v1";

const ASSETS_TO_CACHE = [
    "/",
    "/index.html",
    "/pages/account.html",
    "/pages/contact.html",
    "/pages/individualrecipe.html",
    "/pages/login.html",
    "/pages/myaccount.html",
    "/pages/mycookbook.html",
    "/pages/recipes.html",
    "/css/materialize.min.css",
    "/css/style.css",
    "/js/materialize.min.js",
    "/js/ui.js",
    "/img/alfredo.jpg",
    "/img/bowl-of-pasta.jpg",
    "/img/chicken-noodle-soup.jpg",
    "/img/profile-placeholder.jpg",
    "/img/ramen.jpg",
];

self.addEventListener("install", (event) => {
    console.log("Service worker: Installing...");
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Service worker: caching files");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener("activate", (event) => {
    console.log("Service worker: Activating...");
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("Service Worker: Deleting Old Cache");
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", (event) => {
    console.log("Service Worker: Fetching...", event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});