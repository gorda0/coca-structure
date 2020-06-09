Features:

- Binds rust snake_case to camelCase
- Watch JS and Rust files at same time
- Bundle via Rollup
- Babel/flow aliases

# **getting started**:

**run in docker**:

```sh
    docker build -t app . && docker run -it --init -p 8080:8080 app
```

**local development(enable watchers)**:

```sh
    npm i
    npm run start:dev
```

It'll execute the watchexec bin for watching js and rust files.

_Using debian based distribution? Run the following commands in case of running errors on npm i_

```sh
sudo apt install libffi6 libffi-dev -y
sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev curl libbz2-dev -y
```
