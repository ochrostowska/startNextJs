// import { Buttonex } from "@/stories/Buttonex";
import { ProductsListSection } from "@/components/ProductsList/types";
import { Sznurex } from "@/components/Sznurex";
import { useIsMobile } from "@/hooks/useResponsiveSizeBreakpoint";
import Footer from "@/layout/footer/Footer";
import { NavBar } from "@/layout/navbar";
import {
  getInstallationInstructions,
  getManufacturers,
  getMeasurementCards,
  getProductCategories,
  getProductPageContent,
  getProducts,
} from "@/services/contentful/contentfulApi";
import {
  InstallationInstructions,
  Manufacturer,
  MeasurementCard,
} from "@/services/contentful/types";
import { TranslationKeys, translate } from "@/translations";
import fs from "fs/promises";
import Head from "next/head";
import path from "path";
import styles from "../styles/Home.module.scss";
import AnimalFriendlyFragment from "./_home/AnimalFriendlyFragment";
import ContactFragment from "./_home/ContactFragment";
import EndFragment from "./_home/EndFragment";
import GalleryFragment from "./_home/GalleryFragment";
import Hero from "./_home/Hero";
import InstallInstructionFragment from "./_home/InstallInstructionsFragment";
import ManufacturersFragment from "./_home/ManufacturersFragment";
import MeasurementCardsFragment from "./_home/MeasurementCardsFragment";
import ProductsFragment from "./_home/ProductsFragment";
import ServicesFragment from "./_home/ServicesFragment";
import WelcomeFragment from "./_home/WelcomeFragment";

type Props = {
  products: ProductsListSection[];
  manufacturers: Manufacturer[];
  installationInstructions: InstallationInstructions[];
  measurementCards: MeasurementCard[];
};

export default function Home(props: Props) {
  const isMobile = useIsMobile();

  // const all = [useManufacturers();]
  // console.log("all", all);
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
        <Hero />
        <AnimalFriendlyFragment />
        <WelcomeFragment />
        <ProductsFragment productSections={props.products} />
        <ServicesFragment />
        <MeasurementCardsFragment
          measurementCards={props.measurementCards}
          numberOfCards={3}
          hidePhoto={isMobile}
          addShowMoreButton
        />
        <InstallInstructionFragment
          instructions={props.installationInstructions}
          hidePhoto={isMobile}
        />

        <ManufacturersFragment manufacturers={props.manufacturers} />
        <GalleryFragment />
        <ContactFragment />
        <EndFragment />
        <Footer />
      </main>
      <Sznurex />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString()) as ProductsListSection[];

  data.forEach((section) => {
    section.title = translate(section.title as TranslationKeys);
    section.items.forEach((item) => {
      item.label = translate(item.label as TranslationKeys);
    });
  });

  const manufacturers = await getManufacturers();
  const installationInstructions = await getInstallationInstructions();
  const measurementCards = await getMeasurementCards();
  console.log("getStaticProps manufacturers", manufacturers);
  console.log(
    "getStaticProps installationInstructions",
    installationInstructions
  );

  const productCategories = await getProductCategories();
  console.log("getStaticProps productCategories", productCategories);
  const products = await getProducts();
  console.log("getStaticProps products", products);
  const productPage = await getProductPageContent("2zCOgLCGuQLIgXvC7Nqrce");
  console.log("getStaticProps productPage", productPage);

  return {
    props: {
      products: data,
      manufacturers,
      installationInstructions,
      measurementCards,
    },
    revalidate: 60 * 60 * 24,
  };
}
