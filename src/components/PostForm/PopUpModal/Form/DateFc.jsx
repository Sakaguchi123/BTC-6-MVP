import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const DateFc = ({ register }) => {
  //-------------------------------------------------------

  return (
    <FormControl>
      <FormLabel color={'gray'} mt={2} mb={0} fontSize={13}>
        日付
      </FormLabel>
      <Input size={'xs'} {...register('date', {})} />
    </FormControl>
  );
};
