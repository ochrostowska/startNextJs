import { DrillIcon } from "./icons/DrillIcon";
import { FixinIcon } from "./icons/FixinIcon";
import { MeasureIcon } from "./icons/MeasureIcon";
import { SVG_CONFIG } from "./svg.config";

type IconSvgTypes =
  | "drill"
  | "drill-simple"
  | "eye"
  | "fixin"
  | "location"
  | "measure"
  | "measurements";

type Props = {
  type: IconSvgTypes;
  tint?: string;
  size?: number;
  strokeWidth?: number;
};
export const IconSvg = ({
  tint = SVG_CONFIG.color,
  size = SVG_CONFIG.products.size,
  type,
}: Props) => {
  switch (type) {
    case "fixin":
      return <FixinIcon fill={tint} width={size} height={size} />;
    case "drill":
      return <DrillIcon fill={tint} width={size} height={size} />;
    case "measure":
      return <MeasureIcon fill={tint} width={size} height={size} />;
  }
};
