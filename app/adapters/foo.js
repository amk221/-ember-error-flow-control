import RESTAdapter from '@ember-data/adapter/rest';
import fetch from 'fetch';
import { AJAXError } from '../utils/errors';

export default class FooAdapter extends RESTAdapter {
  ajax(path, method) {
    return fetch(path, { method })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new AJAXError(response.statusText)
        }
      })
  }
}
