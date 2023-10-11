"use client";

import { IconButton, Tooltip } from "@mui/material";
import { Link } from "@ui/Link";
import { Flex } from "@ui/layout";
import { FaChess } from "react-icons/fa";
import { GiGuitarBassHead } from "react-icons/gi";
import { PiSoccerBallFill } from "react-icons/pi";

export default function Hobbies() {
  return (
    <Flex className="py-4 gap-4">
      <Link
        href="https://www.chess.com/member/ptferreirabe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tooltip title="Chess">
          <IconButton>
            <FaChess size={30} className="text-blueDarkest" />
          </IconButton>
        </Tooltip>
      </Link>
      <Link
        href="https://soundcloud.com/three-angled-mirror"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tooltip title="Bass">
          <IconButton>
            <GiGuitarBassHead size={30} className="text-blueDarkest" />
          </IconButton>
        </Tooltip>
      </Link>
      <Tooltip title="Indoor Soccer">
        <IconButton>
          <PiSoccerBallFill size={30} className="text-blueDarkest" />
        </IconButton>
      </Tooltip>
    </Flex>
  );
}
