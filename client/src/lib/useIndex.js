import { useState } from 'react';

const useIndex = (initialIndex = 0, initialLen = 3) => {
  const [index, setIndex] = useState(initialIndex);
  const len = initialLen;
  const handleright = () => {
    if (index < len - 2) {
      setIndex(index + 1);
    }
  };
  const handleleft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return { index, handleleft, handleright };
};

export default useIndex;
