import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const QuantityFc = ({ register }) => {
  //-------------------------------------------------------

  return (
    <FormControl>
      <FormLabel color={'gray'} mt={2} mb={0}>
        量(g)/個数
      </FormLabel>
      <Input {...register('quantity', {})} />
    </FormControl>
  );
};
