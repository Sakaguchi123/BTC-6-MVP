/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('buy_list').del();
  await knex('buy_list').insert([
    {
      id: 1,
      product_name: '豚こま切れ',
      price: 500,
      category: 1,
      quantity: 200,
      production_area: '日本',
      supermarket_name: 'えぷろん 大林店',
      date: '2024-05-26'
    },
    {
      id: 2,
      product_name: 'とうふ',
      price: 250,
      category: 3,
      quantity: 3,
      production_area: '日本',
      supermarket_name: 'えぷろん 大林店',
      date: '2024-05-26'
    },
    {
      id: 3,
      product_name: 'キムチ',
      price: 350,
      category: 3,
      quantity: 1,
      production_area: '韓国',
      supermarket_name: 'えぷろん 大林店',
      date: '2024-05-26'
    },
    {
      id: 4,
      product_name: '卵',
      price: 199,
      category: 3,
      quantity: 10,
      production_area: '',
      supermarket_name: 'メグリア 本店',
      date: '2024-03-02'
    },
    {
      id: 5,
      product_name: 'りんご',
      price: 300,
      category: 2,
      quantity: 1,
      production_area: '日本',
      supermarket_name: 'メグリア エムパーク',
      date: '2024-04-15'
    },
    {
      id: 6,
      product_name: '豚こま切れ',
      price: 300,
      category: 1,
      quantity: 200,
      production_area: '日本',
      supermarket_name: 'えぷろん 大林店',
      date: '2024-05-26'
    },
    {
      id: 7,
      product_name: '豚こま切れ',
      price: 300,
      category: 1,
      quantity: 300,
      production_area: '日本',
      supermarket_name: 'えぷろん 大林店',
      date: '2024-04-05'
    },
    {
      id: 8,
      product_name: 'キムチ',
      price: 350,
      category: 3,
      quantity: 1,
      production_area: '韓国',
      supermarket_name: 'えぷろん 大林店',
      date: '2024-05-26'
    },
    {
      id: 9,
      product_name: 'キムチ',
      price: 200,
      category: 3,
      quantity: 1,
      production_area: '',
      supermarket_name: 'メグリア 本店',
      date: '2024-03-02'
    },
    {
      id: 10,
      product_name: 'キムチ',
      price: 150,
      category: 3,
      quantity: 1,
      production_area: '韓国',
      supermarket_name: 'メグリア 本店',
      date: '2024-04-15'
    },
    {
      id: 11,
      product_name: '豚こま切れ',
      price: 150,
      category: 1,
      quantity: 200,
      production_area: '日本',
      supermarket_name: 'えぷろん 大林店',
      date: '2024-05-30'
    },
    {
      id: 12,
      product_name: '豚こま切れ',
      price: 130,
      category: 1,
      quantity: 200,
      production_area: '日本',
      supermarket_name: 'えぷろん 大林店',
      date: '2024-05-31'
    },
    {
      id: 13,
      product_name: 'とうふ',
      price: 250,
      category: 3,
      quantity: 3,
      production_area: '',
      supermarket_name: 'メグリア 本店',
      date: '2024-05-03'
    },
    {
      id: 14,
      product_name: 'とうふ',
      price: 300,
      category: 3,
      quantity: 3,
      production_area: '日本',
      supermarket_name: 'メグリア エムパーク',
      date: '2024-05-03'
    },
    {
      id: 15,
      product_name: 'とうふ',
      price: 300,
      category: 3,
      quantity: 3,
      production_area: '日本',
      supermarket_name: 'メグリア エムパーク',
      date: '2024-05-03'
    },
    {
      id: 16,
      product_name: 'とうふ',
      price: 99,
      category: 3,
      quantity: 3,
      production_area: '日本',
      supermarket_name: 'えぷろん 大林店',
      date: '2024-05-03'
    },
    {
      id: 17,
      product_name: 'とうふ',
      price: 199,
      category: 3,
      quantity: 3,
      production_area: '',
      supermarket_name: 'えぷろん リブレ本宮店',
      date: '2024-12-05'
    },
    {
      id: 18,
      product_name: '豚こま切れ',
      price: 167,
      category: 1,
      quantity: 180,
      production_area: '日本',
      supermarket_name: 'メグリア エムパーク',
      date: '2024-5-27'
    },
    {
      id: 19,
      product_name: 'りんご',
      price: 150,
      category: 3,
      quantity: 2,
      production_area: '',
      supermarket_name: 'えぷろん 大林店',
      date: '2024-5-27'
    },
    {
      id: 20,
      product_name: 'ヨーグルト',
      price: 148,
      category: 3,
      quantity: 1,
      production_area: '',
      supermarket_name: 'フェルナ 緑ヶ丘店',
      date: '2024-5-27'
    },
    {
      id: 21,
      product_name: '鶏むね肉',
      price: 79,
      category: 1,
      quantity: 822,
      production_area: '',
      supermarket_name: 'フェルナ 緑ヶ丘店',
      date: '2024-5-27'
    },
    {
      id: 22,
      product_name: 'ブロッコリー',
      price: 149,
      category: 2,
      quantity: 1,
      production_area: '',
      supermarket_name: 'えぷろん リブレ本宮店',
      date: '2024-5-27'
    },
    {
      id: 23,
      product_name: 'サニーレタス',
      price: 99,
      category: 2,
      quantity: 1,
      production_area: '',
      supermarket_name: 'フェルナ 緑ヶ丘店',
      date: '2024-5-27'
    },
    {
      id: 24,
      product_name: 'とうふ',
      price: 100,
      category: 3,
      quantity: 3,
      production_area: '',
      supermarket_name: 'メグリア 本店',
      date: '2024-5-27'
    },
    {
      id: 25,
      product_name: 'とうふ',
      price: 250,
      category: 3,
      quantity: 1,
      production_area: '',
      supermarket_name: 'メグリア 本店',
      date: '2024-5-27'
    }
  ]);
};
