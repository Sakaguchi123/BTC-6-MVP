import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CreatableSelect } from 'chakra-react-select';
import { Button, FormControl, FormLabel } from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';

import { SearchFoodList } from '../../../App';
import { CategoryFc } from './CategoryFc';
import { PriceFc } from './PriceFc';
import { QuantityFc } from './QuantityFc';
import { DateFc } from './DateFc';
import { PAreaFc } from './PAreaFc';
import { ProductNameFc } from './ProductName';

export const Form = ({ onClose }) => {
  const [smOptions, setSMOptions] = useState([]);
  const [getProductNameList, selectedFood] = useContext(SearchFoodList);

  //react-hook-formのカスタムフック
  const { register, handleSubmit, control } = useForm();

  //-------------------------------------------------------
  const smList = async () => {
    await axios
      .get('/api/shop')
      .then((res) => res.data)
      .then((res) => res.map((SM) => ({ value: SM, label: SM })))
      .then((res) => setSMOptions(res));
  };
  //-------------------------------------------------------
  useEffect(() => {
    smList();
  }, []);
  //-------------------------------------------------------
  const onSubmit = async (data) => {
    await axios.post('/api/list', data).then((res) => console.log(res));
    getProductNameList(selectedFood);
  };
  //-------------------------------------------------------

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ----------------------------- */}
        {/* <SmFc control={control} /> */}
        <FormControl>
          <FormLabel color={'gray'} mb={0}>
            スーパー名
          </FormLabel>
          <Controller
            name='supermarket_name'
            control={control}
            render={({ field }) => (
              <CreatableSelect
                placeholder='入力 or 選択'
                options={smOptions}
                closeMenuOnSelect={true}
                selectedOptionColorScheme='teal'
                value={smOptions.find((x) => x.value === field.value)}
                onChange={(val) => {
                  field.onChange(val?.value);
                }}
                isClearable
              />
            )}
          />
        </FormControl>

        {/* ----------------------------- */}
        <ProductNameFc control={control} />
        <CategoryFc control={control} />
        <PriceFc register={register} />
        <QuantityFc register={register} />
        <DateFc register={register} />
        <PAreaFc register={register} />
        {/* ----------------------------- */}

        <Button colorScheme='teal' type='submit' onClick={onClose} m={5} left={'80%'}>
          保存
        </Button>
      </form>
    </>
  );
};
