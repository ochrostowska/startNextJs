import { Fragment } from "@/components/Fragment";
import { H2, TinyLabel } from "@/components/Heading";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import { useContactInformation } from "@/services/contact/useContactInformation";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import styled from "styled-components";

const ContactFragment = () => {
  const { translate } = useTranslate();

  const { data } = useContactInformation();
  const { address, phone, email, mapUrl } = data;

  const addressLines = address.split(",");

  const mapHeight = useResponsiveValue(200, {
    tabLand: 200,
    desktop: 300,
    bigDesktop: 200,
  });

  const mapWidth = useResponsiveValue(0, {
    tabLand: 400,
    desktop: 480,
    bigDesktop: 600,
  });

  return (
    <Fragment borderLeftColor={COLORS.tertiaryLight} bigPadding>
      <H2>{translate("contact.title")}</H2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2em",
          justifyContent: "space-between",
          paddingTop: "3em",
          paddingBottom: "2em",
        }}
      >
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
      </div>
    </Fragment>
  );
};

const ContactPart = styled.div`
  margin-bottom: 2rem;
`;

const BoldP = styled.p`
  font-weight: bold;
`;

export default ContactFragment;
