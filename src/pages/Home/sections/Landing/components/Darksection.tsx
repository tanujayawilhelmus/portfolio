import {
  easeInOut,
  motion,
  useMotionTemplate,
  useMotionValue,
  ObjectTarget,
  animate,
  MotionValue,
} from 'framer-motion';
import { Sparkles } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react';
interface DarkSectionProps {
  children: React.ReactNode;
}

const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];
const DarkSection = (props: DarkSectionProps) => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(circle at 50%, black 70%, ${color} 90%, black 100%)`;

  useEffect(() => {
    animate(color, COLORS as ObjectTarget<MotionValue<string>>, {
      duration: 10,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: easeInOut,
    });
  }, []);
  return (
    <motion.div
      style={{ backgroundImage }}
      className="w-full h-full rotate-315 overflow-hidden"
    >
      <div className="rotate-[-315deg] w-full h-full">
        <div className="absolute h-screen w-screen bottom-[calc(50%-50vh)] left-[-70vw]">
          {props.children}
        </div>
      </div>
      <div className="absolute inset-0 top-0 left-0 w-200 h-200">
        <Canvas>
          <Sparkles
            color={'white'}
            size={10}
            opacity={1}
            count={100}
            speed={0.3}
            noise={1}
            scale={10}
          />
        </Canvas>
      </div>
    </motion.div>
  );
};

export default DarkSection;
