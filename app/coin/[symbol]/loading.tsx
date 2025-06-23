"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-950 via-gray-900 to-cyan-900">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="absolute w-32 h-32 rounded-full border-8 border-t-cyan-400 border-b-blue-600 border-l-transparent border-r-transparent"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        />
        <motion.div
          className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-xl"
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 0px 0px #0ff",
              "0 0 40px 10px #0ff",
              "0 0 0px 0px #0ff",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
        <motion.span
          className="absolute top-full mt-8 w-full text-center text-lg font-bold tracking-widest text-cyan-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Loading Crypto Data...
        </motion.span>
      </motion.div>
    </div>
  );
}
