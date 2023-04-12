import Button, { ButtonProps } from "@mui/material/Button";

function withButtonStyle<T extends ButtonProps>(
  WrappedComponent: React.ComponentType<T>
) {
  return function ButtonWrapper(props: T) {
    const { variant, ...rest } = props;
    return (
      <WrappedComponent variant={variant || "contained"} {...rest}>
        {props.children}
      </WrappedComponent>
    );
  };
}

const CustomButton = withButtonStyle(Button);

export default CustomButton;
