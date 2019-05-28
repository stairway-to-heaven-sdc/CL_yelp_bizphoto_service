import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import useClickOutside from '../../lib/useClickOutside';
// TODO: customize content
const Modal = ({ hide }) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, hide);
  return ReactDOM.createPortal(
    <>
      <div className="modal modal--large">
        <div className="modal_inner" ref={modalRef}>
          <div className="modal_close" role="button" onClick={hide}>&times;</div>
          <div className="modal_dialog" role="dialog">
            <div className="save-to-collection-modal">
              <div className="collection-list u-vertical-scrollbar">
                <ul className="ylist ylist-bordered">
                  <li>
                    <div className="media-block media-block--12">
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
export default Modal;
