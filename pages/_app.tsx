import { TitleBar } from "@/components/titlebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bitter } from "next/font/google";
import { AppStateProvider } from "./app-state";

const alegreya = Bitter({
  variable: "--font-bitter",
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppStateProvider>
      <TitleBar />
      <section
        className={`${alegreya.variable} font-serif h-screen bg-stone-950 text-gray-100 w-screen rounded-[12px] pt-10`}
      >
        <Component {...pageProps} />
      </section>
    </AppStateProvider>
  );
}
