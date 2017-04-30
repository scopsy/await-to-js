/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function awaitTo<T>(promise: Promise<T>, errorExt?: object) {
  return promise
    .then((data: T) => [null as any, data] as [Error, T])
    .catch((err: Error) => {
      if (errorExt) {
        err = Object.assign(err, errorExt)
      }

      return [err, null] as [Error, null]
    })
}

export default awaitTo
