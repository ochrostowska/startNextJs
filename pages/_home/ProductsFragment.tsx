import { Fragment } from "@/components/Fragment";
import { H2 } from "@/components/Heading";
import { ProductsList } from "@/components/ProductsList/ProductsList";
import { ProductTypeBasic } from "@/data/types";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";

type Props = {
  productTypes: ProductTypeBasic[];
};

export const PRODUCTS_FRAGMENT_ID = "products-section";

const ProductsFragment = ({ productTypes }: Props) => {
  const { translate } = useTranslate();

  const badgeSize = useResponsiveValue(100, {
    tabLand: 120,
    desktop: 150,
    bigDesktop: 200,
  });

  return (
    <Fragment
      id={PRODUCTS_FRAGMENT_ID}
      backgroundColor={COLORS.primaryLight}
      bigPadding
    >
      <H2>{translate("ourOffer")}</H2>
      <ProductsList productTypes={productTypes} />
    </Fragment>
  );
};

export default ProductsFragment;
