/**
 * Vercel Speed Insights Initialization
 * This script is loaded via the Vercel-provided speed-insights script
 * When deployed to Vercel, the /_vercel/speed-insights/script.js endpoint
 * automatically becomes available and tracks web vitals.
 */

// Speed Insights configuration (if needed)
if (typeof window !== 'undefined' && window.si) {
  // Optional: Add beforeSend middleware to filter or modify events
  // window.si('beforeSend', function(data) {
  //   console.log('Speed Insights event:', data);
  //   return data;
  // });
}
