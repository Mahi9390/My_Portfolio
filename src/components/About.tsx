import { Card, CardContent } from "@/components/ui/card";
import { Brain, Database, TrendingUp, Code } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Proficient in predictive modeling and AI algorithms"
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Expert in data cleaning, transformation, and analysis"
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Transforming data into actionable business insights"
    },
    {
      icon: Code,
      title: "Programming",
      description: "Strong foundation in Python, R, and SQL"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate and detail-oriented <strong>Data Science graduate</strong> with strong skills in 
              Python, machine learning, and data visualization. Proficient in tools like Pandas, NumPy, and 
              Tableau, I've worked on projects involving predictive modeling and analytics.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I enjoy transforming raw data into actionable insights and am eager to contribute to innovative, 
              data-driven solutions that solve real-world problems. My academic journey combined with practical 
              internship experience has equipped me with a solid foundation in data science methodologies.
            </p>
            
            <Card className="card-gradient shadow-medium border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">B.Tech in Computer Science (Data Science)</h4>
                    <p className="text-gray-600">Sri Venkateshwar College of Engineering and Technology</p>
                    <p className="text-sm text-gray-500">Sept 2021 – May 2025 | GPA: 8.42/10.0</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Intermediate</h4>
                    <p className="text-gray-600">Rao's Junior College, Nandyal</p>
                    <p className="text-sm text-gray-500">Jun 2019 – Apr 2021 | GPA: 9.1/10.0</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="card-gradient shadow-medium border-0 hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;