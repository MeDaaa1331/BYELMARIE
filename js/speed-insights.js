/**
 * Vercel Speed Insights initialization
 * This script loads and initializes Speed Insights for performance tracking
 */

// Import the injectSpeedInsights function from the CDN
import { injectSpeedInsights } from 'https://cdn.jsdelivr.net/npm/@vercel/speed-insights@1/+esm';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false // Set to true in development for debugging
});
