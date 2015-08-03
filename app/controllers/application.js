import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    new() {
      this.set('isLoading', true);
      const promise = new Ember.RSVP.Promise(function(resolve){
        Ember.run.later(function(){
          resolve(new Date());
        }, 3000);
      });
      promise.finally(()=>{
        this.set('isLoading', false);
      });
      this.set('date', promise);
    }
  }
});
