# RethinkDB Job Queue UI

> Get insights to your queue job statuses

![https://github.com/grantcarthew/node-rethinkdb-job-queue/wiki](https://sagivf.github.io/rjq-ui/public/static/img/thinkerjoblist.23139a4.png)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Middleware usage
- [Koa](/examples/koa/index.js)
- [Express](/examples/express/index.js)

## Standalone usage
```
All Options are optional and default to local setup
node ./bin/www --db-name=<job queue db name> --db-host=<host address> --db-user=<sb user name> --db-password=<db password> --db-port=<db port> --db-certfile=<db certificate file>
```

## Standalone with db instance - nanobox 
Based on:
- https://guides.nanobox.io/rethinkdb/
- https://guides.nanobox.io/nodejs/koa/

1) [install nanobox](https://docs.nanobox.io/install/)'
2) `nanobox run`, `nanobox run dry-run`, `nanobox remote add app-name`, `nanobox deploy`

## Development

### Build setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8084
npm run dev

# build for production with minification
npm run build
```

### Deploy to GHP
1) checkout https://github.com/sagivf/rjq-ui/tree/gh-pages
2) run `npm run ghp`
3) move `mock.js` file before `app.js` in `public/index.html`
4) commit and push changes
5) enjoy! 

##### UI Based on [vue-foundation](https://github.com/hal0gen/vue-foundation)
