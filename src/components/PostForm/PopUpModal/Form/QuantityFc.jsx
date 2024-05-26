import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const QuantityFc = ({ register }) => {
  //-------------------------------------------------------

  return (
    <FormControl>
      <FormLabel color={'gray'} mt={2} mb={0} fontSize={13}>
        量(g)/個数
      </FormLabel>
      <Input size={'xs'} {...register('quantity', {})} />
    </FormControl>
  );
};
