import { SVG_CONFIG } from "@/svg/svg.config";
import Image from "next/image";

type IconSvgTypes =
  | "drill"
  | "drill-simple"
  | "eye"
  | "fix"
  | "location"
  | "measure"
  | "measurements";

type Props = {
  type: IconSvgTypes;
  tint?: string;
  size?: number;
  strokeWidth?: number;
};
export const SvgIcon = ({
  tint = SVG_CONFIG.color,
  size = SVG_CONFIG.products.size,
  type,
}: Props) => {
  return (
    <Image
      src={`../../icons/${type}-icon.svg`}
      alt={`${type} icon`}
      width={size}
      height={size}
      priority
    />
  );
};
