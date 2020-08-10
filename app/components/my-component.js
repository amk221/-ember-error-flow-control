import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MyComponent extends Component {
  @tracked isSaving;
  @tracked isSaved;

  @action
  save() {
    this.isSaving = true;

    this.args.onSave()
      .then(() => {
        this.isSaved = true;
      })
      // .catch(error => {
      //   No need to catch, because already handled, flash message will be displayed (See services/foo.js)
      // })
      .finally(() => {
        this.isSaving = false;
      });
  }
}
