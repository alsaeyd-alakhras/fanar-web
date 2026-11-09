// interface GatewayProps {
//   className?: string;
// }

// export default function GatewayArch({ className = '' }: GatewayProps) {
//   return (
//     <svg
//       viewBox="0 0 600 700"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       preserveAspectRatio="xMidYMid meet"
//     >
//       {/* Outer arch structure */}
//       <path
//         d="M60 680V220L300 60L540 220V680H420V320H180V680H60Z"
//         fill="none"
//         stroke="rgba(243,243,241,0.15)"
//         strokeWidth="1"
//         strokeLinejoin="round"
//       />
//       {/* Inner arch */}
//       <path
//         d="M120 680V250L300 120L480 250V680H390V340H210V680H120Z"
//         fill="none"
//         stroke="rgba(243,243,241,0.25)"
//         strokeWidth="1.5"
//         strokeLinejoin="round"
//       />
//       {/* Deep inner arch opening */}
//       <path
//         d="M180 680V290L300 190L420 290V680H360V370H240V680H180Z"
//         fill="rgba(29,44,79,0.6)"
//         stroke="rgba(132,164,177,0.3)"
//         strokeWidth="1"
//         strokeLinejoin="round"
//       />
//       {/* Light glow from threshold */}
//       <ellipse cx="300" cy="450" rx="60" ry="180" fill="url(#thresholdGlow)" opacity="0.4" />
//       {/* Perspective floor lines */}
//       <line x1="60" y1="680" x2="300" y2="680" stroke="rgba(132,164,177,0.2)" strokeWidth="0.5" />
//       <line x1="540" y1="680" x2="300" y2="680" stroke="rgba(132,164,177,0.2)" strokeWidth="0.5" />
//       <line x1="100" y1="690" x2="300" y2="680" stroke="rgba(132,164,177,0.08)" strokeWidth="0.5" />
//       <line x1="500" y1="690" x2="300" y2="680" stroke="rgba(132,164,177,0.08)" strokeWidth="0.5" />
//       <line x1="140" y1="700" x2="300" y2="680" stroke="rgba(132,164,177,0.04)" strokeWidth="0.5" />
//       <line x1="460" y1="700" x2="300" y2="680" stroke="rgba(132,164,177,0.04)" strokeWidth="0.5" />

//       {/* Grid pattern in arch walls */}
//       <g opacity="0.08">
//         <line x1="120" y1="250" x2="180" y2="290" stroke="rgba(132,164,177,1)" strokeWidth="0.5" />
//         <line x1="180" y1="250" x2="240" y2="290" stroke="rgba(132,164,177,1)" strokeWidth="0.5" />
//         <line x1="240" y1="250" x2="300" y2="290" stroke="rgba(132,164,177,1)" strokeWidth="0.5" />
//         <line x1="300" y1="250" x2="360" y2="290" stroke="rgba(132,164,177,1)" strokeWidth="0.5" />
//         <line x1="360" y1="250" x2="420" y2="290" stroke="rgba(132,164,177,1)" strokeWidth="0.5" />
//         <line x1="420" y1="250" x2="480" y2="290" stroke="rgba(132,164,177,1)" strokeWidth="0.5" />
//       </g>

//       <defs>
//         <linearGradient id="thresholdGlow" x1="300" y1="300" x2="300" y2="680" gradientUnits="userSpaceOnUse">
//           <stop stopColor="#84A4B1" stopOpacity="0.6" />
//           <stop offset="0.5" stopColor="#84A4B1" stopOpacity="0.2" />
//           <stop offset="1" stopColor="#F3F3F1" stopOpacity="0.1" />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// }
