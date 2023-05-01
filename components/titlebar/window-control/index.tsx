import React from "react";
import {
  MdFullscreen as MaximizeIcon,
  MdMinimize as MinimizeIcon,
  MdClose as CloseIcon,
} from "react-icons/md";
import { WindowControlButton } from "./button";
import { useAppState } from "@/pages/app-state";

export const WindowControls = () => {
  const { maximized, setMaximized } = useAppState();

  const onMaximize = React.useCallback(async () => {
    const { appWindow } = await import("@tauri-apps/api/window");
    if (maximized) {
      appWindow.unmaximize();
    } else {
      appWindow.maximize();
    }
    setMaximized(!maximized);
  }, [maximized, setMaximized]);

  const onMinimize = React.useCallback(async () => {
    const { appWindow } = await import("@tauri-apps/api/window");

    appWindow.minimize();
  }, []);

  const onClose = React.useCallback(async () => {
    const { appWindow } = await import("@tauri-apps/api/window");

    appWindow.close();
  }, []);

  return (
    <div className="flex items-center justify-around w-32 h-full">
      <WindowControlButton icon={<MinimizeIcon />} onClick={onMinimize} />
      <WindowControlButton icon={<MaximizeIcon />} onClick={onMaximize} />
      <WindowControlButton
        icon={<CloseIcon className="text-red-600 text-lg" />}
        onClick={onClose}
      />
    </div>
  );
};
