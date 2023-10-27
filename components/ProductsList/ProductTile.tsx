import Image from "next/image";
import styled from "styled-components";
import COLORS from "../../styles/colorss.module.scss";
import { ProductsListItem } from "./types";

type Props = ProductsListItem & {
  size: number;
  padding: number;
};

export const ProductTile = ({
  icon,
  label,
  href,
  alt,
  size = 100,
  padding,
}: Props) => {
  const iconWrapperWidth = size + padding * 2;
  return (
    <Wrapper>
      <a href={href} style={{ alignItems: "flex-end" }}>
        <IconWrapper style={{ maxWidth: iconWrapperWidth, padding }}>
          <Image src={icon} width={size} height={size} alt={alt} />
        </IconWrapper>
        <Label style={{ maxWidth: iconWrapperWidth }}>{label}</Label>
      </a>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  background-color: white;
  box-shadow: 8px 8px 0px 0px ${COLORS.colorPrimaryLight2};
  transition: all 0.2s;

  &:hover {
    box-shadow: 6px 6px 0px 0px ${COLORS.colorPrimaryDark};
    scale: 1.04;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 2rem;
  letter-spacing: 0.3rem;
  text-align: center;
`;
