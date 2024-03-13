import { Heading } from "@ui/Heading";
import { Flex } from "@ui/layout";

const HomeHeroSubtitle = () => {
  return (
    <Flex className={"relative mb-12 justify-center"}>
      <Heading
        variant="h2"
        gradient="primary"
        className="relative text-md py-1"
      >
        Crafting engaging user experiences
        <span
          className="absolute inset-0 text-transparent text-shadow"
          style={{
            textShadow: "37px 34px 3px rgba(136, 128, 128, 0.8)",
            textDecoration: "line-through",
            zIndex: -1,
          }}
        >
          Crafting broken user experiences
        </span>
      </Heading>
    </Flex>
  );
};

export default HomeHeroSubtitle;
