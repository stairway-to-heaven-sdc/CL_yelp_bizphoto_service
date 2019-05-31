import React from 'react';
import {
  cleanup, render, fireEvent, getByTestId,
} from 'react-testing-library';
import Modal from '../Modal';

afterEach(cleanup);

test('modal shows the children and a close button', () => {
  // Arrange
  const handleClose = jest.fn();

  // Act
  const { getByText } = render(
    <Modal hide={handleClose} />,
  );
  // Assert
  expect(getByText('Test')).toBeTruthy();
  const button = getByTestId(document.body, 'close');
  // Act
  fireEvent.click(button);
  // Assert
  expect(handleClose).toHaveBeenCalledTimes(1);
});
