import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { Form } from './Form/Form';

export const PopUpModal = (props) => {
  const { isOpen, onClose } = props;
  //-------------------------------------------------------

  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        scrollBehavior='inside'
        size='lg'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pb={2}>登録</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={0}>
            {/* -------- */}
            <Form onClose={onClose} />
            {/* -------- */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
