import { motion } from 'framer-motion';
import { useState } from 'react';
import Pop from 'assets/home/pop.png';
import Cloud from 'assets/home/cloud.webp';

const PopItems = () => {
  const [position] = useState(200);

  return (
    <motion.div
      className="h-screen absolute right-60"
      animate={{ x: position }}
      transition={{ type: 'spring' }}
    >
      <img className="h-full min-w-[520px]" src={Pop} alt="pop-image" />
      <motion.img
        animate={{ x: [0, 200] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        src={Cloud}
        alt="cloud"
        className="absolute bottom-[-1rem] right-0"
      />
    </motion.div>
  );
};

export default PopItems;
