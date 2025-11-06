import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import ParticleField from "@/components/3d/ParticleField";
import FloatingCube from "@/components/3d/FloatingCube";
import HolographicRing from "@/components/3d/HolographicRing";
import avatarPhoto from "@/assets/avatar-photo.jpg";
import { toast } from "sonner";

const Login = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (name.toLowerCase().trim() === "yogesh") {
        sessionStorage.setItem("authenticated", "true");
        toast.success("Welcome back, Yogesh!");
        navigate("/");
      } else {
        toast.error("Invalid credentials. Try 'Yogesh'");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
          
          <ParticleField count={2000} />
          <FloatingCube position={[-3, 0, 0]} />
          <FloatingCube position={[3, 0, 0]} color="#06b6d4" emissive="#0891b2" />
          <HolographicRing position={[0, 0, -5]} />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card max-w-md w-full mx-4 text-center"
        >
          {/* Avatar Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden animate-pulse-glow"
          >
            <img src={avatarPhoto} alt="Yogesh" className="w-full h-full object-cover" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold gradient-text mb-4"
          >
            Welcome
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mb-8"
          >
            Fill the answer to login
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Say my name ....."
                className="w-full px-6 py-4 glass rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full glass-button text-lg font-bold"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : (
                "Enter Portfolio"
              )}
            </button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Hint: Try "Yogesh"
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;