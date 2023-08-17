import { FONTS } from "@/lib/fontLoader";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={FONTS.poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}
