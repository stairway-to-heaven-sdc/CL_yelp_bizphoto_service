import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Modal from '../Modal/Modal';
import useModal from '../../lib/useModal';

const ActBtn = ({
  style, className, name, text,
}) => {
  const { isOpen, onButtonClick, onModalClose } = useModal();
  return (
    <>
      <span className="m-btn m-btn--small m-btn--secondary" onClick={onButtonClick} role="button" tabIndex={0} onKeyPress={() => {}}>
        <span style={style} className={className}>
          <Icon name={name} />
        </span>
        {text}
        {isOpen ? <Modal hide={onModalClose} /> : (null)}
      </span>
    </>
  );
};

ActBtn.propTypes = {
  style: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ActBtn;
