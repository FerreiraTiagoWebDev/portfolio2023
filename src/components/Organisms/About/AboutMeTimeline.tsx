"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Tooltip } from "@mui/material";
import { Link } from "@ui/Link";
import { Text } from "@ui/Text";
import { Flex } from "@ui/layout";
import classNames from "classnames";
import Image from "next/image";
import { ABOUT_ME_TIMELINE_ITEMS } from "src/lib/Constants/aboutMeTimeline";
export default function AboutMeTimeline() {
  return (
    <Timeline
      position="alternate"
      className="bg-slate-100 my-6"
      sx={{
        border: "4px  #273e47",
        borderRadius: "25px",
        position: "relative",
      }}
    >
      <Text className="font-bold">by year...</Text>
      {ABOUT_ME_TIMELINE_ITEMS.map((item, index) => (
        <TimelineItem key={item.id} sx={{ my: 3 }}>
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
              <Text className="bold">{item.dotText}</Text>
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
      ))}

      <Link
        href={"/assets/cv/curriculum.pdf"}
        target="_blank"
        rel="noreferrer"
        className="bg-slate-400 rounded-full absolute bottom-[-40px] left-[50%] transform -translate-x-1/2 p-4 py-8 cursor-pointer"
        hoverVariant="opacity"
        download="document.pdf"
      >
        <Tooltip title="Download CV">
          <Image src="/assets/icons/cv.png" width={40} height={40} alt="cv" />
        </Tooltip>
      </Link>
      {/* <FaBusinessTime size={30} className="text-white" /> */}
    </Timeline>
  );
}
