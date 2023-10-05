import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WorkIcon from "@mui/icons-material/Work";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Button } from "@ui/Button";
import { Text } from "@ui/Text";
import { Flex } from "@ui/layout";
import classNames from "classnames";
import * as React from "react";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { JAIMY_PROJECTS } from "src/lib/Constants/projects";

export default function Jaimy() {
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
          <Text className="text-sm text-justify">
            On January 2022 I have started as a{" "}
            <Text variant="span" className="font-bold">
              Junior front-end developer
            </Text>{" "}
            at Jaimy! It was, just like during my course, a lot of studying and
            effort but I am grateful for it!
          </Text>
          <Text className="text-sm text-justify py-6">
            On early 2023 I was promoted to{" "}
            <Text variant="span" className="font-bold">
              Lead front-end developer
            </Text>{" "}
            for my continuous efforts.
          </Text>
        </ListSubheader>
      }
    >
      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/company/jaimy-be/mycompany/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemButton>
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText
            primary={<Text className="font-semibold">{"LinkedIn"}</Text>}
          />
          <OpenInNewIcon />
        </ListItemButton>
      </a>

      {/* PROJECTS */}
      <ListItemButton onClick={handleClickFood}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText
          primary={<Text className="font-semibold">{"Projects"}</Text>}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* JAIMY WEBSITE */}

          {JAIMY_PROJECTS.map((project, index) => (
            <ListItemButton
              key={project.id}
              className={classNames(`pl-4 sm:pl-8`, {
                "bg-slate-50": index % 2 === 0,
                "bg-slate-100": index % 2 !== 0,
              })}
            >
              <ListItemIcon>
                <HomeRepairServiceIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Flex className="flex-col sm:flex-row items-center justify-around">
                    <Button design="outline" className="w-[150px] md:w-[175px]">
                      <a
                        href={project.externalHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex flex-row items-center justify-between"
                      >
                        <ComponentIsVisible when={project.privacy === "public"}>
                          <OpenInNewIcon />
                        </ComponentIsVisible>
                        <ComponentIsVisible
                          when={project.privacy === "private"}
                        >
                          <LockPersonIcon />
                        </ComponentIsVisible>
                        <Text variant="small">{project.name}</Text>
                      </a>
                    </Button>
                    <Button design="outline" className="w-[150px]">
                      <a
                        href={project.externalHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex flex-row items-center justify-between"
                      >
                        <VisibilityIcon sx={{ mr: 1 }} />
                        <Text variant="small">Tech</Text>
                      </a>
                    </Button>
                  </Flex>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
