# rails_vue_bookshelf
### Github Repository
https://github.com/yuks0810/rails_vue_bookshelf
### 参考：
https://qiita.com/Moo_Moo_Farm/items/afacfe4349af6a106253

## 環境構築
.README_CREATE_ENV.md 参照

## システム要件
### Ruby version

### System dependencies
- Rails
- Vue.js
- Webpacke

### Configuration

## View
- Vue.js
- ERB

## Database
- sqlite
<!-- TODO: mysqlに以降 -->

## How to run the test suite

## Services (job queues, cache servers, search engines, etc.)

## Deployment instructions

## アプリ起動
### foreman設定
`bin/server`ファイルに起動コマンドを記載してある。コマンドを実行するために以下のコマンドをターミナルで実行

```bash
$ bin/server
```

その後に、`http://localhost:5000/`にアクセスするとアプリが表示される。

## Generateコマンド

```bash
$ rails g controller Home index
```

## vueとrailsの繋ぎこみ(railsのエンドポイント)
### 参考：
https://qiita.com/shohei_ot/items/17c4c3545af9762d998e

## rubocop
- rubocop-airbnbを使用
### 基本コマンド
```bash
$ rubocop
```

### rubocop による解析結果を自動修正するオプション（修正されない箇所もあるため注意）
```bash
$ rubocop --auto-correct
$ rubocop -a
```

### モデル作成

下記コマンドでmodelとmigrationファイルが作成される
```bash
$ rails g model Book title:string author:string publisher:string genre:string
```

その後、下記コマンドでdbに反映
```bash
$ rails db:migrate
```