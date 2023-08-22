import { faEye, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconName = "location" | "eye";

type Props = {
  name: IconName;
  className?: string;
};

const nameToFAIcon = (name: IconName) => {
  switch (name) {
    case "location":
      return faLocationDot;
    case "eye":
      return faEye;
  }
};

export const Icon = ({ name, ...rest }: Props) => {
  const icon = nameToFAIcon(name);

  return <FontAwesomeIcon icon={icon} {...rest} />;
};
