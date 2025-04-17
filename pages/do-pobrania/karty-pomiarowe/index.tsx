// import { Buttonex } from "@/stories/Buttonex";
import { Sznurex } from "@/components/Sznurex";
import { Head } from "@/layout/Head";
import { NavBar } from "@/layout/navbar";
import MeasurementCardsFragment from "@/pages/_home/MeasurementCardsFragment";
import {
  getInstallationInstructions,
  getMeasurementCards,
} from "@/services/contentful/contentfulApi";
import {
  InstallationInstructions,
  MeasurementCard,
} from "@/services/contentful/types";
import { sortBy } from "lodash";
import styles from "../../../styles/Home.module.scss";

type Props = {
  installationInstructions: InstallationInstructions[];
  measurementCards: MeasurementCard[];
};

export default function KartyPomiarowePage(props: Props) {
  return (
    <>
      <Head title={"Karty pomiarowe"} />
      <NavBar />
      <main className={`${styles.main} `}>
        <MeasurementCardsFragment measurementCards={props.measurementCards} />
      </main>
      <Sznurex />
    </>
  );
}

export async function getStaticProps() {
  const installationInstructions = await getInstallationInstructions();
  const measurementCards = sortBy(await getMeasurementCards(), "nazwa");

  console.log("installationInstructions", installationInstructions);
  console.log("measurementCards ", measurementCards);

  const props: Props = {
    installationInstructions,
    measurementCards,
  };

  return {
    props,
    revalidate: 60 * 60 * 24,
  };
}
