import { ProductBasic } from "@/data/types";
import styled from "styled-components";

type Props = ProductBasic;

export const ProductTileBasic = ({ label }: Props) => {
  return <Label>{label}</Label>;
};

const Label = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 1rem;
  letter-spacing: 0.1rem;
`;
