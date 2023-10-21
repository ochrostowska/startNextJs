import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import { useTranslate } from "@/translations";
import styled from "styled-components";
import { SectionLink } from "../SectionLink";
import { ProductTile } from "./ProductTile";
import { ProductsListSection } from "./types";

export const ProductSection = ({
  title,
  titleHref,
  items,
}: ProductsListSection) => {
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

  const { translate } = useTranslate();

  return (
    <div>
      <SectionLink href={titleHref} label={title} />
      <Section minsize={minSize}>
        {items.map((item) => {
          const { label, ...rest } = item;
          return (
            <ProductTile
              {...rest}
              label={label}
              key={label}
              size={iconSize}
              padding={padding}
            />
          );
        })}
      </Section>
    </div>
  );
};

const Section = styled.div<{ minsize: number }>(({ minsize }) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(${minsize}px, 1fr))`,
  justifyContent: "flex-start",
  flexWrap: "wrap",
  gap: "7rem",
  alignItems: "center",
}));
