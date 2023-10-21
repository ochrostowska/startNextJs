import { RoofBlind } from "./products/RoofBlind";
import { SVG_CONFIG } from "./svg.config";

type ProductSvgTypes = "roof-blind" | "mosquito-net";
type Props = {
  type: ProductSvgTypes;
  tint?: string;
  size?: number;
  strokeWidth?: number;
};
export const ProductSvg = ({
  tint = SVG_CONFIG.color,
  size = SVG_CONFIG.products.size,
  strokeWidth = SVG_CONFIG.stroke,
  type,
}: Props) => {
  switch (type) {
    case "roof-blind":
      return <RoofBlind stroke={tint} width={size} height={size} />;
  }
};
