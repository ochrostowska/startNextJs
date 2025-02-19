import { Fragment } from "@/components/Fragment";
import { useContactInformation } from "@/services/contact/useContactInformation";
import styled from "styled-components";
import { Logo } from "../Logo";

const Footer = () => {
  const { data } = useContactInformation();
  const { phone, email } = data;

  return (
    <BorderWrapper>
      <Fragment>
        <ItemsWrapper>
          <Logo />
          <ContactLine>
            <a href={`tel:${phone}`}>+48 {phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </ContactLine>
        </ItemsWrapper>
      </Fragment>
    </BorderWrapper>
  );
};

const BorderWrapper = styled.div`
  border-top: 3px dashed ${(props) => props.theme.colors.almostBlack};
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

const ContactLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default Footer;
