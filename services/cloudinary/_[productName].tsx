// import { Fragment } from "@/components/Fragment";
// import { GalleryItem } from "@/components/Gallery";
// import { NavBar } from "@/layout/navbar/NavBar";
// import { getProducts } from "@/services/contentful/contentfulApi";
// import { Product } from "@/services/contentful/types";
// import { GetStaticProps } from "next";
// import { useRouter } from "next/router";
// import { ParsedUrlQuery } from "querystring";
// import styled from "styled-components";
// import styles from "../../styles/Home.module.scss";

// type Props = {
//   product: Product;
//   // pageContent: ProductPageContent;
// };

// export default function ProductPage({ product }: Props) {
//   const router = useRouter();

//   // console.log("ProductPage query", router.query);
//   // console.log("ProductPage props", product);
//   // console.log("ProductPage pageContent", pageContent);

//   // const actualContent = pageContent.fields.content;

//   // console.log("ProductPage actualContent", actualContent);

//   // const options = {
//   //   renderNode: {
//   //     [BLOCKS.HEADING_1]: (node: any) => {
//   //       const h1Text = node.content[0].value;
//   //       return <H1>{`${h1Text}`}</H1>;
//   //     },
//   //     [BLOCKS.HEADING_3]: (node: any) => {
//   //       const h1Text = node.content[0].value;
//   //       return <H3>{`${h1Text}`}</H3>;
//   //     },
//   //     [BLOCKS.HR]: (node: any) => {
//   //       return <hr style={{ marginTop: 10, marginBottom: 10 }} />;
//   //     },
//   //     [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
//   //       const file = node.data?.target?.fields?.file || {};
//   //       const details = file?.details?.image || {};
//   //       const { width = 0, height = 0 } = details;
//   //       let { url, fileName } = file;
//   //       console.log("ProductPage EMBEDDED_ASSET", file);
//   //       console.log("ProductPage EMBEDDED_ASSET details", details);
//   //       console.log("ProductPage EMBEDDED_ASSET width", width, url, fileName);

//   //       if (!url || !fileName) {
//   //         return null;
//   //       }

//   //       if (url?.startsWith("//")) {
//   //         url = `https:${url}`;
//   //       }

//   //       return (
//   //         <GalleryItem
//   //           src={url}
//   //           alt={fileName}
//   //           size={height}
//   //           style={{
//   //             maxWidth: "46%",
//   //             height: "auto",
//   //             objectFit: "contain",
//   //             marginTop: "2rem",
//   //             marginBottom: "2rem",
//   //             marginRight: "2rem",
//   //           }}
//   //         />
//   //       );
//   //     },
//   //   },
//   // };

//   // const result = documentToReactComponents(actualContent, options);

//   // console.log("ProductPage result", result);

//   return (
//     <>
//       <NavBar />
//       <main className={`${styles.main} `}>
//         <Fragment></Fragment>
//       </main>
//     </>
//   );
// }

// interface ProductPathParams extends ParsedUrlQuery {
//   productName: string;
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { productName } = context.params as ProductPathParams;
//   console.log("OLALA getStaticProps", productName);

//   const products = await getProducts();
//   const product = products.find((item) => item.nazwa === productName);

//   console.log("OLALA getStaticProps", productName, product);

//   if (!product) {
//     return { notFound: true };
//   }

//   // const pageContent = await getProductPageContent(product.id);

//   return {
//     props: {
//       product,
//       // pageContent,
//     },
//   };
// };

// const ImageForProduct = styled(GalleryItem)``;
