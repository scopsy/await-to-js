/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export default function awaitTo(promise, errorExt) {
  return promise
    .then(data => [data, null])
    .catch(err => {
      if(errorExt) {
        err = Object.assign(err, errorExt);
      }

      return [undefined, err];
    });
}
