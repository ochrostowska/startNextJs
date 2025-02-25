import { Fragment } from "@/components/Fragment";
import { H1, H3 } from "@/components/Heading";
import { Sznurex } from "@/components/Sznurex";
import { NavBar } from "@/layout/navbar";
import {
  getProductPageContent,
  getProducts,
} from "@/services/contentful/contentfulApi";
import { Product, ProductPageContent } from "@/services/contentful/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import styles from "../../styles/Home.module.scss";

type Props = {
  product: Product;
  pageContent: ProductPageContent;
};

export default function ProductPage({ product, pageContent }: Props) {
  const router = useRouter();

  console.log("ProductPage query", router.query);
  console.log("ProductPage props", product);
  console.log("ProductPage pageContent", pageContent);

  const actualContent = pageContent.fields.content;

  console.log("ProductPage actualContent", actualContent);

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any) => {
        const h1Text = node.content[0].value;
        return <H1>{`${h1Text}`}</H1>;
      },
      [BLOCKS.HEADING_3]: (node: any) => {
        const h1Text = node.content[0].value;
        return <H3>{`${h1Text}`}</H3>;
      },
      [BLOCKS.HR]: (node: any) => {
        return <hr style={{ marginTop: 10, marginBottom: 10 }} />;
      },
    },
  };

  const result = documentToReactComponents(actualContent, options);

  console.log("ProductPage result", result);

  return (
    <>
      <NavBar />
      <main className={`${styles.main} `}>
        <Fragment>{result}</Fragment>
      </main>
      <Sznurex />
    </>
  );
}

interface ProductPathParams extends ParsedUrlQuery {
  productName: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();
  const paths = products.map((item) => ({
    params: { productName: item.nazwa },
  }));

  return { paths, fallback: false }; // fallback: false -> we generate only the returned products paths
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { productName } = context.params as ProductPathParams;
  console.log("OLALA getStaticProps", productName);

  const products = await getProducts();
  const product = products.find((item) => item.nazwa === productName);

  console.log("OLALA getStaticProps", productName, product);

  if (!product) {
    return { notFound: true };
  }

  const pageContent = await getProductPageContent(product.id);

  return {
    props: {
      product,
      pageContent,
    },
  };
};
