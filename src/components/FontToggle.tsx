// "use client";

// import { useState, useEffect } from "react";
// import { FaFont } from "react-icons/fa";

// export default function FontToggle() {
//   const [isPixel, setIsPixel] = useState(true);

//   // Load preference on mount
//   useEffect(() => {
//     const savedFont = localStorage.getItem("fontStyle");
//     if (savedFont === "poppins") {
//       document.body.classList.remove("font-pixel");
//       document.body.classList.add("font-poppins");
//       setIsPixel(false);
//     } else {
//       document.body.classList.add("font-pixel");
//     }
//   }, []);

//   const toggleFont = () => {
//     if (isPixel) {
//       document.body.classList.remove("font-pixel");
//       document.body.classList.add("font-poppins");
//       localStorage.setItem("fontStyle", "poppins");
//     } else {
//       document.body.classList.remove("font-poppins");
//       document.body.classList.add("font-pixel");
//       localStorage.setItem("fontStyle", "pixel");
//     }
//     setIsPixel(!isPixel);
//   };

//   return (
//     <button
//       onClick={toggleFont}
//       className="
//         fixed top-4 right-4 z-50 flex items-center gap-2
//         bg-gradient-to-r from-orange-500 to-amber-500 
//         text-white text-xs sm:text-sm font-bold
//         px-3 sm:px-4 py-2 rounded-full shadow-md
//         hover:scale-105 hover:shadow-lg hover:from-orange-600 hover:to-amber-600
//         active:scale-95 transition-all duration-300
//         backdrop-blur-sm border border-white/20
//       "
//     >
//       <FaFont className="w-3 h-3 sm:w-4 sm:h-4" />
//       <span className="hidden sm:inline">
//         {isPixel ? "Pixel Mode" : "Modern Mode"}
//       </span>
//     </button>
//   );
// }
