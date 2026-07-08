import {
  Database,
  BarChart3,
  ScanSearch,
  Download,
} from "lucide-react";

import {
  nexalyzeIcon,
  nexalyze,
} from "../../assets";

import ImageCarousel from "../../components/ImageCarousel";
import ProjectLayout from "../../components/project/ProjectLayout";
import ProjectHeader from "../../components/project/ProjectHeader";
import ProjectSection from "../../components/project/ProjectSection";
import ProjectOverview from "../../components/project/ProjectOverview";
import TechStack from "../../components/project/TechStack";
import TechnicalHighlights from "../../components/project/TechnicalHighlights";
import { socialLinks } from "../../config/socialLinks";

const Nexalyze = () => {

  const projectImages = nexalyze;

  const features = [
    {
      icon: Database,
      title: "Instant Dataset Profiling",
      description:
        "Automatically generates dataset overviews, statistics, missing values, duplicates, and key metrics immediately after CSV upload."
    },
    {
      icon: BarChart3,
      title: "Interactive Visual Analytics",
      description:
        "Provides Plotly-powered visualizations including histograms, scatter plots, boxplots, heatmaps, and category charts."
    },
    {
      icon: ScanSearch,
      title: "Automated Data Quality Analysis",
      description:
        "Detects missing values, duplicates, correlations, and outliers while generating natural-language insights."
    },
    {
      icon: Download,
      title: "One-Click Data Cleaning & Export",
      description:
        "Clean datasets using multiple strategies and instantly download the processed CSV."
    }
  ];



  const overviewParagraphs = [

    "Nexalyze is a modern Exploratory Data Analysis (EDA) dashboard designed to simplify dataset exploration through an intuitive web interface. Built with Streamlit, it enables users to upload any CSV dataset and instantly receive comprehensive statistical summaries, visualizations, and automated insights without writing a single line of code.",

    "The application performs complete data profiling, including dataset overview, descriptive statistics, missing value analysis, duplicate detection, correlation analysis, and IQR-based outlier detection. Rich interactive charts built using Plotly allow users to better understand feature distributions, relationships, and anomalies within their data.",

    "Nexalyze also includes automated insight generation that summarizes important observations about the uploaded dataset in natural language. A dedicated Reports section enables users to clean datasets using configurable missing-value handling and duplicate removal strategies before exporting the cleaned dataset with a single click.",

    "Designed with a modern SaaS-inspired interface, Nexalyze features responsive layouts, persistent dark and light themes, intuitive sidebar navigation, and reusable modular utilities, making it an efficient tool for students, analysts, researchers, and machine learning practitioners."

  ];



  const technologies = [

    "Python",
    "Streamlit",
    "Data Analysis",
    "Data Visualization",
    "Pandas",
    "Plotly Express",
    "Matplotlib",
    "missingno",
    "NumPy",
    "Custom CSS"

  ];



  const highlights = [

    "Developed a complete Exploratory Data Analysis dashboard using Streamlit.",

    "Implemented automated dataset profiling including statistics, missing values, duplicates, correlations, and outlier detection.",

    "Built interactive Plotly visualizations including histograms, scatter plots, boxplots, correlation heatmaps, and category charts.",

    "Implemented IQR-based outlier detection with configurable row-level inspection.",

    "Designed automatic natural-language insight generation for uploaded datasets.",

    "Developed one-click dataset cleaning supporting duplicate removal and multiple missing-value handling strategies.",

    "Created a responsive SaaS-style interface with custom CSS and persistent dark/light themes.",

    "Structured the application into reusable utility modules for scalable data analysis workflows."

  ];



  return (

    <ProjectLayout>

      <ProjectHeader
        icon={nexalyzeIcon}
        title="Nexalyze"
        subtitle="Instant Exploratory Data Analysis (EDA) Studio"
        githubUrl={socialLinks.repositories.nexalyze}
        liveUrl={socialLinks.live.nexalyze}
        features={features}
      />

      <ImageCarousel
        images={projectImages}
        projectName="Nexalyze"
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

export default Nexalyze;