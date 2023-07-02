import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://img.freepik.com/premium-photo/cute-boy-pixar-style-cartoon-3d-illustration-generative-ai_808510-251.jpg?w=2000"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of ROJEX</h4>
        <p className="font-bold text-2xl mt-1">ROJEX</p>
        <div className="flex space-x-2 my-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://i.pinimg.com/736x/32/c2/5f/32c25f81a0faf0f89a0ec53b28de8445.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://i.pinimg.com/736x/32/c2/5f/32c25f81a0faf0f89a0ec53b28de8445.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://i.pinimg.com/736x/32/c2/5f/32c25f81a0faf0f89a0ec53b28de8445.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://i.pinimg.com/736x/32/c2/5f/32c25f81a0faf0f89a0ec53b28de8445.jpg"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points
          </li>
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points
          </li>
          <li>
            Summary Points Summary Points Summary Points Summary Points Summary
            Points Summary Points
          </li>
          <li>
            Summary Points Summary PointsSummary Points Summary Points Summary
            Points Summary Points
          </li>
          <li>
            Summary Points Summary Points Summary Points v Summary Points
            Summary Points Summary Points
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
