import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import TourIcon from "@mui/icons-material/Tour";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Text } from "@ui/Text";
import { Flex } from "@ui/layout";
import * as React from "react";

export default function Belgium() {
  const [open, setOpen] = React.useState(true);

  const handleClickFood = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
      className="bg-slate-200"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Text className="text-sm pb-4">Suggestions</Text>
        </ListSubheader>
      }
    >
      <a
        href="https://www.visit.brussels/en/visitors/agenda"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemButton>
          <ListItemIcon>
            <TourIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Text className="font-semibold">{"Events"}</Text>}
          />
          <OpenInNewIcon />
        </ListItemButton>
      </a>
      <a
        href="https://www.instagram.com/brusselsculture/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemButton>
          <ListItemIcon>
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Text className="font-semibold">{"Culture"}</Text>}
          />
          <OpenInNewIcon />
        </ListItemButton>
      </a>

      <ListItemButton onClick={handleClickFood}>
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <ListItemText
          primary={<Text className="font-semibold">{"Hidden Gems"}</Text>}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton>
            <ListItemText
              primary={
                <Flex className="w-240 md:w-240 h-300px items-center justify-center">
                  <iframe
                    className="w-240 md:w-240"
                    src="https://www.google.com/maps/d/embed?mid=1aI-NS0VQPQbAS85uC7A7BR_UGQIOuVY&ehbc=2E312F"
                    width={"100%"}
                    height={350}
                  ></iframe>
                </Flex>
              }
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
