import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>by Mahesh Mangali</span>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mahesh Mangali. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Data Science Graduate | Python Enthusiast | Analytics Expert
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;