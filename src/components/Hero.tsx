import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const downloadResume = () => {
    // Download the resume image
    const link = document.createElement('a');
    link.href = '/lovable-uploads/2ec1c78a-a6b1-4fe7-af28-b0527acb9d43.png';
    link.download = 'Mahesh_Mangali_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-dark">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-indigo-400/15 rounded-full blur-xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-left text-white order-2 lg:order-1">
            {/* Main title with reduced size */}
            <div className="opacity-0 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow leading-tight">
                Mangali <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">Mahesh</span>
              </h1>
            </div>

            {/* Subtitle with delayed animation */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <p className="text-xl md:text-2xl mb-4 text-blue-200 font-light">
                Data Science Graduate & Analytics Enthusiast
              </p>
            </div>

            {/* Description with another delay */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <p className="text-base md:text-lg mb-8 text-gray-300 leading-relaxed">
                Transforming raw data into actionable insights with Python, Machine Learning, and Advanced Analytics
              </p>
            </div>

            {/* Contact Info with glass morphism effect */}
            <div className="opacity-0 animate-fade-in-scale" style={{ animationDelay: "600ms" }}>
              <div className="flex flex-wrap gap-3 mb-8 text-sm">
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-200">mmaheshmmahesh698@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-200">9390344374</span>
                </div>
                <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300">
                  <span className="text-purple-400">📍</span>
                  <span className="text-gray-200">Bangalore</span>
                </div>
              </div>
            </div>

            {/* Action Buttons with enhanced styling */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-2xl px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 border-0"
                  onClick={downloadResume}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-effect text-white hover:bg-white/10 px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 border-white/20"
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-effect text-white hover:bg-white/10 px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 border-white/20"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Social Links with enhanced hover effects */}
            <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: "1000ms" }}>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/mahesh-mangali-1971392b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-3 rounded-xl hover:bg-white/15 transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </a>
                <a
                  href="https://github.com/Mahi9390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect p-3 rounded-xl hover:bg-white/15 transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Picture Space */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="opacity-0 animate-fade-in-scale" style={{ animationDelay: "400ms" }}>
              <div className="relative">
                {/* Hexagonal frame with cyan glow */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  {/* Outer glow effect */}
                  <div className="absolute inset-0 bg-cyan-400/30 blur-xl rounded-full animate-pulse"></div>
                  
                  {/* Hexagonal container */}
                  <div className="relative w-full h-full group">
                    {/* Hexagonal mask using clip-path */}
                    <div 
                      className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 relative overflow-hidden"
                      style={{
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.4))'
                      }}
                    >
                      {/* Profile Picture */}
                      <img 
                        src="/lovable-uploads/98f8a656-5fe4-4ef4-9e5e-fccc528fe483.png"
                        alt="Mahesh Mangali - Data Science Graduate"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Hexagonal border */}
                      <div 
                        className="absolute inset-0 border-4 border-cyan-400/60"
                        style={{
                          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
