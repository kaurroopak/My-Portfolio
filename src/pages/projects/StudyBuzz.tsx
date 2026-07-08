import {
  Eye,
  Mic,
  Camera,
  Brain,
} from "lucide-react";

import {
  StudyBuzzIcon,
  studybuzz,
} from "../../assets";

import ImageCarousel from "../../components/ImageCarousel";
import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectSection from "../../components/project/ProjectSection";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";
import { socialLinks } from "../../config/socialLinks";

const StudyBuzz = () => {

  const projectImages = studybuzz;

  const features = [
    {
      icon: Eye,
      title: "Drowsiness Detection",
      description:
        "Monitors eye closure in real time using Eye Aspect Ratio (EAR) to detect signs of drowsiness."
    },
    {
      icon: Brain,
      title: "Yawn Detection",
      description:
        "Uses Mouth Aspect Ratio (MAR) to identify yawning and estimate user fatigue."
    },
    {
      icon: Mic,
      title: "Voice Alerts",
      description:
        "Generates instant offline text-to-speech alerts to help users stay attentive."
    },
    {
      icon: Camera,
      title: "Real-Time Face Tracking",
      description:
        "Processes live webcam input using MediaPipe FaceMesh for facial landmark detection."
    }
  ];



  const overviewParagraphs = [

    "StudyBuzz is a real-time computer vision application developed to monitor user attentiveness during study sessions. The system continuously analyzes facial landmarks captured through a webcam to detect drowsiness and yawning, providing immediate voice alerts whenever signs of fatigue are identified.",

    "The application leverages MediaPipe FaceMesh to detect facial landmarks with high accuracy. Eye Aspect Ratio (EAR) is calculated to determine prolonged eye closure, while Mouth Aspect Ratio (MAR) is used to identify yawning events. Both measurements are evaluated in real time to improve detection reliability.",

    "Whenever the system detects closed eyes for more than two seconds or a yawn beyond the defined threshold, it triggers an offline text-to-speech alert using pyttsx3. A built-in cooldown mechanism prevents repetitive alerts and ensures a smooth user experience during continuous monitoring.",

    "Developed as part of the Computer Vision activity at Thapar Institute of Engineering and Technology, StudyBuzz demonstrates the practical application of Computer Vision, facial landmark detection, and real-time human behavior analysis to promote better focus and productivity."

  ];



  const technologies = [

    "Python",
    "OpenCV",
    "MediaPipe",
    "FaceMesh",
    "Computer Vision",
    "NumPy",
    "pyttsx3"

  ];



  const highlights = [

    "Developed a real-time drowsiness and yawning detection system using Computer Vision.",

    "Implemented MediaPipe FaceMesh to detect facial landmarks with high accuracy.",

    "Calculated Eye Aspect Ratio (EAR) for reliable eye-closure detection.",

    "Implemented Mouth Aspect Ratio (MAR) for real-time yawn detection.",

    "Integrated offline text-to-speech alerts using pyttsx3.",

    "Designed a cooldown mechanism to eliminate repetitive voice notifications.",

    "Built a lightweight system capable of real-time webcam inference.",

    "Demonstrated practical application of facial landmark analysis for student productivity and fatigue monitoring."

  ];



  return (

    <ProjectLayout>

      <ProjectHeader
        icon={StudyBuzzIcon}
        title="StudyBuzz"
        subtitle="Real-Time Drowsiness & Yawning Detection System"
        githubUrl={socialLinks.repositories.studyBuzz}
        features={features}
      />

      <ImageCarousel
        images={projectImages}
        projectName="StudyBuzz"
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

export default StudyBuzz;