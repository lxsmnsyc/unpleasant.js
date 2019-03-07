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
  floor, permute289, K_41, abs, fade, mix,
} from './utils';

/**
 * @memberof Unpleasant
 * Classic Perlin 2D Noise
 * @example
 * import { classicPerlin2DNoise } from 'unpleasant';
 * let noise = classicPerlin2DNoise(Math.random(), Math.random());
 * @param {!Number} x
 * @param {!Number} y
 * @returns {Number}
 */
const classicPerlin2D = (x, y) => {
  const Pix = floor(x) % 289;
  const Piy = floor(y) % 289;
  const Piz = floor(x + 1.0) % 289;
  const Piw = floor(y + 1.0) % 289;

  const Pfx = x % 1;
  const Pfy = y % 1;
  const Pfz = (x - 1) % 1;
  const Pfw = (y - 1) % 1;

  const ix = permute289(permute289(Pix) + Piy);
  const iy = permute289(permute289(Piz) + Piy);
  const iz = permute289(permute289(Pix) + Piw);
  const iw = permute289(permute289(Piz) + Piw);

  const gxx = 2.0 * ((ix * K_41) % 1) - 1.0;
  const gxy = 2.0 * ((iy * K_41) % 1) - 1.0;
  const gxz = 2.0 * ((iz * K_41) % 1) - 1.0;
  const gxw = 2.0 * ((iw * K_41) % 1) - 1.0;

  const gyx = abs(gxx) - 0.5 + floor(gxx + 0.5);
  const gyy = abs(gxy) - 0.5 + floor(gxy + 0.5);
  const gyz = abs(gxz) - 0.5 + floor(gxw + 0.5);
  const gyw = abs(gxw) - 0.5 + floor(gxz + 0.5);

  let g00x = gxx;
  let g00y = gyx;
  let g01x = gxy;
  let g01y = gyy;
  let g10x = gxz;
  let g10y = gyz;
  let g11x = gxw;
  let g11y = gyw;

  const normx = 1.79284291400159 - 0.85373472095314 * g00x * g00x + g00y * g00y;
  const normy = 1.79284291400159 - 0.85373472095314 * g01x * g01x + g01y * g01y;
  const normz = 1.79284291400159 - 0.85373472095314 * g10x * g10x + g10y * g10y;
  const normw = 1.79284291400159 - 0.85373472095314 * g11x * g11x + g11y * g11y;

  g00x *= normx;
  g00y *= normx;

  g01x *= normy;
  g01y *= normy;

  g10x *= normz;
  g10y *= normz;

  g11x *= normw;
  g11y *= normw;

  const n00 = g00x * Pfx + g00y * Pfy;
  const n10 = g10x * Pfz + g10y * Pfy;
  const n01 = g01x * Pfx + g01y * Pfw;
  const n11 = g11x * Pfz + g11y * Pfw;

  const fadex = fade(Pfx);
  const fadey = fade(Pfy);

  const nx = mix(n00, n10, fadex);
  const ny = mix(n01, n11, fadex);

  const n = mix(nx, ny, fadey);
  return 2.3 * n;
};

export default classicPerlin2D;
