 
export const trackPageView = (pageName) => {
  console.log(`Page viewed: ${pageName}`);
   
};

export const trackSectionView = (sectionName, pageName) => {
  console.log(`Section viewed: ${sectionName} on ${pageName}`);
 
};

export const trackFacilityInteraction = (facilityName, action) => {
  console.log(`Facility interaction: ${action} on ${facilityName}`);
   
};

export const trackEvent = (eventName, properties = {}) => {
  console.log(`Event tracked: ${eventName}`, properties);
  
};
