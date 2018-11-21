/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T, U = Error>(
  promise: any,
  errorExt?: object
): Promise<[U | null, T | undefined]> {
  return promise
    .then((data: T) => [null, data])
    .catch((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt)
      }

      return [err, undefined]
    })
}

export default to
