import { ProductTypeBasic } from "@/data/types";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import styled from "styled-components";
import { H3 } from "../Heading";
import { ProductTileBasic } from "./ProductTileBasic";

export const ProductSectionBasic = ({ label, items }: ProductTypeBasic) => {
  const iconSize = useResponsiveValue(100, {
    tabLand: 120,
    desktop: 150,
    bigDesktop: 200,
  });
  const padding = useResponsiveValue(10, {
    tabLand: 15,
    desktop: 20,
    bigDesktop: 20,
  });

  const paddingSize = 10;
  const minSize = iconSize + paddingSize * 2;

  return (
    <Section>
      <H3>{label}</H3>

      {items.map((item) => {
        return <ProductTileBasic {...item} key={item.id} />;
      })}
    </Section>
  );
};

const Section = styled.div({
  marginTop: "4rem",
});
