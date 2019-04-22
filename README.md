# angular-snippets

## Observable Input
### Description
### Source
- [observable-input.ts](./observable-input.ts)
### Usage Example
```
<app-component [testInput]="'Hello World'"></app-component>
```
```
import { Component, OnInit, Input } from '@angular/core';
import { ObservableInput } from '../observableinput';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class Component implements OnInit {

  @ObservableInput() testInput$: Observable<string>;

  constructor() { }

  ngOnInit() {
    this.testInput$.subscribe(value => {
      console.log('V', value);
    });
  }
}

```
