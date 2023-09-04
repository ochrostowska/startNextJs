import { FONTS } from "@/lib/fontLoader";
import type { AppProps } from "next/app";
import styles from "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  console.log("OLCIA", styles);

  return (
    <div className={FONTS.poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}
