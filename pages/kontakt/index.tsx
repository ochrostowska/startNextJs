import { Sznurex } from "@/components/Sznurex";
import Footer from "@/layout/footer/Footer";
import { Head } from "@/layout/Head";
import { NavBar } from "@/layout/navbar";
import { useTranslate } from "@/translations";
import styled from "styled-components";
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
      <MainContent>
        <ContactFragment mapsApiKey={props.mapsApiKey} />
      </MainContent>
      <Footer />
      <Sznurex />
    </>
  );
}

const MainContent = styled.main`
  flex: 1;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
`;

export async function getStaticProps() {
  const props: Props = {
    mapsApiKey: process.env.GOOGLE_API_KEY,
  };

  return {
    props,
    revalidate: 60 * 60 * 24,
  };
}
