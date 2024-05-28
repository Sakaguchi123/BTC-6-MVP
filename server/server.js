const knex = require('./knex');
const cors = require('cors');
const express = require('express');
import * as passport from 'passport';
import * as GoogleStrategy from 'passport-google-oauth20';

//-------------------------------------------------------
const app = express();
const PORT = process.env.PORT || 3000;
//-------------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));
//-------------------------------------------------------

//return : 登録されている全リスト limitがある場合はそれに従う（Array[Object]）
app.get('/api/list', (req, res) => {
  knex('buy_list')
    .select({
      id: 'id',
      productName: 'product_name',
      price: 'price',
      category: 'category',
      quantity: 'quantity',
      productionArea: 'production_area',
      supermarketName: 'supermarket_name',
      date: 'date'
    })
    // .then(() => console.log(req.query.limit))
    .then((result) => (req.query.limit ? result.slice(0, req.query.limit) : result))
    .then((result) => res.send(result));
});

//-------------------------------------------------------

//return : 登録されているスーパーのリスト(Array)
app.get('/api/shop', (req, res) => {
  knex('buy_list')
    .select('supermarket_name')
    .then((response) => response.map((obj) => obj.supermarket_name))
    .then((response) => res.send(Array.from(new Set(response))));
});

//-------------------------------------------------------

//return : 登録されている商品のリスト(Array)
app.get('/api/product', (req, res) => {
  knex('buy_list')
    .select('product_name')
    .then((response) => response.map((obj) => obj.product_name))
    .then((response) => res.send(Array.from(new Set(response))));
});

//-------------------------------------------------------

//return : 選択した商品の全データ()
app.get('/api/product/choice', (req, res) => {
  knex('buy_list')
    .select({
      id: 'id',
      productName: 'product_name',
      price: 'price',
      smName: 'supermarket_name'
    })
    .where('product_name', req.query.productName)
    .then((response) => res.send(response));
});

//-------------------------------------------------------

//商品情報追加
app.post('/api/list', (req, res) => {
  knex('buy_list')
    .insert(req.body)
    .then(() => res.send('ok'));
});

//-------------------------------------------------------
//passport.js test

// ログイン状態を直接「req.user」から調べる
app.get('/', (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }

  res.render('home.html', { user: req.user });
});

// ログイン状態を調べるミドルウェア
const checkLogin = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/login');
  }

  return next();
};

// ログイン状態チェックをミドルウェアに任せる
app.get('/userinfo', checkLogin, (req, res) => {
  res.render('userinfo.html', { user: req.user });
});
//////////////////////////////
// passportとStrategyの紐づけ
passport.use(
  new GoogleStrategy((username, password, cb) => {
    try {
      const user = 'user'.find((v) => {
        return v.username === username;
      });

      // 妥当なログインではない
      if (!user) {
        return cb(null, false);
      }

      // 妥当なログインではない
      if (user.password !== password) {
        return cb(null, false);
      }

      // 妥当なログイン
      return cb(null, user);
    } catch (err) {
      // エラー発生
      return cb(err);
    }
  })
);

//-------------------------------------------------------
app.listen(PORT, () => console.log(`listening on port : ${PORT}`));
