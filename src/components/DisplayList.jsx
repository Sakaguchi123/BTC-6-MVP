import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Select,
  Box,
  Td,
  Divider,
  AbsoluteCenter
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const DisplayList = () => {
  const [trTag, setTrTag] = useState([]);
  const [smSelect, setSmSelect] = useState('');
  const [pnSelect, setPnSelect] = useState('');
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
  const smSelectFilter = (list) => list.filter((obj) => obj.supermarketName === smSelect);
  const pnSelectFilter = (list) => list.filter((obj) => obj.productName === pnSelect);

  const tags = (list) => {
    return list.map((obj) => {
      return (
        <Tr key={obj.id}>
          <Td textAlign={'center'}>{obj.supermarketName}</Td>
          <Td textAlign={'center'}>{obj.productName}</Td>
          <Td textAlign={'center'}>{obj.price}</Td>
          <Td textAlign={'center'}>{obj.date}</Td>
        </Tr>
      );
    });
  };

  // tableタグを作成;
  const createTrTag = async () => {
    const allListData = await axios.get('/api/list').then((res) => res.data);
    //!(if使わない方法を考えたい)
    if (smSelect && pnSelect) {
      const smFilterList = smSelectFilter(allListData);
      const pnFilterList = pnSelectFilter(smFilterList);
      setTrTag(tags(pnFilterList));
    } else if (smSelect && pnSelect === '') {
      const smFilterList = smSelectFilter(allListData);
      setTrTag(tags(smFilterList));
    } else if (smSelect === '' && pnSelect) {
      const pnFilterList = pnSelectFilter(allListData);
      setTrTag(tags(pnFilterList));
    } else {
      setTrTag(tags(allListData));
    }
  };
  //-------------------------------------------------------
  useEffect(() => {
    makeSmOptions();
    makePnOptions();
    createTrTag();
  }, [smSelect, pnSelect]);
  //-------------------------------------------------------

  return (
    <>
      <Box position='relative' padding='5' mt={39}>
        <Divider />
        <AbsoluteCenter bg='white' px='4'>
          全リスト
        </AbsoluteCenter>
      </Box>
      <Box display={'flex'} ml={30}>
        <Select
          placeholder='スーパーごとに絞り込む'
          color={'gray'}
          w={250}
          onChange={(e) => setSmSelect(e.target.value)}
        >
          {smOptions}
        </Select>
        <Select
          placeholder='食品ごとに絞り込む'
          color={'gray'}
          w={200}
          ml={5}
          onChange={(e) => setPnSelect(e.target.value)}
        >
          {pnOptions}
        </Select>
      </Box>
      <TableContainer mt={5} className='tableContainer'>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th color={'gray'} textAlign={'center'}>
                スーパー名
              </Th>
              <Th color={'gray'} textAlign={'center'}>
                食品名
              </Th>
              <Th color={'gray'} textAlign={'center'}>
                価格
              </Th>
              <Th color={'gray'} textAlign={'center'}>
                日付
              </Th>
            </Tr>
          </Thead>
          {/* --------------------- */}

          <Tbody>{trTag}</Tbody>

          {/* --------------------- */}
        </Table>
      </TableContainer>
    </>
  );
};
