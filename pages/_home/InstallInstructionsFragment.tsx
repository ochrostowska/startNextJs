import { ArrowLink } from "@/components/ArrowLink";
import { Fragment } from "@/components/Fragment";
import { H2 } from "@/components/Heading";
import { Photo } from "@/components/Photo";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import Image from "next/image";
import styled from "styled-components";

export const INSTALL_INSTRUCTIONS_FRAGMENT_ID = "install-instructions-section";
const InstallInstructionFragment = () => {
  const { translate } = useTranslate();

  const iconSize = useResponsiveValue(80, {
    tabLand: 100,
    desktop: 120,
    bigDesktop: 140,
  });

  return (
    <Fragment
      id={INSTALL_INSTRUCTIONS_FRAGMENT_ID}
      borderLeftColor={COLORS.secondaryLight}
      bigPadding
    >
      <Wrapper>
        <WrapperLeft>
          <H2>{translate("installationInstructions.title")}</H2>
          <p>{translate("installationInstructions.subtitle")}</p>
          <ArrowLink
            href="https://www.youtube.com/watch?v=qEplkZlAbdk"
            label={translate("installationInstructions.miniRollerBlinds")}
          />
          <ArrowLink
            href="https://www.youtube.com/watch?v=qEplkZlAbdk"
            label={translate("installationInstructions.rollerBlinds")}
          />
          <ArrowLink
            href="https://www.youtube.com/watch?v=qEplkZlAbdk"
            label={translate("installationInstructions.romanianBlinds")}
          />
          <ArrowLink
            href="https://www.youtube.com/watch?v=qEplkZlAbdk"
            label={translate("installationInstructions.aluminiumBlinds")}
          />
          <ArrowLink
            href="https://www.youtube.com/watch?v=qEplkZlAbdk"
            label={translate("installationInstructions.verticalBlinds")}
          />
        </WrapperLeft>
        <WrapperRight>
          <WrapperPhoto>
            <StyledPhoto
              src={"/photos/photo_install.png"}
              alt={translate("measurementCards.title")}
              height={900}
              width={900}
              decorTint={COLORS.secondaryLight}
              decorLocation="bottom-right"
            />
          </WrapperPhoto>

          <IconWrapper
            style={{
              width: iconSize,
              height: iconSize,
            }}
          >
            <Image
              src={"/icons/drill-icon.svg"}
              alt={translate("measurementCards.title")}
              height={iconSize * 0.7}
              width={iconSize * 0.7}
            />
          </IconWrapper>
        </WrapperRight>
      </Wrapper>
    </Fragment>
  );
};

const IconWrapper = styled.div`
  background-color: white;
  box-shadow: 8px 8px 0px 0px ${COLORS.primaryDark};
  transition: all 0.2s;
  position: absolute;
  bottom: -2em;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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

export default InstallInstructionFragment;
