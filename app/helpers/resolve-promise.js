import Ember from "ember";

const {RSVP} = Ember;
const {Promise} = RSVP;

export default Ember.Helper.extend({
  compute(params) {
    const [value] = params;
    const isPromise = value && value.then
    if (!isPromise) {
      return value;
    }
    const isPending = value._state === 0 || value._state === undefined;
    if (isPending) {
      value.then(()=>{
        this.recompute();
      });
      return 'Loading...';
    }
    const isFulfilled = value._state === 1;
    if (isFulfilled) {
      return value._result;
    }
    return value._result;
  }
});
