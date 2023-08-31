import { Flex } from "@ui/Flex";
import { ComponentLoadingSpinner } from "src/components/Atoms/LoadingSpinner";

export default function Loading() {
  return (
    <Flex className="overflow-auto min-h-full h-screen w-full justify-center items-center">
      <ComponentLoadingSpinner />
    </Flex>
  );
}
