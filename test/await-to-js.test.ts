import { to } from '../src/await-to-js'

describe('Await to test', async () => {
  it('should return a value when resolved', async () => {
    const testInput = 41;
    const promise = Promise.resolve(testInput);

    const { error, data } = await to<number>(promise);

    expect(error).toBeNull();
    expect(data).toEqual(testInput);
  });

  it('should return an error when promise is rejected', async () => {
    const testInput = 41;
    const promise = Promise.reject('Error');

    const { error, data: myCustomData } = await to<number>(promise);

    expect(error).toEqual('Error');
    expect(myCustomData).toBeUndefined();
  });

  it('should add external properties to the error object', async () => {
    const promise = Promise.reject({ error: 'Error message' });

    const { error } = await to<
      string,
      { error: string; extraKey: number }
    >(promise, {
      extraKey: 1
    });

    expect(error).toBeTruthy();
    expect((error as any).extraKey).toEqual(1);
    expect((error as any).error).toEqual('Error message')
  });

  it('should receive the type of the parent if no type was passed', async () => {
    interface User { name: string }
    const { data: user }: {data: User | undefined } = await to(Promise.resolve({ name: '123' }));
    expect(user && user.name).toEqual('123');
  });
});
