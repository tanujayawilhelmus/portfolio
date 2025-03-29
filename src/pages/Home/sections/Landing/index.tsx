import { motion } from 'framer-motion';
import Envelope from './components/Envelope';
import Stamp from 'assets/home/stamp.png';
import Eye from './components/Eye';
import PopItems from './components/PopItems';
import Title from './components/Title';
import DarkSection from './components/Darksection';

const Landing = () => {
  return (
    <section className="relative h-screen w-screen bg-amber-50 overflow-hidden snap-center">
      <Envelope />
      <motion.div
        animate={{
          translateX: ['90vw', '70vw'],
          transition: {
            duration: 1,
          },
        }}
        className="absolute w-[2000px] h-[2000px] top-[calc(50%-1000px)]"
      >
        <DarkSection>
          <div className="flex h-full justify-end items-center">
            <Eye />
            <PopItems />
          </div>
        </DarkSection>
        <img
          src={Stamp}
          alt="stamp"
          className="absolute w-40 h-40 top-[calc(50%-80px)] left-[-25%]"
        />
      </motion.div>
      <Title />
    </section>
  );
};

export default Landing;
