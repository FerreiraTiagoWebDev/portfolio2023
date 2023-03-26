interface IComponentIsVisibleProps {
  children: React.ReactNode;
  when: boolean;
}

const ComponentIsVisible = ({
  children,
  when,
}: // eslint-disable-next-line no-undef
IComponentIsVisibleProps): JSX.Element => {
  return <>{when && children}</>;
};

export default ComponentIsVisible;
