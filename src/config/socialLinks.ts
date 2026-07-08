// Social Links Configuration - uses environment variables only
export const socialLinks = {
  // Main social profiles
  github: import.meta.env.VITE_GITHUB_URL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  email: import.meta.env.VITE_EMAIL,
  
  // GitHub repository URLs
  repositories: {
    smartdeskAi: import.meta.env.VITE_GITHUB_PROJECT1_URL,
    alzeihmerRisk: import.meta.env.VITE_GITHUB_PROJECT2_URL,
    fingerCounting: import.meta.env.VITE_GITHUB_PROJECT3_URL,
    BAE: import.meta.env.VITE_GITHUB_PROJECT4_URL,
    studyBuzz: import.meta.env.VITE_GITHUB_PROJECT5_URL,
    realtimeEmotion: import.meta.env.VITE_GITHUB_PROJECT6_URL,
    ginnieVa: import.meta.env.VITE_GITHUB_PROJECT7_URL,
    nexalyze: import.meta.env.VITE_GITHUB_PROJECT8_URL,
  },

  // Deployed live projects
    live: {
    smartdeskAi: import.meta.env.VITE_PROJECT1_LIVE_URL,
    alzeihmerRisk: import.meta.env.VITE_PROJECT2_LIVE_URL,
    fingerCounting: import.meta.env.VITE_PROJECT3_LIVE_URL,
    BAE: import.meta.env.VITE_PROJECT4_LIVE_URL,
    studyBuzz: import.meta.env.VITE_PROJECT5_LIVE_URL,
    realtimeEmotion: import.meta.env.VITE_PROJECT6_LIVE_URL,
    ginnieVa: import.meta.env.VITE_PROJECT7_LIVE_URL,
    nexalyze: import.meta.env.VITE_PROJECT8_LIVE_URL,
  },
  
  // Formatted display names (extracted from environment variables)
  display: {
    github: import.meta.env.VITE_GITHUB_URL?.replace('https://', ''),
    linkedin: import.meta.env.VITE_LINKEDIN_URL?.replace('https://', ''),
    email: import.meta.env.VITE_EMAIL,
  }
};

export default socialLinks;