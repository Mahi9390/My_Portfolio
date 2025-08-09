import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Download } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mmaheshmmahesh698@gmail.com",
      link: "mailto:mmaheshmmahesh698@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9390344374",
      link: "tel:+919390344374"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "mahesh-mangali-1971392b3",
      link: "https://www.linkedin.com/in/mahesh-mangali-1971392b3"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Mahi9390",
      link: "https://github.com/Mahi9390"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to transform data into insights? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                I'm always interested in new opportunities, collaborative projects, and 
                discussions about data science and analytics. Whether you're looking for 
                a data scientist or want to explore potential collaborations, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-4">
                    <a 
                      href={method.link}
                      className="flex items-center gap-4 text-white hover:text-blue-200 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{method.title}</h4>
                        <p className="text-blue-100">{method.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions & Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
              
              <div className="space-y-4 mb-8">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 justify-start gap-4 h-14"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume-mahesh-mangali.pdf';
                    link.download = 'Mahesh_Mangali_Resume.pdf';
                    link.click();
                  }}
                >
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">Download Resume</div>
                    <div className="text-sm text-gray-600">Get my complete CV</div>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-blue-600 justify-start gap-4 h-14"
                  onClick={() => window.open('mailto:mmaheshmmahesh698@gmail.com', '_blank')}
                >
                  <Mail className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">Send Email</div>
                    <div className="text-sm opacity-80">Direct message me</div>
                  </div>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Find Me Online</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                    <CardContent className="p-4">
                      <a 
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-white hover:text-blue-200 transition-colors"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <social.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{social.title}</h4>
                          <p className="text-blue-100">{social.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-blue-100 mb-6">
            Ready to start a conversation about data science opportunities? 
            <br />
            Email me at: <a href="mailto:mmaheshmmahesh698@gmail.com" className="text-yellow-300 hover:text-yellow-200 underline">mmaheshmmahesh698@gmail.com</a>
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-3 animate-pulse-glow"
            onClick={() => window.open('mailto:mmaheshmmahesh698@gmail.com?subject=Data Science Opportunity', '_blank')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;