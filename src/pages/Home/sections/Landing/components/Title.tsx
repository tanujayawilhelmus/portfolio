import { motion } from 'framer-motion';

interface AnimatedProps {
  el: string;
  i: number;
  delay: number;
}

const Animated: React.FC<AnimatedProps> = ({ el, i, delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: i / delay,
      }}
    >
      {el}
    </motion.span>
  );
};

const Title = () => {
  const title = 'Fashion Design'.split('');
  const subtitle = 'Portfolio'.split('');
  const name = 'By: Maria Priscilla Tanujaya';

  return (
    <div className="absolute w-full top-0 left-0  md:top-[15vh] md:left-8 p-8 ">
      <h1 className="text-3xl text-black md:text-6xl text-nowrap transition-all">
        {title.map((el, i) => (
          <Animated key={i} el={el} i={i} delay={title.length} />
        ))}
      </h1>
      <p className="text-4xl font-bold leading-14 text-black md:text-9xl md:leading-40 text-nowrap transition-all">
        {subtitle.map((el, i) => (
          <Animated key={i} el={el} i={i} delay={subtitle.length} />
        ))}
      </p>
      <div className="md:max-w-[30vw]">
        <motion.p
          className="text-xl font-light text-black md:text-4xl"
          animate={{
            translateY: [-10, 0, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          {name}
        </motion.p>
      </div>
    </div>
  );
};

export default Title;
