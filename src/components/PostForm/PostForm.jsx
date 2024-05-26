import { useDisclosure } from '@chakra-ui/react';

import { PopUpModal } from './PopUpModal/PopUpModal';
import { SwiBtn } from './SwiBtn';

export const PostForm = () => {
  //chakra-ui カスタムフック
  const { isOpen, onOpen, onClose } = useDisclosure();
  //-------------------------------------------------------

  return (
    <>
      <SwiBtn onOpen={onOpen} />
      <PopUpModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
