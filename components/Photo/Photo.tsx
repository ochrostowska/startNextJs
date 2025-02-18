import Image from "next/image";

type ImageDecorLocation =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

let borderShadowDecor: { [key: string]: string } = {
  "top-left": "-8px -8px 0px 0px",
  "top-right": "8px -8px 0px 0px",
  //"bottom-left": "8px -8px 0px 0px",
  "bottom-left": "-8px 8px 0px 0px",
  "bottom-right": "8px 8px 0px 0px",
};

type Props = {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  decorLocation?: ImageDecorLocation;
  decorTint?: string;
};

export const Photo = ({
  decorLocation = "bottom-right",
  decorTint,
  alt,
  ...rest
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        alt={alt}
        style={{
          width: "92%",
          maxWidth: 1024,
          boxShadow: `${borderShadowDecor[decorLocation]} ${decorTint}`,
        }}
        {...rest}
      />
    </div>
  );
};
