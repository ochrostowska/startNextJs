import { ProductSection } from "./ProductSection";
import { ProductsListSection } from "./types";

type Props = { sections: ProductsListSection[] };
export const ProductsList = (props: Props) => {
  const { sections } = props;

  console.log("ProductsList", sections);
  if (!sections?.length) return null;

  console.log("ProductsList2", sections);

  return (
    <>
      {sections.map((section, index) => {
        const { title, titleHref, items } = section;

        return (
          <ProductSection
            title={title}
            titleHref={titleHref}
            key={titleHref}
            items={items}
          />
        );
      })}
    </>
  );
};
