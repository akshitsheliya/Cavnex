import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomDropdown = ({ options, value, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const selected = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Selected Box */}
      <motion.div
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 sm:py-5 bg-[#000000B8] text-gray-300 text-xs sm:text-sm cursor-pointer flex items-center justify-between rounded-lg"
        whileTap={{ scale: 0.98 }}
      >
        <span className={value ? "text-white" : "text-gray-400"}>
          {selected ? selected.label : placeholder}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </motion.div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 mt-2  bg-[#0d0d0d]  border-white/10 backdrop-blur-xl z-50 overflow-hidden"
          >
            {options.map((item) => (
              <div
                key={item.value}
                onClick={() => {
                  onChange(item.value);
                  setOpen(false);
                }}
                className="px-4 py-3 text-sm text-gray-300 cursor-pointer hover:bg-white/5"
              >
                {item.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdown;
