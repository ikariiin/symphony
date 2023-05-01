import { TitleBar } from "@/components/titlebar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="rounded-lg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
