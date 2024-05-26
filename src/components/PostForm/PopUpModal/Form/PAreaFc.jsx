import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const PAreaFc = ({ register }) => {
  //-------------------------------------------------------

  return (
    <FormControl>
      <FormLabel color={'gray'} mt={2} mb={0} fontSize={13}>
        産地
      </FormLabel>
      <Input size={'xs'} {...register('production_area', {})} />
    </FormControl>
  );
};
