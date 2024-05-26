import { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { CreatableSelect } from 'chakra-react-select';
import { Controller } from 'react-hook-form';

export const ProductNameFc = ({ control }) => {
  const [productOptions, setProductOptions] = useState([]);

  //-------------------------------------------------------
  const productList = async () => {
    await axios
      .get('/api/product')
      .then((res) => res.data)
      .then((res) => res.map((product) => ({ value: product, label: product })))
      .then((res) => setProductOptions(res));
  };
  //-------------------------------------------------------
  useEffect(() => {
    productList();
  }, []);
  //-------------------------------------------------------

  return (
    <FormControl>
      <FormLabel color={'gray'} mt={2} mb={0} fontSize={13}>
        商品名
      </FormLabel>

      <Controller
        name='product_name'
        control={control}
        render={({ field }) => (
          <CreatableSelect
            placeholder='入力 or 選択'
            options={productOptions}
            closeMenuOnSelect={true}
            selectedOptionColorScheme='teal'
            size='xs'
            value={productOptions.find((x) => x.value === field.value)}
            onChange={(val) => {
              field.onChange(val?.value);
            }}
            isClearable
          />
        )}
      />
    </FormControl>
  );
};
