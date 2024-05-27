import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const DateFc = ({ register }) => {
  //-------------------------------------------------------
  const formatDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return `${year}-${month}-${day}`;
  };
  //-------------------------------------------------------

  return (
    <FormControl>
      <FormLabel color={'gray'} mt={2} mb={0}>
        日付
      </FormLabel>
      <Input {...register('date', {})} defaultValue={formatDate()} />
    </FormControl>
  );
};
