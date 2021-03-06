# RethinkDB Job Queue UI
> Get insights to your queue job statuses
![https://github.com/grantcarthew/node-rethinkdb-job-queue/wiki](https://sagivf.github.io/rjq-ui/public/static/img/thinkerjoblist.23139a4.png)

## Development
``` bash
$ npm install

$ npm start // (data fetch for `.env.development`)

$ npm run build

$ npm run release
``` 

## Middleware usage
- [Koa](/examples/koa/index.js)
- [Express](/examples/express/index.js)

### Standalone usage
```
All Options are optional and default to local setup
node ./bin/www --db-name=<job queue db name> --db-host=<host address> --db-user=<sb user name> --db-password=<db password> --db-port=<db port> --db-certfile=<db certificate file>
```

### Standalone example with db instance - docker
1) Find IP and add change DB_HOST in .env - `sudo ip addr show docker0`
2) run - `docker-compose up --scale consumer=3 --scale ui=1 --scale publisher=1`
3) Locate rjq-ui IP - `docker inspect rjqui_ui_1 | grep IPAddress`(:3000)
4) Locate RethinkDB admin ui IP - `docker inspect rjqui_ui_1 | grep IPAddress`(:8080)

## Standalone example db instance - nanobox
Based on:
- https://guides.nanobox.io/rethinkdb/
- https://guides.nanobox.io/nodejs/koa/

1) [install nanobox](https://docs.nanobox.io/install/)
2) `nanobox run`, `nanobox run dry-run`, `nanobox remote add app-name`, `nanobox deploy`
