import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  result: any;
  constructor() { }

  setResult(value) {
    this.result = value;
  }

  clearResult() {
    this.result = null;
  }
}
