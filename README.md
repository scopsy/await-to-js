# await-to-js

[![NPM version][npm-image]][npm-url]
[![Downloads][download-badge]][npm-url]

> Async await wrapper for easy error handling


<div align="center">
	Supported by:
  </div><div align="center">
		<a href="https://github.com/notifirehq/notifire">
			<img src="https://camo.githubusercontent.com/3ca722f7a9be6a1c65edd8297eaf978e70917c3a9344f182adcbe19a7df78474/68747470733a2f2f75706c6f6164732d73736c2e776562666c6f772e636f6d2f3631333062346432396262306162303965313461653965652f3631333065363933316637353564663330323230336663635f536964654c6f676f2532302d253230424c61636b2d702d3830302e706e67" width="200">
		</a>
    </div>
    <div align="center">  <sup>The open-source notification infrastructure</sup>
</div>
    
## Pre-requisites
You need to use Node 7.6 (or later) or an ES7 transpiler in order to use async/await functionality.
You can use babel or typescript for that.

## Install

```sh
npm i await-to-js --save
```

## Usage

```js
import to from 'await-to-js';
// If you use CommonJS (i.e NodeJS environment), it should be:
// const to = require('await-to-js').default;

async function asyncTaskWithCb(cb) {
     let err, user, savedTask, notification;

     [ err, user ] = await to(UserModel.findById(1));
     if(!user) return cb('No user found');

     [ err, savedTask ] = await to(TaskModel({userId: user.id, name: 'Demo Task'}));
     if(err) return cb('Error occurred while saving task');

    if(user.notificationsEnabled) {
       [ err ] = await to(NotificationService.sendNotification(user.id, 'Task Created'));
       if(err) return cb('Error while sending notification');
    }

    if(savedTask.assignedUser.id !== user.id) {
       [ err, notification ] = await to(NotificationService.sendNotification(savedTask.assignedUser.id, 'Task was created for you'));
       if(err) return cb('Error while sending notification');
    }

    cb(null, savedTask);
}

async function asyncFunctionWithThrow() {
  const [err, user] = await to(UserModel.findById(1));
  if (!user) throw new Error('User not found');
  
}
```

## TypeScript usage
```javascript
interface ServerResponse {
  test: number;
}

const p = Promise.resolve({test: 123});

const [err, data] = await to<ServerResponse>(p);
console.log(data.test);
```


## License

MIT © [Dima Grossman](http://blog.grossman.io) && Tomer Barnea

[npm-url]: https://npmjs.org/package/await-to-js
[npm-image]: https://img.shields.io/npm/v/await-to-js.svg?style=flat-square

[travis-url]: https://travis-ci.org/scopsy/await-to-js
[travis-image]: https://img.shields.io/travis/scopsy/await-to-js.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/scopsy/await-to-js
[coveralls-image]: https://img.shields.io/coveralls/scopsy/await-to-js.svg?style=flat-square

[depstat-url]: https://david-dm.org/scopsy/await-to-js
[depstat-image]: https://david-dm.org/scopsy/await-to-js.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/await-to-js.svg?style=flat-square
