import { Brain, Scan, Activity, FileText, } from "lucide-react";
import { AlzheimerIcon, alzheimerRisk, } from "../../assets";

import ImageCarousel from "../../components/ImageCarousel";
import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectSection from "../../components/project/ProjectSection";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";
import { socialLinks } from "../../config/socialLinks";

const AlzheimerRisk = () => {

  const projectImages = alzheimerRisk;

  const features = [
    {
      icon: Brain,
      title: "Machine Learning Risk Prediction",
      description:
        "Predicts Alzheimer's disease risk using clinically validated MRI biomarkers and cognitive assessment scores."
    },
    {
      icon: Scan,
      title: "MRI Image Analysis",
      description:
        "Supports MRI-based dementia classification using a VGG16 deep learning model converted to TensorFlow Lite."
    },
    {
      icon: Activity,
      title: "Dual Prediction Pipeline",
      description:
        "Combines structured clinical data with deep learning inference for comprehensive risk assessment."
    },
    {
      icon: FileText,
      title: "Clinical PDF Report",
      description:
        "Automatically generates downloadable clinical-style reports summarizing prediction results."
    }
  ];



  const overviewParagraphs = [

    "Alzheimer's Disease Prediction is a medical AI application developed to estimate dementia risk using both traditional machine learning and deep learning approaches. The system provides an accessible interface for research-oriented prediction using MRI-derived biomarkers and cognitive assessment scores.",

    "The project integrates two complementary prediction pipelines. An XGBoost model analyzes eight clinically validated biomarkers extracted from the OASIS Cross-Sectional Dataset, while a VGG16-based convolutional neural network performs MRI image classification after being optimized and deployed as a TensorFlow Lite model for lightweight inference.",

    "A Streamlit web application enables users to enter patient information, upload MRI scans, and obtain risk predictions through an intuitive interface. After inference, the system generates a structured PDF report summarizing patient inputs, prediction outcomes, and model confidence for easy documentation.",

    "This project demonstrates the application of Artificial Intelligence in healthcare while emphasizing that the system is intended for research and educational purposes rather than clinical diagnosis."

  ];



  const technologies = [

    "Python",
    "TensorFlow",
    "Keras",
    "VGG16",
    "TensorFlow Lite",
    "XGBoost",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Streamlit",
    "FPDF"

  ];



  const highlights = [

    "Developed a hybrid prediction system combining Machine Learning and Deep Learning approaches.",

    "Trained an XGBoost model using MRI-derived biomarkers from the OASIS dataset.",

    "Implemented MRI image classification using transfer learning with VGG16.",

    "Converted the deep learning model to TensorFlow Lite for efficient inference.",

    "Designed a Streamlit-based medical dashboard for interactive predictions.",

    "Generated downloadable PDF reports containing prediction summaries and patient information.",

    "Performed preprocessing, feature engineering, model evaluation, and comparative analysis.",

    "Integrated both tabular and image-based prediction pipelines within a single application."

  ];



  return (

    <ProjectLayout>

      <ProjectHeader
        icon={AlzheimerIcon}
        title="Alzheimer's Disease Prediction"
        subtitle="Medical AI System for Dementia Risk Assessment"
        githubUrl={socialLinks.repositories.alzeihmerRisk}
        liveUrl={socialLinks.live.alzeihmerRisk}
        features={features}
      />

      <ImageCarousel
        images={projectImages}
        projectName="Alzheimer's Disease Prediction"
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

export default AlzheimerRisk;