export default function createInt8TypedArray(length, position, value) {
  const array = new ArrayBuffer(length);
  const valueData = new DataView(array);

  try {
    valueData.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return valueData;
}
