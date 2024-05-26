import { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { CreatableSelect } from 'chakra-react-select';
import { Controller, useForm } from 'react-hook-form';

export const SmFc = () => {
  const [smOptions, setSMOptions] = useState([]);
  const { control } = useForm();

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

  return (
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
  );
};
