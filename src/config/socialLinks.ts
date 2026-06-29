// Social Links Configuration - uses environment variables only
export const socialLinks = {
  // Main social profiles
  github: import.meta.env.VITE_GITHUB_URL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  email: import.meta.env.VITE_EMAIL,
  
  // GitHub repository URLs
  repositories: {
    projectOne: import.meta.env.VITE_GITHUB_PROJECT1_URL,
    projectTwo: import.meta.env.VITE_GITHUB_PROJECT2_URL,
    projectThree: import.meta.env.VITE_GITHUB_PROJECT3_URL,
    projectFour: import.meta.env.VITE_GITHUB_PROJECT4_URL,
    projectFive: import.meta.env.VITE_GITHUB_PROJECT5_URL,
    projectSix: import.meta.env.VITE_GITHUB_PROJECT6_URL,
    projectSeven: import.meta.env.VITE_GITHUB_PROJECT7_URL,
  },

  // Deployed live projects
    live: {
    projectOne: import.meta.env.VITE_PROJECT1_LIVE_URL,
    projectTwo: import.meta.env.VITE_PROJECT2_LIVE_URL,
    projectThree: import.meta.env.VITE_PROJECT3_LIVE_URL,
    projectFour: import.meta.env.VITE_PROJECT4_LIVE_URL,
    projectFive: import.meta.env.VITE_PROJECT5_LIVE_URL,
    projectSix: import.meta.env.VITE_PROJECT6_LIVE_URL,
    projectSeven: import.meta.env.VITE_PROJECT7_LIVE_URL,
  },
  
  // Formatted display names (extracted from environment variables)
  display: {
    github: import.meta.env.VITE_GITHUB_URL?.replace('https://', ''),
    linkedin: import.meta.env.VITE_LINKEDIN_URL?.replace('https://', ''),
    email: import.meta.env.VITE_EMAIL,
  }
};

export default socialLinks;