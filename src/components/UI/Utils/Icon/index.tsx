import { IconBaseProps, IconType } from 'react-icons';

interface IIconProps extends IconBaseProps {
  iconName: IconType;
}

export function Icon({
  className = '',
  color,
  iconName: Icon,
  size = 16,
  ...rest
}: IIconProps): JSX.Element {
  return <Icon className={className} color={color} size={size} {...rest} />;
}
