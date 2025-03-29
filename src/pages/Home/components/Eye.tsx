import Nangis from 'assets/home/nangis.png';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Eye = () => {
  const [opacity] = useState(1);
  return (
    <motion.img
      src={Nangis}
      alt="crying"
      className="h-2/5 opacity-0"
      animate={{ opacity }}
      transition={{ duration: 1 }}
    />
  );
};
export default Eye;
