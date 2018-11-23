import { to } from '../src/await-to-js'

describe('Await to test', async () => {
  it('should return a value when resolved', async () => {
    const testInput = 41;
    const promise = Promise.resolve(testInput);

    const [err, data] = await to<number>(promise);

    expect(err).toBeNull();
    expect(data).toEqual(testInput);
  });

  it('should return an error when promise is rejected', async () => {
    const testInput = 41;
    const promise = Promise.reject('Error');

    const [err, data] = await to<number>(promise);

    expect(err).toEqual('Error');
    expect(data).toBeUndefined();
  });

  it('should add external properties to the error object', async () => {
    const promise = Promise.reject({ error: 'Error message' });

    const [err] = await to<
      string,
      { error: string; extraKey: number }
    >(promise, {
      extraKey: 1
    });

    expect(err).toBeTruthy();
    expect((err as any).extraKey).toEqual(1);
    expect((err as any).error).toEqual('Error message')
  });

  it('should receive the type of the parent if no type was passed', async () => {
    let user: { name: string };
    let err: Error;

    [err, user] = await to(Promise.resolve({ name: '123' }));

    expect(user.name).toEqual('123');
  });
});
