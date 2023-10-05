import { Container } from "@ui/Container";
import { Heading } from "@ui/Heading";
import { Text } from "@ui/Text";
import { Flex } from "@ui/layout";
import AboutMeTimeline from "../Organisms/About/Timeline/AboutMeTimeline";

const AboutPage = () => {
  return (
    <Container className="flex flex-col items-center justify-center px-2 py-8 md:px-8 my:12 md:my-14">
      <Flex className="justify-center flex-col">
        <Flex className="flex-col justify-center p-4 my-8">
          <Heading className="py-2">Tiago Ferreira</Heading>
          <Text className="text-justify">
            Portuguese Speech Therapist turned Web Developer in 2021.
          </Text>
          <Text variant="p" className="text-justify">
            I feel grateful for the path I have taken so far, and strive to
            learn more!
          </Text>
        </Flex>
        <AboutMeTimeline />
      </Flex>
    </Container>
  );
};

export default AboutPage;
