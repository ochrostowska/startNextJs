import { Fragment } from "@/components/Fragment";
import GoogleMapComponent from "@/components/GoogleMap/GoogleMap";
import { H2, TinyLabel } from "@/components/Heading";
import { useContactInformation } from "@/services/contact/useContactInformation";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import styled from "styled-components";

export const CONTACT_FRAGMENT_ID = "contact-section";

const ContactFragment = () => {
  const { translate } = useTranslate();

  const { data } = useContactInformation();
  const { address, phone, email, mapUrl } = data;

  const addressLines = address.split(",");

  const center = {
    lat: 53.4126946,
    lng: 14.5243746,
  };

  return (
    <Fragment
      id={CONTACT_FRAGMENT_ID}
      borderLeftColor={COLORS.tertiaryLight}
      bigPadding
    >
      <H2>{translate("contact.title")}</H2>

      <ContactWrapper>
        <Column>
          <ContactPart>
            <TinyLabel>{translate("contact.address")}</TinyLabel>
            {addressLines.map((line) => (
              <BoldP key={line}>{line}</BoldP>
            ))}
          </ContactPart>
          <ContactPart>
            <TinyLabel>{translate("contact.phone")}</TinyLabel>
            {phone.map((line) => (
              <BoldP key={line}>{line}</BoldP>
            ))}
          </ContactPart>
          <ContactPart>
            <TinyLabel>{translate("contact.email")}</TinyLabel>
            {email.map((line) => (
              <BoldP key={line}>{line}</BoldP>
            ))}
          </ContactPart>
        </Column>
        <Column>
          <GoogleMapComponent height={300} center={center} />
        </Column>
      </ContactWrapper>
    </Fragment>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 2rem;
  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ContactPart = styled.div`
  margin-bottom: 2rem;
`;

const BoldP = styled.p`
  font-weight: bold;
`;

const Column = styled.div`
  flex: 1;
  flex-direction: column;
`;

export default ContactFragment;
