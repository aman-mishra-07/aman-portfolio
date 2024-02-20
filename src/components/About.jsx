import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const aboutMe = [
    "Welcome to my profile! I am a passionate and versatile Frontend Developer with a strong foundation in HTML, CSS, and JavaScript. My journey in web development has been characterized by a continuous quest for learning and mastery of the latest technologies. ",

    "Having honed my skills in creating responsive and visually appealing user interfaces, I specialize in crafting seamless and engaging web experiences. My proficiency extends to leveraging the power of React, enabling me to build dynamic and efficient single-page applications ",
    "In addition to my expertise in frontend development, I bring a unique blend of creativity to the table. I have a keen interest in video editing, allowing me to marry my technical skills with a flair for visual storytelling. This dual proficiency not only enhances my ability to create interactive and visually stunning websites but also enables me to seamlessly integrate multimedia elements for a more immersive user experience.",

    "With a commitment to staying on the cutting edge of technology, I am always eager to explore new tools and frameworks that can enhance my development capabilities. I thrive in collaborative environments and am dedicated to delivering high-quality solutions that exceed client and user expectations.",

    "Whether it's transforming design concepts into elegant code, optimizing user interfaces for performance, or adding a touch of visual finesse through video editing, I am poised to contribute my skills to projects that demand innovation and excellence. Let's embark on a journey of creating exceptional digital experiences together!",
  ];
  return (
    <div>
      <div className="min-h-screen gap-4 p-4 sm:p-10 md:px-20 py-10 overflow-hidden snap-start">
        <motion.h2
          className="text-4xl"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
        >
          About
        </motion.h2>
        <div className="space-y-4 mt-4">
          {aboutMe.map((p, i) => (
            <motion.p
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: `.${i * 2}`,
              }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
