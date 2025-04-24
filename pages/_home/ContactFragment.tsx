import { Fragment } from "@/components/Fragment";
import GoogleMapComponent from "@/components/GoogleMap/GoogleMap";
import { H2, TinyLabel } from "@/components/Heading";
import { useContactInformation } from "@/services/contact/useContactInformation";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import styled from "styled-components";

export const CONTACT_FRAGMENT_ID = "contact-section";

type Props = {
  mapsApiKey: string;
  backgroundColor?: string;
};

const ContactFragment = ({ mapsApiKey, backgroundColor }: Props) => {
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
      backgroundColor={backgroundColor}
    >
      <H2>{translate("contact.title")}</H2>

      <ContactWrapper>
        <Column>
          <ContactPart>
            <p>{translate("contact.mapHint")}</p>
          </ContactPart>
          <ContactPart>
            <TinyLabel>{translate("contact.address")}</TinyLabel>
            {addressLines.map((line) => (
              <BoldP key={line}>{line}</BoldP>
            ))}
          </ContactPart>
          <ContactPart>
            <TinyLabel>{translate("contact.phone")}</TinyLabel>
            {phone.map((line) => (
              <ClickableLink key={line} href={`tel:${line.replace(/\s/g, "")}`}>
                <BoldP>{line}</BoldP>
              </ClickableLink>
            ))}
          </ContactPart>
          <ContactPart>
            <TinyLabel>{translate("contact.email")}</TinyLabel>
            {email.map((line) => (
              <ClickableLink key={line} href={`mailto:${line}`}>
                <BoldP>{line}</BoldP>
              </ClickableLink>
            ))}
          </ContactPart>
        </Column>
        <Column>
          {mapsApiKey && (
            <GoogleMapComponent
              height={300}
              center={center}
              mapsKey={mapsApiKey}
            />
          )}
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

const ClickableLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const Column = styled.div`
  flex: 1;
  flex-direction: column;
`;

export default ContactFragment;
