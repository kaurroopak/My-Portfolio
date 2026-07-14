import { Card, CardContent } from "../ui/card";
import { GraduationCap, School, BookOpen, Award } from "lucide-react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useThemeColors } from "../../hooks/useThemeColors";

const Education = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const education = [
    {
      icon: GraduationCap,
      degree: "Bachelor of Engineering (B.E.)",
      specialization: "Computer Science & Engineering",
      institute: "Thapar Institute of Engineering & Technology",
      period: "2024 – 2027",
      score: "CGPA: 8.0 / 10",
      subjects: [
        "Machine Learning",
        "DBMS",
        "Operating Systems",
        "Object Oriented Programming",
        "Computer Networks",
        "Data Structures",
        "Algorithms",
        "Conversational AI"
      ]
    },
    {
      icon: BookOpen,
      degree: "Diploma",
      specialization: "Computer Science Engineering",
      institute: "Thapar Polytechnic College",
      period: "2022 – 2024",
      score: "84%",
      subjects: [
        "C",
        "Python",
        "OOP",
        "DBMS",
        "Networking",
        "Web Technologies"
      ]
    },
    {
      icon: School,
      degree: "Senior Secondary (Class XII)",
      specialization: "CBSE",
      institute: "Kendriya Vidyalata AAI Rangpuri, New Delhi",
      period: "2021 – 2022",
      score: "88%",
      subjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science"
      ]
    },
    {
      icon: Award,
      degree: "Secondary (Class X)",
      specialization: "CBSE",
      institute: "Deep Public School, New Delhi",
      period: "2019 – 2020",
      score: "95%",
      subjects: [
        "Science",
        "Mathematics",
        "English",
        "Hindi",
        "Social Science"
      ]
    }
  ];

  return (
    <section
      id="education"
      className="py-12 relative"
      style={{
        background:
          themeColors.background.sections?.certifications ||
          themeColors.background.gradient,
        transition: "background 0.3s ease-in-out",
      }}
    >
      {/* Top Gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "60px",
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1,
        }}
      />

      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2
          className="text-4xl font-bold text-center"
          style={{
            color: isDarkMode
              ? themeColors.colors.white
              : themeColors.colors.pink[500],
          }}
        >
          Education
        </h2>

        <p
          className="text-center mt-3 mb-12 text-base"
          style={{
            color: isDarkMode
              ? themeColors.colors.dark[300]
              : themeColors.colors.dark[600],
          }}
        >
          My academic journey and milestones.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="border-2 border-pink-100 dark:border-gray-700
                hover:border-pink-300 dark:hover:border-gray-600
                transition-all duration-300 hover:shadow-xl
                hover:-translate-y-1
                bg-white/95 dark:bg-gray-800/95 rounded-3xl"
              >
                <CardContent className="p-7">

                  <div className="flex items-start gap-5">

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: isDarkMode
                          ? themeColors.colors.pink[900]
                          : themeColors.colors.pink[50],
                      }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{
                          color: themeColors.primary,
                        }}
                      />
                    </div>

                    <div className="flex-1">

                      <h3
                        className="text-2xl font-semibold"
                        style={{
                          color: isDarkMode
                            ? themeColors.colors.pink[300]
                            : themeColors.colors.pink[400],
                        }}
                      >
                        {item.degree}
                      </h3>

                      <p className="font-medium text-lg mt-1">
                        {item.specialization}
                      </p>

                      <p
                        className="mt-1"
                        style={{
                          color: isDarkMode
                            ? themeColors.colors.dark[300]
                            : themeColors.colors.dark[600],
                        }}
                      >
                        {item.institute}
                      </p>

                      <div className="flex justify-between mt-3 text-sm">
                        <span
                          style={{
                            color: isDarkMode
                              ? themeColors.colors.dark[300]
                              : themeColors.colors.dark[500],
                          }}
                        >
                          {item.period}
                        </span>

                        <span
                          className="font-semibold"
                          style={{
                            color: themeColors.primary,
                          }}
                        >
                          {item.score}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-5">
                        {item.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-3 py-1 rounded-full text-sm border"
                            style={{
                              background: isDarkMode
                                ? themeColors.colors.dark[700]
                                : themeColors.colors.white,
                              borderColor: themeColors.colors.pink[100],
                            }}
                          >
                            {subject}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "60px",
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1,
        }}
      />
    </section>
  );
};

export default Education;