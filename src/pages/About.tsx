import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ParticleField from "@/components/3d/ParticleField";
import HolographicRing from "@/components/3d/HolographicRing";
import avatarLogo from "@/assets/avatar-logo.png";

const About = () => {
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const timeline = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      year: "2018",
      title: "Started Learning",
      description: "Began my journey in web development and programming",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      year: "2019",
      title: "Advanced Studies",
      description: "Mastered modern frameworks and 3D web technologies",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      year: "2020",
      title: "Professional Work",
      description: "Started working on client projects and freelance work",
    },
    {
      icon: <Award className="w-6 h-6" />,
      year: "2023",
      title: "Recognition",
      description: "Delivered 50+ successful projects with satisfied clients",
    },
  ];

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "Three.js & WebGL", level: 90 },
    { name: "TypeScript", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "UI/UX Design", level: 85 },
    { name: "3D Modeling", level: 82 },
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
                src={avatarLogo}
                alt="Profile"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[hsl(var(--accent))] shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer specializing in creating immersive 3D web experiences
            and modern full-stack applications
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
                  <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center text-accent glow shrink-0">
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
                className="glass-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-accent font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 glass rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full glow"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;