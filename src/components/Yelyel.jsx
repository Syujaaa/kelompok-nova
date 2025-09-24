import {
  motion,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function YelYelSection({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.9]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setCount(current);
      if (current === 13) clearInterval(interval);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center text-center text-cyan-300 z-40 bg-black/30"
      style={{ opacity, scale }}
    >
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold drop-shadow-[0_0_40px_rgba(0,255,255,1)] mb-10"
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        NOVA!
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6 drop-shadow-[0_0_25px_rgba(0,255,255,1)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Total Anggota: {count}
      </motion.h2>

      <div className="flex flex-col items-center text-2xl md:text-3xl font-bold">
        <div className="flex flex-col space-y-6 text-left">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.5 }}
          >
            N – Nalar
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.0, duration: 1.5 }}
          >
            O – Optimis
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.2, duration: 1.5 }}
          >
            V – Visioner
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.4, duration: 1.5 }}
          >
            A – Aktif
          </motion.p>
        </div>
      </div>

      <motion.h2
        className="mt-12 text-3xl md:text-4xl font-extrabold text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,1)]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 6, duration: 1.8 }}
      >
        SuperNOVA!!
      </motion.h2>

      <motion.div
        className="mt-6 max-w-2xl text-lg md:text-xl text-cyan-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] flex flex-wrap justify-center gap-x-2 gap-y-1"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {[
          "Nalar Cerdas,",
          "Optimis Kuat,",
          "Visioner Hebat,",
          "Aktif Tanpa Batas!",
        ].map((text, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7.5 + i * 1, duration: 0.8 }}
          >
            {text}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}