import { Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export function ObservableInput(value: string = null) {
  return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
    const inputPropertyKey = value || propertyKey.replace("$", "");
    target[propertyKey] = new BehaviorSubject(null);

    Object.defineProperty(target, inputPropertyKey, {
      get: () => { return target[propertyKey].getValue(); },
      set: (value:any) => { target[propertyKey].next(value); }
    });

    Input(value)(target, inputPropertyKey, descriptor);
  }
}
