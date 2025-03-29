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
        duration: 0.25,
        delay: i / delay,
      }}
    >
      {el}{' '}
    </motion.span>
  );
};

const Title = () => {
  const title = 'Fashion Design'.split('');
  const subtitle = 'Portfolio'.split('');
  const name = 'By: Maria Priscilla Tanujaya';

  return (
    <div className="absolute top-0 left-0 p-8">
      <h1 className="text-4xl text-gray-800 text-nowrap">
        {title.map((el, i) => (
          <Animated key={i} el={el} i={i} delay={title.length} />
        ))}
      </h1>
      <p className="text-5xl font-bold text-gray-800 text-nowrap">
        {subtitle.map((el, i) => (
          <Animated key={i} el={el} i={i} delay={subtitle.length} />
        ))}
      </p>
      <motion.p
        className="text-xl font-light text-gray-800"
        animate={{
          translateY: [-10, 0, 0],
        }}
        transition={{
          duration: 2,
        }}
      >
        {name}
      </motion.p>
    </div>
  );
};

export default Title;
