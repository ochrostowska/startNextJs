// import { Buttonex } from "@/stories/Buttonex";
import { ProductsListSection } from "@/components/ProductsList/types";
import { Sznurex } from "@/components/Sznurex";
import { NavBar } from "@/layout/navbar";
import { TranslationKeys, translate, useTranslate } from "@/translations";
import fs from "fs/promises";
import Head from "next/head";
import path from "path";
import styles from "../styles/Home.module.scss";
import { AnimalFriendlyFragment } from "./_home/AnimalFriendlyFragment";
import { Hero } from "./_home/Hero";
import { InstallInstructionFragment } from "./_home/InstallInstructionsFragment";
import { MeasurementCardsFragment } from "./_home/MeasurementCardsFragment";
import { ProductsFragment } from "./_home/ProductsFragment";
import { ServicesFragment } from "./_home/ServicesFragment";
import { WelcomeFragment } from "./_home/WelcomeFragment";

export default function Home(props) {
  console.log("OLCIA pro", props.products);
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
        <Hero />
        <AnimalFriendlyFragment />
        <WelcomeFragment />
        <ProductsFragment productSections={props.products} />
        <ServicesFragment />
        <MeasurementCardsFragment />
        <InstallInstructionFragment />
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

  return {
    props: {
      products: data,
    },
  };
}
