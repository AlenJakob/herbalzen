import { useEffect, useState } from "react";

export const useHzModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = () => {
		setIsOpen(true);
	};
	const onClose = () => {
		setIsOpen(false);
	};

	return { onOpen, onClose, isOpen };
};
