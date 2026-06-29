import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import mckinseyForwardBadge from '../../assets/badges/McKinsey_forward_badge.png';
import googleCloudGenAIBadge from '../../assets/badges/Google_generativeAI_badge.png';
import ciscoModernAIBadge from '../../assets/badges/Cisco_modernAI_badge.png';
import atosWinnerImage from '../../assets/badges/atosWinnerImage.jpg';
import summerAnalyticsCertificate from '../../assets/badges/Summer_Analytics_2025.jpeg';
import gssocCertificate from '../../assets/badges/GSSOC_Certificate.png';
import microsoftGenAIBadge from '../../assets/badges/microsoft_gen_ai_badge.jpeg';
import CertificateOfExcellence from '../../assets/badges/CertificateOfExcellence.png';
// import awsCloudFoundationsBadge from '../../assets/badges/AWS_cloud_foundations_badge.webp';
// import awsCloudPractitionerBadge from '../../assets/badges/AWS_cloud_practitioner_badge.webp';
// import citiLogo from '../../assets/badges/citi_logo.webp';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const badges = [
    {
      id: 'mckinsey-forward',
      image: mckinseyForwardBadge,
      alt: 'McKinsey Forward Badge',
      title: 'McKinsey Forward Program',
      subtitle: 'McKinsey.org',
      credentialUrl: 'https://www.credly.com/badges/7b5f1178-2305-4c16-88c2-a076c5ded173/public_url',
      status: 'completed'
    },
    {
      id: 'google-cloud-generative-ai',
      image: googleCloudGenAIBadge,
      alt: 'Google Cloud Generative AI Badge',
      title: 'Google Cloud Generative AI',
      subtitle: 'Google Cloud',
      credentialUrl: 'https://www.skills.google/public_profiles/ce3f8116-a2c7-45d1-baf0-723bd639b6a0/badges/14200500',
      status: 'completed'
    },
    {
      id: 'cisco-modern-ai',
      image: ciscoModernAIBadge,
      alt: 'Cisco Modern AI Badge',
      title: 'Cisco Modern AI',
      subtitle: 'Cisco Networking Academy',
      credentialUrl: 'https://www.credly.com/badges/14b8f09b-4430-486c-ab2d-46ec6b26e2c2/public_url',
      status: 'completed'
    },
        {
      id: 'microsoft-gen-ai',
      image: microsoftGenAIBadge,
      alt: 'Microsoft Generative AI Badge',
      title: 'Microsoft Generative AI',
      subtitle: 'Microsoft',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/299743db375a8b72fad752657e98cd8064c7199ee5415eab542f52d2679f203b',
      status: 'completed'
    }
  ];

  const achievements = [
    {
      id: "atos",
      image: atosWinnerImage,
      alt: "Atos Hackathon Winner",
      title: "Top Performer – Atos Hackathon",
      subtitle: "Srijan 2026",
      credentialUrl: "https://unstop.com/certificate-preview/76d51d73-4a12-4b4c-9877-df471908a84c"
    },
    {
      id: "summer-analytics",
      image: summerAnalyticsCertificate,
      alt: "Summer Analytics",
      title: "Summer Analytics 2025",
      subtitle: "IIT Guwahati",
      credentialUrl: "https://certificate.givemycertificate.com/c/14158a63-bad3-4f25-81fa-b98dee9bcb7a"
    },
    {
      id: "gssoc",
      image: gssocCertificate,
      alt: "GirlScript Summer of Code",
      title: "Open Source Contribution",
      subtitle: "GirlScript Summer of Code'25",
      credentialUrl: "https://drive.google.com/file/d/1MhKJ7ik3HFSGiZwP2vKfvfvFXtBHMyfH/view?usp=sharing"
    },
    {
      id: "first-pos",
      image: CertificateOfExcellence,
      alt: "First Rank in CSE",
      title: "First Rank in CSE 21-23",
      subtitle: "Thapar Polytechnic College",
      credentialUrl: "https://drive.google.com/file/d/14X1De-Xs5Ys78uIh6Z4EC0k9gwJ-8-ZO/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Certifications & Achievements</h2>

        <div className="max-w-6xl mx-auto">
          {/* AWS Certifications */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {badges.map((badge) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                    {badge.title}
                  </h3>
                  <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                    {badge.subtitle || (badge.status === 'in-progress' ? 'In Progress!' : '')}
                  </p>
                </div>
              );

              return badge.credentialUrl ? (
                <a
                  key={badge.id}
                  href={badge.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${badge.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={badge.id} className="block">
                  <BadgeComponent />
                </div>
              );
            })}
          </div>

          {/* Achievements */}
          <div className="flex flex-wrap justify-center gap-8">
            {achievements.map((achievement) => {
              const AchievementComponent = () => (
                <div className="flex flex-col items-center group">
                  <div className="mb-4">
                    <img
                      src={achievement.image}
                      alt={achievement.alt}
                      className="w-36 h-36 md:w-44 md:h-44 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="112"
                      height="112"
                      sizes="(max-width:768px) 96px,112px"
                    />
                  </div>

                  <h3
                    className="text-center text-sm font-medium mb-2"
                    style={{
                      color: isDarkMode
                        ? themeColors.colors.pink[300]
                        : themeColors.colors.pink[500]
                    }}
                  >
                    {achievement.title}
                  </h3>

                  <p
                    className="text-center text-sm"
                    style={{
                      color: isDarkMode
                        ? themeColors.colors.dark[300]
                        : themeColors.colors.dark[600]
                    }}
                  >
                    {achievement.subtitle}
                  </p>
                </div>
              );

              return achievement.credentialUrl ? (
                <a
                  key={achievement.id}
                  href={achievement.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: "none" }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${achievement.title}`}
                >
                  <AchievementComponent />
                </a>
              ) : (
                <div key={achievement.id}>
                  <AchievementComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;