import { Menu } from "@/components/menu";
import { MenuItem } from "@/components/menu/item";
import { useAppState } from "@/pages/app-state";
import React from "react";
import {
  MdSearch as SearchIcon,
  MdSettings as SettingsIcon,
  MdLightMode as LightModeIcon,
  MdDarkMode as DarkModeIcon,
  MdSync as SyncIcon,
} from "react-icons/md";

export interface CommandBarProps {}

export const CommandBar = ({}: CommandBarProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [currentTitle, setCurrentTitle] = React.useState("Loading...");

  const { title } = useAppState();

  React.useEffect(() => {
    setCurrentTitle(title);
  }, [title]);

  const menuItems = React.useMemo(() => {
    return [
      <MenuItem
        key="2"
        icon={<LightModeIcon />}
        text="Light Mode"
        onClick={() => {}}
        shortcut="Ctrl + T"
      />,
      <MenuItem
        key="3"
        icon={<SyncIcon />}
        text="Sync library"
        onClick={() => {}}
        shortcut="Ctrl + S"
      />,
      <MenuItem
        key="1"
        icon={<SettingsIcon />}
        text="Preferences"
        onClick={() => {}}
        shortcut="Ctrl + ,"
      />,
    ];
  }, []);

  return (
    <div className="flex bg-stone-900 rounded-md font-serif items-center w-96 relative h-7">
      <div
        className="w-8 h-7 flex justify-center items-center cursor-pointer absolute top-0 left-0"
        role="button"
        onClick={() => inputRef.current?.focus()}
      >
        <SearchIcon className="text-base text-stone-50" />
      </div>
      <input
        className="w-full h-full bg-transparent outline-none px-2 text-sm font-serif grow text-center placeholder:text-stone-300 text-stone-50 font-medium"
        placeholder={currentTitle}
        onFocus={() => setCurrentTitle("Search from your library")}
        onBlur={() => setCurrentTitle(title)}
      />
      <Menu menu={<>{menuItems}</>}>
        <div
          className="w-8 h-7 flex justify-center items-center cursor-pointer absolute top-0 right-0"
          role="button"
        >
          <SettingsIcon className="text-base text-stone-50" />
        </div>
      </Menu>
    </div>
  );
};
