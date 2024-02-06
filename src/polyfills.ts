// polyfills.ts

// Add global to window, assigning the value of window itself.
(window as any).global = window;

global.Buffer = global.Buffer || require('buffer').Buffer;
global.process = require('process');

// Add the following lines for required polyfills
import 'path-browserify';
import 'os-browserify/browser';
import 'crypto-browserify';

// Other polyfills...
