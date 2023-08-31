import { NextLink } from "@ui/NextLink";
import styles from "./buttonheader.module.css";

interface IButtonHeaderProps {
  href: string;
  icon: any;
  text: string;
  isActive?: boolean;
}
const ButtonHeader = ({
  href,
  icon,
  text,
  isActive = false,
}: IButtonHeaderProps) => {
  return (
    <div style={{ minWidth: "140px", transition: "all 0.15s ease" }}>
      <NextLink buttonDesign="none" hover="none" className="w-full" href={href}>
        <div
          className={`${styles.buttonHeaderDiv} ${
            isActive ? styles.buttonHeaderDivActive : ""
          }`}
        >
          {/* <span style={{ color: "black" }}> */}
          {icon}
          {/* </span> */}
          <p
            style={{ fontWeight: "bold" }}
            className={`${styles.textButtonHeader} ${
              isActive ? styles.textButtonHeaderActive : ""
            }`}
          >
            {text}
          </p>
        </div>
      </NextLink>
    </div>
  );
};

export default ButtonHeader;
