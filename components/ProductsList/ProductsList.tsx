import { ProductTypeBasic } from "@/data/types";
import { ProductSectionBasic } from "./ProductSectionBasic";

type Props = { productTypes: ProductTypeBasic[] };
export const ProductsList = ({ productTypes }: Props) => {
  if (!productTypes?.length) return null;

  return (
    <>
      {productTypes.map((section, index) => {
        const { label } = section;

        return <ProductSectionBasic key={label} {...section} />;
      })}
    </>
  );
};
