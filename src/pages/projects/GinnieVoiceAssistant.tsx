import {
  Mic,
  Bot,
  Globe,
  Zap
} from "lucide-react";

import {
  ginnieIcon,
  ginnieVA,
} from "../../assets";

import ImageCarousel from "../../components/ImageCarousel";
import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectSection from "../../components/project/ProjectSection";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";
import { socialLinks } from "../../config/socialLinks";

const Ginnie = () => {

  const projectImages = ginnieVA;

  const features = [
    {
      icon: Mic,
      title: "Voice Command Recognition",
      description:
        "Understands natural voice commands using speech recognition for hands-free interaction."
    },
    {
      icon: Bot,
      title: "Personal AI Assistant",
      description:
        "Performs daily tasks, answers queries, tells jokes, and engages in conversational interactions."
    },
    {
      icon: Globe,
      title: "Information Retrieval",
      description:
        "Fetches weather updates, news, Wikipedia summaries, and factual information in real time."
    },
    {
      icon: Zap,
      title: "Desktop Automation",
      description:
        "Launches applications, controls media, captures screenshots, and automates routine computer tasks."
    }
  ];

  const overviewParagraphs = [

    "Ginnie is a Python-based intelligent voice assistant designed to simplify everyday computer interactions using natural voice commands. Inspired by modern virtual assistants, Ginnie enables users to perform a wide range of tasks through speech, providing a personalized and interactive experience.",

    "The assistant integrates speech recognition with offline text-to-speech capabilities to create seamless two-way communication. Users can launch applications, search the web, retrieve news and weather updates, perform calculations, control media playback, take screenshots, and access information from Wikipedia using simple spoken commands.",

    "Built with a modular architecture, Ginnie allows easy customization and extension of individual functionalities such as greetings, jokes, weather services, search modules, and automation tasks. This design makes the assistant scalable and suitable for experimenting with additional AI capabilities.",

    "The project demonstrates practical applications of Natural Language Processing, desktop automation, API integration, and voice-based human-computer interaction while showcasing how intelligent assistants can improve productivity and accessibility."

  ];

  const technologies = [

    "Python",
    "SpeechRecognition",
    "pyttsx3",
    "PyWhatKit",
    "PyAutoGUI",
    "Wikipedia API",
    "WolframAlpha API",
    "Requests",
    "JSON",
    "OS Module"

  ];

  const highlights = [

    "Developed a fully voice-controlled desktop assistant using Python.",

    "Integrated SpeechRecognition for accurate voice command processing.",

    "Implemented offline text-to-speech responses using pyttsx3.",

    "Built desktop automation features including application launching, screenshots, and media controls.",

    "Integrated external APIs for weather updates, news, Wikipedia search, and computational queries.",

    "Implemented entertainment features such as jokes, random facts, and conversational responses.",

    "Designed a modular architecture allowing easy addition of new voice commands and functionalities.",

    "Demonstrated practical Natural Language Processing and Human-Computer Interaction concepts."

  ];

  return (

    <ProjectLayout>

      <ProjectHeader
        icon={ginnieIcon}
        title="Ginnie"
        subtitle="Python-Based Personal Voice Assistant"
        githubUrl={socialLinks.repositories.projectSeven}
        features={features}
      />

      <ImageCarousel
        images={projectImages}
        projectName="Ginnie"
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

export default Ginnie;