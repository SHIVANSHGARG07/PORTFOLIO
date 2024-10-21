// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Animation variants
const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => {
  return {
    initial: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type, delay, duration },
    },
  };
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <motion.div
          className='w-28 h-28'
          key={technology.name}
          variants={fadeIn("up", "spring", index * 0.2, 0.75)} // Apply fade-in animation
          initial="initial"
          animate="animate"
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
