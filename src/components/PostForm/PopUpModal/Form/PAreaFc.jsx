import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const PAreaFc = ({ register }) => {
  //-------------------------------------------------------

  return (
    <FormControl>
      <FormLabel color={'gray'} mt={2} mb={0}>
        産地
      </FormLabel>
      <Input {...register('production_area', {})} />
    </FormControl>
  );
};
