import {
  easeInOut,
  motion,
  useMotionTemplate,
  useMotionValue,
  ObjectTarget,
  animate,
  MotionValue,
} from 'framer-motion';
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
    <motion.section
      style={{ backgroundImage }}
      className="w-full h-full rotate-315 overflow-hidden"
    >
      <div className="rotate-[-315deg] w-full h-full">
        <div className="absolute h-screen w-screen bottom-[calc(50%-50vh)] left-[-70vw]">
          {props.children}
        </div>
      </div>
    </motion.section>
  );
};

export default DarkSection;
