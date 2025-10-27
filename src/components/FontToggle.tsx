import { useState, useEffect } from "react";
import { FaFont } from "react-icons/fa"; // optional icon

export default function FontToggle() {
  const [isPixel, setIsPixel] = useState(true);

  // Load preference when page loads
  useEffect(() => {
    const savedFont = localStorage.getItem("fontStyle");
    if (savedFont === "poppins") {
      document.body.classList.remove("font-pixel");
      document.body.classList.add("font-poppins");
      setIsPixel(false);
    } else {
      document.body.classList.add("font-pixel");
    }
  }, []);

  const toggleFont = () => {
    if (isPixel) {
      document.body.classList.remove("font-pixel");
      document.body.classList.add("font-poppins");
      localStorage.setItem("fontStyle", "poppins");
    } else {
      document.body.classList.remove("font-poppins");
      document.body.classList.add("font-pixel");
      localStorage.setItem("fontStyle", "pixel");
    }
    setIsPixel(!isPixel);
  };

  return (
    <button
      onClick={toggleFont}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 transition font-poppins"
    >
      <FaFont />
      {isPixel ? "Pixel Mode" : "Modern Mode"}
    </button>
  );
}
