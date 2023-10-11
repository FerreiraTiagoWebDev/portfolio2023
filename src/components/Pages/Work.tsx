import { Flex } from "@ui/layout";
import { WorkListTable } from "../Organisms/Work";

const WorkPage = () => {
  return (
    <Flex className="flex-col  h-screen w-full ">
      <WorkListTable />
    </Flex>
  );
};

export default WorkPage;
