/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let NotCoderJack = class NotCoderJack extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'NotCoderJack';
        this.name_zh = '费马';
    }
    render() {
        return html `
      <div class="name">
        <h1>${this.name}!</h1>
        <p>${this.name_zh}</p>
      </div>
      <div class="contact">
        <div>
          <strong>Email:</strong>
          <a href="mailto:lihaojie0101@gmail.com">lihaojie0101@gmail.com</a>
        </div>
        <div>
          <strong>Github</strong>
          <a href="https://www.github.com/NotCoderJack.git">NotCoderJack</a>
        </div>
        <div>
          <strong>Site</strong>
          <a href="http://www.notcoder.com">http://www.notcoder.com</a>
        </div>
      </div>
    `;
    }
};
NotCoderJack.styles = css `
    :host {
      display: inline-block;
      border: solid 1px #d9d9d9;
      border-radius: 4px;
      width: 530px;
      height: 300px;
      background: #f2f2f2;
    }
    .name {
      background: #fff;
      text-align: center;
      padding: 20px 0;
      margin-top: 20px;
    }
    .contact {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 24px;
      padding-left: 140px;
    }
    .contact strong {
      display: inline-block;
      width: 60px;
    }
  `;
__decorate([
    property()
], NotCoderJack.prototype, "name", void 0);
__decorate([
    property()
], NotCoderJack.prototype, "name_zh", void 0);
NotCoderJack = __decorate([
    customElement('not-coder-jack')
], NotCoderJack);
export { NotCoderJack };
//# sourceMappingURL=NotCoderJack.js.map