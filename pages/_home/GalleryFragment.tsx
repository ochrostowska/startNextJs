import { Button } from "@/components/Button";
import { Fragment } from "@/components/Fragment";
import { LabeledGalleryItem } from "@/components/Gallery";
import Modal from "@/components/Gallery/Dialog";
import { H2 } from "@/components/Heading";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import { Routes } from "@/nav/routes";
import { getCloudinaryImageUrl } from "@/services/cloudinary/cloudinaryHelpers";
import { RealisationImage } from "@/services/cloudinary/types";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  images: RealisationImage[];
  hidePhoto?: boolean;
};

const GalleryFragment = ({ images = [] }: Props) => {
  const { translate } = useTranslate();

  const maxPhotoSize = useResponsiveValue(180, {
    tabLand: 200,
    desktop: 240,
    bigDesktop: 320,
  });

  const [showGallery, setShowGallery] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState<number>();

  return (
    <>
      {showGallery && (
        <Modal
          images={images}
          selectedPhotoId={selectedPhotoId}
          onClose={() => setShowGallery(false)}
        />
      )}
      <Fragment borderLeftColor={COLORS.secondaryLight} bigPadding>
        <Wrapper>
          <H2>{translate("gallery.title")}</H2>
          <p>{translate("gallery.subtitle")}</p>
          <GalleryItems>
            {images.map((image) => (
              <LabeledGalleryItem
                key={image.id}
                src={getCloudinaryImageUrl(image, { width: maxPhotoSize })}
                onClick={() => {
                  setSelectedPhotoId(image.id);
                  setShowGallery(true);
                }}
                alt={translate("gallery.title")}
                size={maxPhotoSize}
                label={image.metadata.title}
                subtitle={image.metadata.desc}
                width={image.width}
                height={image.height}
              />
            ))}
          </GalleryItems>

          <ButtonWrapper>
            <Button
              icon="eye"
              label={translate("gallery.seeMoreButton")}
              variant="tertiary"
              href={Routes.Realisations}
            />
          </ButtonWrapper>
        </Wrapper>
      </Fragment>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 0rem;
  margin-right: 0rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GalleryItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  row-gap: 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & > * {
    flex: 1 1 calc(33.333% - 2rem);
    max-width: calc(33.333% - 2rem);
  }

  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 3rem;
    margin-top: 0rem;
    margin-bottom: 0rem;

    & > * {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
`;

export default GalleryFragment;
