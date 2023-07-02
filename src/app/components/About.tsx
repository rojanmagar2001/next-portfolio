"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        src="profile.jpg"
        alt=""
        loading="lazy"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <div className="relative z-20">
          <h4 className="text-2xl md:text-4xl font-semibold ">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">Little</span>{" "}
            Background
          </h4>
        </div>
        <motion.div
          initial={{ x: 500 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative left-[12rem] top-10 z-10"
        >
          <div className="absolute -top-20 right-[1rem] w-80 h-80 bg-[rgb(25,133,172)] rounded-full"></div>
          <div className="absolute -top-30 right-[10rem] w-80 h-80 bg-[rgb(25,133,172)] rounded-full"></div>
          <div className="absolute -top-[8rem] right-[12rem] w-80 h-80 bg-[rgb(25,133,172)] rounded-full"></div>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative left-[10rem] top-20 z-2"
        >
          <div className="absolute -top-20 right-[1rem] w-80 h-80 bg-[#2a8caf] rounded-full"></div>
          <div className="absolute -top-30 right-[10rem] w-80 h-80 bg-[#2a8caf] rounded-full"></div>
          <div className="absolute -top-[8rem] right-[12rem] w-80 h-80 bg-[#2a8caf] rounded-full"></div>
        </motion.div>
        <p className="md:text-base text-sm relative z-20">
          I am a highly skilled full stack web developer with expertise in
          Node.js, React, and Django. With over 5 years of experience in the
          industry, I have a deep understanding of front-end and back-end web
          development and have delivered complex projects for a range of
          clients. My expertise in Node.js and React allows me to build fast and
          responsive user interfaces that deliver a seamless user experience. I
          am also well-versed in Django, which enables me to create powerful
          back-end solutions that are scalable and secure. I have a strong track
          record of collaborating effectively with cross-functional teams and
          delivering high-quality code that meets project requirements. I have a
          passion for staying up-to-date with the latest technologies and am
          always looking for new ways to improve my skills.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
