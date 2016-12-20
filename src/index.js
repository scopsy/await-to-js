
/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */

export default function awaitTo(promise, errorExt) {
  return promise
    .then(data => {
      if(this.interceptor) this.interceptor(null, data);
      return [null, data]
    })
    .catch(err => {
      if(this.interceptor) {
        if (errorExt) {
          err = Object.assign(err, errorExt);
        }

        this.interceptor(err);
      }

      if (errorExt) {
        err = Object.assign(err, errorExt);
      }

      return [err];
    });
}

export function init(interceptor) {
  if(typeof interceptor === 'function') {
    this.interceptor = interceptor;
  }

  return awaitTo.bind(this);
}
