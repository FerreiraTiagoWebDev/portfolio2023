import { TextField } from "@ui/form";
import { Flex } from "@ui/layout";
import { FaArrowDown, FaInfoCircle } from "react-icons/fa";

const ChatUi = () => {
  return (
    <Flex className="w-fit min-w-[275px] items-center">
      <Flex className="items-center justify-center">
        <TextField
          containerProps={{
            labelIcon: (
              <span>
                <FaInfoCircle size={18} className="text-muisecondary ml-2" />
              </span>
            ),
            label: "Ask me anything...",
            icon: FaArrowDown,
            iconPosition: "right",
            labelProps: {
              className: "text-muisecondary",
              variants: {
                design: "admin",
              },
            },
            design: "admin",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default ChatUi;
