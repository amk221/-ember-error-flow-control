import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @inject store;
  @inject('foo') fooService;


  model() {
    return this.store.findRecord('foo', 1);
  }

  setupController(controller, model) {
    controller.foo = model;
  }

  @action
  save() {
    return this.fooService.saveFoo(this.controller.foo)
  }
}
