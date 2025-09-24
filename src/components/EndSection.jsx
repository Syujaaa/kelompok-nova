import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

export default function EndSection({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0.95, 0.98, 1], [0, 0, 1]);
  const scale = useTransform(scrollYProgress, [0.98, 1], [0.95, 1]);

  const [zoomImg, setZoomImg] = useState(null);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center text-center text-cyan-300 z-50 bg-black/40 px-4"
      style={{ opacity, scale }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        <motion.img
          src="/images/IMG_2715.jpg"
          alt="Foto 1"
          onClick={() => setZoomImg("/images/IMG_2715.jpg")}
          className="w-full max-w-[320px] h-56 sm:h-64 object-cover rounded-xl border border-cyan-400/70 shadow-[0_0_25px_rgba(0,255,255,0.8)] hover:scale-105 transition-transform duration-500 cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        />

        <motion.div
          className="relative w-full max-w-[600px] aspect-video border-2 border-cyan-400/60 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.9)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <video
            className="w-full max-w-5xl aspect-video rounded-2xl shadow-lg"
            controls
            loop
            muted={false}
          >
            <source src="/videos/VID_2773.mp4" type="video/mp4" />
            Browser kamu tidak mendukung video.
          </video>

          <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(0,255,255,0.1),rgba(0,255,255,0.1)_2px,transparent_2px,transparent_4px)] pointer-events-none" />
        </motion.div>

        <motion.img
          src="/images/IMG_2763.jpg"
          alt="Foto 2"
          onClick={() => setZoomImg("/images/IMG_2763.jpg")}
          className="w-full max-w-[320px] h-56 sm:h-64 object-cover rounded-xl border border-cyan-400/70 shadow-[0_0_25px_rgba(0,255,255,0.8)] hover:scale-105 transition-transform duration-500 cursor-pointer"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        />
      </div>

      {zoomImg && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setZoomImg(null)}
        >
          <button
            onClick={() => setZoomImg(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-cyan-400 transition"
          >
            &times;
          </button>
          <motion.img
            src={zoomImg}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
      <motion.div
        className="absolute bottom-6 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a
          href="https://farrassyuja.my.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative font-semibold text-cyan-400 hover:text-cyan-200 transition"
        >
          <span className="absolute inset-0 blur-md bg-cyan-500/40 animate-pulse rounded-lg -z-10"></span>
          Tentang developer
        </a>
      </motion.div>
    </motion.div>
  );
}
