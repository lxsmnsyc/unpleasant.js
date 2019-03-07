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
  floor, permute289, max, taylorInvSqrt, abs,
} from './utils';
/**
 * @ignore
 */
const C_X = 0.211324865405187;
/**
 * @ignore
 */
const C_Y = 0.366025403784439;
/**
 * @ignore
 */
const C_Z = -0.577350269189626;
/**
 * @ignore
 */
const C_W = 0.024390243902439;
/**
 * @memberof Unpleasant
 * @desc
 * Simplex 2D Noise
 * @example
 * import { simplex2DNoise } from 'unpleasant';
 * const noise = simplex2DNoise(Math.random(), Math.random());
 * @see https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
 * @param {!Number} x
 * @param {!Number} y
 * @returns {Number}
 */
const simplex2D = (x, y) => {
  const dotVCY = x * C_Y + y * C_Y;
  let ix = floor(x + dotVCY);
  let iy = floor(y + dotVCY);

  const dotICX = ix * C_X + iy * C_X;
  const x0x = x - ix + dotICX;
  const x0y = y - iy + dotICX;

  let i1x = 0.0;
  let i1y = 1.0;

  if (x0x > x0y) {
    i1x = 1.0;
    i1y = 0.0;
  }

  const x12x = x0x + C_X - i1x;
  const x12y = x0y + C_X - i1y;
  const x12z = x0x + C_Z;
  const x12w = x0y + C_Z;

  ix %= 289;
  iy %= 289;

  const px = permute289(permute289(iy) + ix);
  const py = permute289(permute289(iy + i1y) + ix + i1x);
  const pz = permute289(permute289(iy + 1.0) + ix + 1.0);

  let mx = max(0.5 - (x0x * x0x + x0y * x0y), 0);
  let my = max(0.5 - (x12x * x12x + x12y * x12y), 0);
  let mz = max(0.5 - (x12z * x12z + x12w * x12w), 0);

  mx *= mx * mx;
  my *= my * my;
  mz *= mz * mz;

  const xx = 2.0 * ((px * C_W) % 1) - 1.0;
  const xy = 2.0 * ((py * C_W) % 1) - 1.0;
  const xz = 2.0 * ((pz * C_W) % 1) - 1.0;

  const hx = abs(xx) - 0.5;
  const hy = abs(xy) - 0.5;
  const hz = abs(xz) - 0.5;

  const oxx = floor(xx + 0.5);
  const oxy = floor(xy + 0.5);
  const oxz = floor(xz + 0.5);

  const a0x = xx - oxx;
  const a0y = xy - oxy;
  const a0z = xz - oxz;

  mx *= taylorInvSqrt(a0x * a0x + hx * hx);
  my *= taylorInvSqrt(a0y * a0y + hy * hy);
  mz *= taylorInvSqrt(a0z * a0z + hz * hz);

  const gx = a0x * x0x + hx * x0y;
  const gy = a0y * x12x + hy * x12y;
  const gz = a0z * x12z + hz * x12w;

  return 130 * (mx * gx + my * gy + mz * gz);
};

export default simplex2D;
