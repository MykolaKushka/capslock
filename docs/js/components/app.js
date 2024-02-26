'use strict';

import fixedHeader from './fixedHeader.js';
import appears from './appears.js';

export class App {
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      fixedHeader();
      appears();
    });
  }
}
