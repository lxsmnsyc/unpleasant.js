

const {
  floor, min, max, sqrt,
} = Math;

const MOD_289_CONST = 0.00346020761;

const mod289 = x => x - floor(x * MOD_289_CONST) * 289.0;

const MOD_7_CONST = 0.14285714285;

const mod7 = x => x - floor(x * MOD_7_CONST) * 289.0;

const permute = x => mod289((34.0 * x + 1.0) * x);

const K = MOD_7_CONST;
const KO = 0.42857142857;
const JITTER = 1.0;

export default function cellular2D(x, y) {
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

  const pxx = permute(Pix + oix);
  const pxy = permute(Pix + oiy);
  const pxz = permute(Pix + oiz);

  let px = permute(pxx + Piy + oix);
  let py = permute(pxx + Piy + oiy);
  let pz = permute(pxx + Piy + oiz);

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

  let dyx = Pfy + ofx + JITTER * oyx;
  let dyy = Pfy + ofy + JITTER * oyy;
  let dyz = Pfy + ofz + JITTER * oyz;

  let d1x = dxx * dxx + dyx * dyx;
  let d1y = dxy * dxy + dyy * dyy;
  let d1z = dxz * dxz + dyz * dyz;

  px = permute(pxy + Piy + oix);
  py = permute(pxy + Piy + oiy);
  pz = permute(pxy + Piy + oiz);

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

  dyx = Pfy + ofx + JITTER * oyx;
  dyy = Pfy + ofy + JITTER * oyy;
  dyz = Pfy + ofz + JITTER * oyz;

  let d2x = dxx * dxx + dyx * dyx;
  let d2y = dxy * dxy + dyy * dyy;
  let d2z = dxz * dxz + dyz * dyz;

  px = permute(pxz + Piy + oix);
  py = permute(pxz + Piy + oiy);
  pz = permute(pxz + Piy + oiz);

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

  dyx = Pfy + ofx + JITTER * oyx;
  dyy = Pfy + ofy + JITTER * oyy;
  dyz = Pfy + ofz + JITTER * oyz;

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

  if (d1x < d1y) {
    const tmp = d1x;
    d1x = d1y;
    d1y = tmp;
  }

  if (d1x < d1z) {
    const tmp = d1z;
    d1z = d1y;
    d1y = tmp;
  }

  d1y = min(d1y, d2y);
  d1z = min(d1z, d2z);
  d1y = min(d1y, d1z);
  d1y = min(d1y, d2x);

  return [sqrt(d1x), sqrt(d1y)];
}
