# BTC-6 ソロMVP

## 使用している主な技術

<p>
<img src="https://img.shields.io/badge/react-blue.svg?logo=react&style=for-the-badge">
<img src="https://img.shields.io/badge/express-gray.svg?logo=express&style=for-the-badge">
<img src="https://img.shields.io/badge/knex-gray.svg?logo=knexdotjs&style=for-the-badge">
<img src="https://img.shields.io/badge/postgresql-white.svg?logo=postgresql&style=for-the-badge">
<img src="https://img.shields.io/badge/vite-yellow.svg?logo=vite&style=for-the-badge">
</p>
<p>
<img src="https://img.shields.io/badge/chakraui-white.svg?logo=chakraui&style=for-the-badge">
<img src="https://img.shields.io/badge/sass-gray.svg?logo=sass&style=for-the-badge">
</p>

## 概要

買い物履歴を登録・閲覧することが出来ます。

## Installation

```bash
npm install
```

環境変数 (.envファイル)

```bash
DB_USER=
DB_PASSWORD=
DB_NAME='mvp_db'
```

## コマンド一覧

| コマンド | 実行される処理           |
| -------- | ------------------------ |
| start    | サーバー起動(nodemon)    |
| dev      | フロントエンド起動(vite) |
| migrate  | migrateの実行            |
| seed     | seedの実行               |
| render   | renderデプロイ用         |
