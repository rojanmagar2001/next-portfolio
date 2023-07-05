import Circles from "../../components/Circles";

import { BsArrowBarRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/60">
      <div className="h-screen  bg-gradient-to-r from-black/30 via-black/50 to-black/60 py-32 text-center xl:text-left">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          <div className="flex flex-col max-w-[700px]">
            {/* Text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12 text-3xl xl:text-4xl"
            >
              Let&apos;s <span className="text-accent">connect.</span>
            </motion.h2>
            {/* form */}
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              {/* group */}
              <div className="flex gap-x-6 w-full">
                <input type="text" placeholder="name" className="input" />
                <input type="text" placeholder="email" className="input" />
              </div>
              <input type="text" placeholder="subject" className="input" />
              <textarea placeholder="message" className="textarea" />
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let&apos;s talk
                </span>
                <BsArrowBarRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
