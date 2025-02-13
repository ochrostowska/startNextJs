import { Fragment } from "@/components/Fragment";
import { H2 } from "@/components/Heading";
import { ProductsList } from "@/components/ProductsList/ProductsList";
import { ProductsListSection } from "@/components/ProductsList/types";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";

type Props = {
  productSections: ProductsListSection[];
};

const ProductsFragment = ({ productSections }: Props) => {
  const { translate } = useTranslate();

  const badgeSize = useResponsiveValue(100, {
    tabLand: 120,
    desktop: 150,
    bigDesktop: 200,
  });

  return (
    <Fragment bigPadding={true} backgroundColor={COLORS.primaryLight}>
      <H2>{translate("ourOffer")}</H2>

      <ProductsList sections={productSections} />
    </Fragment>
  );
};

export default ProductsFragment;
