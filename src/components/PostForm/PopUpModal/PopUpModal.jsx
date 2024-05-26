import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';
import { Form } from './Form';

export const PopUpModal = (props) => {
  const { isOpen, onClose } = props;
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
          <ModalBody pt={0} pb={0}>
            {/* -------- */}
            <Form />
            {/* -------- */}
          </ModalBody>
          <ModalFooter pt={1}>
            <Button colorScheme='teal' size={'sm'} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
