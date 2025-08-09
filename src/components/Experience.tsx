import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Building, Award } from "lucide-react";

const Experience = () => {
  const internships = [
    {
      title: "Data Analytics using Python",
      company: "YBI Foundation",
      duration: "Jun 2024 – Aug 2024",
      description: [
        "Delivered insights through one data visualization project during a Data Analytics internship using Python",
        "Contributed to one data-driven project, gaining insights into effective decision-making",
        "Learned Python libraries like NumPy, Pandas, Matplotlib, and Seaborn for data analysis and visualization",
        "Gained skills in SQL, data preprocessing, exploratory data analysis, and basic machine learning concepts"
      ],
      skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "SQL", "Data Preprocessing", "EDA"],
      certificate: "/lovable-uploads/61d7cfdc-7bf0-4ec4-a95f-08afe9616eda.png"
    },
    {
      title: "Python for Data Science",
      company: "Internshala",
      duration: "Jun 2023 – Jul 2023",
      description: [
        "Achieved mastery in data science, completing a 3-month internship, resulting in the analysis of two datasets",
        "Executed one real-world project, showcasing expertise in Python and data science technologies",
        "Studied 6 core subjects including data cleaning and machine learning during a comprehensive internship",
        "Built a solid foundation for more advanced data science topics"
      ],
      skills: ["Python", "Data Science", "Data Cleaning", "Machine Learning", "Dataset Analysis"],
      certificate: "/lovable-uploads/ff17ab1d-9f31-4ea4-a776-66fa663f4cf2.png"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical experience gained through internships in data science and analytics
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {internships.map((internship, index) => (
            <Card 
              key={index} 
              className="card-gradient shadow-medium border-0 hover:shadow-strong transition-all duration-500 overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {internship.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{internship.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{internship.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {internship.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3 text-gray-700">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {internship.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {internship.certificate && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2 hover:bg-blue-50"
                        onClick={() => window.open(internship.certificate, '_blank')}
                      >
                        <Award className="w-4 h-4" />
                        View Certificate
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;