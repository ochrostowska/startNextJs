import { Fragment } from "@/components/Fragment";
import { H2 } from "@/components/Heading";
import { Photo } from "@/components/Photo";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import styled from "styled-components";

const WelcomeFragment = () => {
  const { translate } = useTranslate();
  return (
    <Fragment borderLeftColor={COLORS.secondaryLight} bigPadding>
      <Wrapper>
        <WrapperLeft>
          <H2>{translate("helloTitle")}</H2>
          <p>{translate("helloText")}</p>
          <p>{translate("helloText2")}</p>
          <p>{translate("helloText3")}</p>
        </WrapperLeft>
        <WrapperRight>
          <WrapperPhoto>
            <StyledPhoto
              src={"/photos/cat_welcome.png"}
              alt="Cat hello"
              height={900}
              width={900}
              decorTint={COLORS.secondaryLight}
              decorLocation="bottom-right"
            />
          </WrapperPhoto>
        </WrapperRight>
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.media.tabPort} {
    flex-direction: column;
    gap: 3rem;
  }
`;

const WrapperLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 7em;
  gap: 2rem;
  @media ${(props) => props.theme.media.tabPort} {
    padding-right: 1rem;
  }
`;

const WrapperRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const WrapperPhoto = styled.div`
  width: 90%;
  height: 90%;
  justify-content: flex-end;
  @media ${(props) => props.theme.media.tabPort} {
    width: 100%;
    padding-top: 1rem;
  }
`;

const StyledPhoto = styled(Photo)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default WelcomeFragment;
