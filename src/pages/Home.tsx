import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleField from "@/components/3d/ParticleField";
import FloatingCube from "@/components/3d/FloatingCube";
import yogeshLogo from "@/assets/yogesh-logo.png";

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Building scalable applications with modern technologies and best practices.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "3D & Interactive Design",
      description: "Creating immersive experiences with Three.js and WebGL technologies.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Delivering lightning-fast applications with optimized code and assets.",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* 3D Scene */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
            
            <ParticleField count={1500} />
            <FloatingCube position={[-2, 1, 0]} />
            <FloatingCube position={[2, -1, 0]} color="#06b6d4" emissive="#0891b2" />
            <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
              <meshStandardMaterial
                color="#a855f7"
                emissive="#7c3aed"
                emissiveIntensity={0.5}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
            
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(190,95%,55%)] via-[hsl(var(--primary))] to-[hsl(330,85%,65%)] blur-3xl opacity-50 group-hover:opacity-80 transition-all duration-500 animate-pulse" />
                <img
                  src={yogeshLogo}
                  alt="Yogesh Logo"
                  className="relative w-32 h-32 md:w-48 md:h-48 object-contain transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out animate-float filter drop-shadow-2xl"
                />
              </div>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="gradient-text">Yogesh M.S.</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-accent mb-2">
              Web Developer • Cybersecurity Enthusiast
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building interactive websites and secure web apps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="glass-button inline-flex items-center gap-2 text-lg bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(190,95%,55%)] hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300">
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/freelancer" className="glass-button inline-flex items-center gap-2 text-lg bg-gradient-to-r from-[hsl(330,85%,65%)] to-[hsl(var(--accent))] hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300">
                Hire Me
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 glass rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground">
              Specialized in creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card text-center glow-hover group hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 glass rounded-2xl flex items-center justify-center text-accent group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Ready to Start a Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate and create something amazing together
            </p>
            <Link to="/freelancer" className="glass-button inline-flex items-center gap-2 text-lg hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group">
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;