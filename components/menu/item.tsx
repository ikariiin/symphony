import React from "react";

export interface MenuItemProps {
  icon: React.ReactElement;
  onClick: () => unknown;
  text: string;
  shortcut?: string;
}

export const MenuItem = ({ icon, onClick, text, shortcut }: MenuItemProps) => {
  return (
    <div
      role="button"
      className="flex items-center justify-between w-full h-10 px-2 bg-blush-dark hover:bg-blush transition-colors duration-200 border-b-1 border-gray-800 first-of-type:rounded-t-md last-of-type:rounded-b-md"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="w-8 h-8 flex justify-center items-center">
          {React.cloneElement(icon, {
            className: ["text-gray-50", icon?.props?.className ?? ""].join(" "),
          })}
        </div>
        <div className="ml-2 text-gray-50">
          <div className="text-sm font-medium">{text}</div>
          <div className="text-xs text-gray-300">{shortcut}</div>
        </div>
      </div>
    </div>
  );
};
