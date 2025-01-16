import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-center lg:text-left">
            Hi, I'm <span className="text-indigo-600">Cezan Mendonca</span>
          </h1>
          <p className="text-xl text-gray-600 text-center lg:text-left px-6 lg:px-0 max-w-2xl">
            Computer Science Student at SRM University, passionate about cyber security and web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button className="bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <LinkedinIcon className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
