'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
const {
  sin, cos, floor, min, max, PI, sqrt,
} = Math;

/**
 * @ignore
 */
const mix = (x, y, t) => x + (y - x) * t;

/**
 * @ignore
 */
const clamp = (a, b, c) => max(a, min(b, c));
/**
 * @ignore
 */
const smooth = x => x * x * (3.0 - 2.0 * x);
/**
 * @ignore
 */
const smoothstep = (x, y, t) => {
  const a = clamp((t - x) / (y - x), 0.0, 1.0);
  return smooth(a * a * (3.0 - 2.0 * a));
};

/**
 * @ignore
 */
const NOISE_CONSTANT = 43758.5453123;
/**
 * @ignore
 */
const MOD_289_CONST = 0.00346020761;
/**
 * @ignore
 */
const MOD_7_CONST = 0.14285714285;
/**
 * @ignore
 */
const mod289 = x => x - floor(x * MOD_289_CONST) * 289.0;
/**
 * @ignore
 */
const mod7 = x => x - floor(x * MOD_7_CONST) * 289.0;
/**
 * @ignore
 */
const permute289 = x => mod289((34.0 * x + 1.0) * x);
/**
 * @ignore
 */
const generic1rand = x => (sin(x) * NOISE_CONSTANT) % 1;
/**
 * @ignore
 */
const generic2rand = (x, y) => (sin(x * 12.9898 + y * 4.1414) * NOISE_CONSTANT) % 1;
/**
 * @ignore
 */
const perlinRand = (x, y) => (sin(x * 12.9898 + y * 78.233) * NOISE_CONSTANT);

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
 * @memberof Unpleasant
 * @desc
 * 1-dimensional Generic 1 Noise
 * @example
 * import { generic1Noise1D } from 'unpleasant';
 * const noise = generic1Noise1D(Math.random());
 * @see https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
 * @param {!Number} x
 * @returns {Number}
 */
const generic11D = (x) => {
  const fl = floor(x);
  const fc = x % 1;

  return mix(generic1rand(fl), generic1rand(fl + 1.0), fc);
};

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
 * @memberof Unpleasant
 * @desc
 * 2-dimensional Generic 1 Noise
 * @example
 * import { generic1Noise2D } from 'unpleasant';
 * const noise = generic1Noise2D(Math.random(), Math.random());
 * @see https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
 * @param {!Number} x
 * @param {!Number} y
 * @returns {Number}
 */
const generic12D = (x, y) => {
  const bx = floor(x);
  const by = floor(y);

  const fx = smoothstep(0.0, 1.0, x % 1);
  const fy = smoothstep(0.0, 1.0, y % 1);

  const a = mix(generic2rand(bx, by), generic2rand(bx + 1.0, by), fx);
  const b = mix(generic2rand(bx, by + 1.0), generic2rand(bx + 1.0, by + 1.0), fx);
  return mix(a, b, fy);
};

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
 * @memberof Unpleasant
 * @desc
 * Generic 2 Noise
 * @example
 * import { generic2Noise } from 'unpleasant';
 * const noise = generic2Noise(Math.random(), Math.random());
 * @see https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
 * @param {!Number} x
 * @param {!Number} y
 * @returns {Number}
 */
const generic2 = (x, y) => {
  const ix = floor(x);
  const iy = floor(y);

  const ux = smooth(x % 1);
  const uy = smooth(y % 1);

  const a = mix(generic2rand(ix, iy), generic2rand(ix + 1.0, iy), ux);
  const b = mix(generic2rand(ix, iy + 1.0), generic2rand(ix + 1.0, iy + 1.0), ux);

  const res = mix(a, b, uy);
  return res * res;
};

/**
 * @ignore
 */
const K_41 = 0.0243902439;
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
const K = MOD_7_CONST;
/**
 * @ignore
 */
const KO = 0.42857142857;
/**
 * @ignore
 */
const JITTER = 1.0;
/**
 * @memberof Unpleasant
 * @description
 * The basic idea is to take random points in space (2- or 3-dimensional)
 * and then for every point in space take the distance to the nth-closest
 * point (e.g. the second-closest point) as some kind of color information.
 * More precisely:
 *
 *  Randomly distribute feature points in space
 *  Noise Fn(x) is distance to nth-closest point to x
 *
 * Typical implementations, in three dimensions, divide the space into cubes.
 * A fixed number of positions are generated for each cube.
 * In the case of three dimensions, nine cubes' points need to be generated,
 * to be sure to find the closest.
 *
 * @see https://en.wikipedia.org/wiki/Worley_noise
 * @see https://github.com/ashima/webgl-noise/blob/master/src/cellular2D.glsl
 * @param {!Number} x - x component of a 2D vector
 * @param {!Number} y - y component of a 2D vector
 * @returns {Array} a 2D vector
 */
function cellular2D(x, y) {
  const Pix = mod289(floor(x));
  const Piy = mod289(floor(y));

  const Pfx = x % 1;
  const Pfy = y % 1;

  const oix = -1.0;
  const oiy = 0.0;
  const oiz = 1.0;

  const ofx = -0.5;
  const ofy = 0.5;
  const ofz = -1.5;

  const pxx = permute289(Pix + oix);
  const pxy = permute289(Pix + oiy);
  const pxz = permute289(Pix + oiz);

  let px = permute289(pxx + Piy + oix);
  let py = permute289(pxx + Piy + oiy);
  let pz = permute289(pxx + Piy + oiz);

  let Kpx = px * K;
  let Kpy = py * K;
  let Kpz = pz * K;

  let oxx = (Kpx % 1) - KO;
  let oxy = (Kpy % 1) - KO;
  let oxz = (Kpz % 1) - KO;

  let oyx = mod7(floor(Kpx)) * K - KO;
  let oyy = mod7(floor(Kpy)) * K - KO;
  let oyz = mod7(floor(Kpz)) * K - KO;

  let dxx = Pfx + 0.5 + JITTER * oxx;
  let dxy = Pfx + 0.5 + JITTER * oxy;
  let dxz = Pfx + 0.5 + JITTER * oxz;

  let dyx = Pfy - ofx + JITTER * oyx;
  let dyy = Pfy - ofy + JITTER * oyy;
  let dyz = Pfy - ofz + JITTER * oyz;

  let d1x = dxx * dxx + dyx * dyx;
  let d1y = dxy * dxy + dyy * dyy;
  let d1z = dxz * dxz + dyz * dyz;

  px = permute289(pxy + Piy + oix);
  py = permute289(pxy + Piy + oiy);
  pz = permute289(pxy + Piy + oiz);

  Kpx = px * K;
  Kpy = py * K;
  Kpz = pz * K;

  oxx = (Kpx % 1) - KO;
  oxy = (Kpy % 1) - KO;
  oxz = (Kpz % 1) - KO;

  oyx = mod7(floor(Kpx)) * K - KO;
  oyy = mod7(floor(Kpy)) * K - KO;
  oyz = mod7(floor(Kpz)) * K - KO;

  dxx = Pfx + 0.5 + JITTER * oxx;
  dxy = Pfx + 0.5 + JITTER * oxy;
  dxz = Pfx + 0.5 + JITTER * oxz;

  dyx = Pfy - ofx + JITTER * oyx;
  dyy = Pfy - ofy + JITTER * oyy;
  dyz = Pfy - ofz + JITTER * oyz;

  let d2x = dxx * dxx + dyx * dyx;
  let d2y = dxy * dxy + dyy * dyy;
  let d2z = dxz * dxz + dyz * dyz;

  px = permute289(pxz + Piy + oix);
  py = permute289(pxz + Piy + oiy);
  pz = permute289(pxz + Piy + oiz);

  Kpx = px * K;
  Kpy = py * K;
  Kpz = pz * K;

  oxx = (Kpx % 1) - KO;
  oxy = (Kpy % 1) - KO;
  oxz = (Kpz % 1) - KO;

  oyx = mod7(floor(Kpx)) * K - KO;
  oyy = mod7(floor(Kpy)) * K - KO;
  oyz = mod7(floor(Kpz)) * K - KO;

  dxx = Pfx + 0.5 + JITTER * oxx;
  dxy = Pfx + 0.5 + JITTER * oxy;
  dxz = Pfx + 0.5 + JITTER * oxz;

  dyx = Pfy - ofx + JITTER * oyx;
  dyy = Pfy - ofy + JITTER * oyy;
  dyz = Pfy - ofz + JITTER * oyz;

  const d3x = dxx * dxx + dyx * dyx;
  const d3y = dxy * dxy + dyy * dyy;
  const d3z = dxz * dxz + dyz * dyz;

  const d1ax = min(d1x, d2x);
  const d1ay = min(d1y, d2y);
  const d1az = min(d1z, d2z);

  d2x = max(d1x, d2x);
  d2y = max(d1y, d2y);
  d2z = max(d1z, d2z);

  d2x = max(d2x, d3x);
  d2y = max(d2y, d3y);
  d2z = max(d2z, d3z);

  d1x = min(d1ax, d2x);
  d1y = min(d1ay, d2y);
  d1z = min(d1az, d2z);


  d2x = max(d1ax, d2x);
  d2y = max(d1ay, d2y);
  d2z = max(d1az, d2z);

  if (d1y < d1x) {
    const tmp = d1x;
    d1x = d1y;
    d1y = tmp;
  }

  if (d1z < d1x) {
    const tmp = d1z;
    d1z = d1x;
    d1x = tmp;
  }

  d1y = min(d1y, d2y);
  d1z = min(d1z, d2z);

  d1y = min(d1y, d1z);
  d1y = min(d1y, d2x);

  return [sqrt(d1x), sqrt(d1y)];
}

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
 * @memberof Unpleasant
 * @desc
 * Perlin noise is a procedural texture primitive,
 * a type of gradient noise used by visual effects
 * artists to increase the appearance of realism
 * in computer graphics.
 * @see https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
 * @see https://en.wikipedia.org/wiki/Perlin_noise
 * @param {!Number} x - x component of a 2D vector
 * @param {!Number} y - y component of a 2D vector
 * @returns {Number}
 */
function basicPerlin(x, y) {
  const i = floor(x);
  const j = floor(y);

  const tx = 0.5 * (1.0 - cos(PI * x));
  const ty = 0.5 * (1.0 - cos(PI * y));

  const a = perlinRand(i, j);
  const b = perlinRand(i + 1, j);
  const c = perlinRand(i, j + 1);
  const d = perlinRand(i + 1, j + 1);

  const x1 = mix(a, b, tx);
  const x2 = mix(c, d, tx);

  return mix(x1, x2, ty);
}

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

exports.generic1Noise1D = generic11D;
exports.generic1Noise2D = generic12D;
exports.generic2Noise = generic2;
exports.generic3Noise = generic3;
exports.cellular2DNoise = cellular2D;
exports.basicPerlinNoise = basicPerlin;
