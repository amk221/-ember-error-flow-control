import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class FooModel extends Model {
  @attr() name;
}
