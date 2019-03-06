const { min, max, floor } = Math;

export function create(x, y, z) {
  const v = new Float32Array(3);
  v[0] = x;
  v[1] = y;
  v[2] = z;
  return v;
}

export function addVec3(a, b) {
  const c = new Float32Array(3);
  c[0] = a[0] + b[0];
  c[1] = a[1] + b[1];
  c[2] = a[2] + b[2];
  return c;
}

export function subVec3(a, b) {
  const c = new Float32Array(3);
  c[0] = a[0] - b[0];
  c[1] = a[1] - b[1];
  c[2] = a[2] - b[2];
  return c;
}

export function mulVec3(a, b) {
  const c = new Float32Array(3);
  c[0] = a[0] * b[0];
  c[1] = a[1] * b[1];
  c[2] = a[2] * b[2];
  return c;
}

export function divVec3(a, b) {
  const c = new Float32Array(3);
  c[0] = a[0] / b[0];
  c[1] = a[1] / b[1];
  c[2] = a[2] / b[2];
  return c;
}

export function addScalar(a, b) {
  const c = new Float32Array(3);
  c[0] = a[0] + b;
  c[1] = a[1] + b;
  c[2] = a[2] + b;
  return c;
}

export function subScalar(a, b) {
  const c = new Float32Array(3);
  c[0] = a[0] - b;
  c[1] = a[1] - b;
  c[2] = a[2] - b;
  return c;
}

export function mulScalar(a, b) {
  const c = new Float32Array(3);
  c[0] = a[0] * b;
  c[1] = a[1] * b;
  c[2] = a[2] * b;
  return c;
}

export function divScalar(a, b) {
  const c = new Float32Array(3);
  c[0] = a[0] / b;
  c[1] = a[1] / b;
  c[2] = a[2] / b;
  return c;
}

export function minVec3(a, b) {
  const c = new Float32Array(3);
  c[0] = min(a[0], b[0]);
  c[1] = min(a[1], b[1]);
  c[2] = min(a[2], b[2]);
  return c;
}

export function maxVec3(a, b) {
  const c = new Float32Array(3);
  c[0] = max(a[0], b[0]);
  c[1] = max(a[1], b[1]);
  c[2] = max(a[2], b[2]);
  return c;
}

export function floorVec3(a) {
  const c = new Float32Array(3);
  c[0] = floor(a[0]);
  c[1] = floor(a[1]);
  c[2] = floor(a[2]);
  return c;
}
