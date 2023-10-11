"use client";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { makeStyles } from "@mui/styles";
import { NextLink } from "@ui/NextLink";
import { Box, Flex } from "@ui/layout";
import { usePathname } from "next/navigation";
import { CubeLogo } from "public/assets/icons";
import { useState } from "react";
import ButtonHeader from "src/components/Atoms/ButtonHeader/ButtonHeader";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { navLinks } from "src/lib/Constants/navLinks";
import useScreenSize from "src/lib/hooks/useScreenSize";
import MobileMenu from "../MobileMenu";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

const useStyles = makeStyles({
  icon: {
    fontSize: "30px",
    transition: "all 0.25s ease",
    cursor: "pointer",
  },
});

// @todo implement sticky, navlinks, hamburger menu, filter blur

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  const classes = useStyles();
  const pathname = usePathname();
  const screenSize = useScreenSize();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header
      {...headerProps}
      className="w-full items-center p-2 md:p-4"
      style={{
        borderBottom: "15px solid #122B48",
        borderWidth: "15px",
        display: "flex",
        height: "10vh",
      }}
    >
      <Box className="w-full flex-40">
        <Box className="rounded-md px-1 ">
          <NextLink buttonDesign="none" href="/" className="px-2">
            <CubeLogo />
          </NextLink>
        </Box>
      </Box>

      <ComponentIsVisible
        when={!screenSize || (!!screenSize.width && screenSize.width < 768)}
      >
        <Flex
          className="items-center justify-end px-4"
          onClick={() => handleMobileMenu()}
        >
          {mobileMenuOpen ? (
            <MenuOpenIcon className={classes.icon} />
          ) : (
            <MenuIcon className={classes.icon} />
          )}
        </Flex>
      </ComponentIsVisible>
      <ComponentIsVisible when={!!screenSize.width && screenSize.width >= 768}>
        <Flex className="w-full flex-row justify-around flex-60">
          {navLinks.map((item) => {
            return (
              <ButtonHeader
                key={item.id}
                href={item.href}
                icon={item.icon}
                text={item.text}
                isActive={pathname.includes(item.text.toLowerCase())}
              />
            );
          })}
        </Flex>
      </ComponentIsVisible>
      <MobileMenu isOpen={mobileMenuOpen} handleOpen={setMobileMenuOpen} />
    </header>
  );
};

export default Header;
