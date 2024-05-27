import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CreatableSelect } from 'chakra-react-select';
import { Button, FormControl, FormLabel, useToast } from '@chakra-ui/react';
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
  const toast = useToast();

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
  //post
  const onSubmit = async (data) => {
    //100g or 1個ごとの価格計算
    const meatCal = () => (data.price = Math.round((data.price / data.quantity) * 100));
    const otherCal = () => (data.price = data.price / data.quantity);
    data.category === '1' ? meatCal() : otherCal();

    const post = new Promise((resolve, reject) => {
      axios
        .post('/api/list', data)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });

    toast.promise(post, {
      position: 'top',
      success: { title: 'Promise resolved', description: '登録されました！' },
      error: { title: 'Promise rejected', description: 'エラーが発生しました。' },
      loading: {
        title: 'Promise pending',
        description: 'データ送信中です。'
      }
    });

    //リストの再レンダリング
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
