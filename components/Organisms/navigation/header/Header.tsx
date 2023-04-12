import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { makeStyles } from "@mui/styles";
import FlexBox from "@ui/FlexBox";
import Link from "@ui/Link";
import ButtonHeader from "components/Atoms/ButtonHeader/ButtonHeader";
import ComponentIsVisible from "components/Atoms/ComponentIsVisible";
import { navLinks } from "lib/Constants/navLinks";
import useScreenSize from "lib/hooks/useScreenSize";
import { useRouter } from "next/router";
import { CubeLogo } from "public/assets/icons";
import { useState } from "react";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const useStyles = makeStyles({
  icon: {
    fontSize: "large",
    transition: "all 0.25s ease",
    cursor: "pointer",
  },
});

//implement sticky, navlinks, hamburger menu, filter blur

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  const classes = useStyles();

  const router = useRouter();
  const screenSize = useScreenSize();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header {...headerProps}>
      <FlexBox
        justifyContent="justify-between"
        className="w-full p-2 bg-white"
        style={{
          borderBottom: "15px solid #122B48",
          borderWidth: "15px",
        }}
      >
        <Link href="/" style={{ flexGrow: 1 }}>
          <FlexBox className="rounded-md px-1 bg-white">
            <CubeLogo />
          </FlexBox>
        </Link>
        <ComponentIsVisible when={!!screenSize.width && screenSize.width < 768}>
          <FlexBox
            alignItems="center"
            justifyContent="justify-center"
            p={2}
            onClick={() => handleMobileMenu()}
          >
            {mobileMenuOpen ? (
              <MenuOpenIcon className={classes.icon} />
            ) : (
              <MenuIcon className={classes.icon} />
            )}
          </FlexBox>
        </ComponentIsVisible>
        <ComponentIsVisible
          when={!!screenSize.width && screenSize.width >= 768}
        >
          <FlexBox
            alignItems="center"
            justifyContent="justify-around"
            style={{ flexGrow: 1 }}
          >
            {navLinks.map((item) => {
              return (
                <ButtonHeader
                  key={item.id}
                  href={item.href}
                  icon={item.icon}
                  text={item.text}
                  isActive={router.pathname.includes(item.text.toLowerCase())}
                />
              );
            })}
          </FlexBox>
        </ComponentIsVisible>
      </FlexBox>
    </header>
  );
};

export default Header;
