import styles from "./sectionLink.module.scss";

type SectionLinkProps = {
  label: string;
  href: string;
};

export const SectionLink = ({ label, href }: SectionLinkProps) => {
  return (
    <div className={styles.sectionLink}>
      <a href={href}>{label} &rarr;</a>
    </div>
  );
};
