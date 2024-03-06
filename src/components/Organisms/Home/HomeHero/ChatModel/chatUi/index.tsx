import { Text } from "@ui/Text";
import { TextField } from "@ui/form";
import { Container, Flex } from "@ui/layout";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaInfoCircle } from "react-icons/fa";

const ChatUi = () => {
  const [inputValue, setInputValue] = useState("");
  const isOpenRef = useRef(false);

  useEffect(() => {
    isOpenRef.current = inputValue.length > 0;
  }, [inputValue]);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Flex className="my-4 w-fit min-w-[275px] items-center flex-col">
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
              iconProps: {
                className:
                  "text-muisecondary rounded-lg bg-white p-1 hover:cursor-pointer",
                onClick: () => console.log("clicked"),
              },
              iconPosition: "right",
              labelProps: {
                className: "text-muisecondary font-body",
                variants: {
                  design: "admin",
                },
              },
              design: "admin",
            }}
            value={inputValue}
            onChange={handleChange}
          />
        </Flex>
      </Flex>
      <Container>
        <Flex
          className={classNames(
            "bg-black min-h-[200px] transition-all duration-300 transform overflow-hidden",
            {
              "max-h-0 opacity-0 scale-95": !isOpenRef.current,
              "max-h-96 opacity-100 scale-100": isOpenRef.current,
            }
          )}
        >
          <Text className="text-muisecondary">{inputValue}</Text>
        </Flex>
      </Container>
    </>
  );
};

export default ChatUi;
