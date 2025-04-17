// import { Buttonex } from "@/stories/Buttonex";
import { Fragment } from "@/components/Fragment";
import { H1 } from "@/components/Heading";
import { Sznurex } from "@/components/Sznurex";
import { Head } from "@/layout/Head";
import { NavBar } from "@/layout/navbar";
import {
  getInstallationInstructions,
  getMeasurementCards,
} from "@/services/contentful/contentfulApi";
import {
  InstallationInstructions,
  MeasurementCard,
} from "@/services/contentful/types";
import { translate } from "@/translations";
import { sortBy } from "lodash";
import styles from "../../styles/Home.module.scss";
import InstallInstructionFragment from "../_home/InstallInstructionsFragment";
import MeasurementCardsFragment from "../_home/MeasurementCardsFragment";

type Props = {
  installationInstructions: InstallationInstructions[];
  measurementCards: MeasurementCard[];
};

export default function DoPobrania(props: Props) {
  return (
    <>
      <Head title="Do pobrania" />
      <NavBar />
      <main className={`${styles.main} `}>
        <Fragment>
          <H1>{translate("downloads.title")}</H1>
          <p>{translate("downloads.subtitle")}</p>
        </Fragment>
        <MeasurementCardsFragment measurementCards={props.measurementCards} />

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
