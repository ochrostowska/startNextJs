import { ProductTypeBasic } from "@/data/types";
import styled from "styled-components";
import { ProductSectionBasic } from "./ProductSectionBasic";

type Props = { productTypes: ProductTypeBasic[] };
export const ProductsList = ({ productTypes }: Props) => {
  if (!productTypes?.length) return null;

  return (
    <ProductItems>
      {productTypes.map((section, index) => {
        const { label } = section;

        return <ProductSectionBasic key={label} {...section} />;
      })}
    </ProductItems>
  );
};

const ProductItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  row-gap: 3rem;

  & > * {
    flex: 1 1 calc(33.333% - 2rem);
    max-width: calc(33.333% - 2rem);
  }

  @media ${(props) => props.theme.media.tabPort} {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0rem;
    margin-top: 0rem;
    margin-bottom: 0rem;

    & > * {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;
