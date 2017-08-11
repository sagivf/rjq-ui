# RethinkDB Job Queue UI

> Get insights to your queue job statuses

![https://github.com/grantcarthew/node-rethinkdb-job-queue/wiki](https://sagivf.github.io/rjq-ui/public/static/img/thinkerjoblist.23139a4.png)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Standalone usage
```
node ./bin/standalone.js --db-name=JobQueue --db-host="aws-eu-central-1-portal.0.dblayer.com" --db-user=admin --db-password=DILlJZz2HlHLh3DQAAJuCOOCrnLc54ucmgs882-Bzgc --db-port=15157 --db-certfile=cert
```

## Middleware usage
- [Koa](/examples/koa/index.js)
- [Express](/examples/express/index.js)

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
