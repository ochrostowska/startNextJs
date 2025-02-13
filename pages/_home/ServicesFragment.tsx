import { Button, isValidButtonIcon } from "@/components/Button";
import { Fragment } from "@/components/Fragment";
import { H2, H3 } from "@/components/Heading";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import { useTranslate } from "@/translations";
import Image from "next/image";
import styled from "styled-components";
const ServicesFragment = () => {
  const { translate } = useTranslate();

  const services: SingleServiceProps[] = [
    {
      title: translate("services.measurements"),
      description: [
        translate("services.measurements.desc1"),
        translate("services.measurements.desc2"),
      ],
      buttonIcon: "ruler",
      buttonLabel: translate("services.measurements.button"),
      buttonHref: "/",
      imageSrc: "/icons/measurements-icon.svg",
    },
    {
      title: translate("services.installation"),
      description: [
        translate("services.installation.desc1"),
        translate("services.installation.desc2"),
      ],
      buttonIcon: "installation",
      buttonLabel: translate("services.installation.button"),
      buttonHref: "/",
      imageSrc: "/icons/drill-simple-icon.svg",
    },
  ];

  return (
    <Fragment bigPadding>
      <H2>{translate("services.title")}</H2>

      {services.map((service) => (
        <SingleService key={service.title} {...service} />
      ))}
    </Fragment>
  );
};

type SingleServiceProps = {
  title: string;
  description: string[];
  buttonIcon: string;
  buttonLabel: string;
  buttonHref: string;
  imageSrc: string;
};

const SingleService = ({
  title,
  description,
  buttonIcon,
  buttonLabel,
  buttonHref,
  imageSrc,
}: SingleServiceProps) => {
  const imageSize = useResponsiveValue(150, {
    tabLand: 180,
    desktop: 200,
    bigDesktop: 250,
  });

  return (
    <>
      <SingleServiceWrapper>
        <Image
          src={imageSrc}
          alt={title}
          width={imageSize}
          height={imageSize}
          style={{ maxWidth: imageSize }}
        />
        <div>
          <H3>{title}</H3>
          {description.map((paragraph) => {
            const spanned = paragraph.split("{span}");
            if (spanned.length === 3) {
              return (
                <ServiceParagraph key={paragraph}>
                  {spanned[0]}
                  <span>{spanned[1]}</span>
                  {spanned[2]}
                </ServiceParagraph>
              );
            }

            return (
              <ServiceParagraph key={paragraph}>{paragraph}</ServiceParagraph>
            );
          })}
          <ServiceButton>
            <Button
              label={buttonLabel}
              href={buttonHref}
              icon={isValidButtonIcon(buttonIcon) ? buttonIcon : undefined}
            />
          </ServiceButton>
        </div>
      </SingleServiceWrapper>
      <SePar />
    </>
  );
};

const SePar = styled.div`
  height: 3rem;
`;

const ServiceParagraph = styled.p`
  margin-bottom: 1rem;

  span {
    transition: all 0.5s;
    box-shadow: inset 0 -1rem 0 ${(props) => props.theme.colors.secondaryLight};
    font-weight: 600;
  }
`;

const ServiceButton = styled.div`
  margin-top: 4rem;
  @media ${(props) => props.theme.media.tabLand} {
    margin-top: 3rem;
  }
`;

const SingleServiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8rem;
  padding-top: 6rem;

  @media ${(props) => props.theme.media.tabLand} {
    gap: 4rem;
    padding-top: 4rem;

    & > *:not(:first-child) {
      padding-top: 4rem;
    }
  }
`;

export default ServicesFragment;
