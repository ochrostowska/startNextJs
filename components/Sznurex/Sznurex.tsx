import Image from "next/image";
import styles from "./sznurex.module.scss";

export const Sznurex = () => {
  return (
    <div className={styles.sznurex}>
      <Image src={"/sznurex.svg"} alt="Sznurex" width={40} height={565} />
    </div>
  );
};
