import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const DateFc = ({ register }) => {
  //-------------------------------------------------------

  return (
    <FormControl>
      <FormLabel color={'gray'} mt={2} mb={0}>
        日付
      </FormLabel>
      <Input {...register('date', {})} />
    </FormControl>
  );
};
