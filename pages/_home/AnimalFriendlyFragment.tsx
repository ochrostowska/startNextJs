import { Fragment } from "@/components/Fragment";
import { H5 } from "@/components/Heading";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import Image from "next/image";
import styled from "styled-components";

const AnimalFriendlyFragment = () => {
  const { translate } = useTranslate();

  const badgeSize = useResponsiveValue(90, {
    tabLand: 120,
    desktop: 150,
    bigDesktop: 200,
  });

  return (
    <Fragment
      borderLeftColor={COLORS.primary}
      dashBottomColor={COLORS.primary}
      dashTopColor={COLORS.primary}
    >
      <Wrapper>
        <Image
          src={"/photos/animalFriendlyBadge3.png"}
          alt="Animal friendly badge"
          height={badgeSize}
          width={badgeSize}
        />
        <TextContainer>
          <CenteredP>{translate("animalFriendlyText1")}</CenteredP>
          <H5>{translate("animalFriendlyText2")}</H5>
          <CenteredP>{translate("animalFriendlyText3")}</CenteredP>
          <CenteredP>{translate("animalFriendlyText4")}</CenteredP>
        </TextContainer>
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media ${(props) => props.theme.media.phone} {
    gap: 1rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenteredP = styled.p`
  text-align: center;
`;
export default AnimalFriendlyFragment;
