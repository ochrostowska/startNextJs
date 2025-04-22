import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import styled from "styled-components";

export default function BlurredModalContainer({
  onClose,
  children,
}: PropsWithChildren<{
  onClose: () => void;
}>) {
  const overlayRef = useRef(null);

  function handleClose() {
    onClose();
  }

  return (
    <StyledDialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
    >
      <StyledDialogOverlay
        ref={overlayRef}
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      {children}
    </StyledDialog>
  );
}

const StyledDialog = styled(Dialog)`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDialogOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 30;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
`;
