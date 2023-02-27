import FlexCustom from "@ui/FlexBox";
import H1 from "@ui/Heading";
import TextCustom from "@ui/Text";

const HomeTitle = () => {
  return (
    <FlexCustom
      direction="flex-col"
      padding={4}
      justifyContent="justify-center"
      style={{
        height: "20vh",
        width: "70vw",
        backgroundImage: "linear-gradient(to top, #faf5e6, #fdfcf8, white)",
      }}
    >
      <H1>Front-end Developer</H1>
      <TextCustom>
        Passionate about pushing the boundaries of web development
      </TextCustom>
    </FlexCustom>
  );
};

export default HomeTitle;
