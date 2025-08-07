import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, Cloud } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cryptocurrency Price Analysis using AI",
      description: "The 'Cryptocurrency Price Analysis using AI' project predicts cryptocurrency prices using machine learning algorithms, leveraging historical data and AI techniques, implemented through Django for accurate forecasting and insights.",
      icon: Brain,
      technologies: ["Python", "Django", "Random Forest", "Machine Learning", "XAMPP"],
      github: "https://github.com/Mahi9390",
      features: [
        "Machine learning-based price prediction",
        "Historical data analysis",
        "Django web framework implementation",
        "Real-time forecasting capabilities"
      ]
    },
    {
      title: "Predicting Weather with LSTM and Interactive Visuals",
      description: "Developed a weather forecasting app using LSTM to predict future conditions from historical data. Integrated OpenWeatherMap API for real-time updates and created an interactive dashboard with Streamlit and Plotly for visual insights.",
      icon: Cloud,
      technologies: ["LSTM", "TensorFlow", "Keras", "Python", "Streamlit", "Plotly", "OpenWeatherMap API", "Scikit-learn"],
      features: [
        "LSTM neural network for time series forecasting",
        "Real-time weather data integration",
        "Interactive dashboard with Plotly visualizations",
        "Streamlit web application interface"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing real-world applications of data science and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-gradient shadow-medium border-0 hover:shadow-strong transition-all duration-500 overflow-hidden group hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-pulse-glow">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 hover:bg-blue-50"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex items-center gap-2 bg-gradient-primary hover:opacity-90"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;