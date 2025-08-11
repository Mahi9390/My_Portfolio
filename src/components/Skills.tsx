import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, BarChart3, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "R Programming", level: 75 },
        { name: "SQL", level: 85 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      skills: [
        { name: "Tableau", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Plotly", level: 80 }
      ]
    },
    {
      title: "Data Science Libraries",
      icon: Database,
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "TensorFlow/Keras", level: 75 },
        { name: "Matplotlib", level: 90 },
        { name: "Seaborn", level: 85 }
      ]
    },
    {
      title: "Domain Knowledge",
      icon: Wrench,
      skills: [
        { name: "Statistics & Probability", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Data Cleaning", level: 90 },
        { name: "RDBMS", level: 75 },
        { name: "Data Preprocessing", level: 85 }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 75) return "bg-blue-500";
    if (level >= 65) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technical expertise in data science, analytics, and visualization
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-gradient shadow-medium border-0 hover:shadow-strong transition-all duration-500"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-200"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${getProgressColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Tools & Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Django", "Excel", "Data Mining", "EDA", 
              "Predictive Modeling", "Time Series Analysis", "LSTM Networks"
            ].map((tool, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-blue-700 font-medium hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;