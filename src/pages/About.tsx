import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen, Briefcase, GraduationCap, Mail, Phone, MessageCircle, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ParticleField from "@/components/3d/ParticleField";
import HolographicRing from "@/components/3d/HolographicRing";
import yogeshPhoto from "@/assets/yogesh.jpg";

const About = () => {
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const timeline = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      year: "2023",
      title: "Web Development",
      description: "Started my journey in web development and programming",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      year: "2024",
      title: "Strengthened Cybersecurity skills",
      description: "Focused on security practices and ethical hacking",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      year: "2025",
      title: "Practicing OWASP ZAP & CTFs",
      description: "Actively participating in Capture The Flag competitions",
    },
    {
      icon: <Award className="w-6 h-6" />,
      year: "2026",
      title: "Planning to start Freelancing",
      description: "Ready to deliver professional projects to clients worldwide",
    },
  ];

  const skills = [
    { name: "Python", level: 92 },
    { name: "JavaScript (React, Node.js)", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Java", level: 85 },
    { name: "Flask / Django", level: 88 },
    { name: "Penetration Testing & CTF", level: 87 },
    { name: "Three.js & GSAP", level: 90 },
    { name: "Linux & VS Code", level: 92 },
  ];

  return (
    <div className="relative min-h-screen py-20">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          
          <ParticleField count={800} />
          <HolographicRing position={[0, 0, -5]} />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header with Center Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(190,95%,55%)] rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
              <img
                src={yogeshPhoto}
                alt="Yogesh M.S."
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[hsl(var(--accent))] shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hi, I'm Yogesh - a passionate developer who loves turning creative ideas into interactive digital experiences. I specialize in building modern, responsive, and visually engaging web applications using cutting-edge technologies. My focus is on crafting clean designs, smooth animations, and meaningful user interactions that bring ideas to life.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            I'm constantly exploring new tools, frameworks, and design trends to push my boundaries and create something unique every time. Whether it's a sleek 3D portfolio, a smart web app, or an innovative AI project I build with purpose, precision, and passion.
          </p>
        </motion.div>

        {/* Timeline */}
        <section ref={timelineRef} className="mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl font-bold gradient-text text-center mb-16"
          >
            My Journey
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-center gap-8">
                  {/* Icon */}
                  <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center text-accent glow shrink-0 hover:scale-110 hover:rotate-12 transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="glass-card flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-accent">{item.year}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary to-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-20 w-px h-12 bg-gradient-to-b from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section ref={skillsRef}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl font-bold gradient-text text-center mb-16"
          >
            Technical Skills
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card group hover:scale-102 hover:-translate-x-2 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold group-hover:text-accent transition-colors duration-300">{skill.name}</span>
                  <span className="text-accent font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 glass rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full glow group-hover:shadow-lg group-hover:shadow-accent/50 transition-shadow duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold gradient-text text-center mb-16"
          >
            Get In Touch
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <a
                  href="mailto:yogeshms5314@gmail.com"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold group-hover:text-accent transition-colors">yogeshms5314@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919597972454"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold group-hover:text-accent transition-colors">+91 9597972454</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919597972454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[hsl(190,95%,55%)] to-[hsl(var(--accent))] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold group-hover:text-accent transition-colors">+91 9597972454</p>
                  </div>
                </a>

                <a
                  href="https://github.com/aiscore442"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[hsl(330,85%,65%)] to-primary flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-semibold group-hover:text-accent transition-colors">aiscore442</p>
                  </div>
                </a>
              </div>

              <div className="text-center">
                <a href="/Yogesh_CV.pdf" download>
                  <Button className="glass-button inline-flex items-center gap-2 text-lg hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group">
                    <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;