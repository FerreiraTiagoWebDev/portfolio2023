'use client'

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { makeStyles } from "@mui/styles";
import { Flex } from '@ui/Flex';
import { usePathname } from "next/navigation";
import { CubeLogo } from "public/assets/icons";
import { useState } from "react";
import ButtonHeader from "src/components/Atoms/ButtonHeader/ButtonHeader";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import Link from "src/components/UI/Link";
import { navLinks } from "src/lib/Constants/navLinks";
import useScreenSize from "src/lib/hooks/useScreenSize";


export interface IHeader extends React.ComponentPropsWithoutRef<"header"> { }

const useStyles = makeStyles({
  icon: {
    fontSize: "30px",
    transition: "all 0.25s ease",
    cursor: "pointer",
  },
});

//implement sticky, navlinks, hamburger menu, filter blur

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  const classes = useStyles();
  const pathname = usePathname();
  const screenSize = useScreenSize();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header {...headerProps}>
      <Flex
        className="p-6"
        style={{
          borderBottom: "15px solid #122B48",
          borderWidth: "15px",
          display: "flex"
        }}
      >
        <Link href="/" >
          <Flex className="rounded-md px-1 bg-white">
            <CubeLogo />
          </Flex>
        </Link>
        <ComponentIsVisible when={!!screenSize.width && screenSize.width < 768}>
          <Flex
            onClick={() => handleMobileMenu()}
          >
            {mobileMenuOpen ? (
              <MenuOpenIcon className={classes.icon} />
            ) : (
              <MenuIcon className={classes.icon} />
            )}
          </Flex>
        </ComponentIsVisible>
        <ComponentIsVisible
          when={!!screenSize.width && screenSize.width >= 768}>
          <Flex className="w-full flex-row justify-around">
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
      </Flex>
    </header>
  );
};

export default Header;
