import { ProductSection } from "./ProductSection";
import { ProductsListSection } from "./types";

type Props = { sections: ProductsListSection[] };
export const ProductsList = (props: Props) => {
  const { sections } = props;
  if (!sections?.length) return null;

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
