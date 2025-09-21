import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function TechEffects() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(0,255,255,0.05),rgba(0,255,255,0.05)_2px,transparent_2px,transparent_4px)] animate-[slide_8s_linear_infinite]" />

      {Array.from({ length: 30 }).map((_, i) => (
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
            scale: [0, 1.3, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
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

function EndSection({ progress }) {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center text-center text-cyan-300 z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: progress > 0.95 ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.2),transparent_70%)] animate-pulse" />

      <motion.h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-[0_0_30px_rgba(0,255,255,1)]">
        Terima Kasih 🙏
      </motion.h1>

      <motion.p className="mt-6 text-lg md:text-2xl text-cyan-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] max-w-2xl">
        Sudah melihat perjalanan kelompok kami. Semoga karya kecil ini memberi
        inspirasi teknologi dan semangat baru ✨
      </motion.p>

      <motion.div
        className="mt-10 h-1 w-40 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(0,255,255,1)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress > 0.95 ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

const sections = [
  {
    id: "kelompok",
    title: "Kelompok Nova",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui doloremque ad aliquam, veniam cum sunt voluptas quaerat rem expedita quos inventore eius corporis, tempore asperiores magnam minima nobis dolorem corrupti vel consequatur quibusdam velit similique optio voluptatibus. Sequi eveniet exercitationem adipisci architecto et fuga ratione perferendis earum ut natus fugit eum cupiditate iusto aut tempora expedita itaque aliquid velit dolorum nulla ducimus aperiam qui, voluptas eos! Aliquid similique error voluptatibus, tempora repudiandae soluta modi totam provident iste illum doloremque nam eum nulla alias sint eos obcaecati ducimus officia dolorem, doloribus ut, fugiat architecto fuga. Eligendi similique necessitatibus magnam et laboriosam.",
    img: null,
    bg: "linear-gradient(135deg, #1e3c72, #2a5298)",
  },
  {
    id: "pendamping",
    title: "Pendamping",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui doloremque ad aliquam, veniam cum sunt voluptas quaerat rem expedita quos inventore eius corporis, tempore asperiores magnam minima nobis dolorem corrupti vel consequatur quibusdam velit similique optio voluptatibus. Sequi eveniet exercitationem adipisci architecto et fuga ratione perferendis earum ut natus fugit eum cupiditate iusto aut tempora expedita itaque aliquid velit dolorum nulla ducimus aperiam qui, voluptas eos! Aliquid similique error voluptatibus, tempora repudiandae soluta modi totam provident iste illum doloremque nam eum nulla alias sint eos obcaecati ducimus officia dolorem, doloribus ut, fugiat architecto fuga. Eligendi similique necessitatibus magnam et laboriosam.",
    img: "/images/default.png",
    bg: "linear-gradient(135deg, #42275a, #734b6d)",
  },
  {
    id: "anggota1",
    title: "Anggota 1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui doloremque ad aliquam, veniam cum sunt voluptas quaerat rem expedita quos inventore eius corporis, tempore asperiores magnam minima nobis dolorem corrupti vel consequatur quibusdam velit similique optio voluptatibus. Sequi eveniet exercitationem adipisci architecto et fuga ratione perferendis earum ut natus fugit eum cupiditate iusto aut tempora expedita itaque aliquid velit dolorum nulla ducimus aperiam qui, voluptas eos! Aliquid similique error voluptatibus, tempora repudiandae soluta modi totam provident iste illum doloremque nam eum nulla alias sint eos obcaecati ducimus officia dolorem, doloribus ut, fugiat architecto fuga. Eligendi similique necessitatibus magnam et laboriosam.",
    img: "/images/default.png",
    bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  },
  {
    id: "anggota2",
    title: "Anggota 2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui doloremque ad aliquam, veniam cum sunt voluptas quaerat rem expedita quos inventore eius corporis, tempore asperiores magnam minima nobis dolorem corrupti vel consequatur quibusdam velit similique optio voluptatibus. Sequi eveniet exercitationem adipisci architecto et fuga ratione perferendis earum ut natus fugit eum cupiditate iusto aut tempora expedita itaque aliquid velit dolorum nulla ducimus aperiam qui, voluptas eos! Aliquid similique error voluptatibus, tempora repudiandae soluta modi totam provident iste illum doloremque nam eum nulla alias sint eos obcaecati ducimus officia dolorem, doloribus ut, fugiat architecto fuga. Eligendi similique necessitatibus magnam et laboriosam.",
    img: "/images/default.png",
    bg: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
  },
];

/* -------- Main Component -------- */
export default function SmoothSections() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [progress, setProgress] = useState(0);

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

      {sections.map((section, i) => {
        const start = i / sections.length;
        const end = (i + 1) / sections.length;

        const opacity = useTransform(
          scrollYProgress,
          [start, start + 0.15, end - 0.15, end],
          [0, 1, 1, 0]
        );

        return (
          <motion.div
            key={section.id}
            style={{ opacity }}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center px-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl">
              {section.id === "kelompok" ? (
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,1)]">
                    {section.title}
                  </h1>
                  <p className="text-lg md:text-xl leading-relaxed text-cyan-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    {section.desc}
                  </p>
                </div>
              ) : (
                <motion.div
                  className="flex-1 text-center md:text-left"
                  initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -40, filter: "blur(20px)" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <motion.h1
                    className="text-4xl md:text-5xl font-extrabold mb-4 text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,1)]"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  >
                    {section.title}
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl leading-relaxed text-cyan-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  >
                    {section.desc}
                  </motion.p>
                </motion.div>
              )}

              {/* Image */}
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
                  className="relative w-64 h-80 flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-cyan-400/30 animate-pulse blur-xl rounded-lg" />
                  <img
                    src={section.img}
                    alt={section.title}
                    className="relative w-full h-full object-cover rounded-lg border-2 border-cyan-400/70 shadow-[0_0_30px_rgba(0,255,255,0.8)]"
                  />
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(0,255,255,0.2),rgba(0,255,255,0.2)_2px,transparent_2px,transparent_4px)] animate-[slide_4s_linear_infinite]" />
                </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: progress < 0.9 ? 1 : 0, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 text-center text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)] z-40"
      >
        <p className="mb-2 text-sm md:text-base tracking-widest uppercase">
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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

      <EndSection progress={progress} />
    </div>
  );
}
