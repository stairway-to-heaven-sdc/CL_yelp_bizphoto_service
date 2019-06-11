import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import useClickOutside from '../../lib/useClickOutside';

const Modal = ({ hide }) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, hide);
  return ReactDOM.createPortal(
    <>
      <div className="modal modal--large">
        <div className="modal_inner" ref={modalRef}>
          <div className="modal_close" role="button" data-testid="close" onClick={hide} tabIndex={0} onKeyPress={() => {}}>&#215;</div>
          <div className="modal_dialog" role="dialog">
            <div className="save-modal">
              <div className="save-list">
                <ul className="list">
                  <li>
                    <div className="media-block">
            Test
                    </div>
                  </li>
                </ul>
              </div>
              <span className="m-btn m-btn--secondary u-space-t3">
                <span>Save to a New Collection</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>, document.body,
  );
};
Modal.propTypes = {
  hide: PropTypes.func.isRequired,
};
export default Modal;
