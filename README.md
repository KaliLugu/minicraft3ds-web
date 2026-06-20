# Miniecraft3ds.dev Front

## architecture

dosnt need complexe arch, just need good website for present the project, what comming soon and dynamic docs

actually the doc is IN the repo, in the futur for exemple we can stock the raw docs in other repository coz if the doc keep in this repo, all docs modification need to redeploy front entire

my english is BAD

## setup the repository

installing deps
```shell
npm install
chmod +x scripts/*.sh
cp template.env .env
```

set the path of other repo in the .env

# start in docker

for start in one line:
```shell
npm run quick
```

or in the docker stack repo
``docker-compose up`` or ``docker compose up`` depend to your configuration
if you use ``docker-compose up`` pls create shell alias for make the 2 comand work

bash & zsh:
```bashrc
alias "docker compose up"="docker-compose up"
```

fish
```fish
alias "docker compose up" "docker-compose up"
```

return to front repo and start
```shell
npm run watch
```

## Run only front in Local

```shell
npm run dev
```

## deployment

```shell
npm run deploy
```
