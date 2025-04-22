import downloadPhoto from "@/helpers/downloadPhoto";

import { useTranslate } from "@/translations";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import styled, { css } from "styled-components";

interface CarouselGalleryControlsProps {
  index: number;
  numberOfImages: number;
  onChangeIndex: (newVal: number) => void;
  onClose: () => void;
  fullSizeImageUrl: string;
  fileName: string;
  direction?: number;
}

/* ─── COMPONENT ───────────────────────────────────────────────────── */

export default function CarouselGalleryControls({
  index,
  onChangeIndex,
  numberOfImages,
  fullSizeImageUrl,
  fileName,
  onClose,
}: CarouselGalleryControlsProps) {
  const { translate } = useTranslate();

  return (
    <ButtonsContainer>
      <>
        {index > 0 && (
          <LeftButton onClick={() => onChangeIndex(index - 1)}>
            <ArrowLeftIcon />
          </LeftButton>
        )}
        {index + 1 < numberOfImages && (
          <RightButton onClick={() => onChangeIndex(index + 1)}>
            <ArrowRightIcon />
          </RightButton>
        )}
      </>
      <TopRightIcons>
        <IconLink
          href={fullSizeImageUrl}
          target="_blank"
          title={translate("gallery.openFullsizeVersion")}
          rel="noreferrer"
        >
          <OpenFullSizeIcon />
        </IconLink>
        <IconButton
          onClick={() => downloadPhoto(fullSizeImageUrl, fileName)}
          title={translate("gallery.downloadFullsizeVersion")}
        >
          <DownloadIcon />
        </IconButton>
      </TopRightIcons>
      <TopLeftIcons>
        <IconButton onClick={onClose} title={translate("gallery.closeModal")}>
          <CloseIcon />
        </IconButton>
      </TopLeftIcons>
    </ButtonsContainer>
  );
}

const icon20pxStyles = `
    height: 20px;
    width: 20px;
    color: white;
`;

const icon24pxStyles = `
    height: 24px;
    width: 24px;
    color: white;
`;
const ArrowLeftIcon = styled(ChevronLeftIcon)`
  ${icon24pxStyles}
`;
const ArrowRightIcon = styled(ChevronRightIcon)`
  ${icon24pxStyles}
`;

const OpenFullSizeIcon = styled(ArrowTopRightOnSquareIcon)`
  ${icon20pxStyles}
`;

const DownloadIcon = styled(ArrowDownTrayIcon)`
  ${icon20pxStyles}
`;

const CloseIcon = styled(XMarkIcon)`
  ${icon20pxStyles}
`;

/* ─── STYLED COMPONENTS ───────────────────────────────────────────── */

/* Wrapper for buttons inside the overlay */
const ButtonsContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/2;
  max-height: 100%;
`;

const sharedIconStyles = css`
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px);
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.75);
    color: #ffffff;
  }
`;

const sharedButtonBase = css`
  border: none;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const NavButton = styled.button`
  ${sharedIconStyles}
  ${sharedButtonBase}
  position: absolute;
  padding: 0.75rem;
`;

const LeftButton = styled(NavButton)`
  left: 0.75rem;
  top: calc(50% - 16px);
`;

const RightButton = styled(NavButton)`
  right: 0.75rem;
  top: calc(50% - 16px);
`;

const IconButton = styled.button`
  ${sharedIconStyles}
  ${sharedButtonBase}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconLink = styled.a`
  ${sharedIconStyles}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const TopIconsBase = css`
  position: absolute;
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem;
  color: white;
`;

const TopRightIcons = styled.div`
  ${TopIconsBase}
  top: 0;
  right: 0;
`;

const TopLeftIcons = styled.div`
  ${TopIconsBase}
  top: 0;
  left: 0;
`;
