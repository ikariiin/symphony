import React from "react";
import { Popover } from "react-tiny-popover";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  variable: "--font-bitter",
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export interface MenuProps {
  children: JSX.Element;
  menu: JSX.Element;
}

export const Menu = ({ children, menu }: MenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const content = React.useMemo(() => {
    return (
      <section
        className={`bg-blush-dark text-stone-50 w-52 max-h-48 rounded-md shadow-lg font-serif ${bitter.variable}`}
      >
        {menu}
      </section>
    );
  }, [menu]);

  return (
    <Popover
      content={content}
      isOpen={isOpen}
      onClickOutside={() => setIsOpen(false)}
      positions={["bottom"]}
      align="center"
    >
      {React.cloneElement(children, {
        onClick: () => setIsOpen(!isOpen),
      })}
    </Popover>
  );
};
