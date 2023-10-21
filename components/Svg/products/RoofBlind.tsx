import { SVGProps } from "react";
export const RoofBlind = (props: SVGProps<SVGSVGElement>) => {
  const { strokeWidth, width, height, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      fill="none"
      {...rest}
    >
      <path
        strokeLinejoin="round"
        strokeWidth={strokeWidth || 2}
        d="M11.674 17 11 8.5h78.5l-.83 8.5m-76.996 0H88.67m-76.997 0 3.924 49.5M88.67 17l-4.83 49.5m-68.243 0H83.84m-68.243 0 .396 5m67.847-5-2.341 24h-64l-1.506-19m65.506 0H15.994M3 1h94.5l-8 98H9L3 1Z"
      />
      <path
        strokeLinejoin="round"
        strokeWidth={strokeWidth || 2}
        d="M45.5 72c1.167 2.167 4.3 5.2 7.5 0"
      />
    </svg>
  );
};
