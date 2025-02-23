import { BookOpen, Code, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">
                  Pursuing CSE with Specialization in Cyber Security from SRM Institute of Science and Technology. Expected graduation 2025.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Skills</h3>
                <p className="text-gray-600">
                  Proficient in Python, JavaScript, and React coding Languages. Use of tools and concepts such as Virtualisation, PE Studio, YARA Rules. Passionate about Web Development and Cyber Security.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Coffee className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interests</h3>
                <p className="text-gray-600">
                  Cyber Security Concepts and Technologies. Red Team Testing Actions and Vulnerability Assessment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
