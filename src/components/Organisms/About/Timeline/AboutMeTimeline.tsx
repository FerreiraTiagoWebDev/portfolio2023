"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Tooltip } from "@mui/material";
import { Text } from "@ui/Text";
import { Flex } from "@ui/layout";
import classNames from "classnames";
import { useState } from "react";
import { ABOUT_ME_TIMELINE_ITEMS } from "src/lib/Constants/aboutMeTimeline";
import { useDialog } from "src/lib/hooks/useDialog";
import { IAboutmeTimelineItem } from "src/types/IAboutmeTimelineItem";
import { AboutMeModal } from "./AboutMeModal";

export default function AboutMeTimeline() {
  const { handleOpen } = useDialog();
  const [selectedItem, setSelectedItem] = useState<
    IAboutmeTimelineItem | undefined
  >();

  const isItemClickable = (item: IAboutmeTimelineItem) => {
    if (item.modalName) {
      return true;
    }
    return false;
  };
  const handleClick = (item: IAboutmeTimelineItem) => {
    if (!item) return;
    if (item.modalName) {
      setSelectedItem(item);
      handleOpen(item.modalName);
      return;
    }
  };
  return (
    <Timeline
      position="alternate"
      className="bg-slate-100 my-8"
      sx={{
        border: "4px  #273e47",
        borderRadius: "25px",
        position: "relative",
      }}
    >
      <Text className="font-bold">by year...</Text>
      {ABOUT_ME_TIMELINE_ITEMS.map((item: IAboutmeTimelineItem, index) => (
        <Tooltip
          key={item.id}
          title={isItemClickable(item) ? item.hoverText : ""}
        >
          <TimelineItem
            onClick={() => handleClick(item)}
            className="relative"
            sx={
              isItemClickable(item)
                ? {
                    my: 3,
                    cursor: "pointer",
                    transition: "0.2s ease all",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#d49090",
                    },
                  }
                : {
                    my: 3,
                    borderRadius: "10px",
                  }
            }
          >
            <TimelineOppositeContent
              sx={{
                height: "100px",
              }}
              align="center"
              color="text.secondary"
            >
              <Flex
                className={classNames(`w-full h-full items-center`, {
                  "justify-end": index % 2 === 0,
                  "justify-start": index % 2 !== 0,
                })}
              >
                {item.oppositeContent}
              </Flex>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                style={{
                  color: item.dotColor,
                  border: "2px solid black",
                  backgroundImage: item.extraStyling,
                }}
              >
                <Text className="font-bold">{item.dotText}</Text>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }} fontFamily={"Inter"}>
              <Text variant="span" style={{ fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text
                variant="p"
                className={classNames(``, {
                  "text-start": index % 2 === 0,
                  "text-end": index % 2 !== 0,
                })}
              >
                {item.subTitle}
              </Text>
            </TimelineContent>
          </TimelineItem>
        </Tooltip>
      ))}
      <AboutMeModal item={selectedItem} />
    </Timeline>
  );
}
