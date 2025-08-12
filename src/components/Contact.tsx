import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mailto link with form data
      const mailtoLink = `mailto:mmaheshmmahesh698@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )}`;
      
      window.open(mailtoLink, '_blank');
      toast.success("Thank you! Your message has been prepared in your email client.");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      value: "Chittoor-517127",
      color: "text-cyan-400"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "9390344374",
      href: "tel:+919390344374",
      color: "text-cyan-400"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "mmaheshmmahesh698@gmail.com",
      href: "mailto:mmaheshmmahesh698@gmail.com",
      color: "text-cyan-400"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/mahesh-mangali-1971392b3",
      color: "text-blue-400"
    },
    {
      icon: Github,
      title: "GitHub", 
      href: "https://github.com/Mahi9390",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:border-cyan-500/50 transition-all duration-300">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-xl font-semibold text-white mb-6">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <social.icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Your Name</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="bg-slate-900/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="bg-slate-900/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input
                  id="subject"
                  {...register("subject")}
                  className="bg-slate-900/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  placeholder="Enter subject"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  rows={6}
                  className="bg-slate-900/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-cyan-500/50 focus:ring-cyan-500/20 resize-none"
                  placeholder="Write your message here..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;