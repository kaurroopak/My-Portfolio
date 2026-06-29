import React from 'react';
import {
  Github,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { useThemeColors } from '../../hooks/useThemeColors';

interface ProjectHeaderProps {
  icon: string;
  title: string;
  subtitle: string;
  githubUrl: string;
  liveUrl?: string;
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ 
  icon, 
  title, 
  subtitle, 
  githubUrl, 
  liveUrl,
  features 
}) => {
  const themeColors = useThemeColors();

  return (
    <div className="rounded-lg shadow-lg p-8 mb-8" style={{ backgroundColor: themeColors.card.background }}>
      <div className="flex items-start gap-6 mb-6">
        <img src={icon} alt={title} className="w-24 h-24 rounded-lg" loading="lazy" width="96" height="96" />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2" style={{ color: themeColors.text.primary }}>{title}</h1>
          <p className="text-lg" style={{ color: themeColors.text.secondary }}>{subtitle}</p>
          <div className="flex flex-wrap gap-4 mt-6">

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                backgroundColor: themeColors.card.background,
                color: themeColors.text.primary,
                border: `1px solid ${themeColors.card.border}`,
              }}
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
            )}

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                  backgroundColor: themeColors.colors.pink[500],
                  color: "#fff",
                }}
            >
              <Github className="w-4 h-4" />
              View Code
            </a>

          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="border-t pt-6" style={{ borderColor: themeColors.card.border }}>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: themeColors.text.primary }}>Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start gap-3">
                <Icon className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: themeColors.colors.pink[500] }} aria-hidden="true" />
                <div>
                  <h3 className="font-semibold" style={{ color: themeColors.text.secondary }}>{feature.title}</h3>
                  <p className="text-sm" style={{ color: themeColors.text.secondary }}>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;