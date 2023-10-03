import { Container, Grid } from "@ui/layout";
import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import ButtonHeader from "src/components/Atoms/ButtonHeader/ButtonHeader";
import { navLinks } from "src/lib/Constants/navLinks";
interface IMobileMenu {
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ isOpen, handleOpen }: IMobileMenu) => {
  return (
    <Container
      className={classNames(
        "bg-white fixed top-0 right-0 w-[100vw] h-[100vh] z-50",
        {
          "transform translate-x-0": isOpen,
          "transform translate-x-full": !isOpen,
        }
      )}
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #faf5e6dd, #fdfcf8, #E8D9C5, #273e4755, #203a435a, #2c53646c)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Grid className="p-8 h-[50vh]">
        <Grid className="ml-auto">
          <AiFillCloseSquare
            onClick={() => handleOpen(!isOpen)}
            className="bg-blueTemplate text-white"
            size={28}
          />
        </Grid>
        {navLinks.map((item) => (
          <Grid
            onClick={() => handleOpen(!isOpen)}
            key={item.id}
            className="text-center"
          >
            <ButtonHeader
              key={item.id}
              href={item.href}
              icon={item.icon}
              text={item.text}
              isActive={true}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MobileMenu;
