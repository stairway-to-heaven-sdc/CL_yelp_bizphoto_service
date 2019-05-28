import React from 'react';
import Icon from '../Icon/Icon';
import Modal from '../Modal/Modal';
import useModal from '../../lib/useModal';
// TODO: reuse
const ActBtn = ({
  style, className, name, text,
}) => {
  const { isOpen, onButtonClick, onModalClose } = useModal();
  return (
    <>
      <span className="m-btn m-btn--small m-btn--secondary" onClick={onButtonClick} role="button">
        <span style={style} className={className}>
          <Icon name={name} />
        </span>
        {text}
        {isOpen ? <Modal hide={onModalClose} /> : (null)}
      </span>
    </>
  );
};
export default ActBtn;
