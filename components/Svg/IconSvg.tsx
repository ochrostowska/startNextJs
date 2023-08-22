import { DrillIcon } from "./icons/DrillIcon";
import { EyeIcon } from "./icons/EyeIcon";
import { FixinIcon } from "./icons/FixinIcon";
import { MeasureIcon } from "./icons/MeasureIcon";
import { SVG_CONFIG } from "./svg.config";

export type IconSvgTypes =
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
  className?: string;
};
export const IconSvg = ({
  tint = SVG_CONFIG.color,
  size = SVG_CONFIG.products.size,
  className,
  type,
}: Props) => {
  const props = {
    fill: tint,
    width: size,
    height: size,
    className,
  };

  switch (type) {
    case "eye":
      return <EyeIcon {...props} />;
    case "fixin":
      return <FixinIcon {...props} />;
    case "drill":
      return <DrillIcon {...props} />;
    case "measure":
      return <MeasureIcon {...props} />;
    default:
      return null;
  }
};
