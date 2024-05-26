const knex = require('./knex');
const cors = require('cors');
const express = require('express');

//-------------------------------------------------------
const app = express();
const PORT = process.env.PORT || 3000;
//-------------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));
//-------------------------------------------------------
//確認用
app.get('/api', (req, res) => {
  res.send('hello');
});
//-------------------------------------------------------

//return : 登録されている全リスト（Array[Object]）
app.get('/api/list', (req, res) => {
  knex('buy_list')
    .select({
      id: 'id',
      productName: 'product_name',
      price: 'price',
      category: 'category',
      quantity: 'quantity',
      production_area: 'production_area',
      supermarketName: 'supermarket_name',
      date: 'date'
    })
    .then((result) => res.send(result));
});

//-------------------------------------------------------

//return : 登録されているスーパーの一覧(Array)
app.get('/api/shop', (req, res) => {
  knex('buy_list')
    .select('supermarket_name')
    .then((response) => response.map((obj) => obj.supermarket_name))
    .then((response) => res.send(Array.from(new Set(response))));
});

//-------------------------------------------------------

//return : 選択した商品の全データ()
app.get('/api/product', (req, res) => {
  knex('buy_list')
    .select({
      id: 'id',
      productName: 'product_name',
      price: 'price',
      SMName: 'supermarket_name'
    })
    .where('product_name', req.query.productName)
    .then((response) => res.send(response));
});

//-------------------------------------------------------
app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
