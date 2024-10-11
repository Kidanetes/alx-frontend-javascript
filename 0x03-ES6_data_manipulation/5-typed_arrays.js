export default function createInt8TypedArray(length, position, value) {
  const array = new ArrayBuffer(length);
  const value = new DataView(arr);

  try {
    value.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return value;
}
