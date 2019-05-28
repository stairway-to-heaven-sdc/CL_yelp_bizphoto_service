import React from 'react';
import Icon from '../Icon/Icon';
import Modal from '../Modal/Modal';
import useModal from '../lib/useModal';
// TODO: reuse
const Bookmark = () => {
  const { isOpen, onButtonClick, onModalClose } = useModal();
  return (
    <>
      <span className="m-btn m-btn--small m-btn--secondary" onClick={onButtonClick} role="button">
        <span style={{ width: '14px', height: '14px' }} className="icon icon--size-14 icon--currentColor">
          <Icon name="14x14_save" />
        </span>
        <span className="save-text">Save</span>
        {isOpen ? <Modal hide={onModalClose} /> : (null)}
      </span>
    </>
  );
};
export default Bookmark;
