import { ArrowLink } from "@/components/ArrowLink";
import { Button } from "@/components/Button";
import { Fragment } from "@/components/Fragment";
import { H2 } from "@/components/Heading";
import { Photo } from "@/components/Photo";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import { MeasurementCard } from "@/services/contentful/types";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import Image from "next/image";
import styled from "styled-components";

export const MEASUREMENT_CARDS_FRAGMENT_ID = "measurements-cards";

type Props = {
  measurementCards: MeasurementCard[];
  hidePhoto?: boolean;
  numberOfCards?: number;
  addShowMoreButton?: boolean;
};

const MeasurementCardsFragment = ({
  measurementCards = [],
  hidePhoto = false,
  numberOfCards,
  addShowMoreButton,
}: Props) => {
  const { translate } = useTranslate();

  const iconHeight = useResponsiveValue(60, {
    tabLand: 80,
    desktop: 100,
    bigDesktop: 120,
  });

  const cards = numberOfCards
    ? measurementCards.slice(0, numberOfCards)
    : measurementCards;

  return (
    <Fragment
      id={MEASUREMENT_CARDS_FRAGMENT_ID}
      borderLeftColor={COLORS.secondaryLight}
      bigPadding
    >
      <Wrapper>
        <WrapperLeft>
          <H2>{translate("measurementCards.title")}</H2>
          <p>{translate("measurementCards.subtitle")}</p>
          {cards.map((card) => (
            <ArrowLink
              key={card.nazwa}
              label={card.nazwa}
              href={card.karta!!}
            />
          ))}
          {addShowMoreButton && (
            <div style={{ display: "flex" }}>
              <Button
                icon="eye"
                label={translate("gallery.seeMoreButton")}
                variant="tertiary"
                href="do-pobrania/karty-pomiarowe"
              />
            </div>
          )}
        </WrapperLeft>
        {!hidePhoto && (
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

            <IconWrapper
              style={{ position: "absolute", bottom: -20, left: "0" }}
            >
              <Image
                src={"/products/miarka.svg"}
                alt={translate("measurementCards.title")}
                height={iconHeight}
                width={iconHeight * 1.5}
              />
            </IconWrapper>
          </WrapperRight>
        )}
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

  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    gap: 4rem;
    align-items: flex-start;
  }
`;

const WrapperLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 7em;
  gap: 2rem;
  @media ${(props) => props.theme.media.phone} {
    padding-right: 1em;
  }
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

const ButtonWrapper = styled.div`
  display: flex;
`;

export default MeasurementCardsFragment;
