import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Study Assistant",
      description: "A machine learning-powered app that helps students optimize their study schedules.",
      tech: "Python, TensorFlow, React",
    },
    {
      title: "EcoTrack",
      description: "Mobile app for tracking and reducing personal carbon footprint.",
      tech: "React Native, Node.js, MongoDB",
    },
    {
      title: "Smart Campus Map",
      description: "Interactive campus navigation system with real-time updates.",
      tech: "JavaScript, Google Maps API, Firebase",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="animate-fadeIn" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.tech}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};