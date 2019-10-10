/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T, U = Error>(promise: Promise<T>, errorExt?: object)
  : Promise<{error: U | null, data: T | undefined }> {
  return promise
    .then<{error: null, data: T}>((data: T) => ({ error: null, data }))
    .catch<{error: U, data: undefined}>((error: U) => {
      if (errorExt) {
        Object.assign(error, errorExt);
      }
      return {
        error,
        data: undefined,
      };
    });
}
