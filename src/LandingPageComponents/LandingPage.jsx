import React from "react";
import LandingBg from "../assets/LandingBg.jpg";
import { motion } from "framer-motion";
import TopicCards from "./TopicCards";

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="border-b-2 h-[600px] w-full object-cover relative"
        style={{
          backgroundImage: `url(${LandingBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center items-center h-full">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="text-white text-5xl md:text-8xl font-extrabold tracking-wide text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            Welcome to Quizzical!!
          </motion.p>
        </div>
      </section>

      {/* Explore More Heading */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-12 px-6">
       <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
  className="text-center text-4xl font-extrabold text-blue-800 mb-10 underline underline-offset-8 decoration-blue-400"
>
  Explore More
</motion.h2>


        {/* Topic Cards */}
        <div className="max-w-7xl mx-auto">
          <TopicCards />
        </div>
      </section>
    </>
  );
};

export default LandingPage;
