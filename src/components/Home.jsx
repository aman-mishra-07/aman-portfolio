import React from "react";
import {motion} from 'framer-motion'
import Typewriter from "typewriter-effect";


const Home = () => {
  return (
    <div id="home">
      <div className="min-h-screen flex flex-col-reverse sm:flex-row items-center justify-center gap-4 p-4 sm:p-10 md:px-20 py-10 overflow-hidden snap-start">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="sm:flex-1 text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold max-w-xl ">
            Hi , My name is <span className="text-blue-600">Aman</span> and i am
            a{" "}
            <span className="text-blue-600">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Web developer")
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Video Editor")
                    .pauseFor(2500)
                    .start();
                }}
              />
            </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="sm:flex-1 flex items-center justify-center"
        >
          <motion.div className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 aspect-square rounded-full overflow-hidden border-8 border-blue-600">
            <img src={"../../../public/dev.png"} alt="aman" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
