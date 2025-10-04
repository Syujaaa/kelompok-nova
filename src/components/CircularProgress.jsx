import { motion, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CircularProgress({ scrollYProgress }) {
  const size = 70;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  );

  const percentMv = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const smoothPercent = useSpring(percentMv, { stiffness: 140, damping: 24 });

  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const unsubscribe = smoothPercent.on("change", (v) => {
      setPercent(Math.round(v));
    });
    return unsubscribe;
  }, [smoothPercent]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <svg
        width={size}
        height={size}
        className="drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]"
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(0,255,255,0.12)"
          strokeWidth={strokeWidth}
          fill="none"
        />

        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="cyan"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="glow-cyan"
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          fill="cyan"
          style={{ userSelect: "none" }}
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
}
