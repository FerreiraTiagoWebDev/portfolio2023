"use client";

import { Box } from "@mui/material";
import { Button } from "@ui/Button";
import { Flex } from "@ui/Flex";
import { Text } from "@ui/Text";

import { footerLinks } from "src/lib/Constants/navLinks";
import useScreenSize from "src/lib/hooks/useScreenSize";

export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  const screenSize = useScreenSize();

  return (
    <footer {...footerProps}>
      <Flex
        className="w-full p-2"
        style={{
          borderWidth: "15px",
          borderTop: "15px solid #122B48",
        }}
      >
        <Box className="flex flex-col">
          <Text>Email: tiagofqaferreira@gmail.com</Text>
          <Text>Phone: +32494846838</Text>
        </Box>
        <Box className="flex flex-col items-center justify-center">
          <Button style={{ width: "50%" }}>CV</Button>
          <Text>Tiago Ferreira, Brussels 2023</Text>
        </Box>
        <Flex style={{ flex: 1 }}>
          {footerLinks.map((item) => {
            return <Text key={item.id}>{item.text}</Text>;
          })}
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
