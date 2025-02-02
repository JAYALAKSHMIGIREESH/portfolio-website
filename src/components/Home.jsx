import React from "react";
import { motion } from "framer-motion";
import avatarImg from '../assets/profile.png';

const Home = () => {
    return (
      <div className="text-pink-700 flex flex-col-reverse md:flex-row w-full justify-between items-center p-6 md:p-20">
  
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-6 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tighter">
            Hello, I'm Jayalakshmi
          </h1>
          <p className="text-sm md:text-2xl tracking-tight text-gray-500 mt-4">
            I'm a passionate Web Developer specializing in creating dynamic,
            responsive websites and web applications.
          </p>
          <motion.button
            className="mt-5 md:mt-10 text-white py-2 px-4 md:py-3 md:px-6 hover:opacity-90 hover:scale-105 duration-300 font-semibold rounded-xl bg-pink-950 hover:bg-white hover:text-pink-950 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </motion.div>
  
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="w-3/4 md:w-full max-w-sm md:max-w-md rounded-full object-cover shadow-lg"
            src={avatarImg}
            alt="Profile"
          />
        </motion.div>
      </div>
    );
  };

export default Home;
