
/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
function awaitTo(promise, errorExt) {
  return promise
    .then(data => [null, data])
    .catch(err => {
      if(errorExt) {
        err = Object.assign(err, errorExt);
      }

      return [err];
    });
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = awaitTo;
}
else {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return awaitTo;
    });
  }
}

export default awaitTo;