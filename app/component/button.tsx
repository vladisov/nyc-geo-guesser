import React from "react";

interface ButtonProps {
  children: any;
  colorClass: string;
  onClick: () => any;
}

const Button: React.FC<ButtonProps> = ({ onClick, colorClass, children }) => {
  return (
    <div className="group relative inline-block focus:outline-none focus:ring">
      <span
        className={`absolute inset-0 translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-y-0 group-hover:translate-x-0 ${colorClass}`}
      ></span>
      <button
        onClick={onClick}
        className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
