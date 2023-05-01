import React from "react";

export interface WindowControlButtonProps {
  icon: React.ReactNode;
  onClick: () => unknown;
}

export const WindowControlButton = ({
  icon,
  onClick,
}: WindowControlButtonProps) => {
  return (
    <button
      className="w-8 h-8 flex justify-center items-center rounded-full bg-transparent hover:bg-slate-600 text-slate-50 transition-colors duration-200"
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
