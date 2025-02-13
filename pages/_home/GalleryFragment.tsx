import { Button } from "@/components/Button";
import { Fragment } from "@/components/Fragment";
import { LabeledGalleryItem } from "@/components/Gallery";
import { H2 } from "@/components/Heading";
import { useResponsiveValue } from "@/hooks/useResponsiveSize";
import COLORS from "@/styles/colors";
import { useTranslate } from "@/translations";
import styled from "styled-components";

const GalleryFragment = () => {
  const { translate } = useTranslate();

  const maxPhotoSize = useResponsiveValue(320, {
    tabLand: 200,
    desktop: 240,
  });

  return (
    <Fragment borderLeftColor={COLORS.secondaryLight} bigPadding>
      <Wrapper>
        <H2>{translate("gallery.title")}</H2>
        <p>{translate("gallery.subtitle")}</p>
        <GalleryItems>
          <LabeledGalleryItem
            href=""
            src={
              "https://wszczecinie.pl/storage/cache/places/c0927db24c6e1a0fa10d0c2a2435c3d8jpg/1500-c0927db24c6e1a0fa10d0c2a2435c3d8.jpg"
            }
            alt={translate("gallery.title")}
            size={maxPhotoSize}
            label="markiza tarasowa"
            subtitle="Dom pod Szczecinem"
          />
          <LabeledGalleryItem
            href=""
            src={
              "https://lh3.googleusercontent.com/proxy/qgmdoy1wulNSa9fKYEOT2nxXzrSGsuVrnSdWPj3wc5IuJjKUz1MQbgb70ICgIuSjDMdIa6zs4bDwnGmLIeTU2sLON9BmI1Iy3bbCFjs9wOCdKPctqValM9zww7dOttobdfJU4d42GEYDjmTg3Ux8iqJs_Yto8G0=w624-h720-n-k"
            }
            alt={translate("gallery.title")}
            size={maxPhotoSize}
            label="markiza tarasowa"
            subtitle="Dom pod Szczecinem"
          />
          <LabeledGalleryItem
            href=""
            src={
              "https://bi.im-g.pl/im/23/2f/16/z23265059IEG,Columbus-Coffee-na-rogu-al--Wojska-Polskiego-i-ul-.jpg"
            }
            alt={translate("gallery.title")}
            size={maxPhotoSize}
            label="markiza tarasowa"
            subtitle="Dom pod Szczecinem"
          />
        </GalleryItems>
        <ButtonWrapper>
          <Button
            icon="eye"
            label={translate("gallery.seeMoreButton")}
            variant="tertiary"
          />
        </ButtonWrapper>
      </Wrapper>
    </Fragment>
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
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
  }
`;

export default GalleryFragment;
