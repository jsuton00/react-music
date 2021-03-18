import { useState } from 'react';

export const useToggle = () => {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => setOpen(!isOpen);

	return [isOpen, toggleMenu];
};
