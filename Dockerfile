FROM nikolaik/python-nodejs:python3.5-nodejs10
COPY . /app/
RUN apt update
RUN apt install libffi6 libffi-dev -y
RUN apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev curl libbz2-dev -y
WORKDIR /app/
RUN npm install --unsafe-perm
ENV PATH="/root/.cargo/bin:${PATH}"
CMD npm start