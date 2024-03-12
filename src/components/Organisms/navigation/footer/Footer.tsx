"use client";

import { Box } from "@mui/material";
import { Grid } from "@ui/Grid";
import { Link } from "@ui/Link";
import { Text } from "@ui/Text";
import { Flex } from "@ui/layout";
import { AiFillGithub, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { GITHUB_URL, LINKEDIN_URL } from "src/lib/Constants/outsideNavigation";

export interface IFooter extends React.ComponentPropsWithoutRef<"footer"> {}

const Footer: React.FC<IFooter> = ({ ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      style={{
        width: "100%",
        borderTop: "10px solid #122B48",
        borderWidth: "10px",
        height: "100px",
      }}
    >
      <Grid className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] m-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-4 items-center justify-center p-1 border-b-2 ">
        <Link
          href={"mailto:tiagofqaferreira@gmail.com"}
          className="flex flex-col lg:flex-row items-center justify-center"
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
          className="flex flex-col md:flex-row items-center justify-center p-1"
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
          className="flex flex-col md:flex-row items-center justify-center p-1"
          hoverVariant="opacity"
          download="document.pdf"
        >
          <BsDownload size={24} color="#1C486B" />
          <Text variant="small" className="ml-1">
            Curriculum
          </Text>
        </Link>
        <Flex className="items-center justify-center">
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center p-1"
            hoverVariant="opacity"
          >
            <AiFillLinkedin size={30} color="#0A66C2" />
          </Link>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center p-1"
            hoverVariant="opacity"
          >
            <AiFillGithub size={30} />
          </Link>
        </Flex>
      </Grid>
      <Flex className="w-full items-center justify-center gap-2 py-1">
        <Box className="flex items-center">
          <MdLocationOn size={24} color="grey" />
          <Text variant="small" align="center" className="text-[10px]">
            Brussels, Belgium
          </Text>
        </Box>
        <Text
          variant="small"
          align="center"
          className="font-semibold text-[10px]"
        >
          @2023 Tiago Ferreira
        </Text>
      </Flex>
    </footer>
  );
};

export default Footer;
