import Ionicons from "@expo/vector-icons/Ionicons";

type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  onPress?: () => void;
};

const IconButton = ({
  icon,
  size = 30,
  color = 'black',
  onPress,
}: IconButtonProps) => {
  return (
    <Ionicons
      name={icon}
      size={size}
      color={color}
      onPress={onPress}
    />
  );
};

export default IconButton;