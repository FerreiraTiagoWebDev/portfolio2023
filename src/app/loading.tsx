import { Flex } from "@ui/layout";
import { ComponentLoadingSpinner } from "src/components/Atoms/LoadingSpinner";

export default function Loading() {
  return (
    <Flex className="overflow-auto h-[65vh] md:h-[75vh] w-full justify-center items-center">
      <ComponentLoadingSpinner />
    </Flex>
  );
}
