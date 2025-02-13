import { Fragment } from "@/components/Fragment";
import { H5 } from "@/components/Heading";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import Image from "next/image";
import styled from "styled-components";

const AnimalFriendlyFragment = () => {
  const { translate } = useTranslate();

  const badgeSize = useResponsiveValue(100, {
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
          src={"/photos/animalFriendlyBadge2.png"}
          alt="Animal friendly badge"
          height={badgeSize}
          width={badgeSize}
        />
        <TextContainer>
          <p>{translate("animalFriendlyText1")}</p>
          <H5>{translate("animalFriendlyText2")}</H5>
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
  gap: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export default AnimalFriendlyFragment;
