
import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onButtonClick = () => {
    setIsOpen(true);
  }; // add stopPropagation in child to prevent event bubbling
  const onModalClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return {
    isOpen,
    onButtonClick,
    onModalClose,
  };
};
export default useModal;
