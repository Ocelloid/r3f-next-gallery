import { motion } from "framer-motion";
import { menuSlide } from "@/app/_components/animation";
import Curve from "./Curve";
import Footer from "./Footer";

export default function Nav() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="white fixed right-0 top-0 z-[100] h-screen bg-slate-900"
    >
      <div className="box-border flex h-full flex-col justify-between p-12 text-slate-200">
        <div className="mt-20 flex flex-col gap-2 text-xl"></div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
