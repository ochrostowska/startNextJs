"use client";

import { Fragment } from "@/components/Fragment";
import { H2 } from "@/components/Heading";
import { Spinner } from "@/components/Spinner";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import { Manufacturer } from "@/services/contentful/types";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import Image from "next/image";
import styled from "styled-components";

type Props = {
  manufacturers: Manufacturer[];
};

const ManufacturersFragment = ({ manufacturers }: Props) => {
  const { translate } = useTranslate();

  const logoWidth = useResponsiveValue(150, {
    tabLand: 250,
    desktop: 200,
    bigDesktop: 250,
  });

  return (
    <Fragment borderLeftColor={COLORS.primary}>
      <Wrapper>
        <Title>{translate("manufacturers.title")}</Title>
        <Subtitle>{translate("manufacturers.subtitle")}</Subtitle>
        {manufacturers.length ? (
          <LogosSection minsize={logoWidth}>
            {manufacturers.map(({ nazwa, logoUrl, url }) => (
              <LogoAnchor key={nazwa} href={url} target="_blank">
                <Image
                  alt={nazwa}
                  src={logoUrl}
                  width={logoWidth}
                  height={logoWidth * 0.5}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </LogoAnchor>
            ))}
          </LogosSection>
        ) : (
          <Loading />
        )}
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-left: 0rem;
  margin-right: 0rem;

  @media ${(props) => props.theme.media.desktop} {
    margin-left: 4rem;
    margin-right: 4rem;
  }
`;

const Title = styled(H2)`
  text-align: center;
`;

const Subtitle = styled.p`
  text-align: center;
`;

const LogosSection = styled.div<{ minsize: number }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  column-gap: 5%;
  & > * {
    // Apply minWidth to the children (items)
    min-width: ${(props) => props.minsize}px;
    max-width: 100%; // Ensures that items don't grow beyond container width
  }
`;

const LogoAnchor = styled.a`
  :hover {
    transition: all 0.3s;

    cursor: pointer;
    scale: 1.04;
  }
`;

const Loading = styled(Spinner)`
  margin: 2rem;
`;

export default ManufacturersFragment;
