import { motion } from 'framer-motion';
import { useState } from 'react';
import Pop from 'assets/home/pop.png';
import Cloud from 'assets/home/cloud.webp';

const PopItems = () => {
  const [position] = useState(450);

  return (
    <motion.div
      className="h-screen absolute right-[550px]"
      animate={{ x: position }}
      transition={{ type: 'spring', duration: 5 }}
    >
      <img className="h-full min-w-[520px]" src={Pop} alt="pop-image" />
      <motion.img
        animate={{ x: [0, 400] }}
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
