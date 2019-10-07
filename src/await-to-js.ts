/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Resolves a promise to an array containting error (or undefined if promise succeeds),
 * and a result (or null if promise fails)
 * @param promise Promise
 * @param errorExt Additional Information you can pass to the err object
 * @returns A new Promise.
 */
export function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U | null, T | undefined]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
    if (errorExt) {
      Object.assign(err, errorExt);
    }

    return [err, undefined];
  });
}

/**
 * Uses Promise.all to resolve with an array containting error (or undefined if all of the promises succeed),
 * and an array of results (or null if any of the promises fail)
 * @param values An array of Promises.
 * @param errorExt Additional Information you can pass to the err object
 * @returns A new Promise.
 */
export function toAll<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, U = Error>(
  values: [
    T1 | PromiseLike<T1>,
    T2 | PromiseLike<T2>,
    T3 | PromiseLike<T3>,
    T4 | PromiseLike<T4>,
    T5 | PromiseLike<T5>,
    T6 | PromiseLike<T6>,
    T7 | PromiseLike<T7>,
    T8 | PromiseLike<T8>,
    T9 | PromiseLike<T9>,
    T10 | PromiseLike<T10>
  ],
  errorExt?: object
): Promise<[U | null, [T1, T2, T3, T4, T5, T6, T7, T9, T10] | undefined]>;

/**
 * Uses Promise.all to resolve with an array containting error (or undefined if all of the promises succeed),
 * and an array of results (or null if any of the promises fail)
 * @param values An array of Promises.
 * @param errorExt Additional Information you can pass to the err object
 * @returns A new Promise.
 */
export function toAll<T1, T2, T3, T4, T5, T6, T7, T8, T9, U = Error>(
  values: [
    T1 | PromiseLike<T1>,
    T2 | PromiseLike<T2>,
    T3 | PromiseLike<T3>,
    T4 | PromiseLike<T4>,
    T5 | PromiseLike<T5>,
    T6 | PromiseLike<T6>,
    T7 | PromiseLike<T7>,
    T8 | PromiseLike<T8>,
    T9 | PromiseLike<T9>
  ],
  errorExt?: object
): Promise<[U | null, [T1, T2, T3, T4, T5, T6, T7, T9] | undefined]>;

/**
 * Uses Promise.all to resolve with an array containting error (or undefined if all of the promises succeed),
 * and an array of results (or null if any of the promises fail)
 * @param values An array of Promises.
 * @param errorExt Additional Information you can pass to the err object
 * @returns A new Promise.
 */
export function toAll<T1, T2, T3, T4, T5, T6, T7, T8, U = Error>(
  values: [
    T1 | PromiseLike<T1>,
    T2 | PromiseLike<T2>,
    T3 | PromiseLike<T3>,
    T4 | PromiseLike<T4>,
    T5 | PromiseLike<T5>,
    T6 | PromiseLike<T6>,
    T7 | PromiseLike<T7>,
    T8 | PromiseLike<T8>
  ],
  errorExt?: object
): Promise<[U | null, [T1, T2, T3, T4, T5, T6, T7, T8] | undefined]>;

/**
 * Uses Promise.all to resolve with an array containting error (or undefined if all of the promises succeed),
 * and an array of results (or null if any of the promises fail)
 * @param values An array of Promises.
 * @param errorExt Additional Information you can pass to the err object
 * @returns A new Promise.
 */
export function toAll<T1, T2, T3, T4, T5, T6, T7, U = Error>(
  values: [
    T1 | PromiseLike<T1>,
    T2 | PromiseLike<T2>,
    T3 | PromiseLike<T3>,
    T4 | PromiseLike<T4>,
    T5 | PromiseLike<T5>,
    T6 | PromiseLike<T6>,
    T7 | PromiseLike<T7>
  ],
  errorExt?: object
): Promise<[U | null, [T1, T2, T3, T4, T5, T6, T7] | undefined]>;

/**
 * Uses Promise.all to resolve with an array containting error (or undefined if all of the promises succeed),
 * and an array of results (or null if any of the promises fail)
 * @param values An array of Promises.
 * @param errorExt Additional Information you can pass to the err object
 * @returns A new Promise.
 */
export function toAll<T1, T2, T3, T4, T5, T6, U = Error>(
  values: [
    T1 | PromiseLike<T1>,
    T2 | PromiseLike<T2>,
    T3 | PromiseLike<T3>,
    T4 | PromiseLike<T4>,
    T5 | PromiseLike<T5>,
    T6 | PromiseLike<T6>
  ],
  errorExt?: object
): Promise<[U | null, [T1, T2, T3, T4, T5, T6] | undefined]>;

/**
 * Uses Promise.all to resolve with an array containting error (or undefined if all of the promises succeed),
 * and an array of results (or null if any of the promises fail)
 * @param values An array of Promises.
 * @param errorExt Additional Information you can pass to the err object
 * @returns A new Promise.
 */
export function toAll<T1, T2, T3, T4, T5, U = Error>(
  values: [
    T1 | PromiseLike<T1>,
    T2 | PromiseLike<T2>,
    T3 | PromiseLike<T3>,
    T4 | PromiseLike<T4>,
    T5 | PromiseLike<T5>
  ],
  errorExt?: object
): Promise<[U | null, [T1, T2, T3, T4, T5] | undefined]>;

/**
 * Uses Promise.all to resolve with an array containting error (or undefined if all of the promises succeed),
 * and an array of results (or null if any of the promises fail)
 * @param values An array of Promises.
 * @param errorExt Additional Information you can pass to the err object
 * @returns A new Promise.
 */
export function toAll<T1, T2, T3, T4, U = Error>(
  values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>],
  errorExt?: object
): Promise<[U | null, [T1, T2, T3, T4] | undefined]>;

/**
 * Uses Promise.all to resolve with an array containting error (or undefined if all of the promises succeed),
 * and an array of results (or null if any of the promises fail)
 * @param values An array of Promises.
 * @param errorExt Additional Information you can pass to the err object
 * @returns A new Promise.
 */
export function toAll<T1, T2, T3, U = Error>(
  values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>],
  errorExt?: object
): Promise<[U | null, [T1, T2, T3] | undefined]>;

/**
 * Uses Promise.all to resolve with an array containting error (or undefined if all of the promises succeed),
 * and an array of results (or null if any of the promises fail)
 * @param values An array of Promises.
 * @param errorExt Additional Information you can pass to the err object
 * @returns A new Promise.
 */
export function toAll<T1, T2, U = Error>(
  values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>],
  errorExt?: object
): Promise<[U | null, [T1, T2] | undefined]>;

/**
 * Uses Promise.all to resolve with an array containting error (or undefined if all of the promises succeed),
 * and an array of results (or null if any of the promises fail)
 * @param values An array of Promises.
 * @param errorExt Additional Information you can pass to the err object
 * @returns A new Promise.
 */
export function toAll<T, U = Error>(
  values: T[] | Array<PromiseLike<T>>,
  errorExt?: object
): Promise<[U | null, T[] | undefined]> {
  return Promise.all(values)
    .then<[null, T[]]>((data: T[]) => [null, data])
    .catch<[U, undefined]>((err: any) => {
    if (errorExt) {
      Object.assign(err, errorExt);
    }

    return [err, undefined];
  });
}

export default to;
