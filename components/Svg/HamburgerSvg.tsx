import { useIsMobile } from "@/hooks/useResponsiveSizeBreakpoint";
import COLORS from "../../styles/colorss.module.scss";

const WIDTH = 52;
const HEIGHT = 24;

export const HamburgerSvg = () => {
  const isMobile = useIsMobile();
  const scale = isMobile ? 0.8 : 1;
  const width = WIDTH * scale;
  const height = HEIGHT * scale;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="3"
          rx="2"
          transform="translate(304 47)"
          fill={COLORS.colorAlmostBlack}
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="3"
          rx="2"
          transform="translate(304 67)"
          fill={COLORS.colorAlmostBlack}
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="3"
          rx="2"
          transform="translate(294 57)"
          fill={COLORS.colorAlmostBlack}
        />
      </g>
    </svg>
  );
};
