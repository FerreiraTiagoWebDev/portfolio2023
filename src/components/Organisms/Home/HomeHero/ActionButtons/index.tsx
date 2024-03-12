import { Button } from "@ui/Button";

import { Flex } from "@ui/layout";
import Link from "next/link";

const HomeHeroActionButtons = () => {
  return (
    <Flex className="items-center justify-center gap-x-2">
      <Link href="/about">
        <Button design="primary">About</Button>
      </Link>
      <Link href="/work">
        <Button design="secondary">Work</Button>
      </Link>
    </Flex>
  );
};

export default HomeHeroActionButtons;
