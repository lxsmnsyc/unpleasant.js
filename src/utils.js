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

/**
 * @ignore
 */
export const {
  sin, cos, floor, min, max, PI, sqrt,
  abs,
} = Math;
/**
 * @ignore
 */
export const mix = (x, y, t) => x + (y - x) * t;
/**
 * @ignore
 */
export const clamp = (a, b, c) => max(a, min(b, c));
/**
 * @ignore
 */
export const smooth = x => x * x * (3.0 - 2.0 * x);
/**
 * @ignore
 */
export const smoothstep = (x, y, t) => {
  const a = clamp((t - x) / (y - x), 0.0, 1.0);
  return smooth(a * a * (3.0 - 2.0 * a));
};
/**
 * @ignore
 */
export const NOISE_CONSTANT = 43758.5453123;
/**
 * @ignore
 */
export const MOD_7_CONST = 0.14285714285;
/**
 * @ignore
 */
export const K_41 = 0.0243902439;
/**
 * @ignore
 */
export const permute289 = x => ((34.0 * x + 1.0) * x) % 289;
/**
 * @ignore
 */
export const generic1rand = x => (sin(x) * NOISE_CONSTANT) % 1;
/**
 * @ignore
 */
export const generic2rand = (x, y) => (sin(x * 12.9898 + y * 4.1414) * NOISE_CONSTANT) % 1;
/**
 * @ignore
 */
export const perlinRand = (x, y) => (sin(x * 12.9898 + y * 78.233) * NOISE_CONSTANT);
/**
 * @ignore
 */
export const fade = t => t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
