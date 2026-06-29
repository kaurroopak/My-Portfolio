import { Hand, Scan, Camera, Activity, } from "lucide-react";

import { HandIcon, fingerCounting, } from "../../assets";

import ImageCarousel from "../../components/ImageCarousel";
import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectSection from "../../components/project/ProjectSection";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";
import { socialLinks } from "../../config/socialLinks";

const FingerCounting = () => {

  const projectImages = fingerCounting;

  const features = [
    {
      icon: Hand,
      title: "Real-Time Finger Counting",
      description:
        "Accurately detects and counts raised fingers using MediaPipe hand landmarks."
    },
    {
      icon: Scan,
      title: "Gesture Recognition",
      description:
        "Recognizes custom hand gestures using HOG features and a Random Forest classifier."
    },
    {
      icon: Camera,
      title: "Live Webcam Tracking",
      description:
        "Processes real-time webcam input with smooth hand landmark tracking and gesture prediction."
    },
    {
      icon: Activity,
      title: "98% Recognition Accuracy",
      description:
        "Achieved approximately 98% gesture classification accuracy on the custom dataset."
    }
  ];



  const overviewParagraphs = [

    "Finger Counting & Hand Gesture Recognition is a real-time computer vision application that combines MediaPipe hand tracking with a machine learning classifier to recognize custom hand gestures and count raised fingers through live webcam input.",

    "The system first detects 21 hand landmarks using MediaPipe and calculates finger positions to determine the number of raised fingers. Simultaneously, the detected hand region is processed using Histogram of Oriented Gradients (HOG) feature extraction before being classified by a Random Forest model trained on custom gesture data.",

    "The application provides a smooth real-time interface where users receive both finger count and gesture predictions with minimal latency. The modular architecture separates hand tracking, feature extraction, model training, and inference, making the system easy to extend with additional gestures.",

    "This project demonstrates the practical integration of Computer Vision, Machine Learning, and real-time video processing to build an interactive gesture recognition system suitable for educational, accessibility, and Human-Computer Interaction (HCI) applications."

  ];



  const technologies = [

    "Python",
    "OpenCV",
    "MediaPipe",
    "Scikit-learn",
    "Random Forest",
    "HOG Features",
    "NumPy",
    "Scikit-image"

  ];



  const highlights = [

    "Developed a real-time hand gesture recognition system using webcam input.",

    "Implemented MediaPipe-based hand tracking with 21 landmark detection.",

    "Designed a finger counting algorithm based on landmark positions.",

    "Extracted Histogram of Oriented Gradients (HOG) features for gesture classification.",

    "Trained a Random Forest classifier achieving approximately 98% recognition accuracy.",

    "Created a modular pipeline separating dataset processing, feature extraction, model training, and inference.",

    "Integrated live prediction overlay displaying gesture labels and finger count simultaneously.",

    "Built a lightweight Computer Vision application capable of real-time performance."

  ];



  return (

    <ProjectLayout>

      <ProjectHeader
        icon={HandIcon}
        title="Finger Counting & Gesture Recognition"
        subtitle="Real-Time Computer Vision using MediaPipe and Machine Learning"
        githubUrl={socialLinks.repositories.projectThree}
        features={features}
      />

      <ImageCarousel
        images={projectImages}
        projectName="Finger Counting & Gesture Recognition"
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

export default FingerCounting;
