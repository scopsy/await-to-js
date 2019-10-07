import { to, toAll } from '../await-to-js';

describe('Await to test', () => {
  it('should return a value when resolved', async () => {
    const testInput = 41;
    const promise = Promise.resolve(testInput);

    const [err, data] = await to(promise);

    expect(err).toBeNull();
    expect(data).toEqual(testInput);
  });

  it('should return an error when promise is rejected', async () => {
    const promise = Promise.reject('Error');

    const [err, data] = await to(promise);

    expect(err).toEqual('Error');
    expect(data).toBeUndefined();
  });

  it('should add external properties to the error object', async () => {
    const promise = Promise.reject({ error: 'Error message' });

    const [error] = await to<undefined, { error: string; extraKey: number }>(promise, {
      extraKey: 1
    });

    if (error !== null) {
      expect(error).toBeTruthy();
      expect(error.extraKey).toEqual(1);
      expect(error.error).toEqual('Error message');
    }
  });

  it('should receive the type of the parent if no type was passed', async () => {
    const data = await to(Promise.resolve({ name: '123' }));

    if (data[1]) {
      expect(data[1].name).toEqual('123');
    }
  });
});

describe('Await toAll test', () => {
  it('should be able to handle multiple promises', async () => {
    const promiseOne = Promise.resolve(0);
    const promiseTwo = Promise.resolve(1);
    const promiseThree = Promise.resolve('string');

    const [err, data] = await toAll([promiseOne, promiseTwo, promiseThree]);

    expect(err).toBeNull();
    expect(data).toEqual([0, 1, 'string']);
  });


  it('should return error if not all promises resolve', async () => {
    const promiseOne = Promise.resolve(0);
    const promiseTwo = Promise.resolve(1);
    const promiseThree = Promise.reject(new Error('Oh, snap'));

    const [err, data] = await toAll([promiseOne, promiseTwo, promiseThree]);

    expect(err).toEqual(new Error('Oh, snap'));
    expect(data).toEqual(undefined);
  });

  it('should be able to extend error', async () => {
    const promiseOne = Promise.resolve(0);
    const promiseThree = Promise.reject(new Error('Oh, snap'));

    interface CustomError extends Error {
      ext: number;
    }

    const [error] = await toAll<number, number, CustomError>([promiseOne, promiseThree], { ext: 2 });

    if (error !== null) {
      expect(error.ext).toEqual(2);
    }
  });
});
