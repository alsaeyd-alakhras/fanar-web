// interface HumanFigureProps {
//   className?: string;
// }

// export default function HumanFigure({ className = '' }: HumanFigureProps) {
//   return (
//     <svg
//       viewBox="0 0 120 300"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       preserveAspectRatio="xMidYMax meet"
//       aria-hidden="true"
//     >
//       <defs>
//         <linearGradient id="figure-thobe" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#F3F3F1" />
//           <stop offset="50%" stopColor="#DCE2E1" />
//           <stop offset="100%" stopColor="#9FB3BA" />
//         </linearGradient>

//         <linearGradient id="figure-shadow" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor="#31465F" />
//           <stop offset="100%" stopColor="#17253C" />
//         </linearGradient>

//         <filter id="figure-glow" x="-100%" y="-100%" width="300%" height="300%">
//           <feGaussianBlur stdDeviation="9" />
//         </filter>
//       </defs>

//       {/* floor shadow */}
//       <ellipse
//         cx="60"
//         cy="289"
//         rx="32"
//         ry="7"
//         fill="#102039"
//         opacity="0.45"
//       />

//       {/* rim light */}
//       <ellipse
//         cx="60"
//         cy="180"
//         rx="38"
//         ry="105"
//         fill="#F3F3F1"
//         opacity="0.1"
//         filter="url(#figure-glow)"
//       />

//       {/* head */}
//       <ellipse
//         cx="60"
//         cy="51"
//         rx="14"
//         ry="16"
//         fill="#26384F"
//       />

//       {/* headwear / rear silhouette */}
//       <path
//         d="
//           M43 48
//           C46 35 52 29 60 29
//           C68 29 75 35 78 48
//           C72 44 66 42 60 42
//           C54 42 49 44 43 48
//           Z
//         "
//         fill="#F3F3F1"
//         opacity="0.92"
//       />

//       <path
//         d="
//           M45 45
//           C51 39 69 39 76 45
//         "
//         fill="none"
//         stroke="#24364F"
//         strokeWidth="4"
//         strokeLinecap="round"
//       />

//       {/* body / thobe */}
//       <path
//         d="
//           M47 70
//           C51 66 55 64 60 64
//           C65 64 70 66 74 70
//           L80 143
//           L86 262
//           C77 270 69 273 60 273
//           C51 273 43 270 34 262
//           L40 143
//           Z
//         "
//         fill="url(#figure-thobe)"
//       />

//       {/* body rear shadow */}
//       <path
//         d="
//           M60 65
//           C66 66 71 68 74 71
//           L80 143
//           L86 262
//           C77 270 69 273 60 273
//           Z
//         "
//         fill="url(#figure-shadow)"
//         opacity="0.24"
//       />

//       {/* left arm */}
//       <path
//         d="
//           M42 80
//           C35 94 30 117 27 145
//           C26 154 28 163 32 170
//           L39 165
//           C36 155 36 148 38 139
//           L49 91
//           Z
//         "
//         fill="#D7DEDE"
//       />

//       {/* right arm */}
//       <path
//         d="
//           M76 80
//           C84 95 89 118 92 144
//           C93 154 91 162 87 170
//           L80 165
//           C83 155 83 148 81 139
//           L70 91
//           Z
//         "
//         fill="#A8BBC0"
//       />

//       {/* legs / walking separation */}
//       <path
//         d="M47 257 L56 257 L53 287 L43 287 Z"
//         fill="#B9C7C9"
//       />

//       <path
//         d="M64 257 L74 257 L79 287 L68 287 Z"
//         fill="#899FA7"
//       />

//       {/* shoes */}
//       <ellipse cx="48" cy="287" rx="9" ry="3" fill="#182940" />
//       <ellipse cx="74" cy="287" rx="9" ry="3" fill="#182940" />
//     </svg>
//   );
// }