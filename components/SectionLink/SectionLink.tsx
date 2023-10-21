import styled from "styled-components";

type SectionLinkProps = {
  label: string;
  href: string;
};

export const SectionLink = ({ label, href }: SectionLinkProps) => {
  return (
    <SectionLinkContainer>
      <StyledLink href={href}>{label} &rarr;</StyledLink>
    </SectionLinkContainer>
  );
};

const SectionLinkContainer = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  transition: all 0.2s;
`;

const StyledLink = styled.a`
  font-size: 2.2rem;
  transition: all 0.2s;
  font-weight: 500;
  @media ${(props) => props.theme.media.tabPort} {
    font-size: 1.8rem;
  }
  &:hover {
    box-shadow: inset 0 -1.5rem 0 ${(props) => props.theme.colors.secondaryDark};
  }
`;
