import axios from 'axios';
import {
  Input,
  NumberInput,
  Select,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

import '../styles/searchFood.scss';

export const SearchFood = (props) => {
  const { fetchList, selectedFood, setSelectedFood, setTableData } = props;

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
  //選択した商品のリストを取得する
  const getProductNameList = async (food) => {
    const productList = await axios
      .get(`/api/product?productName=${food.slice(1)}`)
      .then((res) => res.data);
    makeTableData(productList);
  };

  //table表示用データ
  const makeTableData = (productList) => {
    const SMArr = Array.from(new Set(productList.map((obj) => obj.SMName)));
    const tableData = SMArr.map((oneSM) => {
      const listBySM = productList.filter((obj) => oneSM === obj.SMName);
      const priceList = listBySM.map((obj) => obj.price);

      const cheapestPrice = Math.min(...priceList);
      const highestPrice = Math.max(...priceList);
      const averagePrice =
        listBySM.reduce((acc, crr) => acc + crr.price, 0) / listBySM.length;

      return {
        SMName: oneSM,
        cheapestPrice,
        highestPrice,
        averagePrice
      };
    });
    setTableData(tableData);
  };
  //---------------------------------------------------------

  return (
    <div id='search-food-container'>
      <Select
        onChange={(e) => {
          setSelectedFood(e.target.value);
          getProductNameList(e.target.value);
        }}
        placeholder='食品名'
        size='sm'
        ml={3}
        mr={3}
      >
        {options}
      </Select>

      <p>￥</p>

      <Input id='price' placeholder='価格' type='number' size='sm' w={150} mr={1} />

      <NumberInput size={'sm'} min={0} w={150} ml={3} mr={1}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <p>{selectedFood.slice(0, 1) === '1' ? 'g' : '個'}</p>
    </div>
  );
};
