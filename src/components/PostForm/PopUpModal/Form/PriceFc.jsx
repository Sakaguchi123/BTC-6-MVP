import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const PriceFc = ({ register }) => {
  //-------------------------------------------------------

  return (
    <FormControl>
      <FormLabel color={'gray'} mt={2} mb={0}>
        価格
      </FormLabel>
      <Input {...register('price', {})} />
    </FormControl>
  );
};
