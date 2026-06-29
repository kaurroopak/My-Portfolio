import { Ticket, BadgeCheck, UserCheck, Trophy } from "lucide-react";
import { SmartDeskAiIcon, smartdeskai } from "../../assets";
import ImageCarousel from '../../components/ImageCarousel';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { socialLinks } from '../../config/socialLinks';

const SmartDeskAI = () => {

  const projectImages = smartdeskai;

  const features = [
    {
      icon: Ticket,
      title: "AI Ticket Classification",
      description:
        "Automatically categorizes support tickets using Natural Language Processing."
    },
    {
      icon: BadgeCheck,
      title: "Confidence-based Prediction",
      description:
        "Predicts ticket categories with confidence scores before assigning them."
    },
    {
      icon: UserCheck,
      title: "Human-in-the-loop Validation",
      description:
        "Allows human verification for uncertain predictions before final assignment."
    },
    {
      icon: Trophy,
      title: "Hackathon Winning Project",
      description:
        "Winner of the Atos Hackathon Challenge – Srijan 2026."
    }
  ];



  const overviewParagraphs = [

    "SmartDeskAI is an AI-powered helpdesk ticket automation system developed to simplify customer support workflows. Instead of manually reading and categorizing incoming tickets, the system automatically predicts the appropriate category using Natural Language Processing, reducing repetitive work for support teams.",

    "The application follows a confidence-based decision pipeline. High-confidence predictions are automatically suggested for assignment, while uncertain cases are routed for human validation. This hybrid approach combines automation with reliability and minimizes incorrect ticket routing.",

    "The project provides an intuitive dashboard for monitoring incoming tickets, prediction confidence, ticket status, and analytics. The interface enables support teams to review, validate, and manage tickets efficiently while maintaining transparency in AI-assisted decisions.",

    "SmartDeskAI was built as part of the Atos Hackathon Challenge (Srijan 2026), where it was recognised as the winning solution for combining practical AI with an intuitive workflow aimed at improving enterprise productivity."

  ];



  const technologies = [

    "Python",
    "Machine Learning",
    "Natural Language Processing",
    "Streamlit",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib"

  ];



  const highlights = [

    "Designed an AI-powered ticket automation system for enterprise helpdesk workflows.",

    "Implemented NLP-based ticket categorization using machine learning models.",

    "Developed confidence-based prediction to improve reliability of automated decisions.",

    "Integrated a human-in-the-loop validation workflow for uncertain predictions.",

    "Built an interactive Streamlit dashboard for ticket management and visualization.",

    "Performed preprocessing, feature engineering, and model evaluation for text classification.",

    "Visualized prediction confidence and ticket analytics for better decision making.",

    "Winner of the Atos Hackathon Challenge (Srijan 2026)."

  ];



  return (

    <ProjectLayout>

      <ProjectHeader
        icon={SmartDeskAiIcon}
        title="SmartDeskAI"
        subtitle="AI-powered Helpdesk Ticket Automation System"
        githubUrl={socialLinks.repositories.projectOne}
        features={features}
      />

      <ImageCarousel
        images={projectImages}
        projectName="SmartDeskAI"
      />

      <ProjectSection title="Project Overview">

        <ProjectOverview
          paragraphs={overviewParagraphs}
        />

      </ProjectSection>

      <ProjectSection title="Technical Stack">

        <TechStack
          technologies={technologies}
        />

      </ProjectSection>

      <ProjectSection
        title="Technical Highlights"
        className="mb-0"
      >

        <TechnicalHighlights
          highlights={highlights}
        />

      </ProjectSection>

    </ProjectLayout>

  );

};

export default SmartDeskAI;
