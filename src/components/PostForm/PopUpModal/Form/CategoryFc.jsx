import { FormControl, FormLabel } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { Controller } from 'react-hook-form';

export const CategoryFc = ({ control }) => {
  //-------------------------------------------------------
  const categoryOptions = [
    { value: '肉', label: '肉', category: '1' },
    { value: '野菜', label: '野菜', category: '2' },
    { value: 'その他', label: 'その他', category: '3' }
  ];
  //-------------------------------------------------------

  return (
    <FormControl>
      <FormLabel color={'gray'} mt={2} mb={0} fontSize={13}>
        カテゴリー
      </FormLabel>

      <Controller
        name='category'
        control={control}
        render={({ field }) => (
          <Select
            size='xs'
            selectedOptionColorScheme='teal'
            options={categoryOptions}
            value={categoryOptions.find((x) => x.value === field.value)}
            onChange={(val) => {
              field.onChange(val?.category);
            }}
          />
        )}
      />
    </FormControl>
  );
};
