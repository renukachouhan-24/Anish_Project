// Analytics utility functions
export const trackPageView = (pageName) => {
  console.log(`Page viewed: ${pageName}`);
  // You can integrate with Google Analytics, Mixpanel, or other analytics services here
};

export const trackSectionView = (sectionName, pageName) => {
  console.log(`Section viewed: ${sectionName} on ${pageName}`);
  // Track section visibility
};

export const trackFacilityInteraction = (facilityName, action) => {
  console.log(`Facility interaction: ${action} on ${facilityName}`);
  // Track facility interactions
};

export const trackEvent = (eventName, properties = {}) => {
  console.log(`Event tracked: ${eventName}`, properties);
  // Generic event tracking
};
