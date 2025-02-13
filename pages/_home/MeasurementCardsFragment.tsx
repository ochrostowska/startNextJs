import { ArrowLink } from "@/components/ArrowLink";
import { Fragment } from "@/components/Fragment";
import { H2 } from "@/components/Heading";
import { Photo } from "@/components/Photo";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import Image from "next/image";
import styled from "styled-components";

const MeasurementCardsFragment = () => {
  const { translate } = useTranslate();

  const iconHeight = useResponsiveValue(60, {
    tabLand: 80,
    desktop: 100,
    bigDesktop: 120,
  });

  return (
    <Fragment borderLeftColor={COLORS.secondaryLight} bigPadding>
      <Wrapper>
        <WrapperLeft>
          <H2>{translate("measurementCards.title")}</H2>
          <p>{translate("measurementCards.subtitle")}</p>
          <ArrowLink label={translate("measurementCards.main")} href="/" />
          <ArrowLink
            label={translate("measurementCards.materialRollerBlinds")}
            href="/"
          />
          <ArrowLink
            label={translate("measurementCards.romanianBlinds")}
            href="/"
          />
          <ArrowLink
            label={translate("measurementCards.pleatedBlinds")}
            href="/"
          />
        </WrapperLeft>
        <WrapperRight>
          <WrapperPhoto>
            <StyledPhoto
              src={"/photos/cat_measure.png"}
              alt={translate("measurementCards.title")}
              height={900}
              width={900}
              decorTint={COLORS.secondaryLight}
              decorLocation="top-right"
            />
          </WrapperPhoto>

          <IconWrapper style={{ position: "absolute", bottom: -20, left: "0" }}>
            <Image
              src={"/products/miarka.svg"}
              alt={translate("measurementCards.title")}
              height={iconHeight}
              width={iconHeight * 1.5}
            />
          </IconWrapper>
        </WrapperRight>
      </Wrapper>
    </Fragment>
  );
};

const IconWrapper = styled.div`
  background-color: white;
  box-shadow: 8px 8px 0px 0px ${COLORS.primary};
  transition: all 0.2s;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const WrapperLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 7em;
  gap: 2rem;
`;

const WrapperRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const WrapperPhoto = styled.div`
  width: 90%;
  height: 90%;
  justify-content: flex-end;
`;

const StyledPhoto = styled(Photo)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default MeasurementCardsFragment;
