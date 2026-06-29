import {
  Smile,
  Camera,
  Brain,
  Activity,
} from "lucide-react";

import {
  emotionIcon,
  realtimeEmotion,
} from "../../assets";

import ImageCarousel from "../../components/ImageCarousel";
import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectSection from "../../components/project/ProjectSection";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";
import { socialLinks } from "../../config/socialLinks";

const RealtimeEmotion = () => {

  const projectImages = realtimeEmotion;

  const features = [
    {
      icon: Smile,
      title: "Real-Time Emotion Recognition",
      description:
        "Classifies facial expressions into Happy, Neutral, and Sad in real time."
    },
    {
      icon: Camera,
      title: "Dual Input Modes",
      description:
        "Supports both live webcam capture and image upload for instant prediction."
    },
    {
      icon: Brain,
      title: "MobileNetV2 + TensorFlow Lite",
      description:
        "Uses transfer learning with MobileNetV2 and lightweight TFLite inference for fast deployment."
    },
    {
      icon: Activity,
      title: "Confidence Visualization",
      description:
        "Displays prediction confidence scores and inference latency for every prediction."
    }
  ];



  const overviewParagraphs = [

    "Real-Time Mood Detection System is an AI-powered facial emotion recognition application developed as part of the Experiential Learning Component (ELC). The system classifies facial expressions into Happy, Neutral, and Sad using a Convolutional Neural Network based on MobileNetV2 and provides instant predictions through an interactive Streamlit web application.",

    "The project leverages transfer learning to build an efficient emotion recognition model trained on the AffectNet dataset. After training, the model was converted into TensorFlow Lite format, enabling lightweight inference suitable for real-time deployment while maintaining strong prediction performance.",

    "The application supports both image upload and live webcam capture, allowing users to perform emotion recognition under real-world conditions. Each prediction includes confidence scores, inference time, and visual feedback, making the system useful for demonstrating practical AI deployment.",

    "Beyond deployment, the project investigates model robustness by evaluating performance on unexpected inputs, real-world facial expressions, and Gaussian blurred images. These experiments highlight the strengths and limitations of CNN-based emotion recognition systems and provide valuable insights into real-world AI reliability."

  ];



  const technologies = [

    "Python",
    "TensorFlow",
    "TensorFlow Lite",
    "MobileNetV2",
    "OpenCV",
    "Streamlit",
    "NumPy",
    "Pandas",
    "Pillow"

  ];



  const highlights = [

    "Developed a real-time facial emotion recognition system using MobileNetV2 transfer learning.",

    "Trained the model on the AffectNet dataset for three-class emotion classification.",

    "Converted the trained TensorFlow model into TensorFlow Lite for efficient real-time inference.",

    "Built an interactive Streamlit application supporting webcam and image upload prediction.",

    "Implemented confidence score visualization and inference time measurement for every prediction.",

    "Evaluated model performance using Accuracy, Precision, Recall, F1-score, and Confusion Matrix.",

    "Performed robustness analysis using unexpected inputs, real-world images, and Gaussian blur perturbations.",

    "Demonstrated end-to-end AI workflow covering dataset preparation, model training, deployment, and behavioral analysis."

  ];



  return (

    <ProjectLayout>

      <ProjectHeader
        icon={emotionIcon}
        title="Real-Time Mood Detection System"
        subtitle="AI-Powered Facial Emotion Recognition using MobileNetV2"
        githubUrl={socialLinks.repositories.projectSix}
        liveUrl={socialLinks.live.projectSix}
        features={features}
      />

      <ImageCarousel
        images={projectImages}
        projectName="Real-Time Mood Detection"
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

export default RealtimeEmotion;