import React from "react";

export interface IAppState {
  title: string;
  maximized: boolean;

  setTitle: (title: string) => void;
  setMaximized: (maximized: boolean) => void;
}

const AppStateContext = React.createContext<IAppState>({
  title: "Symphony Reader",
  maximized: false,
  setTitle: () => {},
  setMaximized: () => {},
});

export function AppStateProvider({ children }: React.PropsWithChildren<{}>) {
  const [title, setTitle] = React.useState("Symphony Reader");
  const [maximized, setMaximized] = React.useState(false);

  React.useEffect(() => {
    // Load the store from local storage
    const store = localStorage.getItem("app-state");

    if (store) {
      const { title, maximized } = JSON.parse(store);

      setTitle(title);
      setMaximized(maximized);
    }
  }, []);

  function setterInterceptor<T>(
    setter: React.Dispatch<React.SetStateAction<T>>,
  ): React.Dispatch<React.SetStateAction<T>> {
    return (value) => {
      setter(value);

      // Save the store to local storage
      localStorage.setItem(
        "app-state",
        JSON.stringify({
          title,
          maximized,
        }),
      );
    };
  }

  return (
    <AppStateContext.Provider
      value={{
        title,
        maximized,
        setTitle: setterInterceptor(setTitle),
        setMaximized: setterInterceptor(setMaximized),
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return React.useContext(AppStateContext);
}
