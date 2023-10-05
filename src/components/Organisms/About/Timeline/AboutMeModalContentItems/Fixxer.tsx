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
import { FIXXER_PROJECTS } from "src/lib/Constants/projects";

export default function Fixxer() {
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
            Jaimy&rsquo;s IT department decided to create a new company and
            provide its services to Jaimy and a new Dutch Insurance Partner,
            a.s.r.
          </Text>
          <Text className="text-sm text-justify py-8">
            This led to the creation of new projects, leading to the challenge
            and excitement of creating brand new IT solutions with the latest
            technology.
          </Text>
        </ListSubheader>
      }
    >
      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/company/fixxer-eu/about/"
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

          {FIXXER_PROJECTS.map((project, index) => (
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
                    <Button
                      design="outline"
                      className="w-[150px] md:w-[175px]"
                      disabled={project.externalHref === "#"}
                    >
                      <a
                        href={project.externalHref}
                        target={project.externalHref !== "#" ? "_blank" : ""}
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
                    <Button
                      design="outline"
                      className="w-[150px]"
                      disabled={project.externalHref === "#"}
                    >
                      <a
                        href={project.externalHref}
                        target={project.externalHref !== "#" ? "_blank" : ""}
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
