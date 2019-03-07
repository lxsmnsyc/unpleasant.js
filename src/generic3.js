

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
  floor, smooth, permute289, mix, K_41,
} from './utils';
/**
 * @memberof Unpleasant
 * Generic 3 Noise
 * @example
 * import { generic3Noise } from 'unpleasant';
 * let noise = generic3Noise(Math.random(), Math.random(), Math.random());
 * @see https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
 * @param {!Number} x
 * @param {!Number} y
 * @param {!Number} z
 * @return {Number}
 */
const generic3 = (x, y, z) => {
  const ax = floor(x);
  const ay = floor(y);
  const az = floor(z);

  const dx = smooth(x - ax);
  const dy = smooth(y - ay);
  const dz = smooth(z - az);

  const bx = ax + 1.0;
  const by = ay + 1.0;

  const k1x = permute289(ax);
  const k1y = permute289(bx);

  const k2x = permute289(k1x + ay);
  const k2y = permute289(k1y + ay);
  const k2z = permute289(k1x + by);
  const k2w = permute289(k1y + by);

  const cx = k2x + az;
  const cy = k2y + az;
  const cz = k2z + az;
  const cw = k2w + az;

  const k3x = permute289(cx);
  const k3y = permute289(cy);
  const k3z = permute289(cz);
  const k3w = permute289(cw);

  const k4x = permute289(cx + 1);
  const k4y = permute289(cy + 1);
  const k4z = permute289(cz + 1);
  const k4w = permute289(cw + 1);

  const o1x = (k3x * K_41) % 1;
  const o1y = (k3y * K_41) % 1;
  const o1z = (k3z * K_41) % 1;
  const o1w = (k3w * K_41) % 1;

  const o2x = (k4x * K_41) % 1;
  const o2y = (k4y * K_41) % 1;
  const o2z = (k4z * K_41) % 1;
  const o2w = (k4w * K_41) % 1;

  const o3x = mix(o1x, o2x, dz);
  const o3y = mix(o1y, o2y, dz);
  const o3z = mix(o1z, o2z, dz);
  const o3w = mix(o1w, o2w, dz);

  const o4x = mix(o3x, o3y, dx);
  const o4y = mix(o3z, o3w, dx);

  return mix(o4x, o4y, dy);
};

export default generic3;
