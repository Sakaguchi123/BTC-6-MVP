import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

import '../styles/priceList.scss';

export const PriceList = (props) => {
  const { tableData } = props;

  //-------------------------------------------------------
  //tableタグを作成（並び替えはしない予定のため、keyはindex）
  const createTrTag = tableData.map((obj, i) => {
    return (
      <Tr key={i}>
        <Td textAlign={'center'}>{obj.SMName}</Td>
        <Td textAlign={'center'}>
          <ArrowDownIcon color={'blue'} boxSize={5} />
          {obj.cheapestPrice + '円'}
        </Td>
        <Td textAlign={'center'}>
          <ArrowUpIcon color={'red'} boxSize={5} />
          {obj.highestPrice + '円'}
        </Td>
        <Td textAlign={'center'}>{obj.averagePrice + '円'}</Td>
      </Tr>
    );
  });
  //-------------------------------------------------------

  return (
    <div className='tableContainer'>
      {tableData.length === 0 ?
        <p>食品名を選択してください</p>
      : <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th color={'gray'} textAlign={'center'}>
                  スーパー名
                </Th>
                <Th color={'rgb(95, 129, 214)'} textAlign={'center'}>
                  最安値
                </Th>
                <Th color={'rgb(214, 95, 125)'} textAlign={'center'}>
                  最高値
                </Th>
                <Th color={'gray'} textAlign={'center'}>
                  平均
                </Th>
              </Tr>
            </Thead>
            {/* --------------------- */}

            <Tbody>{createTrTag}</Tbody>

            {/* --------------------- */}
          </Table>
        </TableContainer>
      }
    </div>
  );
};
