import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: "CTSRT AWS Security Tool",
      description: "Automated cloud-security tool designed to detect, analyze, and remediate security threats in AWS environments. It helps ensure continuous protection by integrating monitoring, alerting, and automated response workflows.",
      image: project1,
      tags: ["Python", "AWS Lambda", "Amazon SNS", "Amazon DynamoDB"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Loki Assistant",
      description: "A custom-built voice-enabled AI assistant capable of executing system commands, automating tasks, processing speech input, and generating intelligent responses. Designed as a personal productivity and automation tool.",
      image: project2,
      tags: ["Python", "Speech Recognition APIs", "Automation Scripts", "Custom NLP Logic"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile-Ecom",
      description: "A modern mobile-optimized e-commerce interface featuring smooth UI components, clean animations, and efficient product browsing. Built with a contemporary frontend stack and designed for fast, responsive shopping experiences.",
      image: project3,
      tags: ["TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="relative min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work featuring 3D experiences, web applications,
            and creative digital solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card group glow-hover overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden rounded-xl mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demoUrl}
                    className="glass p-3 rounded-lg hover:scale-110 transition-transform"
                    aria-label="View Demo"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="glass p-3 rounded-lg hover:scale-110 transition-transform"
                    aria-label="View Code"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 glass rounded-full text-sm text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more projects?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;