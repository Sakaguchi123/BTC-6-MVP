import { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/all.scss';
import { SearchFood } from './SearchFood';
import { PriceList } from './PriceList';
import { PostForm } from './PostForm/PostForm';

axios.defaults.baseURL =
  import.meta.env.VITE_REACT_APP_BACKEND_URL || 'http://localhost:3000';

export default function App() {
  const [fetchList, setFetchList] = useState([]);
  const [selectedFood, setSelectedFood] = useState('');
  const [tableData, setTableData] = useState([]);

  //---------------------------------------------------------
  useEffect(() => {
    axios('/api/list').then((res) => setFetchList(res.data));
  }, []);
  //---------------------------------------------------------

  return (
    <>
      <SearchFood
        fetchList={fetchList}
        selectedFood={selectedFood}
        setSelectedFood={setSelectedFood}
        setTableData={setTableData}
      />
      <PriceList
        fetchList={fetchList}
        selectedFood={selectedFood}
        tableData={tableData}
      />
      <PostForm />
    </>
  );
}
