import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  Tbody,
  Tr,
  TableContainer,
  Td,
  TableCaption,
  IconButton
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

import { ConditionBtn } from './ConditionBtn/ConditionBtn';
import { TheadList } from './ TheadList';

export const DisplayList = () => {
  const [trTag, setTrTag] = useState([]);
  const [smSelect, setSmSelect] = useState('');
  const [pnSelect, setPnSelect] = useState('');
  const [toggleBtn, setToggleBtn] = useState('price');
  const [showPartList, setShowPartList] = useState(false);

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
  const createTrTag = async (limit) => {
    const allListData = await axios
      .get(`/api/list?limit=${limit}`)
      .then((res) => res.data)
      .then((res) =>
        //sort処理
        toggleBtn === 'price' ?
          res.sort((a, b) => a.price - b.price)
        : res.sort((a, b) => (a.date < b.date ? 1 : -1))
      );
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
  const allList = (num) => {
    createTrTag(num);
    setShowPartList(!showPartList);
  };
  //-------------------------------------------------------
  useEffect(() => {
    smSelect || pnSelect ? createTrTag(200) : createTrTag(5);
  }, [smSelect, pnSelect, toggleBtn]);
  //-------------------------------------------------------

  return (
    <>
      <ConditionBtn
        setSmSelect={setSmSelect}
        setPnSelect={setPnSelect}
        setToggleBtn={setToggleBtn}
        toggleBtn={toggleBtn}
      />

      <TableContainer mt={5} className='tableContainer'>
        <Table variant='simple'>
          <TableCaption>
            {showPartList ?
              <IconButton
                backgroundColor={'white'}
                onClick={() => allList(5)}
                icon={<TriangleUpIcon />}
              />
            : <IconButton
                backgroundColor={'white'}
                onClick={() => allList(100)}
                icon={<TriangleDownIcon />}
              />
            }
          </TableCaption>
          <TheadList />
          {/* --------------------- */}
          <Tbody>{trTag}</Tbody>
          {/* --------------------- */}
        </Table>
      </TableContainer>
    </>
  );
};
