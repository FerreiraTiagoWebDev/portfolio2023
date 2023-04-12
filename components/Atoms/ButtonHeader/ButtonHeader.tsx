import LinkCustom from "@ui/Link";
import Text from "@ui/Text";
import styles from "./buttonheader.module.css";

interface IButtonHeaderProps {
  href: string;
  icon: any;
  text: string;
  isActive?: boolean;
}
const ButtonHeader = ({ href, icon, text, isActive }: IButtonHeaderProps) => {
  return (
    <LinkCustom href={href} style={{ width: "140px" }}>
      <div
        className={`${styles.buttonHeaderDiv} ${
          isActive ? styles.buttonHeaderDivActive : ""
        }`}
      >
        {icon}
        <Text
          variant="body2"
          mx={1}
          fontWeight="bold"
          color={isActive ? "white" : ""}
          className={`${styles.textButtonHeader} ${
            isActive ? styles.textButtonHeaderActive : ""
          }`}
        >
          {text}
        </Text>
      </div>
    </LinkCustom>
  );
};

export default ButtonHeader;
