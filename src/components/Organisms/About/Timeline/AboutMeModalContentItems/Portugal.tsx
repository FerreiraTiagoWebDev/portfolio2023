import CastleIcon from "@mui/icons-material/Castle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
export default function Portugal() {
  const [open, setOpen] = React.useState(true);

  const handleClickFood = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
      className="bg-slate-200"
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Text className="text-sm pb-4">Suggestions</Text>
        </ListSubheader>
      }
    >
      <a
        href="https://www.visitportugal.com/en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemButton>
          <ListItemIcon>
            <TourIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Text className="font-semibold">{"Visit Portugal"}</Text>}
          />
        </ListItemButton>
      </a>
      <a
        href="https://www.visitportugal.com/en/content/portugals-top-10-cultural-features"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemButton>
          <ListItemIcon>
            <CastleIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Text className="font-semibold">{"Culture"}</Text>}
          />
        </ListItemButton>
      </a>

      <ListItemButton onClick={handleClickFood}>
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <ListItemText
          primary={<Text className="font-semibold">{"My region"}</Text>}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              primary={
                <Flex className="items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393517.2085370839!2d-9.408706647762557!3d39.596725537083046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18a9bea20f33d9%3A0xab2fa0052fdb8fa9!2sPraia%20da%20Nazar%C3%A9%2C%20Nazar%C3%A9%2C%20Portugal!5e0!3m2!1spt-PT!2sbe!4v1696509874677!5m2!1spt-PT!2sbe"
                    width="300"
                    height="300"
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
