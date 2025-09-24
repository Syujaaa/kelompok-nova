import {
  motion,
} from "framer-motion";


export default function TechEffects() {
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