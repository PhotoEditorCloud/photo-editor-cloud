import 'tui-color-picker';
import 'fabric';
// const ImageEditor = require('tui-image-editor');
const ImageEditor = require('tui-image-editor');

import { blackTheme } from './theme/black-theme.js';
import { whiteTheme } from './theme/white-theme.js';

// import Dog from './dog.js';
// export { Dog, Cat };

export default class PhotoEditor {
  constructor(selector, config) {
    this.instance = null;
    this.selector = null;

    this.config = Object.assign({}, config, {
      theme: config && config.theme === 'white' ? whiteTheme : blackTheme, // or whiteTheme
      maxWidth: 700,
      maxHeight: 500,
      // initMenu: 'filter',
      menuBarPosition: 'bottom'
    });

    console.log(this.config);
  }

  load(selector, path) {
    this.selector = document.querySelector(selector);

    this.config.loadImage = {
      path: path,
      name: 'SampleImage'
    };

    // Map our stored config to the ImageEditor config object
    const config = {
      includeUI: this.config,
      cssMaxWidth: this.config.maxHeight,
      cssMaxHeight: this.config.maxWidth,
      selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70
      }
    };

    this.instance = new ImageEditor(this.selector, config);
  }

  // get name() {
  //   return this._name;
  // }
}
