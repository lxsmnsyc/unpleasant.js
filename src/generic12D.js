/**
 * @license
 * MIT License
 *
 * Copyright (c) 2019 Alexis Munsayac
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @copyright Alexis Munsayac 2019
 */
import {
  floor, smoothstep, mix, generic2rand as rand,
} from './utils';
/**
 * @memberof Unpleasant
 * @desc
 * 2-dimensional Generic 1 Noise
 * @example
 * import { generic1Noise2D } from 'unpleasant';
 * const noise = generic1Noise2D(Math.random(), Math.random());
 * @see https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
 * @param {Number} x
 * @param {Number} y
 * @returns {Number}
 */
const generic12D = (x, y) => {
  const bx = floor(x);
  const by = floor(y);

  const fx = smoothstep(0.0, 1.0, x % 1);
  const fy = smoothstep(0.0, 1.0, y % 1);

  const a = mix(rand(bx, by), rand(bx + 1.0, by), fx);
  const b = mix(rand(bx, by + 1.0), rand(bx + 1.0, by + 1.0), fx);
  return mix(a, b, fy);
};
export default generic12D;
