import { Select, CreatableSelect } from 'chakra-react-select';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react';

const categoryOptions = [
  { value: '肉', label: '肉', category: '1' },
  { value: '野菜', label: '野菜', category: '2' },
  { value: 'その他', label: 'その他', category: '3' }
];

export const Form = () => {
  return (
    <FormControl>
      {/* ----------------------------- */}
      <FormLabel color={'gray'} mb={0} fontSize={13}>
        スーパー名
      </FormLabel>
      <CreatableSelect
        placeholder='入力 or 選択'
        options={categoryOptions}
        closeMenuOnSelect={true}
        selectedOptionColorScheme='teal'
        size='xs'
      />
      {/* ----------------------------- */}
      <FormLabel color={'gray'} mt={2} mb={0} fontSize={13}>
        商品名
      </FormLabel>
      <CreatableSelect
        placeholder='入力 or 選択'
        options={categoryOptions}
        closeMenuOnSelect={true}
        selectedOptionColorScheme='teal'
        size='xs'
      />
      {/* ----------------------------- */}
      <FormLabel color={'gray'} mt={2} mb={0} fontSize={13}>
        カテゴリー
      </FormLabel>
      <Select
        placeholder='Select country'
        options={categoryOptions}
        closeMenuOnSelect={true}
        selectedOptionColorScheme='teal'
        size='xs'
      />
      {/* ----------------------------- */}
      <FormLabel color={'gray'} mt={2} mb={0} fontSize={13}>
        価格
      </FormLabel>
      <Input size={'xs'} />
      {/* ----------------------------- */}
      <FormLabel color={'gray'} mt={2} mb={0} fontSize={13}>
        量(g)/個数
      </FormLabel>
      <Input size={'xs'} />
      {/* ----------------------------- */}
      <FormLabel color={'gray'} mt={2} mb={0} fontSize={13}>
        日付
      </FormLabel>
      <Input size={'xs'} />
      {/* ----------------------------- */}
      <FormLabel color={'gray'} mt={2} mb={0} fontSize={13}>
        産地
      </FormLabel>
      <Input size={'xs'} />
      {/* ----------------------------- */}
      <FormHelperText></FormHelperText>
    </FormControl>
  );
};
