import { useState, useEffect } from "react";
import DateIconLight from "../assets/icons/Date";

const FloatingSelectDateButton = ({ onClick }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showButton) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        fixed
        bottom-6
        rounded-3xl
        border-2
        left-1/2
        z-100
        -translate-x-1/2
        border-[#9EFF00]
        bg-[#030D31]
        px-6
        py-3
        text-sm
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
      "
    >
      <div className="flex items-center justify-center gap-2">
        <span>
          <DateIconLight />
        </span>
        <span className="text-sm"> Select rental dates to view prices</span>
      </div>
    </button>
  );
};

export default FloatingSelectDateButton;
