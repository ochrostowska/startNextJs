// import { Buttonex } from "@/stories/Buttonex";
import { Fragment } from "@/components/Fragment";
import { H1 } from "@/components/Heading";
import { Sznurex } from "@/components/Sznurex";
import { NavBar } from "@/layout/navbar";
import { getInstallationInstructions } from "@/services/contentful/contentfulApi";
import { InstallationInstructions } from "@/services/contentful/types";
import { translate } from "@/translations";
import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import InstallInstructionFragment from "../_home/InstallInstructionsFragment";
import MeasurementCardsFragment from "../_home/MeasurementCardsFragment";

type Props = {
  installationInstructions: InstallationInstructions[];
};

export default function Home(props: Props) {
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
          <H1>{translate("downloads.title")}</H1>
          <p>{translate("downloads.subtitle")}</p>
        </Fragment>
        <MeasurementCardsFragment />

        <InstallInstructionFragment
          instructions={props.installationInstructions}
        />
      </main>
      <Sznurex />
    </>
  );
}

export async function getStaticProps() {
  const installationInstructions = await getInstallationInstructions();

  return {
    props: {
      installationInstructions,
    },
    revalidate: 60 * 60 * 24,
  };
}
