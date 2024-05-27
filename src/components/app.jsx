import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/all.scss';
import { SearchFood } from './SearchFood';
import { PriceList } from './PriceList';
import { PostForm } from './PostForm/PostForm';
import { DisplayList } from './DisplayList/DisplayList';

axios.defaults.baseURL =
  import.meta.env.VITE_REACT_APP_BACKEND_URL || 'http://localhost:3000';

export const SearchFoodList = createContext();

export default function App() {
  const [fetchList, setFetchList] = useState([]);
  const [selectedFood, setSelectedFood] = useState('');
  const [tableData, setTableData] = useState([]);

  //---------------------------------------------------------
  useEffect(() => {
    axios.get('/api/list').then((res) => setFetchList(res.data));
  }, []);
  //---------------------------------------------------------

  //選択した商品のリストを取得する
  const getProductNameList = async (food) => {
    const productList = await axios
      .get(`/api/product/choice?productName=${food.slice(1)}`)
      .then((res) => res.data);
    makeTableData(productList);
  };

  //table表示用データ
  const makeTableData = (productList) => {
    const SMArr = Array.from(new Set(productList.map((obj) => obj.smName)));
    const tableData = SMArr.map((oneSM) => {
      const listBySM = productList.filter((obj) => oneSM === obj.smName);
      const priceList = listBySM.map((obj) => obj.price);

      const cheapestPrice = Math.min(...priceList);
      const highestPrice = Math.max(...priceList);
      const averagePrice =
        listBySM.reduce((acc, crr) => acc + crr.price, 0) / listBySM.length;

      return {
        smName: oneSM,
        cheapestPrice,
        highestPrice,
        averagePrice
      };
    });
    setTableData(tableData);
  };
  //---------------------------------------------------------

  return (
    <>
      <SearchFood
        fetchList={fetchList}
        setSelectedFood={setSelectedFood}
        getProductNameList={getProductNameList}
      />
      <PriceList
        fetchList={fetchList}
        selectedFood={selectedFood}
        tableData={tableData}
      />
      <DisplayList />
      <SearchFoodList.Provider value={[getProductNameList, selectedFood]}>
        <PostForm />
      </SearchFoodList.Provider>
    </>
  );
}
