import styled from "styled-components";

type Props = {
  label: string;
  href: string;
};

export const ArrowLink = ({ label, href }: Props) => {
  return (
    <Container>
      <Link href={href}>&rarr; {label}</Link>
    </Container>
  );
};

const Container = styled.div`
  transition: all 0.2s;
  margin: -0.5rem;
`;

const Link = styled.a`
  font-size: 1.8rem;
  transition: all 0.2s;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  @media ${(props) => props.theme.media.tabPort} {
    font-size: 1.6rem;
  }
  &:hover {
    box-shadow: inset 0 -1rem 0 ${(props) => props.theme.colors.tertiaryLight};
  }
  cursor: pointer;
`;
