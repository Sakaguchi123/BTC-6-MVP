import { Button } from '@chakra-ui/react';

export const ToggleSortBtn = (props) => {
  const { toggleBtn, setToggleBtn } = props;
  return (
    <>
      <Button
        ml={5}
        mt={1}
        size={'sm'}
        borderRadius={0}
        borderLeftRadius='20'
        bgColor={toggleBtn === 'price' ? 'teal' : ''}
        color={'white'}
        onClick={() => setToggleBtn('price')}
        _hover={{ bg: '' }}
      >
        価格
      </Button>
      <Button
        mt={1}
        size={'sm'}
        borderRadius={0}
        borderRightRadius='20'
        bgColor={toggleBtn === 'date' ? 'teal' : ''}
        color={'white'}
        _hover={{ bg: '' }}
        onClick={() => setToggleBtn('date')}
      >
        日付
      </Button>
    </>
  );
};
