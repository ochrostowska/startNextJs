import NextJsHead from "next/head";

type Props = {
  title?: string;
};

export const Head = (props: Props) => {
  const title = props.title || "Systemy rolet i bram";
  return (
    <NextJsHead>
      <title>{title}</title>
      <meta name="description" content="Start systemy rolet i bram" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextJsHead>
  );
};
