import { Sznurex } from "@/components/Sznurex";
import { Head } from "@/layout/Head";
import { NavBar } from "@/layout/navbar";
import { useTranslate } from "@/translations";
import styles from "../../styles/Home.module.scss";
import ContactFragment from "../_home/ContactFragment";

type Props = {
  mapsApiKey: string;
};

export default function KontaktPage(props: Props) {
  const { translate } = useTranslate();
  return (
    <>
      <Head title={translate("contact.title")} />
      <NavBar />
      <main className={`${styles.main} `}>
        <ContactFragment mapsApiKey={props.mapsApiKey} />
      </main>
      <Sznurex />
    </>
  );
}

export async function getStaticProps() {
  const props: Props = {
    mapsApiKey: process.env.GOOGLE_API_KEY,
  };

  return {
    props,
    revalidate: 60 * 60 * 24,
  };
}
