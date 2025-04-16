import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Profile from 'assets/about/profile.jpg';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'center end'],
  });
  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    duration: 2,
    damping: 30,
    restDelta: 0.005,
  });
  const opacity = useTransform(spring, [0, 1], [0, 1]);
  const marginTop = useTransform(spring, [0, 1], [-200, 0]);
  return (
    <section className="relative w-dvw h-dvh bg-amber-50 snap-start">
      <div
        className="flex flex-col items-center justify-center h-full"
        ref={ref}
      >
        <div className="text-center pb-5 px-16">
          <h2 className="text-5xl">Art is my Passion</h2>
          <h2 className="text-3xl">and Fashion is my Expression</h2>
        </div>
        <motion.div style={{ opacity: opacity, marginTop: marginTop }}>
          <img
            src={Profile}
            alt="Profile"
            className="h-60 w-60 md:h-80 md:w-80 rounded-full"
          />
        </motion.div>
        <div className="pt-4 text-center px-4 sm:px-16">
          <p>
            People and dresses are the subjects I draw the most throughout my
            childhood.
          </p>
          <p>
            Over time I grew my interest in fashion because I believe fashion
            channels my art into a lively and meaningful form.
          </p>
          <p>
            I think fashion is a way for people to express their feelings, which
            is deeply important to me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
