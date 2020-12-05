# rails_vue_bookshelf
### Github Repository
https://github.com/yuks0810/rails_vue_bookshelf
### 参考：
https://qiita.com/Moo_Moo_Farm/items/afacfe4349af6a106253

## 環境構築
.README_CREATE_ENV.md 参照

## システム要件
### Ruby version
uby 2.6.0p0 (2018-12-25 revision 66547) [x86_64-darwin19]

### Rail version
Rails 6.0.3.4

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
参考：https://qiita.com/h4n24w4/items/7974bef03b20d8d7b6f6

## How to run the test suite

## Services (job queues, cache servers, search engines, etc.)

## Deployment instructions

## API通信を実現するライブラリを導入
### axios を利用した API の使用
#### axios
URL: https://jp.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html

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
### コントローラーを作成

```bash
$ rails g controller Books index
```

上記のコマンドを実行すると、下記ファイルが作成される
```bash
Running via Spring preloader in process 86683
      create  app/controllers/books_controller.rb
       route  get 'books/index'
      invoke  erb
      create    app/views/books
      create    app/views/books/index.html.erb
```
### rails seedコマンド

```bash
$ rails db:seed
```

## APIの作成

```bash
$ rails g controller api::books
```

上記コマンドで以下が作成される
```bash
Running via Spring preloader in process 88866
      create  app/controllers/api/books_controller.rb
      invoke  erb
      create    app/views/api/books
```
コントローラーにこのように書く。renderでjsonを返すようにする
```rb
class Api::BooksController < ApplicationController
  def show
    @book = Book.find(params[:id])
    render 'show', formats: 'json', handlers: 'jbuilder'
  end
end
```

`app/views/api/books/show.json.jbuilder`
```jbuilder
json.id        @book.id
json.title     @book.title
json.author    @book.author
json.publisher @book.publisher
json.genre     @book.genre

# 次のコードと同等です。
# json.extract! @book, :id, :title, :author, :publisher, :genre
```