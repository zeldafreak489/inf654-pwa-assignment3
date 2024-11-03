# PWA Prototype - Iris Perry

This is my expanded PWA Prototype for my INF654VA class. It is a recipe app that allows users to create an anonymous account, share recipes, and save recipes.
It has now been upgraded into a PWA with a web manifest and service worker.

# Service Worker
What is a Service Worker?

A service worker is a script that runs in the background, separate from the web page, enabling capabilities such as offline support, background syncing, and push notifications.

# How It Works in This Project

The service worker in this project is responsible for:

    Intercepting network requests and serving cached content when offline.
    Managing the caching of assets during installation and activation phases.

# Lifecycle Phases

    Installation: Caches specified assets.
    Activation: Cleans up old caches.
    Fetch: Intercepts network requests and returns cached content or fetches new data.

# Caching Strategy

This strategy allows the service worker to respond with cached resources if available, falling back to the network if not. It helps ensure fast load times and offline access.

The chosen strategy offers a balance between speed and freshness, providing users with a responsive experience while still updating assets periodically.

# Cache Management

    Updating Cache: The service worker checks for updates to cache assets during the activation phase.
    Clearing Old Caches: Old caches are removed to prevent excess storage use.

# Manifest File
What is a Manifest File?

The web app manifest is a JSON file that defines the structure of the PWA, making it installable and more app-like on devices.
