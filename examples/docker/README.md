
### Start
``` bash
$ docker-compose build
$ docker-compose up --scale consumer=1 --scale ui=1 --scale publisher=1
-- OR --
$ docker-compose up --scale consumer=1 --scale ui=1 --scale publisher=1 --build
```

### Inspect
``` bash
docker inspect <container id> | grep "IPAddress"
docker volume ls
docker rmi edaeec15f872 edaeec15f872 -f
```

### Clean
``` bash
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
```