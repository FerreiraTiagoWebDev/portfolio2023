import { Container } from "@ui/Container";
import { Heading } from "@ui/Heading";
import { Text } from "@ui/Text";
import { Flex } from "@ui/layout";
import Hobbies from "../Organisms/About/Hobbies";
import AboutMeTimeline from "../Organisms/About/Timeline/AboutMeTimeline";

const AboutPage = () => {
  return (
    <Container className="flex flex-col items-center justify-center px-2 py-8 md:px-8 ">
      <Flex className="justify-center flex-col">
        <Flex className="flex-col justify-center p-4">
          <Heading className="py-2">Tiago Ferreira</Heading>
          <Text className="text-justify">
            Portuguese Speech Therapist turned Web Developer in 2021.
          </Text>
          <Text variant="p" className="text-justify">
            I feel grateful for the path I have taken so far, and strive to
            learn more!
          </Text>
          <Flex className="mt-4 flex-col">
            <Text className="text-justify font-semibold">Hobbies:</Text>
            <Hobbies />
          </Flex>
        </Flex>
        <AboutMeTimeline />
      </Flex>
    </Container>
  );
};

export default AboutPage;
