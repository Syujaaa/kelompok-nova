import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

function TechEffects() {
  const isSmall = window.innerWidth < 640;
  const dots = isSmall ? 12 : 30;

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {Array.from({ length: dots }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(0,255,255,0.8)]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
      <motion.div
        className="absolute top-1/3 left-1/4 w-72 h-72 border border-cyan-400/40 rounded-[25%] shadow-[0_0_40px_rgba(0,255,255,0.5)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function YelYelSection({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.12], [1, 0.9]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center text-center text-cyan-300 z-40 bg-black/30"
      style={{ opacity, scale }}
    >
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold drop-shadow-[0_0_40px_rgba(0,255,255,1)] mb-10"
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity }} // lebih lambat
      >
        NOVA!
      </motion.h1>

      <div className="space-y-6 text-2xl md:text-3xl font-bold">
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

      <motion.h2
        className="mt-12 text-3xl md:text-4xl font-extrabold text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,1)]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 6, duration: 1.8 }}
      >
        SuperNOVA!!
      </motion.h2>

      <motion.p
        className="mt-6 max-w-2xl text-lg md:text-xl text-cyan-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7.5, duration: 2 }}
      >
        “Nalar Cerdas, Optimis Kuat, Visioner Hebat, Aktif Tanpa Batas!”
      </motion.p>
    </motion.div>
  );
}

function EndSection({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0.95, 0.98, 1], [0, 0, 1]);
  const scale = useTransform(scrollYProgress, [0.98, 1], [0.95, 1]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center text-center text-cyan-300 z-50 bg-black/30"
      style={{ opacity, scale }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold drop-shadow-[0_0_30px_rgba(0,255,255,1)] mb-6"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Terima Kasih 🙏
      </motion.h1>

      <motion.p
        className="mt-4 text-base sm:text-lg md:text-xl text-cyan-100 max-w-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Sudah melihat perjalanan kelompok kami. Semoga karya kecil ini memberi
        inspirasi teknologi dan semangat baru ✨
      </motion.p>
    </motion.div>
  );
}
const sections = [
  {
    id: "kelompok",
    title: "Kelompok Nova",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui doloremque ad aliquam.",
    img: null,
    bg: "linear-gradient(135deg, #1e3c72, #2a5298)",
  },
  {
    id: "pendamping",
    title: "Kak Lella",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/kalela.png",
    bg: "linear-gradient(135deg, #42275a, #734b6d)",
  },
  {
    id: "anggota1",
    title: "Rasya",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/rasya.png",
    bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  },
  {
    id: "anggota2",
    title: "Dicky",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/dicky.png",
    bg: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
  },
  {
    id: "anggota3",
    title: "Abyan",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/abyan.png",
    bg: "linear-gradient(135deg, #283c86, #45a247)",
  },
  {
    id: "anggota4",
    title: "Syuja",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/syuja.png",
    bg: "linear-gradient(135deg, #8e2de2, #4a00e0)",
  },
  {
    id: "anggota5",
    title: "Desta",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/desta.png",
    bg: "linear-gradient(135deg, #ff512f, #dd2476)",
  },
  {
    id: "anggota6",
    title: "Dika",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/dika.png",
    bg: "linear-gradient(135deg, #56ab2f, #a8e063)",
  },
  {
    id: "anggota7",
    title: "Haikal",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/haikal.png",
    bg: "linear-gradient(135deg, #141e30, #243b55)",
  },
  {
    id: "anggota8",
    title: "Nadin",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/nadin.png",
    bg: "linear-gradient(135deg, #ff0099, #493240)",
  },
  {
    id: "anggota9",
    title: "Naila",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/naila.png",
    bg: "linear-gradient(135deg, #1f4037, #99f2c8)",
  },
  {
    id: "anggota10",
    title: "Azza",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/azza.png",
    bg: "linear-gradient(135deg, #e96443, #904e95)",
  },
  {
    id: "anggota11",
    title: "Ozan",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/ozan.png",
    bg: "linear-gradient(135deg, #2193b0, #6dd5ed)",
  },
  {
    id: "anggota12",
    title: "Rifdah",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/images/rifdah.png",
    bg: "linear-gradient(135deg, #ee9ca7, #ffdde1)",
  },
  {
    id: "anggota13",
    title: "Rizal",
    desc: "Halo semuanya! Saya adalah Rizaldi Henry Prakoso Seorang maba baru Teknik Informatika Unnes Saya biasa pakai Youtube dan AI dengan semangat penuh. Waktu awal kuliah, pengalaman ospek Ilmu Komputer jadi salah satu momen seru yang tidak akan never saya lupain.  Dari situ saya belajar arti solid dengan teman-teman senasib.  Yuk, kenal lebih jauh di Instagram saya @rihepr",
    img: "/images/rizal.png",
    bg: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  },
];

export default function SmoothSections() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [progress, setProgress] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    if (!canScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [canScroll]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanScroll(true);
      setShowScrollHint(true);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setProgress(v));
  }, [scrollYProgress]);

  return (
    <div className="h-[500vh] text-white relative overflow-hidden font-mono">
      <motion.div
        className="fixed top-0 left-0 h-2 bg-cyan-400 z-50 origin-left"
        style={{ scaleX }}
      />

      <motion.div
        className="fixed top-0 left-0 w-full h-full -z-30"
        style={{
          background: useTransform(
            scrollYProgress,
            sections.map((_, i) => i / (sections.length - 1)),
            sections.map((s) => s.bg)
          ),
        }}
      />

      <TechEffects />

      <YelYelSection scrollYProgress={scrollYProgress} />

      {sections.map((section, i) => {
        const sectionLength = 0.8 / sections.length;
        const start = 0.15 + i * sectionLength;
        const end = 0.15 + (i + 1) * sectionLength;

        const fadeMargin = sectionLength * 0.25;

        const opacity = useTransform(
          scrollYProgress,
          [start, start + fadeMargin, end - fadeMargin, end],
          [0, 1, 1, 0]
        );

        return (
          <motion.div
            key={section.id}
            style={{ opacity }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center px-4 sm:px-6"
          >
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-10 max-w-6xl w-full h-full md:h-auto overflow-hidden">
              <div className="flex-1 text-center md:text-left overflow-y-auto md:overflow-visible max-h-[60vh] md:max-h-none px-2 md:px-0">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,1)]">
                  {section.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-cyan-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                  {section.desc}
                </p>
              </div>

              {section.img && (
                <motion.div
                  initial={
                    section.id === "kelompok"
                      ? false
                      : { opacity: 0, scale: 0.6, rotateY: 90 }
                  }
                  animate={
                    section.id === "kelompok"
                      ? false
                      : { opacity: 1, scale: 1, rotateY: 0 }
                  }
                  exit={
                    section.id === "kelompok"
                      ? false
                      : { opacity: 0, scale: 0.6, rotateY: -90 }
                  }
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  className="relative w-full max-w-[200px] sm:max-w-[250px] md:w-64 md:h-80 flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-cyan-400/30 animate-pulse blur-xl rounded-lg" />
                  <img
                    src={section.img}
                    alt={section.title}
                    className="relative w-full h-auto md:h-full object-cover rounded-lg border-2 border-cyan-400/70 shadow-[0_0_30px_rgba(0,255,255,0.8)]"
                  />
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(0,255,255,0.2),rgba(0,255,255,0.2)_2px,transparent_2px,transparent_4px)] animate-[slide_4s_linear_infinite]" />
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}

      {showScrollHint && progress < 0.9 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 text-center text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] z-40"
        >
          <p className="mb-2 text-sm md:text-base tracking-widest uppercase">
            Scroll
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-6 h-6 mx-auto text-cyan-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}

      <EndSection scrollYProgress={scrollYProgress} />
    </div>
  );
}
