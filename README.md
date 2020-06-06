Features: 
* Binds rust snake_case to camelCase
* Watch JS and Rust files at same time
* Bundle via Rollup

getting started:

run in docker:

```sh
    docker build -t app . && docker run -it --init -p 8080:8080 app
```

local development(enable watchers):

```sh
    npm i
    npm run start:dev
```

It'll execute the watchexec bin for watching js and rust files.
