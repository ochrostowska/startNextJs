import { Button } from "@/components/Button";
import { Fragment } from "@/components/Fragment";
import { H1, H4 } from "@/components/Heading";
import { Photo } from "@/components/Photo";
import { scrollToElement } from "@/helpers/scrollToElement";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import styled from "styled-components";
import { CONTACT_FRAGMENT_ID } from "./ContactFragment";

const photoSize = 1000;

const Hero = () => {
  const { translate } = useTranslate();

  const title = translate("heroTitle");
  const titleParts = title.split("{span}");

  return (
    <Fragment>
      <HeroWrapper>
        <HeroLeft>
          <H1>
            {titleParts[0]}
            <span>{titleParts[1]}</span>
            {titleParts[2]}
          </H1>
          <H4>{translate("heroSubtitle")}</H4>
          <Button
            label={translate("heroButton")}
            icon="eye"
            onClick={() => scrollToElement(CONTACT_FRAGMENT_ID)}
          />
        </HeroLeft>
        <HeroRight>
          <HeroImage
            src={"/photos/cat_home.png"}
            alt="Cat home"
            height={photoSize}
            width={photoSize}
            decorTint={COLORS.primaryDark}
            decorLocation="bottom-left"
          />
        </HeroRight>
      </HeroWrapper>
    </Fragment>
  );
};

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 6rem;
  padding-top: 3rem;

  @media ${(props) => props.theme.media.phone} {
    flex-direction: column-reverse;
    gap: 3rem;
    padding-bottom: 4rem;
    padding-top: 1rem;
  }
`;

const HeroLeft = styled.div`
  flex: 1;
  padding-right: 7rem;
  @media ${(props) => props.theme.media.phone} {
    padding-right: 1rem;
  }
`;

const HeroRight = styled.div`
  flex: 1;
`;

const HeroImage = styled(Photo)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Hero;
