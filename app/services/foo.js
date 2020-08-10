import Service, { inject } from '@ember/service';

export default class FooService extends Service {
  @inject('flash-message') flashMessageService;

  saveFoo(foo) {
    return foo.save().catch(error => {
      // 'Handle error'
      // Make sure if saving a foo fails, then the user always knows about it.
      this.flashMessageService.add('error', error.message);

      // Rethrow error, so that the `saveFoo` promise chain remains in an error
      // state. This allows us to determine if `saveFoo` failed or succeeded
      // later on in the code... (See my-component.js)
      throw error;
    });
  }
}
