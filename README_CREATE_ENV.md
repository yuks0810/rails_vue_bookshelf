# 環境構築
## git clone完了後

```bash
$ bundle install
$ git checkout develop
$ git checkout -b <your name>_dev

# install dependencies
$ bin/setup

# database
$ rails db:create
$ rails db:migrate
$ rails db:seed

# サーバー起動
$ bin/server
```