# quick-getip

> Get your public IP address - very fast!

 It uses the command line tool (curl) to request an IP address from the service [ipify](https://ipify.org).

## Install

```sh
npm install quick-getip
```

## Usage

```js
const ip = require('quick-getip');

ip().then(console.log);
//=> '109.5.21.123'

```

## API

Returns a `Promise<string>` with your public IP address.


