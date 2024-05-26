import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
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
        size={'xs'}
        isCentered
        scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pb={2}>title</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={0}>
            {/* -------- */}
            <Form onClose={onClose} />
            {/* -------- */}
          </ModalBody>
          <ModalFooter pt={1}></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
