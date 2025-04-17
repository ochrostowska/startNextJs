// import { Buttonex } from "@/stories/Buttonex";
import { Sznurex } from "@/components/Sznurex";
import { getProductsBasic } from "@/data/getProducts";
import { ProductTypeBasic } from "@/data/types";
import { useIsMobile } from "@/hooks/useResponsiveSizeBreakpoint";
import Footer from "@/layout/footer/Footer";
import { NavBar } from "@/layout/navbar/NavBar";
import { getCloudinaryImagesData } from "@/services/cloudinary/cloudinaryApi";
import { RealisationImage } from "@/services/cloudinary/types";
import {
  getInstallationInstructions,
  getManufacturers,
  getMeasurementCards,
  getProductCategories,
  getProductPageContent,
} from "@/services/contentful/contentfulApi";
import {
  InstallationInstructions,
  Manufacturer,
  MeasurementCard,
} from "@/services/contentful/types";
import Head from "next/head";
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
  products: ProductTypeBasic[];
  manufacturers: Manufacturer[];
  installationInstructions: InstallationInstructions[];
  measurementCards: MeasurementCard[];
  realisationImages: RealisationImage[];
  mapsApiKey: string;
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
        <ProductsFragment productTypes={props.products} />
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
        <GalleryFragment images={props.realisationImages} />
        <ContactFragment mapsApiKey={props.mapsApiKey} />
        <EndFragment />
        <Footer />
      </main>
      <Sznurex />
    </>
  );
}

export async function getStaticProps() {
  const manufacturers = await getManufacturers();
  const installationInstructions = await getInstallationInstructions();
  const measurementCards = await getMeasurementCards();
  // console.log("getStaticProps manufacturers", manufacturers);
  // console.log(
  //   "getStaticProps installationInstructions",
  //   installationInstructions
  // );

  const productCategories = await getProductCategories();
  console.log("getStaticProps productCategories", productCategories);
  // const products = await getProducts();
  // console.log("getStaticProps products", products);
  const productPage = await getProductPageContent("2zCOgLCGuQLIgXvC7Nqrce");

  const realisationImages = await getCloudinaryImagesData(3);
  //console.log("getStaticProps productPage", productPage);

  // const productsLL = productCategories
  //   .sort((a, b) => (a.priorytet || 0) - (b.priorytet || 0))
  //   .map((category) => {
  //     const matchedProducts: ProductsListItemBasic[] = products
  //       .filter((product) => product.rodzaj === category.id)
  //       .map((product) => ({
  //         label: product.defaultDisplayString,
  //       }));

  //     return {
  //       title: category.defaultDisplayString,
  //       items: matchedProducts,
  //     };
  //   })
  //   .filter((section) => section.items.length > 0);

  // console.log("productsLL", productsLL);

  const products = await getProductsBasic();

  return {
    props: {
      products,
      manufacturers,
      installationInstructions,
      measurementCards,
      realisationImages,
      mapsApiKey: process.env.GOOGLE_API_KEY,
    },
    revalidate: 60 * 60 * 24,
  };
}
