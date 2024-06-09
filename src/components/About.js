import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import profileImg from "../assets/profile.png";
import Button from "../utils/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

export default function About() {
  return (
    <motion.div
      className="flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="lgl:flex justify-center items-center md:mt-2 xl:gap-40">
        <motion.div
          className="lgl:hidden mt-10 mx-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <img
            className="border-2 border-gray-400 rounded-full md:h-80 md:w-80 h-60 w-60 shadow-lg"
            src={profileImg}
            alt="Profile"
          />
        </motion.div>
        <motion.div
          className="max-w-lg max-h-screen h-full mt-2 ml-2"
          variants={itemVariants}
        >
          <div className="lgl:text-5xl text-xl mb-2 text-slate-300 lgl:flex lgl:flex-col flex gap-2">
            <motion.h1
              className="mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I am
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Asutosh Shukla.
            </motion.h1>
          </div>
          <div className="text-slate-300">
            <motion.h2
              className="text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <AnimatedText />
            </motion.h2>
          </div>
          <motion.div
            className="mt-4 md:flex items-center justify-end px-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="md:text-xl text-base text-slate-400">
              I am a passionate and versatile person, always on the lookout for
              chances to enhance my abilities and embrace new challenges. Driven
              by an insatiable thirst for knowledge, I am dedicated to achieving
              excellent results in everything I undertake. Approaching each task
              with enthusiasm and an initiative mindset, I am ready to
              contribute significantly and achieve outstanding outcomes.
            </span>
          </motion.div>
        </motion.div>
        <motion.div
          className="hidden lgl:block my-40 mx-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <img
            className="border-2 border-gray-400 rounded-full h-80 w-80 shadow-lg"
            src={profileImg}
            alt="Profile"
          />
        </motion.div>
      </div>
      <motion.div
        className="lg:mx-24 my-36 lgl:my-20 mx-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/14ocbOzHFuIuwTfZy1LZNriz0-awmM4Vb/view?usp=drive_link"
          >
            View Resume
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
}
