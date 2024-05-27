import { Select } from '@chakra-ui/react';

import '../styles/all.scss';

export const SearchFood = (props) => {
  const { fetchList, setSelectedFood, getProductNameList } = props;

  //---------------------------------------------------------
  //商品名の重複削除
  const optionsValue = fetchList.filter(
    (obj, i, arr) =>
      arr.findIndex((nextObj) => obj.productName === nextObj.productName) === i
  );
  //全商品をドロップダウンの選択肢にいれる
  const options = optionsValue.map((obj) => (
    <option key={obj.id} value={obj.category + obj.productName}>
      {obj.productName}
    </option>
  ));
  //---------------------------------------------------------

  return (
    <div id='search-food-container'>
      <Select
        onChange={(e) => {
          setSelectedFood(e.target.value);
          getProductNameList(e.target.value);
        }}
        placeholder='食品名'
        ml={3}
        mr={3}
      >
        {options}
      </Select>
    </div>
  );
};
