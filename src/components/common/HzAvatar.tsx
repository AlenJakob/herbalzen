import { Avatar } from "@chakra-ui/react";

interface AvatarProps {
	size: string;
}
export const HzAvatar = ({ size = "sm" }: AvatarProps) => {
	return <Avatar size={size} name="Alen Jakob" />;
};
