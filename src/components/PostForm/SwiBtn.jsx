import { AddIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

export const SwiBtn = (props) => {
  const { onOpen } = props;
  //-------------------------------------------------------

  return (
    <IconButton
      className='icon-button'
      isRound={true}
      variant='solid'
      colorScheme='teal'
      aria-label='Done'
      position={'fixed'}
      bottom={'3%'}
      right={'3%'}
      size='lg'
      icon={<AddIcon />}
      onClick={onOpen}
    />
  );
};
