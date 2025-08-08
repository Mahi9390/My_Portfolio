import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import jsPDF from "jspdf";
const Hero = () => {
  const generateResumePDF = async () => {
    try {
      const response = await fetch('/lovable-uploads/42736e24-c41b-4ccc-bec6-e37f8f1e6520.png');
      if (!response.ok) throw new Error('Failed to load resume image');
      const blob = await response.blob();
      const dataUrl: string = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });

      const img = new Image();
      img.src = dataUrl;
      await new Promise((res, rej) => {
        img.onload = () => res(null);
        img.onerror = rej;
      });

      const pdf = new jsPDF({
        orientation: img.width >= img.height ? 'landscape' : 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      let renderWidth = pageWidth - margin * 2;
      let renderHeight = (img.height * renderWidth) / img.width;
      if (renderHeight > pageHeight - margin * 2) {
        renderHeight = pageHeight - margin * 2;
        renderWidth = (img.width * renderHeight) / img.height;
      }
      const x = (pageWidth - renderWidth) / 2;
      const y = (pageHeight - renderHeight) / 2;

      pdf.addImage(dataUrl, 'PNG', x, y, renderWidth, renderHeight);
      pdf.save('Mahesh_Mangali_Resume.pdf');
    } catch (e) {
      console.error('Failed to generate PDF from image', e);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-float" style={{
          animationDelay: '1s'
        }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-float" style={{
          animationDelay: '2s'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom-8 duration-1000">
            Mangali <span className="text-yellow-300">Mahesh</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-blue-100 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
            Data Science Graduate & Analytics Enthusiast
          </p>
          
          <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-500">
            Transforming raw data into actionable insights with Python, Machine Learning, and Advanced Analytics
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm animate-in slide-in-from-bottom-8 duration-1000 delay-700">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              <span>mmaheshmmahesh698@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Phone className="w-4 h-4" />
              <span>9390344374</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span>📍 Bangalore</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-in slide-in-from-bottom-8 duration-1000 delay-1000">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-medium px-8 py-3" onClick={generateResumePDF}>
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-in slide-in-from-bottom-8 duration-1000 delay-1200">
            <a href="https://www.linkedin.com/in/mahesh-mangali-1971392b3" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Mahi9390" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://amazing-macaron-8ef411.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;