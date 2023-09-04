// import { Buttonex } from "@/stories/Buttonex";
import { Button } from "@/components/Button";
import { Fragment } from "@/components/Fragment";
import { H1, H2, H4, H5 } from "@/components/Heading";
import { Photo } from "@/components/Photo";
import { Sznurex } from "@/components/Sznurex";
import { NavBar } from "@/layout/navbar";
import { useTranslate } from "@/translations";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import COLORS from "../styles/colorss.module.scss";

export default function Home() {
  const { translate } = useTranslate();

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
              <H4>{translate("heroSubtitle")}</H4>

              <Button
                label={translate("heroButton")}
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
                decorLocation="bottom-left"
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
                height={120}
                width={120}
                className={styles.animalFriendly__pic__image}
              />
            </div>
            <div className={styles.animalFriendly__text}>
              <p>{translate("animalFriendlyText1")}</p>
              <H5>{translate("animalFriendlyText2")}</H5>
            </div>
          </div>
        </Fragment>
        <Fragment
          borderLeftColor={COLORS.colorSecondaryLight}
          bigPadding={true}
        >
          <div className={styles.hello}>
            <div className={styles.hello__left}>
              <H2>{translate("helloTitle")}</H2>
              <p>{translate("helloText")}</p>
            </div>
            <div className={styles.hello__right}>
              <div className={styles.hello__right__image}>
                <Photo
                  src={"/photos/cat_welcome.png"}
                  alt="Cat hello"
                  height={900}
                  width={900}
                  decorTint={COLORS.colorSecondaryLight}
                  decorLocation="bottom-right"
                  className={styles.hello__right__img}
                />
              </div>
            </div>
          </div>
        </Fragment>
      </main>
      <Sznurex />
    </>
  );
}
