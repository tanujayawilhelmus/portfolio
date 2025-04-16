import { Sparkles } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
interface DarkSectionProps {
  children: React.ReactNode;
}

const DarkSection = (props: DarkSectionProps) => {
  return (
    <div className="w-full h-full rotate-315 overflow-hidden bg-black">
      <div className="rotate-[-315deg] w-full h-full">
        <div className="absolute h-dvh w-dvw bottom-[calc(50%-50vh)] left-[-70vw]">
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
    </div>
  );
};

export default DarkSection;
