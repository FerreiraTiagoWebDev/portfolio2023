import { Flex } from "@ui/layout";
import HomeTech from "src/components/Organisms/HomeTech/HomeTech";

const TechPage = () => {
  return (
    <Flex className="flex-col  h-screen w-full ">
      <HomeTech />
      <div>Tech page</div>
    </Flex>
  );
};

export default TechPage;
