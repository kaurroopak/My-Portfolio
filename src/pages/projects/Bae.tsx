import { Shirt, Sparkles, Heart, Bot, } from "lucide-react";

import { BaeIcon, bae, } from "../../assets";

import ImageCarousel from "../../components/ImageCarousel";
import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectSection from "../../components/project/ProjectSection";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";
import { socialLinks } from "../../config/socialLinks";

const BAE = () => {

  const projectImages = bae;

  const features = [
    {
      icon: Shirt,
      title: "Smart Wardrobe Management",
      description:
        "Automatically organizes clothing items through AI-based image classification."
    },
    {
      icon: Sparkles,
      title: "Personalized Outfit Recommendation",
      description:
        "Generates outfit combinations based on wardrobe contents and user preferences."
    },
    {
      icon: Heart,
      title: "Mood-Adaptive Interface",
      description:
        "Dynamically customizes the application theme according to the user's mood."
    },
    {
      icon: Bot,
      title: "AI-Powered Fashion Assistant",
      description:
        "Combines Computer Vision, Deep Learning, and recommendation logic for intelligent wardrobe management."
    }
  ];



  const overviewParagraphs = [

    "BAE (Bringing Aesthetics to Emotion) is an AI-powered virtual wardrobe management system developed to simplify outfit selection while delivering a personalized and emotionally adaptive user experience. The platform goes beyond traditional wardrobe applications by combining intelligent clothing organization, outfit recommendation, and mood-aware interface customization.",

    "Users can upload images of clothing items, which are automatically classified using a MobileNetV2 deep learning model after background removal. Clothing items are organized into wardrobe categories and stored securely, enabling the system to generate personalized outfit combinations based on wardrobe contents and user preferences.",

    "The application incorporates an emotion-adaptive interface where the visual theme dynamically changes according to the user's detected or self-reported mood. Users can browse recommended outfits through an interactive swipe-based interface, save favorites, and continuously improve recommendations through preference learning.",

    "Developed as a full-stack Software Engineering project, BAE integrates Machine Learning, Deep Learning, Computer Vision, cloud image storage, authentication, and database management into a practical fashion recommendation platform designed specifically for university students."

  ];



  const technologies = [

    "Python",
    "Flask",
    "React.js",
    "TypeScript",
    "Next.js",
    "MongoDB Atlas",
    "Figma",
    "Deep Learning",
    "MobileNetV2",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "Cloudinary",

  ];



  const highlights = [

    "Built a full-stack AI-powered virtual wardrobe management platform.",

    "Implemented MobileNetV2-based clothing classification for automatic wardrobe organization.",

    "Integrated image preprocessing and background removal for improved classification accuracy.",

    "Developed an outfit recommendation engine using wardrobe contents and user preferences.",

    "Designed a Tinder-style swipe interface for interactive outfit selection and preference learning.",

    "Implemented mood-adaptive UI customization based on detected or self-reported emotions.",

    "Integrated secure authentication, MySQL database management, and Cloudinary image storage.",

    "Designed scalable system architecture following Software Engineering principles with modular backend components."

  ];



  return (

    <ProjectLayout>

      <ProjectHeader
        icon={BaeIcon}
        title="BAE - Bringing Aesthetics to Emotion"
        subtitle="AI-Powered Emotion-Adaptive Virtual Wardrobe Management System"
        githubUrl={socialLinks.repositories.BAE}
        liveUrl={socialLinks.live.BAE}
        features={features}
      />

      <ImageCarousel
        images={projectImages}
        projectName="BAE"
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

export default BAE;
