import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import TourIcon from "@mui/icons-material/Tour";
import { Tooltip } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Text } from "@ui/Text";
import { Flex } from "@ui/layout";
import Image from "next/image";
import * as React from "react";

export default function Intec() {
  const [open, setOpen] = React.useState(true);

  const handleClickFood = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
      className="bg-slate-100"
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Text className="text-sm text-justify pt-2 pb-8">
            I have completed in 2021 the Front End Development course, and it
            was the beginning of what I believe to be now one of my favorite
            interests to learn about.
          </Text>
        </ListSubheader>
      }
    >
      <a
        href="https://www.intecbrussel.be/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemButton>
          <ListItemIcon>
            <TourIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Text className="font-semibold">{"School Website"}</Text>}
          />
          <OpenInNewIcon />
        </ListItemButton>
      </a>

      <ListItemButton onClick={handleClickFood}>
        <ListItemIcon>
          <MilitaryTechIcon />
        </ListItemIcon>
        <ListItemText
          primary={<Text className="font-semibold">{"Certificate"}</Text>}
        />{" "}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Tooltip title="Click to open in new tab">
            <a
              href="/assets/images/intec_certification.webp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemButton>
                <ListItemText
                  primary={
                    <Flex className="w-240 md:w-240 h-300px items-center justify-center rounded-lg">
                      <Image
                        src="/assets/images/intec_certification.webp"
                        width={250}
                        height={250}
                        alt="certification"
                        className="rounded-lg border-2 border-secondaryDarker"
                      />
                    </Flex>
                  }
                />
              </ListItemButton>
            </a>
          </Tooltip>
        </List>
      </Collapse>
    </List>
  );
}
