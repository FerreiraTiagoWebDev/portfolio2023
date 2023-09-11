"use client";

import { Box } from "@mui/material";
import { Container } from "@ui/Container";
import { Flex } from "@ui/Flex";
import { Grid } from "@ui/Grid";
import { Link } from "@ui/Link";
import { Text } from "@ui/Text";
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { LINKEDIN_URL } from "src/lib/Constants/outsideNavigation";

export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

const Footer: React.FC<IFooter> = ({ ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      style={{
        borderWidth: "15px",
        borderTop: "15px solid #122B48",
      }}
    >
      <Container>
        <Grid className="w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4  items-center justify-center pt-4 pb-2  border-b-2">
          <Link
            href={"mailto:tiagofqaferreira@gmail.com"}
            className="flex items-center justify-center p-1"
            hoverVariant="opacity"
            textTransform="lowercase"
          >
            <MdEmail size={24} color="#1C486B" />
            <Text variant="small" className="ml-1">
              tiagofqaferreira@gmail.com
            </Text>
          </Link>
          <Link
            href={"tel:+32494846838"}
            className="flex items-center justify-center p-1"
            hoverVariant="opacity"
          >
            <AiFillPhone size={24} color="#1C486B" />
            <Text variant="small" className="ml-1">
              +32 494 846 838
            </Text>
          </Link>
          <Link
            href={"/assets/cv/curriculum.pdf"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center p-1"
            hoverVariant="opacity"
            download="document.pdf"
          >
            <FcDocument size={24} />
            <Text variant="small" className="ml-1">
              Curriculum
            </Text>
          </Link>
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center p-1"
            hoverVariant="opacity"
          >
            <AiFillLinkedin size={24} color="#0A66C2" />
            <Text variant="small" className="ml-1">
              LinkedIn
            </Text>
          </Link>
        </Grid>
        <Flex className="w-full items-center justify-center gap-4 py-1">
          <Box className="flex items-center">
            <MdLocationOn size={24} color="grey" />
            <Text variant="small" align="center">
              Brussels, Belgium
            </Text>
          </Box>
          <Text variant="small" align="center" className="font-semibold">
            @2023 Tiago Ferreira
          </Text>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
