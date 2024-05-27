import { Select } from '@chakra-ui/react';

export const SelectBtn = (props) => {
  const { setSmSelect, smOptions, setPnSelect, pnOptions } = props;

  return (
    <>
      <Select
        placeholder='スーパーごとに絞り込む'
        color={'gray'}
        w={250}
        onChange={(e) => setSmSelect(e.target.value)}
      >
        {smOptions}
      </Select>

      <Select
        placeholder='食品ごとに絞り込む'
        color={'gray'}
        w={200}
        ml={5}
        onChange={(e) => setPnSelect(e.target.value)}
      >
        {pnOptions}
      </Select>
    </>
  );
};
