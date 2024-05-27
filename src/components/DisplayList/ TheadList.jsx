import { Thead, Th, Tr } from '@chakra-ui/react';

export const TheadList = () => {
  return (
    <>
      <Thead>
        <Tr>
          <Th color={'gray'} textAlign={'center'}>
            スーパー名
          </Th>
          <Th color={'gray'} textAlign={'center'}>
            食品名
          </Th>
          <Th color={'gray'} textAlign={'center'}>
            価格
          </Th>
          <Th color={'gray'} textAlign={'center'}>
            日付
          </Th>
        </Tr>
      </Thead>
    </>
  );
};
