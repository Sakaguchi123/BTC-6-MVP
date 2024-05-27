import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SelectBtn } from './SelectBtn';
import { ToggleSortBtn } from './ToggleSortBtn';

export const ConditionBtn = (props) => {
  const { setSmSelect, setPnSelect, toggleBtn, setToggleBtn } = props;
  const [smOptions, setSmOptions] = useState([]);
  const [pnOptions, setPnOptions] = useState([]);

  //-------------------------------------------------------
  //スーパーごとに絞り込むoption
  const makeSmOptions = async () => {
    const smArr = await axios.get('/api/shop').then((res) => res.data);
    const tags = smArr.map((sm, i) => (
      <option value={sm} key={i}>
        {sm}
      </option>
    ));
    setSmOptions(tags);
  };
  //-------------------------------------------------------
  // 商品名ごとに絞り込むoption
  const makePnOptions = async () => {
    const smArr = await axios.get('/api/product').then((res) => res.data);
    const tags = smArr.map((pn, i) => (
      <option value={pn} key={i}>
        {pn}
      </option>
    ));
    setPnOptions(tags);
  };
  //-------------------------------------------------------
  useEffect(() => {
    makeSmOptions();
    makePnOptions();
  }, []);
  //-------------------------------------------------------

  return (
    <>
      <Box position='relative' padding='5' mt={39}>
        <Divider />
        <AbsoluteCenter bg='white' px='4'>
          リスト
        </AbsoluteCenter>
      </Box>
      <Box display={'flex'} ml={30}>
        <SelectBtn
          setSmSelect={setSmSelect}
          setPnSelect={setPnSelect}
          smOptions={smOptions}
          pnOptions={pnOptions}
        />
        <ToggleSortBtn toggleBtn={toggleBtn} setToggleBtn={setToggleBtn} />
      </Box>
    </>
  );
};
