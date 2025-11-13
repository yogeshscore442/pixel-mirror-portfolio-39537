import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MessageSquare, Github, Linkedin } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FloatingCube from "@/components/3d/FloatingCube";
import ParticleField from "@/components/3d/ParticleField";

const Freelancer = () => {
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "yogeshms5314@gmail.com",
      link: "mailto:yogeshms5314@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9597972454",
      link: "tel:+919597972454",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+91 9597972454",
      link: "https://wa.me/919597972454",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      link: "https://github.com/yogeshscore442",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/yogesh-m-s-544374294",
    },
  ];

  return (
    <div className="relative min-h-screen py-20">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          
          <ParticleField count={600} />
          <FloatingCube position={[-3, 2, 0]} />
          <FloatingCube position={[3, -2, 0]} color="#06b6d4" emissive="#0891b2" />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.4}
          />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Contact Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Looking for a freelancer to bring your ideas to life? Let's collaborate
            on your next project
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              ref={contactRef}
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">
                Get in Touch
              </h2>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={contactInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card flex items-center gap-4 glow-hover"
                  >
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-accent shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card"
            >
              <h3 className="text-2xl font-bold mb-6">Connect on Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass w-14 h-14 rounded-xl flex items-center justify-center text-accent glow-hover"
                    aria-label={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card"
            >
              <h3 className="text-2xl font-bold mb-4">Availability</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance projects. Response time: 24-48 hours.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow" />
                <span className="text-green-500 font-semibold">Available for hire</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;