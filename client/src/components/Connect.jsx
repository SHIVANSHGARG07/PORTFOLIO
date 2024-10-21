import React from 'react';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion"; // Ensure this is defined with the proper easing

const InfoBox = ({ imageSrc, title, description, index, link }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50, // Move in from left or right
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 50,
            damping: 20, // Adjust damping for smoothness
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }} // Keep it animated every time it comes into view
      className="flex items-center bg-gradient-to-r from-[#15122b] via-[#100D25] to-[#100D25] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
        <img src={imageSrc} alt={title} className="w-16 h-16 mr-4 rounded-full cursor-pointer" />
        <div>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

const Connect = () => {
  const boxes = [
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s', // Replace with your image URL
      title: 'LinkedIn',
      description: 'Lets Connect on Linkedin I am having 1200+ followers.',
      link: 'https://www.linkedin.com/in/shivansh-garg-6843a1257/' // Add your link here
    },
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdB-EbJVMxRYtNz1i4dn7jOVSfHq-002oe4w&s', // Replace with your image URL
      title: 'X',
      description: 'Connect me on X for some cool Tweets!',
      link: 'https://twitter.com/SHIVANSHGARG41' // Add your link here
    },
    {
      imageSrc: "data:image/png;base64,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",
      title: 'GitHub - version Control',
      description: "Follow me here for some cool stuff Repo's",
      link: 'https://github.com/SHIVANSHGARG07' // Add your link here
    },
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KJ34dO3Vp7rp1UHEo4eO8VAFNoHKLI9mrw&s', // Replace with your image URL
      title: 'Box 4',
      description: 'Learning Dsa in Java have done 450+ Questions',
      link: 'https://leetcode.com/u/shivanshgarg07/' // Add your link here
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] bg-[#060916] p-2">
      <p className={styles.sectionSubText}>Connect with me</p>
      <h3 className={styles.sectionHeadText}>Connect.</h3>
      <div className="grid grid-cols-1 gap-4 w-full max-w-3xl">
        {boxes.map((box, index) => (
          <InfoBox
            key={index}
            imageSrc={box.imageSrc}
            title={box.title}
            description={box.description}
            index={index}
            link={box.link} // Pass the link to InfoBox
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Connect, "connect");
