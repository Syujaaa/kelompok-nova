import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import TechEffects from "./components/TechEffects";
import YelYelSection from "./components/Yelyel";
import EndSection from "./components/EndSection";

const sections = [
  {
    id: "kelompok",
    title: "Kelompok Nova",
    desc: `Nama "Nova" terinspirasi dari sebuah AI bernama "Nova AI". 
  Nova bermakna sesuatu yang baru, melambangkan awal baru, inovasi, dan kecemerlangan. 
  Dengan jargon: "NOVA – Nalar Cerdas, Optimis Kuat, Visioner Hebat, Aktif Tanpa Batas!", 
  kelompok ini dipimpin oleh Mas Rasya sebagai ketua dan didampingi oleh Kak Lela. 
  <br />
  <br />
  Pada pentas seni kemarin, Nova menampilkan Drama Musikal 'Kisah Malin Kundang' 
  dengan twist unik—peran istri dan ibu Malin Kundang dimainkan oleh anggota cowok. 🎭 
  <br />
  <br />
  Fun fact: Kelompok Nova hampir kena evaluasi korlap sampai 3 kali loh 😹`,
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
    }, 11500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setProgress(v));
  }, [scrollYProgress]);

  return (
    <div className="h-[600vh] text-white relative overflow-hidden font-mono">
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
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-10 max-w-6xl w-full h-full md:h-auto overflow-hidden">
              {section.id === "kelompok" ? (
                <motion.div
                  key={section.id}
                  style={{ opacity }}
                  className="fixed top-0 left-0 w-full h-full flex items-center justify-center px-4 sm:px-6"
                >
                  <div className="absolute inset-0 bg-black/30"></div>

                  <div
                    className={`flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-10 max-w-6xl w-full h-full md:h-auto px-2 md:px-0 justify-center`}
                  >
                    <div className="flex-1 overflow-y-auto md:overflow-visible max-h-[60vh] md:max-h-none flex flex-col items-center text-center">
                      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,1)]">
                        {section.title}
                      </h1>
                      <p
                        className="text-base sm:text-lg md:text-xl leading-relaxed text-cyan-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                        dangerouslySetInnerHTML={{ __html: section.desc }}
                      />
                    </div>

                    {section.img && (
                      <motion.div
                        initial={false}
                        animate={false}
                        exit={false}
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
              ) : (
                <div className="flex-1 text-center md:text-left overflow-y-auto md:overflow-visible max-h-[60vh] md:max-h-none px-2 md:px-0">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,1)]">
                    {section.title}
                  </h1>
                  <p
                    className="text-base sm:text-lg md:text-xl leading-relaxed text-cyan-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    dangerouslySetInnerHTML={{ __html: section.desc }}
                  />
                </div>
              )}

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
