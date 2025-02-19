import Image from "next/image";
import styled from "styled-components";

export const Logo = () => {
  return (
    <Wrapper>
      <LogoImage src={"/logo.png"} alt="Logo" width={200} height={100} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 13rem;
  @media ${(props) => props.theme.media.phone} {
    width: 10rem;
  }
`;

const LogoImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
