import { motion } from 'framer-motion';
import Envelope from './components/Envelope';
import Stamp from 'assets/home/stamp.png';
import Eye from './components/Eye';
import PopItems from './components/PopItems';
import Title from './components/Title';
import DarkSection from './components/Darksection';
import { useMediaQuery } from '../../../../utils/useMediaQuery';

const Landing = () => {
  const isSmall = useMediaQuery('(max-width: 480px)');
  const translateStart = isSmall ? '120vw' : '90vw';
  const translateEnd = isSmall ? '100vw' : '70vw';
  return (
    <section className="relative h-dvh w-dvw bg-amber-50 overflow-hidden snap-start">
      <Envelope />
      <motion.div
        animate={{
          translateX: [translateStart, translateEnd],
          transition: {
            duration: 1,
          },
        }}
        className="absolute w-[1700px] h-[1700px] top-[-26rem] sm:w-[2000px] sm:h-[2000px] sm:top-[calc(50%-1000px)]"
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
