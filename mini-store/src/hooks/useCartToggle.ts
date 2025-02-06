import { useState } from 'react';

const useCartToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen((prevState) => !prevState);
    };

    return { isOpen, toggleCart };
};

export default useCartToggle;