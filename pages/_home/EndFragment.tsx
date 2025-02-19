import { Fragment } from "@/components/Fragment";
import { H5 } from "@/components/Heading";
import { useTranslate } from "@/translations";

export const END_FRAGMENT_ID = "end-section";

const EndFragment = () => {
  const { translate } = useTranslate();

  return (
    <Fragment bigPadding>
      <H5>{translate("thankYou.line1")}</H5>
      <H5>{translate("thankYou.line2")}</H5>
    </Fragment>
  );
};

export default EndFragment;
