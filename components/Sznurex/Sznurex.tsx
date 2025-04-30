import { NAV_BAR_Z_INDEX } from "@/layout/navbar";
import ANIMATIONS from "@/styles/animations";
import Image from "next/image";
import styled from "styled-components";

export const Sznurex = () => {
  return (
    <SznurexDiv>
      <Image src={"/sznurex.svg"} alt="Sznurex" width={40} height={565} />
    </SznurexDiv>
  );
};

const SznurexDiv = styled.div`
  position: fixed;
  top: 0;
  z-index: ${NAV_BAR_Z_INDEX + 1};
  right: 0;
  width: ${(props) => props.theme.constants.fragmentHorizontalOffset};
  align-items: center;
  justify-content: center;
  display: flex;
  &:hover {
    transform-origin: center top; // make the animation start from the top and not the center of an image
    animation: ${ANIMATIONS.swing} 2s ease-in-out;
  }
  @media ${(props) => props.theme.media.tabPort} {
    display: none;
  }
`;
