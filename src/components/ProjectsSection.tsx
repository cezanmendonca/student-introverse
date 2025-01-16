import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Malware Tester",
      description: "A system that consists of multiple modules, from using Gen AI cocnepts to alter the structure and signatures of Malware for ambiguity, to study of such malware via Passive and Active Scans.",
      tech: "Python, Kaggle",
    },
    {
      title: "Consultant Website",
      description: "A website designed to host your services in the colsultancy department. Provides basic description of the provider and the services provided and means of contacting.",
      tech: "HTML, CSS, PHP, JavaScript",
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
