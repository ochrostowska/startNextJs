// import { Buttonex } from "@/stories/Buttonex";
import { Button } from "@/components/Button";
import { Fragment } from "@/components/Fragment";
import { H1, H4, H5 } from "@/components/Heading";
import { Photo } from "@/components/Photo";
import { Sznurex } from "@/components/Sznurex";
import { NavBar } from "@/layout/navbar";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import COLORS from "../styles/colorss.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Systemy rolet i bram</title>
        <meta name="description" content="Start systemy rolet i bram" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={`${styles.main} `}>
        <Fragment>
          <div className={styles.hero}>
            <div className={styles.hero__left}>
              <H1>
                Ubierz swoje okna i maluj przestrzeń <span>światłem</span>
              </H1>
              <H4>
                Salon przesłon okiennych, systemów rolet i bram dla Twojego domu
                i firmy
              </H4>

              <Button
                label="Odwiedź nas"
                icon="eye"
                href="#"
                className={styles.hero__button}
              />
            </div>
            <div className={styles.hero__right}>
              <Photo
                src={"/photos/cat_home.png"}
                alt="Cat home"
                height={1000}
                width={1000}
                className={styles.hero__right__image}
                decorTint={COLORS.colorPrimaryDark}
              />
            </div>
          </div>
        </Fragment>
        <Fragment
          borderLeftColor={COLORS.colorPrimary}
          dashBottomColor={COLORS.colorPrimary}
          dashTopColor={COLORS.colorPrimary}
        >
          <div className={styles.animalFriendly}>
            <div className={styles.animalFriendly__badge}>
              <Image
                src={"/photos/animalFriendlyBadge2.png"}
                alt="Animal friendly badge"
                height={150}
                width={150}
                className={styles.animalFriendly__pic__image}
              />
            </div>
            <div className={styles.animalFriendly__text}>
              <p>Odwiedź nas ze swoim czworonogiem</p>
              <H5>Firma przyjazna zwierzętom</H5>
            </div>
          </div>
        </Fragment>
      </main>
      <Sznurex />
    </>
  );
}
