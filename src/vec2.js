const { min, max, floor } = Math;

export function create(x, y) {
  const v = new Float32Array(2);
  v[0] = x;
  v[1] = y;
  return v;
}

export function addVec2(a, b) {
  const c = new Float32Array(2);
  c[0] = a[0] + b[0];
  c[1] = a[1] + b[1];
  return c;
}

export function subVec2(a, b) {
  const c = new Float32Array(2);
  c[0] = a[0] - b[0];
  c[1] = a[1] - b[1];
  return c;
}

export function mulVec2(a, b) {
  const c = new Float32Array(2);
  c[0] = a[0] * b[0];
  c[1] = a[1] * b[1];
  return c;
}

export function divVec2(a, b) {
  const c = new Float32Array(2);
  c[0] = a[0] / b[0];
  c[1] = a[1] / b[1];
  return c;
}

export function addScalar(a, b) {
  const c = new Float32Array(2);
  c[0] = a[0] + b;
  c[1] = a[1] + b;
  return c;
}

export function subScalar(a, b) {
  const c = new Float32Array(2);
  c[0] = a[0] - b;
  c[1] = a[1] - b;
  return c;
}

export function mulScalar(a, b) {
  const c = new Float32Array(2);
  c[0] = a[0] * b;
  c[1] = a[1] * b;
  return c;
}

export function divScalar(a, b) {
  const c = new Float32Array(2);
  c[0] = a[0] / b;
  c[1] = a[1] / b;
  return c;
}

export function minVec2(a, b) {
  const c = new Float32Array(2);
  c[0] = min(a[0], b[0]);
  c[1] = min(a[1], b[1]);
  return c;
}

export function maxVec2(a, b) {
  const c = new Float32Array(2);
  c[0] = max(a[0], b[0]);
  c[1] = max(a[1], b[1]);
  return c;
}

export function floorVec2(a) {
  const c = new Float32Array(2);
  c[0] = floor(a[0]);
  c[1] = floor(a[1]);
  return c;
}
